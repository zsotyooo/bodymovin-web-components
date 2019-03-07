/* tslint:disable:no-import-side-effect */
import { Component, Element, Event, EventEmitter, Listen, Prop } from '@stencil/core';
import { AnimationLoadedEventData } from '../..';

import ScrollMagic from 'scrollmagic';

declare var window: Window;

@Component({
  tag: 'lottie-scroll',
  styleUrl: 'lottie-scroll.css',
  shadow: true,
})
export class LottieScrollComponent {

  @Element() wrapperElement: HTMLElement;

  animationContainerElement: HTMLDivElement;

  /**
   * data JSON location
   */
  @Prop() src = '';

  /**
   * the speed of the animation
   */
  @Prop() speed = 1;

  /**
   * If `true` it's only playing the animation, while if it's `false` the animation follows the scroll progression.
   */
  @Prop() playthrough = false;

  /**
   * triggered when the scroll position enters the active area
   */
  @Event() onAnimationStart: EventEmitter<void>;

  /**
   * triggered when the scroll position leaves the active area
   * (in playthrough mode when the animation goes out at the bottom of the viewport).
   */
  @Event() onAnimationStop: EventEmitter<void>;

  scrollController = new ScrollMagic.Controller();

  lottieAnimationComponent: HTMLLottieAnimationElement;

  @Listen('onAnimationLoaded')
  async onAnimationLoaded(event: CustomEvent<AnimationLoadedEventData<Lottie.AnimationItem>>): Promise<void> {
    if (event.detail.animation) {
      await this.addAnimation();
    }
  }

  async addAnimation(): Promise<void> {
    const scrollScene = new ScrollMagic.Scene({
      triggerElement: this.animationContainerElement,
      offset: 0,
      duration: this.animationContainerElement.clientHeight / this.speed,
    });

    if (this.playthrough) {
      this.lottieAnimationComponent.setSpeed(this.speed);
      scrollScene.triggerHook(0.66);

      scrollScene.on('enter', (e: ScrollMagic.EnterEvent) => {
        if (e.scrollDirection === 'FORWARD') {
          this.lottieAnimationComponent.play();
          this.onAnimationStart.emit();
        }
      });

      const scrollSceneOut = new ScrollMagic.Scene({
        triggerElement: this.animationContainerElement,
        triggerHook: 1,
        offset: 0,
        duration: window.innerHeight,
      });

      scrollSceneOut.on('leave', (e: ScrollMagic.LeaveEvent) => {
        if (e.scrollDirection === 'REVERSE') {
          this.lottieAnimationComponent.progress(0);
          this.lottieAnimationComponent.stop();
          this.onAnimationStop.emit();
        }
      });

      scrollSceneOut.addTo(this.scrollController);
    } else {
      const totalFrames = await this.lottieAnimationComponent.getTotalFrames();
      scrollScene.duration((window.innerHeight / 3) / this.speed);
      scrollScene.on('enter', () => {
        this.onAnimationStart.emit();
      });
      scrollScene.on('leave', () => {
        this.onAnimationStop.emit();
      });
      scrollScene.on('progress', ({ progress }: ScrollMagic.ProgressEvent) => {
        this.lottieAnimationComponent.goToAndStop(Math.round(progress * totalFrames), true);
      });
    }

    scrollScene.addTo(this.scrollController);
  }

  render() {
    return (
      <div class="lottie-scroll">
        <div class="lottie-scroll__container" ref={(el: HTMLDivElement) => this.animationContainerElement = el}>
          <lottie-animation
            src={this.src}
            autoplay={false}
            ref={(el: HTMLLottieAnimationElement) => this.lottieAnimationComponent = el}
            class="lottie-scroll__animation"
          />
        </div>
      </div>
    );
  }
}

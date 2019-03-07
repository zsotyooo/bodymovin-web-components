import { Component, Event, EventEmitter, Method, Prop, Watch } from '@stencil/core';
import { AnimationLoadedEventData, LottieAnimationLoader, LottieConfigCreator } from '../..';

@Component({
  styleUrl: 'lottie-animation.css',
  tag: 'lottie-animation',
  shadow: true,
})
export class LottieAnimationComponent {
  animationContainerElement: HTMLDivElement;
  lottieAnimation: Lottie.AnimationItem;
  lottieAnimationLoader: LottieAnimationLoader;
  lottieConfigCreator: LottieConfigCreator;

  /**
   * start animation automatically
   */
  @Prop() autoplay = false;

  /**
   * data JSON
   */
  @Prop() dataJson = {};

  @Watch('dataJson')
  onDataJsonChange(value) {
    this.updateDataJson(value);
  }

  /**
   * loop animation
   */
  @Prop() loop = false;

  /**
   * data JSON location
   */
  @Prop() src = '';

  @Watch('src')
  onSrcChange(value) {
    this.updateSrc(value);
  }

  /**
   * triggered when the animation is loaded
   * (event.detail.animation contains the Lottie animation item).
   */
  @Event() onAnimationLoaded: EventEmitter;

  componentDidLoad() {
    this.lottieAnimationLoader = new LottieAnimationLoader();
    this.lottieConfigCreator = new LottieConfigCreator();
    this.updateDataJson(this.dataJson);
    this.updateSrc(this.src);
  }

  /**
   * plays the animation
   */
  @Method()
  play(): void {
    this.lottieAnimation.play();
  }

  /**
   * stops the animation
   */
  @Method()
  stop(): void {
    this.lottieAnimation.stop();
  }

  /**
   * sets the animation progress to a certain point (0..1)
   */
  @Method()
  progress(progress: number): void {
    this.lottieAnimation.animationProgress = progress;
  }

  /**
   * sets the speed of the animation
   */
  @Method()
  setSpeed(speed: number): void {
    this.lottieAnimation.setSpeed(speed);
  }

  /**
   * sets the direction of the animation
   */
  @Method()
  setDirection(direction: number): void {
    this.lottieAnimation.setDirection(direction);
  }

  /**
   * plays the animation until a certain frame, or time
   */
  @Method()
  goToAndStop(value: number, isFrame = true): void {
    this.lottieAnimation.goToAndStop(value, isFrame);
  }

  /**
   * gets the number of frames
   */
  @Method()
  async getTotalFrames(): Promise<number> {
    return this.lottieAnimation.totalFrames;
  }

  updateSrc(src: string): void {
    if (src) {
      this.lottieAnimation = this.lottieAnimationLoader.load(
        this.lottieConfigCreator.createWithSrc(
          this.animationContainerElement,
          src,
          this.autoplay,
          this.loop,
        ),
        (d) => this.emitOnAnimationLoadedEvent(d)
      );
    }
  }

  updateDataJson(dataJson: object): void {
    if (Object.keys(dataJson).length > 0) {
      this.lottieAnimation = this.lottieAnimationLoader.load(
        this.lottieConfigCreator.createWithData(
          this.animationContainerElement,
          dataJson,
          this.autoplay,
          this.loop,
        ),
        (d) => this.emitOnAnimationLoadedEvent(d)
      );
    }
  }

  emitOnAnimationLoadedEvent(data: AnimationLoadedEventData<Lottie.AnimationItem>) {
    this.onAnimationLoaded.emit(data);
  }

  render() {
    return (
      <div class="lottie-animation">
        <div
          class="lottie-animation__container"
          ref={(el: HTMLDivElement) => this.animationContainerElement = el}
        />
      </div>
    );
  }
}

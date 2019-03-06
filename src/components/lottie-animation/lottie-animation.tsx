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

  @Prop() autoplay: string | boolean = false;

  @Prop() dataJson: object | string | false = false;

  @Watch('dataJson')
  onDataJsonChange(value) {
    this.updateDataJson(value);
  }

  @Prop() loop: string | boolean = false;

  @Prop() src: string | false = false;

  @Watch('src')
  onSrcChange(value) {
    this.updateSrc(value);
  }

  @Event() onAnimationLoaded: EventEmitter;

  componentDidLoad() {
    this.lottieAnimationLoader = new LottieAnimationLoader();
    this.lottieConfigCreator = new LottieConfigCreator();
    this.updateDataJson(this.dataJson);
    this.updateSrc(this.src);
  }

  @Method()
  play(): void {
    this.lottieAnimation.play();
  }

  updateSrc(src: string | false): void {
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

  updateDataJson(dataJson: string | object | false): void {
    if (dataJson) {
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

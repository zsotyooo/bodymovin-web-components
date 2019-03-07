import { AnimationConfigCreator } from '../animation';

export class LottieConfigCreator implements AnimationConfigCreator<Lottie.AnimationConfig> {
  createWithSrc(container: HTMLDivElement, src: string, autoplay: boolean, loop: boolean): Lottie.AnimationConfig {
    return {
      container,
      renderer: 'svg',
      loop,
      autoplay,
      path: src,
    };
  }

  createWithData(container: HTMLDivElement, animationData: object, autoplay: boolean, loop: boolean): Lottie.AnimationConfig {
    return {
      container,
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
    };
  }
}

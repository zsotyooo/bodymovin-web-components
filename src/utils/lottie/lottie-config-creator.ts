import { AnimationConfigCreator } from '../animation';
import { propHelper } from '../helpers';

export class LottieConfigCreator implements AnimationConfigCreator<Lottie.AnimationConfig> {
  createWithSrc(container: HTMLDivElement, src: string | false, autoplay: string | boolean, loop: string | boolean): Lottie.AnimationConfig {
    return {
      container,
      renderer: 'svg',
      loop: propHelper.strToBool(loop),
      autoplay: propHelper.strToBool(autoplay),
      path: src || '',
    };
  }

  createWithData(container: HTMLDivElement, data: object | string | false, autoplay: string | boolean, loop: string | boolean): Lottie.AnimationConfig {
    return {
      container,
      renderer: 'svg',
      loop: propHelper.strToBool(loop),
      autoplay: propHelper.strToBool(autoplay),
      animationData: propHelper.strToObj(data),
    };
  }
}

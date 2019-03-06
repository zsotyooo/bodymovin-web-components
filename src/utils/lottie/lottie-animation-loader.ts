/* tslint:disable:no-import-side-effect */
import { AnimationLoadedEventData, AnimationLoader } from '../..';

import '../../lib/lottie/lottie.min';

declare var lottie: LottiePlayer;

export class LottieAnimationLoader implements AnimationLoader<Lottie.AnimationConfig, Lottie.AnimationItem> {
  lottie: LottiePlayer = lottie;
  animation: Lottie.AnimationItem;

  load(config: Lottie.AnimationConfig, callback: (d: AnimationLoadedEventData<Lottie.AnimationItem>) => void) {
    this.animation = this.lottie.loadAnimation(config);
    this.animation.addEventListener('DOMLoaded', () => {
      callback({ animation: this.animation });
    });
    return this.animation;
  }
}

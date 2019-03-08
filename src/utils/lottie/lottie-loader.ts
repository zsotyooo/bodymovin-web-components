/* tslint:disable:no-import-side-effect */
import '../../lib/lottie/lottie.min';

declare var lottie: LottiePlayer;

export interface LottieLoadedEventData {
  animation: Lottie.AnimationItem;
}

export class LottieLoader {
  lottie: LottiePlayer = lottie;
  animation: Lottie.AnimationItem;

  load(config: Lottie.AnimationConfig, callback: (d: LottieLoadedEventData) => void) {
    this.animation = this.lottie.loadAnimation(config);
    this.animation.addEventListener('DOMLoaded', () => {
      callback({ animation: this.animation });
    });
    return this.animation;
  }
}

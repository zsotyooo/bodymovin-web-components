import lottie from 'lottie-web';

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

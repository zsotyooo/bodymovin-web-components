export interface LottieLoadedEventData {
  animation: Lottie.AnimationItem;
}

export class LottieLoadHelper {
  load(
    config: Lottie.AnimationConfig,
    callback: (d: LottieLoadedEventData) => void
  ): Lottie.AnimationItem {
    const animation = this.lottie.loadAnimation(config);
    animation.addEventListener('DOMLoaded', () => {
      callback({ animation });
    });
    return animation;
  }

  constructor(public lottie: LottiePlayer) {}
}

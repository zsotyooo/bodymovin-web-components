import { frameHelper } from '../helpers/frame-helper';


export interface SpriteTimerOptions {
  segments: [number, number][];
  frameRate?: number;
  input?: 'sec' | 'pro' | 'frame';
  onComplete?: () => void;
  onCancel?: () => void;
}

const noop = () => {
  return;
};

export class SpriteTimer {
  private timer: NodeJS.Timer;

  static create(opts: SpriteTimerOptions) {
    return new SpriteTimer(
      opts.segments,
      (typeof opts.frameRate) !== 'undefined' ? opts.frameRate : 60,
      (typeof opts.input) !== 'undefined' ? opts.input : 'pro',
      (typeof opts.onComplete) !== 'undefined' ? opts.onComplete : noop,
      (typeof opts.onCancel) !== 'undefined' ? opts.onCancel : noop,
    );
  }

  async start(): Promise<void> {
    if (this.timer) {
      this.cancel();
    }
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        this.onComplete();
        resolve();
      }, this.getTime());
    });
  }

  cancel() {
    clearTimeout(this.timer);
    this.onCancel();
  }

  getTime(): number {
    return [...this.segments]
      .map(segment => Math.abs(this.convertToMs(segment[1]) - this.convertToMs(segment[0])))
      .reduce((a, b) => a + b, 0);
  }

  private convertToMs(nmb: number): number {
    return frameHelper.convertToMs(nmb, this.input, this.frameRate);
  }

  constructor(
    public segments: [number, number][],
    public frameRate = 60,
    public input: 'sec' | 'pro' | 'frame' = 'pro',
    public onComplete = noop,
    public onCancel = noop,
  ) {}
}

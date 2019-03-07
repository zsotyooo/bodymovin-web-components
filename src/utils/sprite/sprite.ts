import { SpriteSegment } from '.';

export class Sprite {
  segments: { [index: string]: SpriteSegment} = {};

  add(segmentName: string, interval: [number, number]): void {
    this.segments[segmentName] = SpriteSegment.create(...interval);
  }

  play(segmentName: string): [number, number][] {
    return [this.segments[segmentName].getInterval()];
  }

  reverse(segmentName: string): [number, number][] {
    return [this.segments[segmentName].getReverseInterval()];
  }

  bounce(segmentName: string): [number, number][] {
    return [this.segments[segmentName].getInterval(), this.segments[segmentName].getReverseInterval()];
  }

  repeat(segmentName: string, times = 1, bounce = true): [number, number][] {
    const segments = [];
    for (let i = 1; i <= times; i++) {
      segments.push(this.segments[segmentName].getInterval());
      if (bounce ) {
        segments.push(this.segments[segmentName].getReverseInterval());
      }
    }
    return segments;
  }

  constructor(
    public frameRate: number
  ) {}
}

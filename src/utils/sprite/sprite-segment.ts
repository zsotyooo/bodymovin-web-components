export class SpriteSegment {
  static create(from: number, to: number): SpriteSegment {
    return new SpriteSegment(from, to);
  }

  getInterval(): [number, number] {
    return [this.from, this.to];
  }

  getReverseInterval(): [number, number] {
    return [this.to, this.from];
  }

  constructor(
    public from: number,
    public to: number
  ) {}
}

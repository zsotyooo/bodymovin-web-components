import { SpriteSegment } from './sprite-segment';

describe('SpriteSegment', () => {
  let spriteSegment;

  beforeEach(() => {
    spriteSegment = SpriteSegment.create(1, 2);
  });

  it('returns interval', () => {
    expect(spriteSegment.getInterval()).toEqual([1, 2]);
  });

  it('returns reverse interval', () => {
    expect(spriteSegment.getReverseInterval()).toEqual([2, 1]);
  });
});

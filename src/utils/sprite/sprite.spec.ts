import { Sprite } from '.';

describe('Sprite', () => {
  let sprite;

  beforeEach(() => {
    sprite = new Sprite();
    sprite.add('test', [1, 2]);
  });

  it('plays', () => {
    expect(sprite.play('test')).toEqual([[1, 2]]);
  });

  it('reverses', () => {
    expect(sprite.reverse('test')).toEqual([[2, 1]]);
  });

  it('bounces', () => {
    expect(sprite.bounce('test')).toEqual([[1, 2], [2, 1]]);
  });

  it('repeats', () => {
    expect(sprite.repeat('test', 2)).toEqual([[1, 2], [2, 1], [1, 2], [2, 1]]);
    expect(sprite.repeat('test', 2, false)).toEqual([[1, 2], [1, 2]]);
  });
});

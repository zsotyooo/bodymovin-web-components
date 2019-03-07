import { SpriteTimer } from './sprite-timer';

describe('SpriteTimer', () => {
  it('creates', () => {
    const segments: [number, number][] = [[10, 20], [20, 10]];
    expect(SpriteTimer.create({ segments })).toEqual(new SpriteTimer(segments));
  });

  it('calculates time properly in seconds', () => {
    const timer = SpriteTimer.create({
      segments: [[10, 20], [20, 10]],
      input: 'sec',
    });
    expect(timer.getTime()).toEqual(20 * 1000);
  });

  it('calculates time properly in pro frames', () => {
    const timer = SpriteTimer.create({
      segments: [[10.30, 20], [20, 10]],
      input: 'pro',
      frameRate: 60,
    });
    expect(timer.getTime()).toEqual(19.5 * 1000);
  });

  it('calculates time properly in frames', () => {
    const timer = SpriteTimer.create({
      segments: [[10, 20], [20, 10]],
      input: 'frame',
      frameRate: 100,
    });
    expect(timer.getTime()).toEqual(20 / 100 * 1000);
  });

  it('calls onComplete', async () => {
    const onComplete = jest.fn();

    const timer = SpriteTimer.create({
      segments: [[1, 1.1]],
      input: 'sec',
      onComplete,
    });
    await timer.start();

    expect(onComplete).toHaveBeenCalled();
  });

  it('calls onCancel but not onComplete', async () => {
    const onComplete = jest.fn();
    const onCancel = jest.fn();

    const timer = SpriteTimer.create({
      segments: [[1, 2]],
      input: 'sec',
      onComplete,
      onCancel,
    });
    timer.start();
    timer.cancel();

    expect(onCancel).toHaveBeenCalled();
    expect(onComplete).not.toHaveBeenCalled();
  });
});

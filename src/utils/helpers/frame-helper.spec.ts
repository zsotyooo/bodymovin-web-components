import { frameHelper } from '.';

describe('FrameHelper', () => {

  it('calculates time properly in seconds', () => {
    expect(frameHelper.convertToMs(10, 'sec')).toEqual(10 * 1000);
  });

  it('calculates time properly in pro frames', () => {
    expect(frameHelper.convertToMs(10.30, 'pro', 60)).toEqual(10.5 * 1000);
  });

  it('calculates time properly in frames', () => {
    expect(frameHelper.convertToMs(90, 'frame', 60)).toEqual(1.5 * 1000);
  });
});

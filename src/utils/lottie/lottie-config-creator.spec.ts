import { LottieConfigCreator } from './lottie-config-creator';

describe('LottieConfigCreator', () => {
  let configCreator: LottieConfigCreator;
  let container: HTMLDivElement;

  beforeAll(() => {
    configCreator = new LottieConfigCreator();
    document.body.innerHTML = '<div id="container"></div>';
    container = document.getElementById('container') as HTMLDivElement;
  });

  it('creates config with src', () => {
    const config = configCreator.createWithSrc(
      container,
      'http://url.to/the-data.json',
      true,
      true,
    );

    expect(config).toEqual({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'http://url.to/the-data.json',
    });
  });

  it('creates config with data', () => {
    const config = configCreator.createWithData(
      container,
      { a: 1 },
      true,
      true,
    );

    expect(config).toEqual({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: { a: 1 },
    });
  });
});

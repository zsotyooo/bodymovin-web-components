import { LottieConfigHelper } from './lottie-config-helper';

const lottieConfigHelper = new LottieConfigHelper();

describe('LottieConfigHelper', () => {
  let container: HTMLDivElement;

  beforeAll(() => {
    document.body.innerHTML = '<div id="container"></div>';
    container = document.getElementById('container') as HTMLDivElement;
  });

  it('creates config with src', () => {
    const config = lottieConfigHelper.createWithSrc(
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
    const config = lottieConfigHelper.createWithData(
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

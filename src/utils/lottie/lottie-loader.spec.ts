import { LottieLoadHelper } from './lottie-load-helper';
import { LottieConfigHelper } from './lottie-config-helper';

const lottieConfigHelper = new LottieConfigHelper();

const _mockEvents: { [index: string]: () => void } = {};

const animationItemMock = {
  addEventListener: (evt: string, listener: (e?: any) => void) => {
    _mockEvents[evt] = listener;
  },
  tiggerEvent: (evt: string) => {
    _mockEvents[evt]();
  }
};

const lottieMock = {
  play: jest.fn(),
  stop: jest.fn(),
  setSpeed: jest.fn(),
  setDirection: jest.fn(),
  setQuality: jest.fn(),
  setLocationHref: jest.fn(),
  loadAnimation: jest.fn().mockReturnValue(animationItemMock),
  registerAnimation: jest.fn(),
  searchAnimations: jest.fn(),
  destroy: jest.fn(),
};

describe('LottieLoadHelper', () => {
  let lottieLoadHelper: LottieLoadHelper;
  let container: HTMLDivElement;
  let dataJson: object;
  let config: Lottie.AnimationConfig;
  let callback: () => void;
  let animationItem;

  beforeAll(() => {
    document.body.innerHTML = '<div id="container"></div>';
    container = document.getElementById('container') as HTMLDivElement;
    lottieLoadHelper = new LottieLoadHelper(lottieMock);
    dataJson = { a: 1 };
    config = lottieConfigHelper.createWithData(
      container,
      dataJson,
      true,
      true,
    );
    callback = jest.fn();
    animationItem = lottieLoadHelper.load(config, callback);
  });

  it('calls loadAnimation', () => {
    expect(lottieMock.loadAnimation).toHaveBeenCalledWith(config);
  });

  it('returns animation', () => {
    expect(animationItem).toBe(animationItemMock);
  });

  it('adds event DOMLoaded listener', () => {
    const animationItemMockWithSpyEvent = {
      addEventListener: jest.fn(),
    };

    const lottieMockWithSpyEvent = {
      ...lottieMock,
      loadAnimation: jest.fn().mockReturnValue(animationItemMockWithSpyEvent),
    };

    const lottieLoadHelperWithSpyEvent = new LottieLoadHelper(lottieMockWithSpyEvent);
    lottieLoadHelperWithSpyEvent.load(config, callback);
    expect(animationItemMockWithSpyEvent.addEventListener).toHaveBeenCalledWith('DOMLoaded', expect.any(Function));
  });

  it('it calls callback', () => {
    animationItemMock.tiggerEvent('DOMLoaded');
    expect(callback).toHaveBeenCalledWith({ animation: animationItemMock });
  });
});

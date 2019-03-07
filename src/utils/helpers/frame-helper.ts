export class FrameHelper {
  convertToMs(nmb: number, input: 'sec' | 'pro' | 'frame' = 'pro', frameRate = 60): number {
    if (input === 'sec') {
      return nmb * 1000;
    }

    if (input === 'frame') {
      return Math.round((nmb / frameRate) * 1000);
    }

    return Math.round((Math.floor(nmb) + ((nmb % 1) * 100 / frameRate)) * 1000);
  }
}

export const frameHelper = new FrameHelper();
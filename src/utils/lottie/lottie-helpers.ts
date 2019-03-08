import lottie from 'lottie-web';
import { LottieConfigHelper } from './lottie-config-helper';
import { LottieLoadHelper } from './lottie-load-helper';

export const lottieConfigHelper = new LottieConfigHelper();
export const lottieLoader = new LottieLoadHelper(lottie);

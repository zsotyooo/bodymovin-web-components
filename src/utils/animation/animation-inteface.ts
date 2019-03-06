import { AnimationLoadedEventData } from '../..';

export interface AnimationLoadedEventData<AnimationItemT> {
  animation: AnimationItemT;
}

export interface AnimationLoader<ConfigT, AnimationItemT> {
  load(config: ConfigT, callback: (d: AnimationLoadedEventData<AnimationItemT>) => void): AnimationItemT;
}

export interface AnimationConfigCreator<ConfigT> {
  createWithSrc(container: HTMLDivElement, src: string | false, autoplay: string | boolean, loop: string | boolean): ConfigT;
  createWithData(container: HTMLDivElement, data: object | string | false, autoplay: string | boolean, loop: string | boolean): ConfigT;
}

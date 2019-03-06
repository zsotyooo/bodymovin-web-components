const t=window.BodymovinWebComponents.h;import{LottieAnimationLoader as a,LottieConfigCreator as i}from"./index.js";class o{constructor(){this.autoplay=!1,this.dataJson=!1,this.loop=!1,this.src=!1}onDataJsonChange(t){this.updateDataJson(t)}onSrcChange(t){this.updateSrc(t)}componentDidLoad(){this.lottieAnimationLoader=new a,this.lottieConfigCreator=new i,this.updateDataJson(this.dataJson),this.updateSrc(this.src)}play(){this.lottieAnimation.play()}updateSrc(t){t&&(this.lottieAnimation=this.lottieAnimationLoader.load(this.lottieConfigCreator.createWithSrc(this.animationContainerElement,t,this.autoplay,this.loop),t=>this.emitOnAnimationLoadedEvent(t)))}updateDataJson(t){t&&(this.lottieAnimation=this.lottieAnimationLoader.load(this.lottieConfigCreator.createWithData(this.animationContainerElement,t,this.autoplay,this.loop),t=>this.emitOnAnimationLoadedEvent(t)))}emitOnAnimationLoadedEvent(t){this.onAnimationLoaded.emit(t)}render(){return t("div",{class:"lottie-animation"},t("div",{class:"lottie-animation__container",ref:t=>this.animationContainerElement=t}))}static get is(){return"lottie-animation"}static get encapsulation(){return"shadow"}static get properties(){return{autoplay:{type:"Any",attr:"autoplay"},dataJson:{type:"Any",attr:"data-json",watchCallbacks:["onDataJsonChange"]},loop:{type:"Any",attr:"loop"},play:{method:!0},src:{type:"Any",attr:"src",watchCallbacks:["onSrcChange"]}}}static get events(){return[{name:"onAnimationLoaded",method:"onAnimationLoaded",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".lottie-animation,.lottie-animation__container{width:100%;height:100%}.lottie-animation svg{display:block;width:100%}"}}export{o as LottieAnimation};
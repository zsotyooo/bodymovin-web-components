var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,l)}s((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};BodymovinWebComponents.loadBundle("husfalh8",["exports","./index-dc0f145a.js"],function(e,t){var n=window.BodymovinWebComponents.h,o=function(){function e(){this.autoplay=!1,this.dataJson={},this.loop=!1,this.src=""}return e.prototype.onDataJsonChange=function(e){this.updateDataJson(e)},e.prototype.onSrcChange=function(e){this.updateSrc(e)},e.prototype.componentDidLoad=function(){this.updateDataJson(this.dataJson),this.updateSrc(this.src)},e.prototype.play=function(){this.lottieAnimation.play()},e.prototype.stop=function(){this.lottieAnimation.stop()},e.prototype.progress=function(e){this.lottieAnimation.animationProgress=e},e.prototype.setSpeed=function(e){this.lottieAnimation.setSpeed(e)},e.prototype.setDirection=function(e){this.lottieAnimation.setDirection(e)},e.prototype.goToAndStop=function(e,t){void 0===t&&(t=!0),this.lottieAnimation.goToAndStop(e,t)},e.prototype.getTotalFrames=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.lottieAnimation.totalFrames]})})},e.prototype.getFrameRate=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,this.lottieAnimation.frameRate]})})},e.prototype.updateSrc=function(e){var n=this;e&&(this.lottieAnimation=t.lottieLoader.load(t.lottieConfigHelper.createWithSrc(this.animationContainerElement,e,this.autoplay,this.loop),function(e){return n.emitOnAnimationLoadedEvent(e)}))},e.prototype.updateDataJson=function(e){var n=this;Object.keys(e).length>0&&(this.lottieAnimation=t.lottieLoader.load(t.lottieConfigHelper.createWithData(this.animationContainerElement,e,this.autoplay,this.loop),function(e){return n.emitOnAnimationLoadedEvent(e)}))},e.prototype.emitOnAnimationLoadedEvent=function(e){this.onAnimationLoaded.emit(e)},e.prototype.render=function(){var e=this;return n("div",{class:"lottie-animation"},n("div",{class:"lottie-animation__container",ref:function(t){return e.animationContainerElement=t}}))},Object.defineProperty(e,"is",{get:function(){return"lottie-animation"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{autoplay:{type:Boolean,attr:"autoplay"},dataJson:{type:"Any",attr:"data-json",watchCallbacks:["onDataJsonChange"]},getFrameRate:{method:!0},getTotalFrames:{method:!0},goToAndStop:{method:!0},loop:{type:Boolean,attr:"loop"},play:{method:!0},progress:{method:!0},setDirection:{method:!0},setSpeed:{method:!0},src:{type:String,attr:"src",watchCallbacks:["onSrcChange"]},stop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onAnimationLoaded",method:"onAnimationLoaded",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".lottie-animation,.lottie-animation__container{width:100%;height:100%}.lottie-animation svg{display:block;width:100%}"},enumerable:!0,configurable:!0}),e}(),i=t.createCommonjsModule(function(e,t){e.exports=function(){var e=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.6",window.addEventListener("mousewheel",function(){}),e.Controller=function(n){var i,r,a="ScrollMagic.Controller",l=t.defaults,s=this,c=o.extend({},l,n),u=[],d=!1,f=0,p="PAUSED",h=!0,g=0,m=!0,v=function(){c.refreshInterval>0&&(r=window.setTimeout(A,c.refreshInterval))},y=function(){return c.vertical?o.get.scrollTop(c.container):o.get.scrollLeft(c.container)},w=function(){return c.vertical?o.get.height(c.container):o.get.width(c.container)},b=this._setScrollPos=function(e){c.vertical?h?window.scrollTo(o.get.scrollLeft(),e):c.container.scrollTop=e:h?window.scrollTo(e,o.get.scrollTop()):c.container.scrollLeft=e},S=function(){if(m&&d){var e=o.type.Array(d)?d:u.slice(0);d=!1;var t=f,n=(f=s.scrollPos())-t;0!==n&&(p=n>0?"FORWARD":"REVERSE"),"REVERSE"===p&&e.reverse(),e.forEach(function(t,n){C(3,"updating Scene "+(n+1)+"/"+e.length+" ("+u.length+" total)"),t.update(!0)}),0===e.length&&c.loglevel>=3&&C(3,"updating 0 Scenes (nothing added to controller)")}},E=function(){i=o.rAF(S)},R=function(e){C(3,"event fired causing an update:",e.type),"resize"==e.type&&(g=w(),p="PAUSED"),!0!==d&&(d=!0,E())},A=function(){if(!h&&g!=w()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(e)}u.forEach(function(e,t){e.refresh()}),v()},C=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this._options=c;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(o.type.Array(t))t.forEach(function(e,t){s.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==s)t.addTo(s);else if(u.indexOf(t)<0){for(var n in u.push(t),u=O(u),t.on("shift.controller_sort",function(){u=O(u)}),c.globalSceneOptions)t[n]&&t[n].call(t,c.globalSceneOptions[n]);C(3,"adding Scene (now "+u.length+" total)")}}else C(1,"ERROR: invalid argument supplied for '.addScene()'");return s},this.removeScene=function(e){if(o.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=u.indexOf(e);t>-1&&(e.off("shift.controller_sort"),u.splice(t,1),C(3,"removing Scene (now "+u.length+" left)"),e.remove())}return s},this.updateScene=function(t,n){return o.type.Array(t)?t.forEach(function(e,t){s.updateScene(e,n)}):n?t.update(!0):!0!==d&&t instanceof e.Scene&&(-1==(d=d||[]).indexOf(t)&&d.push(t),d=O(d),E()),s},this.update=function(e){return R({type:"resize"}),e&&S(),s},this.scrollTo=function(t,n){if(o.type.Number(t))b.call(c.container,t,n);else if(t instanceof e.Scene)t.controller()===s?s.scrollTo(t.scrollOffset(),n):C(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if(o.type.Function(t))b=t;else{var i=o.get.elements(t)[0];if(i){for(;i.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)i=i.parentNode;var r=c.vertical?"top":"left",a=o.get.offset(c.container),l=o.get.offset(i);h||(a[r]-=s.scrollPos()),s.scrollTo(l[r]-a[r],n)}else C(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",t)}return s},this.scrollPos=function(e){return arguments.length?(o.type.Function(e)?y=e:C(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),s):y.call(s)},this.info=function(e){var t={size:g,vertical:c.vertical,scrollPos:f,scrollDirection:p,container:c.container,isDocument:h};return arguments.length?void 0!==t[e]?t[e]:void C(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(c.loglevel!=e&&(c.loglevel=e),s):c.loglevel},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,s.updateScene(u,!0)),s):m},this.destroy=function(e){window.clearTimeout(r);for(var t=u.length;t--;)u[t].destroy(e);return c.container.removeEventListener("resize",R),c.container.removeEventListener("scroll",R),o.cAF(i),C(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in c)l.hasOwnProperty(t)||(C(2,'WARNING: Unknown option "'+t+'"'),delete c[t]);if(c.container=o.get.elements(c.container)[0],!c.container)throw C(1,"ERROR creating object "+a+": No valid scroll container supplied"),a+" init failed.";(h=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),g=w(),c.container.addEventListener("resize",R),c.container.addEventListener("scroll",R);var n=parseInt(c.refreshInterval,10);c.refreshInterval=o.type.Number(n)?n:l.refreshInterval,v(),C(3,"added new "+a+" controller (v"+e.version+")")}(),s};var t={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,n){t.defaults[e]=n},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Controller,n),(e.Controller.prototype=n.prototype).constructor=e.Controller},e.Scene=function(t){var i,r,a="ScrollMagic.Scene",l=n.defaults,s=this,c=o.extend({},l,t),u="BEFORE",d=0,f={start:0,end:0},p=0,h=!0,g={};this.on=function(e,t){return o.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),o=n[0],i=n[1];"*"!=o&&(g[o]||(g[o]=[]),g[o].push({namespace:i||"",callback:t}))}):m(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),s},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach(function(e,n){var o=e.split("."),i=o[0],r=o[1]||"";("*"===i?Object.keys(g):[i]).forEach(function(e){for(var n=g[e]||[],o=n.length;o--;){var i=n[o];!i||r!==i.namespace&&"*"!==r||t&&t!=i.callback||n.splice(o,1)}n.length||delete g[e]})}),s):(m(1,"ERROR: Invalid event name supplied."),s)},this.trigger=function(t,n){if(t){var o=t.trim().split("."),i=o[0],r=o[1],a=g[i];m(3,"event fired:",i,n?"->":"",n||""),a&&a.forEach(function(t,o){r&&r!==t.namespace||t.callback.call(s,new e.Event(i,t.namespace,s,n))})}else m(1,"ERROR: Invalid event name supplied.");return s},s.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?S():"reverse"===e.what&&s.update())}).on("shift.internal",function(e){w(),s.update()});var m=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+a+") ->"),o.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?r!=t&&(r&&r.removeScene(s),r=t,A(),b(!0),S(!0),w(),r.info("container").addEventListener("resize",E),t.addScene(s),s.trigger("add",{controller:r}),m(3,"added "+a+" to controller"),s.update()):m(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),s},this.enabled=function(e){return arguments.length?(h!=e&&(h=!!e,s.update(!0)),s):h},this.remove=function(){if(r){r.info("container").removeEventListener("resize",E);var e=r;r=void 0,e.removeScene(s),s.trigger("remove"),m(3,"removed "+a+" from controller")}return s},this.destroy=function(e){return s.trigger("destroy",{reset:e}),s.remove(),s.off("*.*"),m(3,"destroyed "+a+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(r)if(e)if(r.enabled()&&h){var t,n=r.info("scrollPos");t=c.duration>0?(n-f.start)/(f.end-f.start):n>=f.start?1:0,s.trigger("update",{startPos:f.start,endPos:f.end,scrollPos:n}),s.progress(t)}else v&&"DURING"===u&&_(!0);else r.updateScene(s,!1);return s},this.refresh=function(){return b(),S(),s},this.progress=function(e){if(arguments.length){var t=!1,n=u,o=r?r.info("scrollDirection"):"PAUSED",i=c.reverse||e>=d;if(0===c.duration?(t=d!=e,u=0==(d=e<1&&i?0:1)?"BEFORE":"DURING"):e<0&&"BEFORE"!==u&&i?(d=0,u="BEFORE",t=!0):e>=0&&e<1&&i?(d=e,u="DURING",t=!0):e>=1&&"AFTER"!==u?(d=1,u="AFTER",t=!0):"DURING"!==u||i||_(),t){var a={progress:d,state:u,scrollDirection:o},l=u!=n,f=function(e){s.trigger(e,a)};l&&"DURING"!==n&&(f("enter"),f("BEFORE"===n?"start":"end")),f("progress"),l&&"DURING"!==u&&(f("BEFORE"===u?"start":"end"),f("leave"))}return s}return d};var v,y,w=function(){f={start:p+c.offset},r&&c.triggerElement&&(f.start-=r.info("size")*c.triggerHook),f.end=f.start+c.duration},b=function(e){i&&C("duration",i.call(s))&&!e&&(s.trigger("change",{what:"duration",newval:c.duration}),s.trigger("shift",{reason:"duration"}))},S=function(e){var t=0,n=c.triggerElement;if(r&&(n||p>0)){if(n)if(n.parentNode){for(var i=r.info(),a=o.get.offset(i.container),l=i.vertical?"top":"left";n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n=n.parentNode;var u=o.get.offset(n);i.isDocument||(a[l]-=r.scrollPos()),t=u[l]-a[l]}else m(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),s.triggerElement(void 0);var d=t!=p;p=t,d&&!e&&s.trigger("shift",{reason:"triggerElementPosition"})}},E=function(e){c.triggerHook>0&&s.trigger("shift",{reason:"containerResize"})},R=o.extend(n.validate,{duration:function(e){if(o.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return r?r.info("size")*t:0}}if(o.type.Function(e)){i=e;try{e=parseFloat(i())}catch(t){e=-1}}if(e=parseFloat(e),!o.type.Number(e)||e<0)throw i?(i=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),A=function(e){(e=arguments.length?[e]:Object.keys(R)).forEach(function(e,t){var n;if(R[e])try{n=R[e](c[e])}catch(t){n=l[e];var i=o.type.String(t)?[t]:t;o.type.Array(i)?(i[0]="ERROR: "+i[0],i.unshift(1),m.apply(this,i)):m(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{c[e]=n}})},C=function(e,t){var n=!1,o=c[e];return c[e]!=t&&(c[e]=t,A(e),n=o!=c[e]),n},O=function(e){s[e]||(s[e]=function(t){return arguments.length?("duration"===e&&(i=void 0),C(e,t)&&(s.trigger("change",{what:e,newval:c[e]}),n.shifts.indexOf(e)>-1&&s.trigger("shift",{reason:e})),s):c[e]})};this.controller=function(){return r},this.state=function(){return u},this.scrollOffset=function(){return f.start},this.triggerPosition=function(){var e=c.offset;return r&&(e+=c.triggerElement?p:r.info("size")*s.triggerHook()),e},s.on("shift.internal",function(e){var t="duration"===e.reason;("AFTER"===u&&t||"DURING"===u&&0===c.duration)&&_(),t&&T()}).on("progress.internal",function(e){_()}).on("add.internal",function(e){T()}).on("destroy.internal",function(e){s.removePin(e.reset)});var _=function(e){if(v&&r){var t=r.info(),n=y.spacer.firstChild;if(e||"DURING"!==u){var i={position:y.inFlow?"relative":"absolute",top:0,left:0},a=o.css(n,"position")!=i.position;y.pushFollowers?c.duration>0&&("AFTER"===u&&0===parseFloat(o.css(y.spacer,"padding-top"))?a=!0:"BEFORE"===u&&0===parseFloat(o.css(y.spacer,"padding-bottom"))&&(a=!0)):i[t.vertical?"top":"left"]=c.duration*d,o.css(n,i),a&&T()}else{"fixed"!=o.css(n,"position")&&(o.css(n,{position:"fixed"}),T());var l=o.get.offset(y.spacer,!0),s=c.reverse||0===c.duration?t.scrollPos-f.start:Math.round(d*c.duration*10)/10;l[t.vertical?"top":"left"]+=s,o.css(y.spacer.firstChild,{top:l.top,left:l.left})}}},T=function(){if(v&&r&&y.inFlow){var e="DURING"===u,t=r.info("vertical"),n=y.spacer.firstChild,i=o.isMarginCollapseType(o.css(y.spacer,"display")),a={};y.relSize.width||y.relSize.autoFullWidth?o.css(v,e?{width:o.get.width(y.spacer)}:{width:"100%"}):(a["min-width"]=o.get.width(t?v:n,!0,!0),a.width=e?a["min-width"]:"auto"),y.relSize.height?o.css(v,e?{height:o.get.height(y.spacer)-(y.pushFollowers?c.duration:0)}:{height:"100%"}):(a["min-height"]=o.get.height(t?n:v,!0,!i),a.height=e?a["min-height"]:"auto"),y.pushFollowers&&(a["padding"+(t?"Top":"Left")]=c.duration*d,a["padding"+(t?"Bottom":"Right")]=c.duration*(1-d)),o.css(y.spacer,a)}},F=function(){r&&v&&"DURING"===u&&!r.info("isDocument")&&_()},P=function(){r&&v&&"DURING"===u&&((y.relSize.width||y.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(y.spacer.parentNode)||y.relSize.height&&o.get.height(window)!=o.get.height(y.spacer.parentNode))&&T()},x=function(e){r&&v&&"DURING"===u&&!r.info("isDocument")&&(e.preventDefault(),r._setScrollPos(r.info("scrollPos")-((e.wheelDelta||e[r.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){if(t=o.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=o.get.elements(e)[0]))return m(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),s;if("fixed"===o.css(e,"position"))return m(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),s;if(v){if(v===e)return s;s.removePin()}var n=(v=e).parentNode.style.display,i=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];v.parentNode.style.display="none";var r="absolute"!=o.css(v,"position"),a=o.css(v,i.concat(["display"])),l=o.css(v,["width","height"]);v.parentNode.style.display=n,!r&&t.pushFollowers&&(m(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){v&&0===c.duration&&t.pushFollowers&&m(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var u=v.parentNode.insertBefore(document.createElement("div"),v),d=o.extend(a,{position:r?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(r||o.extend(d,o.css(v,["width","height"])),o.css(u,d),u.setAttribute("data-scrollmagic-pin-spacer",""),o.addClass(u,t.spacerClass),y={spacer:u,relSize:{width:"%"===l.width.slice(-1),height:"%"===l.height.slice(-1),autoFullWidth:"auto"===l.width&&r&&o.isMarginCollapseType(a.display)},pushFollowers:t.pushFollowers,inFlow:r},!v.___origStyle){v.___origStyle={};var f=v.style;i.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]).forEach(function(e){v.___origStyle[e]=f[e]||""})}return y.relSize.width&&o.css(u,{width:l.width}),y.relSize.height&&o.css(u,{height:l.height}),u.appendChild(v),o.css(v,{position:r?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(y.relSize.width||y.relSize.autoFullWidth)&&o.css(v,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",F),window.addEventListener("resize",F),window.addEventListener("resize",P),v.addEventListener("mousewheel",x),v.addEventListener("DOMMouseScroll",x),m(3,"added pin"),_(),s},this.removePin=function(e){if(v){if("DURING"===u&&_(!0),e||!r){var t=y.spacer.firstChild;if(t.hasAttribute("data-scrollmagic-pin-spacer")){var n=y.spacer.style,i={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){i[e]=n[e]||""}),o.css(t,i)}y.spacer.parentNode.insertBefore(t,y.spacer),y.spacer.parentNode.removeChild(y.spacer),v.parentNode.hasAttribute("data-scrollmagic-pin-spacer")||(o.css(v,v.___origStyle),delete v.___origStyle)}window.removeEventListener("scroll",F),window.removeEventListener("resize",F),window.removeEventListener("resize",P),v.removeEventListener("mousewheel",x),v.removeEventListener("DOMMouseScroll",x),v=void 0,m(3,"removed pin (reset: "+(e?"true":"false")+")")}return s};var L,N=[];return s.on("destroy.internal",function(e){s.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=o.get.elements(e);return 0!==n.length&&o.type.String(t)?(N.length>0&&s.removeClassToggle(),L=t,N=n,s.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?o.addClass:o.removeClass;N.forEach(function(e,n){t(e,L)})}),s):(m(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),s)},this.removeClassToggle=function(e){return e&&N.forEach(function(e,t){o.removeClass(e,L)}),s.off("start.internal_class end.internal_class"),L=void 0,N=[],s},function(){for(var e in c)l.hasOwnProperty(e)||(m(2,'WARNING: Unknown option "'+e+'"'),delete c[e]);for(var t in l)O(t);A()}(),s};var n={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!o.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=o.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!o.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,o,i,r){t in n.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(n.defaults[t]=o,n.validate[t]=i,r&&n.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Scene,n),(e.Scene.prototype=n.prototype).constructor=e.Scene},e.Event=function(e,t,n,o){for(var i in o=o||{})this[i]=o[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var o=e._util=function(e){var t,n={},o=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},r=function(t,n,r,a){if((n=n===document?e:n)===e)a=!1;else if(!h.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var l=(r?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(r&&a){var s=i(n);l+="Height"===t?o(s.marginTop)+o(s.marginBottom):o(s.marginLeft)+o(s.marginRight)}return l},a=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var l=0,s=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<s.length;++t)c=e[s[t]+"RequestAnimationFrame"],u=e[s[t]+"CancelAnimationFrame"]||e[s[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),o=Math.max(0,16-(n-l)),i=e.setTimeout(function(){t(n+o)},o);return l=n+o,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var d=["error","warn","log"],f=e.console||{};for(f.log=f.log||function(){},t=0;t<d.length;t++){var p=d[t];f[p]||(f[p]=f.log)}n.log=function(e){(e>d.length||e<=0)&&(e=d.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),o=d[e-1],i=Array.prototype.splice.call(arguments,1),r=Function.prototype.bind.call(f[o],f);i.unshift(n),r.apply(f,i)};var h=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};h.String=function(e){return"string"===h(e)},h.Function=function(e){return"function"===h(e)},h.Array=function(e){return Array.isArray(e)},h.Number=function(e){return!h.Array(e)&&e-parseFloat(e)+1>=0},h.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var g=n.get={};return g.elements=function(t){var n=[];if(h.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===h(t)||h.Array(t))for(var o=0,i=n.length=t.length;o<i;o++){var r=t[o];n[o]=h.DomElement(r)?r:g.elements(r)}else(h.DomElement(t)||t===document||t===e)&&(n=[t]);return n},g.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},g.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},g.width=function(e,t,n){return r("width",e,t,n)},g.height=function(e,t,n){return r("height",e,t,n)},g.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var o=e.getBoundingClientRect();n.top=o.top,n.left=o.left,t||(n.top+=g.scrollTop(),n.left+=g.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(h.String(t))return i(e)[a(t)];if(h.Array(t)){var n={},o=i(e);return t.forEach(function(e,t){n[e]=o[a(e)]}),n}for(var r in t){var l=t[r];l==parseFloat(l)&&(l+="px"),e.style[a(r)]=l}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e}()}),r=function(){function e(){this.src="",this.speed=1,this.playthrough=!1,this.scrollController=new i.Controller}return e.prototype.onAnimationLoaded=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return e.detail.animation?[4,this.addAnimation()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})},e.prototype.addAnimation=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,o=this;return __generator(this,function(r){switch(r.label){case 0:return e=new i.Scene({triggerElement:this.animationContainerElement,offset:0,duration:this.animationContainerElement.clientHeight/this.speed}),this.playthrough?(this.lottieAnimationComponent.setSpeed(this.speed),e.triggerHook(.66),e.on("enter",function(e){"FORWARD"===e.scrollDirection&&(o.lottieAnimationComponent.play(),o.onAnimationStart.emit())}),(t=new i.Scene({triggerElement:this.animationContainerElement,triggerHook:1,offset:0,duration:window.innerHeight})).on("leave",function(e){"REVERSE"===e.scrollDirection&&(o.lottieAnimationComponent.progress(0),o.lottieAnimationComponent.stop(),o.onAnimationStop.emit())}),t.addTo(this.scrollController),[3,3]):[3,1];case 1:return[4,this.lottieAnimationComponent.getTotalFrames()];case 2:n=r.sent(),e.duration(window.innerHeight/3/this.speed),e.on("enter",function(){o.onAnimationStart.emit()}),e.on("leave",function(){o.onAnimationStop.emit()}),e.on("progress",function(e){o.lottieAnimationComponent.goToAndStop(Math.round(e.progress*n),!0)}),r.label=3;case 3:return e.addTo(this.scrollController),[2]}})})},e.prototype.render=function(){var e=this;return n("div",{class:"lottie-scroll"},n("div",{class:"lottie-scroll__container",ref:function(t){return e.animationContainerElement=t}},n("lottie-animation",{src:this.src,autoplay:!1,ref:function(t){return e.lottieAnimationComponent=t},class:"lottie-scroll__animation"})))},Object.defineProperty(e,"is",{get:function(){return"lottie-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{playthrough:{type:Boolean,attr:"playthrough"},speed:{type:Number,attr:"speed"},src:{type:String,attr:"src"},wrapperElement:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onAnimationStart",method:"onAnimationStart",bubbles:!0,cancelable:!0,composed:!0},{name:"onAnimationStop",method:"onAnimationStop",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"onAnimationLoaded",method:"onAnimationLoaded"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".lottie-scroll,.lottie-scroll__animation,.lottie-scroll__container{width:100%}"},enumerable:!0,configurable:!0}),e}();e.LottieAnimation=o,e.LottieScroll=r,Object.defineProperty(e,"__esModule",{value:!0})});
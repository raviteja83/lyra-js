var e={610:(e,t,r)=>{var a={},o=!1,n=function(){var e=Array.prototype.slice.call(arguments).join(" ");console.error(e)};self.alert=function(){var e=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:e,threadId:a._pthread_self()})},a.instantiateWasm=function(e,t){var r=new WebAssembly.Instance(a.wasmModule,e);return t(r),a.wasmModule=null,r.exports},self.onmessage=function(e){try{if("load"===e.data.cmd)a.wasmModule=e.data.wasmModule,a.wasmMemory=e.data.wasmMemory,a.buffer=a.wasmMemory.buffer,a.ENVIRONMENT_IS_PTHREAD=!0,(e.data.urlOrBlob?r(350)(e.data.urlOrBlob):r.e(906).then(r.bind(r,906))).then((function(e){return e.default(a)})).then((function(e){a=e}));else if("run"===e.data.cmd){a.__performance_now_clock_drift=performance.now()-e.data.time,a.__emscripten_thread_init(e.data.threadInfoStruct,0,0);var t=e.data.stackBase,s=e.data.stackBase+e.data.stackSize;a.establishStackSpace(s,t),a.PThread.receiveObjectTransfer(e.data),a.PThread.threadInit(),o||(a.___embind_register_native_and_builtin_types(),o=!0);try{var i=a.invokeEntryPoint(e.data.start_routine,e.data.arg);a.keepRuntimeAlive()?a.PThread.setExitStatus(i):a.__emscripten_thread_exit(i)}catch(e){if("unwind"!=e){if(!(e instanceof a.ExitStatus))throw e;a.keepRuntimeAlive()||a.__emscripten_thread_exit(e.status)}}}else"cancel"===e.data.cmd?(a._pthread_self()&&a.__emscripten_thread_exit(-1),postMessage({cmd:"cancelDone"})):"setimmediate"===e.data.target||("processThreadQueue"===e.data.cmd?a._pthread_self()&&a._emscripten_current_thread_process_queued_calls():(n("worker.js received unknown command "+e.data.cmd),n(e.data)))}catch(e){throw n("worker.js onmessage() captured an uncaught exception: "+e),e&&e.stack&&n(e.stack),e}}},350:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=350,e.exports=t}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[])),r.u=e=>e+".lyra_bundle.js",r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{r.b=self.location+"";var e={610:1};r.f.i=(t,a)=>{e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunklyra_codec=self.webpackChunklyra_codec||[],a=t.push.bind(t);t.push=t=>{var[o,n,s]=t;for(var i in n)r.o(n,i)&&(r.m[i]=n[i]);for(s&&s(r);o.length;)e[o.pop()]=1;a(t)}})(),r(610);
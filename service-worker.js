if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-34233452"],(function(e){"use strict";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"),e.setCacheNameDetails({prefix:"sub-web"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_redirects",revision:"fde0b2c738f555c5473407a8aff5055c"},{url:"/css/app.26c81714.css",revision:null},{url:"/css/chunk-vendors.22a90d55.css",revision:null},{url:"/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/index.html",revision:"9db40af8927a286dd45bb10bcdd4533f"},{url:"/js/13.61e9ba31.js",revision:null},{url:"/js/app.85d84817.js",revision:null},{url:"/js/chunk-vendors.16f54e6a.js",revision:null},{url:"/manifest.json",revision:"3fa7348f187dae70fad03ee4cc4e0a4f"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/"),{denylist:[/\/api\//]}))}));
//# sourceMappingURL=service-worker.js.map

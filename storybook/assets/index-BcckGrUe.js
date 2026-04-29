import{h as w}from"./iframe-Dd1_qWrC.js";var s={exports:{}},c={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function q(){if(f)return c;f=1;var u=w();function d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p=typeof Object.is=="function"?Object.is:d,h=u.useState,l=u.useEffect,v=u.useLayoutEffect,E=u.useDebugValue;function m(e,t){var n=t(),a=h({inst:{value:n,getSnapshot:t}}),r=a[0].inst,i=a[1];return v(function(){r.value=n,r.getSnapshot=t,o(r)&&i({inst:r})},[e,n,t]),l(function(){return o(r)&&i({inst:r}),e(function(){o(r)&&i({inst:r})})},[e]),E(n),n}function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!p(e,n)}catch{return!0}}function y(e,t){return t()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:m;return c.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:x,c}var S;function R(){return S||(S=1,s.exports=q()),s.exports}var b=R();export{R as r,b as s};

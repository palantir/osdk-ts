import{j as m}from"./iframe-Dyt2g367.js";import{B as p}from"./BaseTiffViewer--tp9UWg4.js";import"./preload-helper-Iy-_aWsL.js";import"./index-CVbuIiNF.js";import"./index-YkV0U4e7.js";import"./error-CoUpGJie.js";import"./svgIconContainer-CQnuEYht.js";const{fn:O}=__STORYBOOK_MODULE_TEST__;function x(){const i=new ArrayBuffer(158),t=new DataView(i);let e=0;t.setUint16(e,18761,!1),e+=2,t.setUint16(e,42,!0),e+=2,t.setUint32(e,8,!0),e+=4,t.setUint16(e,10,!0),e+=2;function r(s,B,T,y){t.setUint16(e,s,!0),e+=2,t.setUint16(e,B,!0),e+=2,t.setUint32(e,T,!0),e+=4,t.setUint32(e,y,!0),e+=4}r(256,3,1,2),r(257,3,1,2),r(258,3,4,134),r(259,3,1,1),r(262,3,1,2),r(273,4,1,142),r(277,3,1,4),r(278,3,1,2),r(279,4,1,16),r(338,3,1,2),t.setUint32(e,0,!0);let f=134;for(let s=0;s<4;s++)t.setUint16(f,8,!0),f+=2;const c=new Uint8Array(i,142,16);return c.set([255,0,0,255,0,255,0,255]),c.set([0,0,255,255,255,255,255,255],8),new Uint8Array(i)}const E=x(),R={title:"Components/DocumentViewer/Renderers/TiffViewer",component:p,tags:["beta"],args:{src:E},render:a=>m.jsx("div",{style:{height:"400px"},children:m.jsx(p,{...a})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"TIFF bytes to render",control:!1},onError:{description:"Callback fired when rendering fails",control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:`import { BaseTiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<BaseTiffViewer src={tiffBytes} />`}}}},o={args:{onError:O()},parameters:{docs:{source:{code:`import { BaseTiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<BaseTiffViewer src={tiffBytes} onError={() => console.error("TIFF render failed")} />`}}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseTiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<BaseTiffViewer src={tiffBytes} />\`
      }
    }
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var w,h,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    onError: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseTiffViewer } from "@osdk/react-components/experimental/tiff-renderer";

<BaseTiffViewer src={tiffBytes} onError={() => console.error("TIFF render failed")} />\`
      }
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const K=["WithContent","WithErrorCallback"];export{n as WithContent,o as WithErrorCallback,K as __namedExportsOrder,R as default};

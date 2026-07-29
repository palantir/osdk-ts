import{j as m}from"./iframe-C-hy2wdy.js";import{T as p}from"./TiffRenderer-DjBEVLKg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YkV0U4e7.js";import"./error-CxoFdxIw.js";import"./svgIconContainer-DENES-tb.js";import"./index-BialtY4S.js";const{fn:O}=__STORYBOOK_MODULE_TEST__;function w(){const i=new ArrayBuffer(158),t=new DataView(i);let e=0;t.setUint16(e,18761,!1),e+=2,t.setUint16(e,42,!0),e+=2,t.setUint32(e,8,!0),e+=4,t.setUint16(e,10,!0),e+=2;function r(n,x,y,E){t.setUint16(e,n,!0),e+=2,t.setUint16(e,x,!0),e+=2,t.setUint32(e,y,!0),e+=4,t.setUint32(e,E,!0),e+=4}r(256,3,1,2),r(257,3,1,2),r(258,3,4,134),r(259,3,1,1),r(262,3,1,2),r(273,4,1,142),r(277,3,1,4),r(278,3,1,2),r(279,4,1,16),r(338,3,1,2),t.setUint32(e,0,!0);let f=134;for(let n=0;n<4;n++)t.setUint16(f,8,!0),f+=2;const c=new Uint8Array(i,142,16);return c.set([255,0,0,255,0,255,0,255]),c.set([0,0,255,255,255,255,255,255],8),new Uint8Array(i)}const S=w(),K={title:"Experimental/TiffRenderer",tags:["experimental"],component:p,args:{content:S},render:a=>m.jsx("div",{style:{height:"400px"},children:m.jsx(p,{...a})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"TIFF bytes to render",control:!1},onError:{description:"Callback fired when rendering fails",control:!1,table:{category:"Events"}}}},s={parameters:{docs:{source:{code:`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} />`}}}},o={args:{onError:O()},parameters:{docs:{source:{code:`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} onError={() => console.error("TIFF render failed")} />`}}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} />\`
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onError: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} onError={() => console.error("TIFF render failed")} />\`
      }
    }
  }
}`,...(T=(h=o.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};const M=["Default","WithErrorCallback"];export{s as Default,o as WithErrorCallback,M as __namedExportsOrder,K as default};

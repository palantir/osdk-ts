import{j as m}from"./iframe-BrEQ26tz.js";import{T as d}from"./TiffRenderer-B-6EdnZi.js";import"./preload-helper-CXuZccyG.js";import"./index-YkV0U4e7.js";import"./error-CjGSNoEY.js";import"./svgIconContainer-J7EmXi3t.js";import"./index-0puuYqU-.js";const{fn:E}=__STORYBOOK_MODULE_TEST__;function w(){const i=new ArrayBuffer(158),t=new DataView(i);let e=0;t.setUint16(e,18761,!1),e+=2,t.setUint16(e,42,!0),e+=2,t.setUint32(e,8,!0),e+=4,t.setUint16(e,10,!0),e+=2;function r(n,y,O,x){t.setUint16(e,n,!0),e+=2,t.setUint16(e,y,!0),e+=2,t.setUint32(e,O,!0),e+=4,t.setUint32(e,x,!0),e+=4}r(256,3,1,2),r(257,3,1,2),r(258,3,4,134),r(259,3,1,1),r(262,3,1,2),r(273,4,1,142),r(277,3,1,4),r(278,3,1,2),r(279,4,1,16),r(338,3,1,2),t.setUint32(e,0,!0);let f=134;for(let n=0;n<4;n++)t.setUint16(f,8,!0),f+=2;const c=new Uint8Array(i,142,16);return c.set([255,0,0,255,0,255,0,255]),c.set([0,0,255,255,255,255,255,255],8),new Uint8Array(i)}const R=w(),V={title:"Components/DocumentViewer/Renderers/TiffRenderer",component:d,tags:["beta"],args:{content:R},render:a=>m.jsx("div",{style:{height:"400px"},children:m.jsx(d,{...a})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"TIFF bytes to render",control:!1},onError:{description:"Callback fired when rendering fails",control:!1,table:{category:"Events"}}}},s={parameters:{docs:{source:{code:`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} />`}}}},o={args:{onError:E()},parameters:{docs:{source:{code:`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} onError={() => console.error("TIFF render failed")} />`}}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { TiffRenderer } from "@osdk/react-components/experimental/tiff-renderer";

<TiffRenderer content={tiffBytes} />\`
      }
    }
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,g,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const K=["WithContent","WithErrorCallback"];export{s as WithContent,o as WithErrorCallback,K as __namedExportsOrder,V as default};

import{j as l}from"./iframe-CJbOBKBh.js";import{B as p}from"./BaseTiffViewer-DlQA45no.js";import"./preload-helper-BLHdcgal.js";import"./index-BZGK6RAy.js";import"./index-YkV0U4e7.js";import"./error-SsNWn793.js";import"./svgIconContainer-nMosQuRN.js";const{fn:O}=__STORYBOOK_MODULE_TEST__;function T(){const i=new ArrayBuffer(158),t=new DataView(i);let e=0;t.setUint16(e,18761,!1),e+=2,t.setUint16(e,42,!0),e+=2,t.setUint32(e,8,!0),e+=4,t.setUint16(e,10,!0),e+=2;function r(s,E,y,B){t.setUint16(e,s,!0),e+=2,t.setUint16(e,E,!0),e+=2,t.setUint32(e,y,!0),e+=4,t.setUint32(e,B,!0),e+=4}r(256,3,1,2),r(257,3,1,2),r(258,3,4,134),r(259,3,1,1),r(262,3,1,2),r(273,4,1,142),r(277,3,1,4),r(278,3,1,2),r(279,4,1,16),r(338,3,1,2),t.setUint32(e,0,!0);let f=134;for(let s=0;s<4;s++)t.setUint16(f,8,!0),f+=2;const c=new Uint8Array(i,142,16);return c.set([255,0,0,255,0,255,0,255]),c.set([0,0,255,255,255,255,255,255],8),new Uint8Array(i)}const b=T(),R={title:"Components/DocumentViewer/Renderers/TiffViewer",component:p,tags:["beta"],args:{src:b},render:a=>l.jsx("div",{style:{height:"400px"},children:l.jsx(p,{...a})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"TIFF bytes to render",control:!1},onError:{description:"Callback fired when rendering fails",control:!1,table:{category:"Events"}}}},n={parameters:{docs:{source:{code:"<BaseTiffViewer src={tiffBytes} />"}}}},o={args:{onError:O()},parameters:{docs:{source:{code:`const handleError = useCallback(() => {
  console.error("TIFF render failed");
}, []);

<BaseTiffViewer src={tiffBytes} onError={handleError} />`}}}};var d,m,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseTiffViewer src={tiffBytes} />\`
      }
    }
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    onError: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`const handleError = useCallback(() => {
  console.error("TIFF render failed");
}, []);

<BaseTiffViewer src={tiffBytes} onError={handleError} />\`
      }
    }
  }
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const K=["WithContent","WithErrorCallback"];export{n as WithContent,o as WithErrorCallback,K as __namedExportsOrder,R as default};

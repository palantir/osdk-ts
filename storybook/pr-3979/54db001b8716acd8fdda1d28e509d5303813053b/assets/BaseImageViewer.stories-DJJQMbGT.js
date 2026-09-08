import{j as s}from"./iframe-Xc_JH78I.js";import"./image-viewer-DkAy84GP.js";import{B as n}from"./ImageViewer-DZacbtiK.js";import"./preload-helper-AYl1pujm.js";import"./withOsdkMetrics-CzAtW5Pc.js";import"./svgIconContainer-CQmggZ37.js";import"./useMediaContents-sbaavj9P.js";import"./spin-BsDWnG40.js";import"./error-D-Pc-XbV.js";const{fn:g}=__STORYBOOK_MODULE_TEST__;function f(){const r=document.createElement("canvas");r.width=200,r.height=200;const e=r.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),r.toDataURL("image/png")}const u=f(),B={title:"Components/DocumentViewer/Renderers/ImageViewer/BaseImageViewer",component:n,tags:["beta"],args:{src:u,alt:"Sample image"},render:r=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(n,{...r})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"Object URL or data URL pointing to the image",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the image fails to load",control:!1,table:{category:"Events"}}}},t={parameters:{docs:{source:{code:'<BaseImageViewer src={imageUrl} alt="My image" />'}}}},o={args:{onError:g()},parameters:{docs:{source:{code:`<BaseImageViewer
  src={imageUrl}
  alt="My image"
  onError={reportImageLoadFailure}
/>`}}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseImageViewer src={imageUrl} alt="My image" />\`
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onError: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`<BaseImageViewer
  src={imageUrl}
  alt="My image"
  onError={reportImageLoadFailure}
/>\`
      }
    }
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const C=["Default","WithErrorCallback"];export{t as Default,o as WithErrorCallback,C as __namedExportsOrder,B as default};

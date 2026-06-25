import{j as s}from"./iframe-ByRLXg_K.js";import{B as n}from"./BaseImageViewer-Bpzsf0Lp.js";import"./preload-helper-B9o9dbA3.js";import"./index-6DQxkngE.js";const{fn:g}=__STORYBOOK_MODULE_TEST__;function f(){const t=document.createElement("canvas");t.width=200,t.height=200;const e=t.getContext("2d"),r=e.createLinearGradient(0,0,200,200);return r.addColorStop(0,"#3b82f6"),r.addColorStop(.5,"#8b5cf6"),r.addColorStop(1,"#ec4899"),e.fillStyle=r,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),t.toDataURL("image/png")}const x=f(),b={title:"Components/DocumentViewer/Renderers/ImageViewer/BaseImageViewer",component:n,tags:["beta"],args:{src:x,alt:"Sample image"},render:t=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(n,{...t})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"Object URL or data URL pointing to the image",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the image fails to load",control:!1,table:{category:"Events"}}}},a={parameters:{docs:{source:{code:`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />`}}}},o={args:{onError:g()}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />\`
      }
    }
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    onError: fn()
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const E=["Default","WithErrorCallback"];export{a as Default,o as WithErrorCallback,E as __namedExportsOrder,b as default};

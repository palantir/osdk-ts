import{j as s}from"./iframe-D7uYHMK5.js";import{B as n}from"./BaseImageViewer-CCxqE5-q.js";import"./preload-helper-DiAZcfZm.js";import"./index-BzC45Lga.js";const{fn:g}=__STORYBOOK_MODULE_TEST__;function f(){const r=document.createElement("canvas");r.width=200,r.height=200;const e=r.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),r.toDataURL("image/png")}const x=f(),S={title:"Components/DocumentViewer/Renderers/ImageViewer/BaseImageViewer",component:n,tags:["beta"],args:{src:x,alt:"Sample image"},render:r=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(n,{...r})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"Object URL or data URL pointing to the image",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the image fails to load",control:!1,table:{category:"Events"}}}},t={parameters:{docs:{source:{code:`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />`}}}},o={args:{onError:g()},parameters:{docs:{source:{code:`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer
  src={imageUrl}
  alt="My image"
  onError={(error) => reportImageLoadFailure(error)}
/>`}}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />\`
      }
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,p,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onError: fn()
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer
  src={imageUrl}
  alt="My image"
  onError={(error) => reportImageLoadFailure(error)}
/>\`
      }
    }
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const B=["Default","WithErrorCallback"];export{t as Default,o as WithErrorCallback,B as __namedExportsOrder,S as default};

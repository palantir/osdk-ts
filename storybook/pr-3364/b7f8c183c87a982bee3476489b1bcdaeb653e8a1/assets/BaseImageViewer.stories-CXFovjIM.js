import{j as s}from"./iframe-NNiKZ-n-.js";import{B as n}from"./BaseImageViewer-B2exi9eK.js";import"./preload-helper-txBaQJ6z.js";import"./index-Dx54j0Sl.js";const{fn:g}=__STORYBOOK_MODULE_TEST__;function f(){const r=document.createElement("canvas");r.width=200,r.height=200;const e=r.getContext("2d"),t=e.createLinearGradient(0,0,200,200);return t.addColorStop(0,"#3b82f6"),t.addColorStop(.5,"#8b5cf6"),t.addColorStop(1,"#ec4899"),e.fillStyle=t,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),r.toDataURL("image/png")}const x=f(),E={title:"Beta/DocumentViewer/Renderers/ImageViewer/BaseImageViewer",component:n,args:{src:x,alt:"Sample image"},render:r=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(n,{...r})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"Object URL or data URL pointing to the image",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the image fails to load",control:!1,table:{category:"Events"}}}},a={parameters:{docs:{source:{code:`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const b=["Default","WithErrorCallback"];export{a as Default,o as WithErrorCallback,b as __namedExportsOrder,E as default};

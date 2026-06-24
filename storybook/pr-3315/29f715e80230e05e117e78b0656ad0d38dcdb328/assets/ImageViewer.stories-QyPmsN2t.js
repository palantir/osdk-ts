import{j as s}from"./iframe-C-hy2wdy.js";import{I,B as m}from"./ImageViewer-BZd-fOvn.js";import{w as u}from"./withOsdkMetrics-DpL3-5qr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BialtY4S.js";import"./useMediaContents-D-MPucy9.js";import"./spin-BXDbPjxM.js";import"./svgIconContainer-DENES-tb.js";import"./error-CxoFdxIw.js";import"./useRegisterUserAgent-CGfqmNZn.js";const S=u(I,"ImageViewer"),{fn:M}=__STORYBOOK_MODULE_TEST__;function V(){const a=document.createElement("canvas");a.width=200,a.height=200;const e=a.getContext("2d"),r=e.createLinearGradient(0,0,200,200);return r.addColorStop(0,"#3b82f6"),r.addColorStop(.5,"#8b5cf6"),r.addColorStop(1,"#ec4899"),e.fillStyle=r,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),a.toDataURL("image/png")}const h=V();function y(a,e,r){return{fetchContents:async()=>await fetch(a),fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-image",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const D={title:"Experimental/ImageViewer/BaseImageViewer",tags:["experimental"],component:m,args:{src:h,alt:"Sample image"},render:a=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(m,{...a})}),parameters:{controls:{expanded:!0}},argTypes:{src:{description:"Object URL or data URL pointing to the image",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the image fails to load",control:!1,table:{category:"Events"}}}},t={parameters:{docs:{source:{code:`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />`}}}},i={args:{onError:M()}},o={args:{media:y(h,"image/png","sample.png"),alt:"Sample image loaded from Media"},render:a=>s.jsx("div",{style:{height:"400px",width:"400px"},children:s.jsx(S,{...a})}),parameters:{docs:{source:{code:`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />`}}}};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />\`
      }
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,g;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    onError: fn()
  }
}`,...(g=(p=i.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,w,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    media: createMockImageMedia(sampleImageDataUrl, "image/png", "sample.png"),
    alt: "Sample image loaded from Media"
  },
  render: (args: ImageViewerMediaProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <ImageViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />\`
      }
    }
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const T=["Default","WithErrorCallback","WithMedia"];export{t as Default,i as WithErrorCallback,o as WithMedia,T as __namedExportsOrder,D as default};

import{j as r}from"./iframe-DszJazu2.js";import{I as d}from"./ImageViewer-wEY5_EHE.js";import{w as c}from"./withOsdkMetrics-CV_f_k9F.js";import"./preload-helper-Bzu0i3_D.js";import"./index-Ba8E2uBZ.js";import"./useMediaContents-B_bS3w_3.js";import"./BaseImageViewer--K6HXDr6.js";import"./spin-DMtdQS0r.js";import"./svgIconContainer-CEdnDZiu.js";import"./error-Bsv4MnOe.js";import"./useRegisterUserAgent-DRGVi_Uv.js";const s=c(d,"ImageViewer");function l(){const t=document.createElement("canvas");t.width=200,t.height=200;const e=t.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),t.toDataURL("image/png")}const p=l();function g(t,e,a){return{fetchContents:async()=>await fetch(t),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-image",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const R={title:"Beta/DocumentViewer/Renderers/ImageViewer",component:s,parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch image contents from",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},i={args:{media:g(p,"image/png","sample.png"),alt:"Sample image loaded from Media"},render:t=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...t})}),parameters:{docs:{source:{code:`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />`}}}};var m,o,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(o=i.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,R as default};

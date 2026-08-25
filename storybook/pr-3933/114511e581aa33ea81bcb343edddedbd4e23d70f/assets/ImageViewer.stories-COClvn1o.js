import{j as r}from"./iframe-CV9AnRvZ.js";import{I as d}from"./ImageViewer-Ctqt20Mn.js";import{w as c}from"./withOsdkMetrics-zIgNwk4v.js";import"./preload-helper-7FfFv9ik.js";import"./index-Di1ZWUkk.js";import"./useMediaContents-DT8fDu95.js";import"./BaseImageViewer-DfE-RYHh.js";import"./spin-QFMEFCQ1.js";import"./svgIconContainer-CNjSdOBT.js";import"./error-BkY5gQM6.js";const s=c(d,"ImageViewer");function l(){const t=document.createElement("canvas");t.width=200,t.height=200;const e=t.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),t.toDataURL("image/png")}const p=l();function g(t,e,a){return{fetchContents:async()=>await fetch(t),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-image",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const v={title:"Components/DocumentViewer/Renderers/ImageViewer",component:s,tags:["beta"],parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch image contents from",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},i={args:{media:g(p,"image/png","sample.png"),alt:"Sample image loaded from Media"},render:t=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...t})}),parameters:{docs:{source:{code:`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />`}}}};var o,m,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    media: createMockImageMedia(sampleImageDataUrl, "image/png", "sample.png"),
    alt: "Sample image loaded from Media"
  },
  render: (args: ImageViewerProps) => <div style={{
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
}`,...(n=(m=i.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,v as default};

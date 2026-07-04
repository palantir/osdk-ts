import{j as r}from"./iframe-BeCKStTi.js";import{I as d}from"./ImageViewer-jEpeeMPz.js";import{w as c}from"./withOsdkMetrics-DoKVZacI.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./useMediaContents-kF_r5JHt.js";import"./BaseImageViewer-Cy44MjKE.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";const s=c(d,"ImageViewer");function l(){const t=document.createElement("canvas");t.width=200,t.height=200;const e=t.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),t.toDataURL("image/png")}const p=l();function g(t,e,a){return{fetchContents:async()=>await fetch(t),fetchMetadata:()=>Promise.resolve({mediaType:e,path:a,sizeBytes:1024}),getMediaReference:()=>({mimeType:e,reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-image",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const v={argTypes:{alt:{control:"text",description:"Alt text for accessibility"},className:{control:"text",description:"Additional CSS class name for the root element"},media:{control:!1,description:"The Media object to fetch image contents from"}},component:s,parameters:{controls:{expanded:!0}},tags:["beta"],title:"Components/DocumentViewer/Renderers/ImageViewer"},i={args:{alt:"Sample image loaded from Media",media:g(p,"image/png","sample.png")},parameters:{docs:{source:{code:`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />`}}},render:t=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...t})})};var o,m,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    alt: "Sample image loaded from Media",
    media: createMockImageMedia(sampleImageDataUrl, "image/png", "sample.png")
  },
  parameters: {
    docs: {
      source: {
        code: \`import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />\`
      }
    }
  },
  render: (args: ImageViewerMediaProps) => <div style={{
    height: "400px",
    width: "400px"
  }}>
      <ImageViewer {...args} />
    </div>
}`,...(n=(m=i.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,v as default};

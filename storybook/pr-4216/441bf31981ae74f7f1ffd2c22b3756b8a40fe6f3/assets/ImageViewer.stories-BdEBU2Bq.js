import{j as r}from"./iframe-Bnd7pp_H.js";import{I as d}from"./ImageViewer-ChU6XISi.js";import{w as c}from"./withOsdkMetrics-CtQ2hxG_.js";import"./preload-helper-CQp4ttna.js";import"./index-Dq4Q7R9n.js";import"./useMediaContents-Dk8i0dBJ.js";import"./BaseImageViewer-DS9D1oMY.js";import"./spin-B9zzD4jt.js";import"./svgIconContainer-BHFCuUIe.js";import"./error-vnD_TY7d.js";const s=c(d,"ImageViewer");function l(){const t=document.createElement("canvas");t.width=200,t.height=200;const e=t.getContext("2d"),a=e.createLinearGradient(0,0,200,200);return a.addColorStop(0,"#3b82f6"),a.addColorStop(.5,"#8b5cf6"),a.addColorStop(1,"#ec4899"),e.fillStyle=a,e.fillRect(0,0,200,200),e.fillStyle="white",e.font="bold 24px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Sample",100,90),e.fillText("Image",100,120),t.toDataURL("image/png")}const p=l();function g(t,e,a){return{fetchContents:async()=>await fetch(t),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:1024,mediaType:e}),getMediaReference:()=>({mimeType:e,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-image",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const v={title:"Components/DocumentViewer/Renderers/ImageViewer",component:s,tags:["beta"],parameters:{controls:{expanded:!0}},argTypes:{media:{description:"The Media object to fetch image contents from",control:!1},alt:{description:"Alt text for accessibility",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},i={args:{media:g(p,"image/png","sample.png"),alt:"Sample image loaded from Media"},render:t=>r.jsx("div",{style:{height:"400px",width:"400px"},children:r.jsx(s,{...t})}),parameters:{docs:{source:{code:'<ImageViewer media={myOsdkMedia} alt="My image" />'}}}};var o,m,n;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        code: \`<ImageViewer media={myOsdkMedia} alt="My image" />\`
      }
    }
  }
}`,...(n=(m=i.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,v as default};

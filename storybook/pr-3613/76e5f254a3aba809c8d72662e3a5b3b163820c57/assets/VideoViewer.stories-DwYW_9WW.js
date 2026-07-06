import{h as l,j as t}from"./iframe-B4tn47ID.js";import{w as f}from"./withOsdkMetrics-BmXr4RkT.js";import{V as w}from"./VideoViewer-BAINyd6S.js";import{p as h}from"./passthrough-6sm3BHV7.js";import"./preload-helper-0Ir0BY1n.js";import"./index-Bq3QvPK9.js";import"./useMediaContents-DbCIA73x.js";import"./spin-bgTHo8zQ.js";import"./svgIconContainer-DAEDeh0J.js";import"./error-BGjtoKT1.js";const o=f(w,"VideoViewer"),{fn:V}=__STORYBOOK_MODULE_TEST__,v="/osdk-ts/storybook/pr-3613/76e5f254a3aba809c8d72662e3a5b3b163820c57/example.mp4";function k(e,p){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:p,sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-video",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const S=k(v,"example.mp4"),O={title:"Components/DocumentViewer/Renderers/VideoViewer",component:o,tags:["beta"],args:{media:S},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(o,{media:e.media,onError:e.onError})}),parameters:{controls:{expanded:!0},msw:{handlers:[l.get("*/example.mp4",()=>h())]}},argTypes:{media:{description:"The OSDK Media object to fetch video from",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the video fails to load",control:!1,table:{category:"Events"}}}},i={parameters:{docs:{source:{code:`import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={myOsdkMedia} />`}}}},r={args:{media:{fetchContents:()=>Promise.reject(new Error("Failed to fetch video")),fetchMetadata:()=>Promise.resolve({path:"broken.mp4",sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-error",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})},onError:V()}};var m,a,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var n,s,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    media: {
      fetchContents: () => Promise.reject(new Error("Failed to fetch video")),
      fetchMetadata: () => Promise.resolve({
        path: "broken.mp4",
        sizeBytes: 0,
        mediaType: "video/mp4"
      }),
      getMediaReference: () => ({
        mimeType: "video/mp4",
        reference: {
          type: "mediaSetViewItem" as const,
          mediaSetViewItem: {
            mediaItemRid: "ri.mio.main.media-item.mock-error",
            mediaSetRid: "ri.mio.main.media-set.mock-set",
            mediaSetViewRid: "ri.mio.main.media-set-view.mock-view"
          }
        }
      })
    },
    onError: fn()
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Default","WithErrorCallback"];export{i as Default,r as WithErrorCallback,_ as __namedExportsOrder,O as default};

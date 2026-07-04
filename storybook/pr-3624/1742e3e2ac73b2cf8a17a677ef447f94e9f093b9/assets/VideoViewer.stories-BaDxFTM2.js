import{j as t,h as l}from"./iframe-BeCKStTi.js";import{w as f}from"./withOsdkMetrics-DoKVZacI.js";import{V as w}from"./VideoViewer-Dw-Bq1hr.js";import{p as h}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./useMediaContents-kF_r5JHt.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";const o=f(w,"VideoViewer"),{fn:V}=__STORYBOOK_MODULE_TEST__,v="/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/example.mp4";function k(e,p){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({mediaType:"video/mp4",path:p,sizeBytes:0}),getMediaReference:()=>({mimeType:"video/mp4",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-video",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const S=k(v,"example.mp4"),O={argTypes:{className:{control:"text",description:"Additional CSS class name for the root element"},media:{control:!1,description:"The OSDK Media object to fetch video from"},onError:{control:!1,description:"Callback when the video fails to load",table:{category:"Events"}}},args:{media:S},component:o,parameters:{controls:{expanded:!0},msw:{handlers:[l.get("*/example.mp4",()=>h())]}},render:e=>t.jsx("div",{style:{height:"400px",width:"600px"},children:t.jsx(o,{media:e.media,onError:e.onError})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/VideoViewer"},i={parameters:{docs:{source:{code:`import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={myOsdkMedia} />`}}}},r={args:{media:{fetchContents:()=>Promise.reject(new Error("Failed to fetch video")),fetchMetadata:()=>Promise.resolve({mediaType:"video/mp4",path:"broken.mp4",sizeBytes:0}),getMediaReference:()=>({mimeType:"video/mp4",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-error",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})},onError:V()}};var m,a,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        mediaType: "video/mp4",
        path: "broken.mp4",
        sizeBytes: 0
      }),
      getMediaReference: () => ({
        mimeType: "video/mp4",
        reference: {
          mediaSetViewItem: {
            mediaItemRid: "ri.mio.main.media-item.mock-error",
            mediaSetRid: "ri.mio.main.media-set.mock-set",
            mediaSetViewRid: "ri.mio.main.media-set-view.mock-view"
          },
          type: "mediaSetViewItem" as const
        }
      })
    },
    onError: fn()
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Default","WithErrorCallback"];export{i as Default,r as WithErrorCallback,_ as __namedExportsOrder,O as default};

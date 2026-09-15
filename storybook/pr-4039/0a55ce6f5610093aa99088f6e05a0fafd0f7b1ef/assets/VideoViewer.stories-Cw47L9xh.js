import{h as f,j as o}from"./iframe-KFmuHpi6.js";import{w as l}from"./withOsdkMetrics-BaXo7wYf.js";import{V as h}from"./VideoViewer-DjYON5QA.js";import{p as w}from"./passthrough-6sm3BHV7.js";import"./preload-helper-DA3sodJk.js";import"./index-CBTTDR05.js";import"./useMediaContents-C4u2RaJ6.js";import"./spin-CSWKqQPS.js";import"./svgIconContainer-D_AfyEve.js";import"./error-BbvMlxw1.js";const t=l(h,"VideoViewer"),{fn:V}=__STORYBOOK_MODULE_TEST__,k="/osdk-ts/storybook/pr-4039/0a55ce6f5610093aa99088f6e05a0fafd0f7b1ef/example.mp4";function v(e,p){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:p,sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-video",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const y=v(k,"example.mp4"),I={title:"Components/DocumentViewer/Renderers/VideoViewer",component:t,tags:["beta"],args:{media:y},render:e=>o.jsx("div",{style:{height:"400px",width:"600px"},children:o.jsx(t,{media:e.media,onError:e.onError})}),parameters:{controls:{expanded:!0},msw:{handlers:[f.get("*/example.mp4",()=>w())]}},argTypes:{media:{description:"The OSDK Media object to fetch video from",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the video fails to load",control:!1,table:{category:"Events"}}}},i={parameters:{docs:{source:{code:"<VideoViewer media={myOsdkMedia} />"}}}},r={args:{media:{fetchContents:()=>Promise.reject(new Error("Failed to fetch video")),fetchMetadata:()=>Promise.resolve({path:"broken.mp4",sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-error",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})},onError:V()},parameters:{docs:{source:{code:`// onError fires when fetching the media or decoding the video fails
<VideoViewer
  media={myOsdkMedia}
  onError={reportPlaybackFailure}
/>`}}}};var a,m,d;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<VideoViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var n,s,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      source: {
        code: \`// onError fires when fetching the media or decoding the video fails
<VideoViewer
  media={myOsdkMedia}
  onError={reportPlaybackFailure}
/>\`
      }
    }
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Default","WithErrorCallback"];export{i as Default,r as WithErrorCallback,_ as __namedExportsOrder,I as default};

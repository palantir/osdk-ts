import{h as l,j as o}from"./iframe-CXrz77U6.js";import{w as f}from"./withOsdkMetrics-gTbfWxlK.js";import{V as h}from"./VideoViewer-I6qILOyy.js";import{p as w}from"./passthrough-6sm3BHV7.js";import"./preload-helper-CKbgkQtS.js";import"./index-X106RkLU.js";import"./useMediaContents-CUc4ubJQ.js";import"./spin-CnybUjHn.js";import"./svgIconContainer-C1hoWfOl.js";import"./error-CjxcPcQH.js";const t=f(h,"VideoViewer"),{fn:V}=__STORYBOOK_MODULE_TEST__,k="/osdk-ts/storybook/pr-3925/3109f2bf1842f2144ca8644d5c04f69094eab648/example.mp4";function v(e,p){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:p,sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-video",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const y=v(k,"example.mp4"),I={title:"Components/DocumentViewer/Renderers/VideoViewer",component:t,tags:["beta"],args:{media:y},render:e=>o.jsx("div",{style:{height:"400px",width:"600px"},children:o.jsx(t,{media:e.media,onError:e.onError})}),parameters:{controls:{expanded:!0},msw:{handlers:[l.get("*/example.mp4",()=>w())]}},argTypes:{media:{description:"The OSDK Media object to fetch video from",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when the video fails to load",control:!1,table:{category:"Events"}}}},r={parameters:{docs:{source:{code:"<VideoViewer media={myOsdkMedia} />"}}}},i={args:{media:{fetchContents:()=>Promise.reject(new Error("Failed to fetch video")),fetchMetadata:()=>Promise.resolve({path:"broken.mp4",sizeBytes:0,mediaType:"video/mp4"}),getMediaReference:()=>({mimeType:"video/mp4",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-error",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})},onError:V()},parameters:{docs:{source:{code:`// onError fires when fetching the media or decoding the video fails
<VideoViewer
  media={myOsdkMedia}
  onError={(error) => reportPlaybackFailure(error)}
/>`}}}};var a,m,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<VideoViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var n,s,c;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  onError={(error) => reportPlaybackFailure(error)}
/>\`
      }
    }
  }
}`,...(c=(s=i.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const _=["Default","WithErrorCallback"];export{r as Default,i as WithErrorCallback,_ as __namedExportsOrder,I as default};

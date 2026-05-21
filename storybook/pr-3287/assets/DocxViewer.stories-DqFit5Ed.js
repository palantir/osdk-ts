import{h as f,j as t}from"./iframe-BqSobOjs.js";import{D as w}from"./DocxViewer-CHqGR9U3.js";import{w as x}from"./withOsdkMetrics-D4GiNPF8.js";import{p as h}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-L1wTDGqM.js";import"./useMediaContents-DvdRPpnZ.js";import"./useEventCallback-CysBZKYk.js";import"./error-LlycrbnK.js";import"./svgIconContainer-DgnMBskL.js";import"./spin-P9_9HPc6.js";import"./useRegisterUserAgent-BB-OJR3x.js";const m=x(w,"DocxViewer"),{fn:E}=__STORYBOOK_MODULE_TEST__,k="./notional-word-example.docx",r="application/vnd.openxmlformats-officedocument.wordprocessingml.document";function M(e,l){return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:l,sizeBytes:0,mediaType:r}),getMediaReference:()=>({mimeType:r,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-docx",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const u=M(k,"notional-word-example.docx"),P={title:"Experimental/DocxViewer",tags:["experimental"],component:m,args:{media:u},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(m,{media:e.media,onError:e.onError})}),parameters:{controls:{expanded:!0},msw:{handlers:[f.get("*/notional-word-example.docx",()=>h())]}},argTypes:{media:{description:"The OSDK Media object to fetch DOCX from",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"},onError:{description:"Callback when rendering fails",control:!1,table:{category:"Events"}}}},i={parameters:{docs:{source:{code:`import { DocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<DocxViewer media={myOsdkMedia} />`}}}},o={args:{media:{fetchContents:()=>Promise.reject(new Error("Failed to fetch document")),fetchMetadata:()=>Promise.resolve({path:"broken.docx",sizeBytes:0,mediaType:r}),getMediaReference:()=>({mimeType:r,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-error",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})},onError:E()}};var a,n,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { DocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<DocxViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(s=(n=i.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    media: {
      fetchContents: () => Promise.reject(new Error("Failed to fetch document")),
      fetchMetadata: () => Promise.resolve({
        path: "broken.docx",
        sizeBytes: 0,
        mediaType: DOCX_MIME_TYPE
      }),
      getMediaReference: () => ({
        mimeType: DOCX_MIME_TYPE,
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const b=["Default","WithErrorCallback"];export{i as Default,o as WithErrorCallback,b as __namedExportsOrder,P as default};

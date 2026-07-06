import{j as i}from"./iframe-DPQWsr1M.js";import{w as l}from"./withOsdkMetrics-DA_bV2kQ.js";import{X as h,B as o}from"./XmlViewer-DthtgJfl.js";import"./preload-helper-o6KnyvDN.js";import"./index-1D96oTTR.js";import"./useMediaContents-D2qyZ8n3.js";import"./spin-Msy5PXTJ.js";import"./svgIconContainer-DIYWApzK.js";import"./error-CWxwFwqY.js";const u=l(h,"XmlViewer"),p=`<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <genre>Computer</genre>
    <price>44.95</price>
    <publish_date>2000-10-01</publish_date>
    <description>An in-depth look at creating applications with XML.</description>
  </book>
  <book id="bk102">
    <author>Ralls, Kim</author>
    <title>Midnight Rain</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-12-16</publish_date>
    <description>A former architect battles corporate zombies.</description>
  </book>
  <book id="bk103">
    <author>Corets, Eva</author>
    <title>Maeve Ascendant</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-11-17</publish_date>
    <description>After the collapse of a nanotechnology society.</description>
  </book>
</catalog>`;function w(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"catalog.xml",sizeBytes:e.length,mediaType:"application/xml"}),getMediaReference:()=>({mimeType:"application/xml",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-xml",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const y={title:"Components/DocumentViewer/Renderers/XmlViewer",component:o,tags:["beta"],args:{content:p},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(o,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"XML text to render",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={args:{media:w(p)},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(u,{...e})}),parameters:{docs:{source:{code:`import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />`}}}},r={parameters:{docs:{source:{code:`import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />`}}}};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    media: createMockXmlMedia(SAMPLE_XML)
  },
  render: (args: XmlViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <XmlViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />\`
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Default","WithContent"];export{t as Default,r as WithContent,S as __namedExportsOrder,y as default};

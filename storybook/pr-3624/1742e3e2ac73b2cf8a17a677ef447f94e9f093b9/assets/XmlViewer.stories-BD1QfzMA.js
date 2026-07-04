import{j as i}from"./iframe-BeCKStTi.js";import{w as l}from"./withOsdkMetrics-DoKVZacI.js";import{X as h,B as o}from"./XmlViewer-B56thbK6.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./useMediaContents-kF_r5JHt.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";const u=l(h,"XmlViewer"),p=`<?xml version="1.0" encoding="UTF-8"?>
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
</catalog>`;function w(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({mediaType:"application/xml",path:"catalog.xml",sizeBytes:e.length}),getMediaReference:()=>({mimeType:"application/xml",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-xml",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const y={argTypes:{className:{control:"text",description:"Additional CSS class name for the root element"},content:{control:"text",description:"XML text to render"}},args:{content:p},component:o,parameters:{controls:{expanded:!0}},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(o,{...e})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/XmlViewer"},t={args:{media:w(p)},parameters:{docs:{source:{code:`import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />`}}},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(u,{...e})})},r={parameters:{docs:{source:{code:`import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />`}}}};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    media: createMockXmlMedia(SAMPLE_XML)
  },
  parameters: {
    docs: {
      source: {
        code: \`import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />\`
      }
    }
  },
  render: (args: XmlViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <XmlViewer {...args} />
    </div>
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

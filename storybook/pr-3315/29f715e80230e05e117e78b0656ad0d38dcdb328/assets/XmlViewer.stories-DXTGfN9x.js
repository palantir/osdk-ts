import{j as i}from"./iframe-C-hy2wdy.js";import{w as l}from"./withOsdkMetrics-DpL3-5qr.js";import{X as h,B as o}from"./XmlViewer-CXjbD7Ly.js";import"./preload-helper-Dp1pzeXC.js";import"./useRegisterUserAgent-CGfqmNZn.js";import"./index-BialtY4S.js";import"./useMediaContents-D-MPucy9.js";import"./spin-BXDbPjxM.js";import"./svgIconContainer-DENES-tb.js";import"./error-CxoFdxIw.js";const u=l(h,"XmlViewer"),p=`<?xml version="1.0" encoding="UTF-8"?>
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
</catalog>`;function x(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"catalog.xml",sizeBytes:e.length,mediaType:"application/xml"}),getMediaReference:()=>({mimeType:"application/xml",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-xml",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const S={title:"Experimental/XmlViewer",tags:["experimental"],component:o,args:{content:p},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(o,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"XML text to render",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={parameters:{docs:{source:{code:`import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />`}}}},r={args:{media:x(p)},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(u,{...e})}),parameters:{docs:{source:{code:`import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />`}}}};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />\`
      }
    }
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const _=["Default","WithMedia"];export{t as Default,r as WithMedia,_ as __namedExportsOrder,S as default};

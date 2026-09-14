import{j as i}from"./iframe-BI8s_LEM.js";import{w as l}from"./withOsdkMetrics-BNQD1U6q.js";import{X as h,B as o}from"./XmlViewer-DsMyWNVQ.js";import"./preload-helper-2UIxwTHe.js";import"./index-Cdoej1rc.js";import"./useMediaContents-D27EEaxf.js";import"./spin-CSU6BrBt.js";import"./svgIconContainer-BP-rj0xG.js";import"./error-BKT0KUzG.js";const u=l(h,"XmlViewer"),p=`<?xml version="1.0" encoding="UTF-8"?>
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
</catalog>`;function g(e){return{fetchContents:()=>Promise.resolve(new Response(e)),fetchMetadata:()=>Promise.resolve({path:"catalog.xml",sizeBytes:e.length,mediaType:"application/xml"}),getMediaReference:()=>({mimeType:"application/xml",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-xml",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const v={title:"Components/DocumentViewer/Renderers/XmlViewer",component:o,tags:["beta"],args:{content:p},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(o,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"XML text to render",control:"text"},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={args:{media:g(p)},render:e=>i.jsx("div",{style:{height:"500px"},children:i.jsx(u,{...e})}),parameters:{docs:{source:{code:"<XmlViewer media={myOsdkMedia} />"}}}},r={parameters:{docs:{source:{code:"<BaseXmlViewer content={xmlString} />"}}}};var a,s,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    media: createMockXmlMedia(SAMPLE_XML)
  },
  render: (args: XmlViewerProps) => <div style={{
    height: "500px"
  }}>
      <XmlViewer {...args} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`<XmlViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseXmlViewer content={xmlString} />\`
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Default","WithContent"];export{t as Default,r as WithContent,S as __namedExportsOrder,v as default};

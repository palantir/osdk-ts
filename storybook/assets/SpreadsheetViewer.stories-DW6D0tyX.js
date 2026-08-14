import{j as r,h as M}from"./iframe-ZKDPnRYv.js";import{S as R,B as p,u as m,w as P}from"./SpreadsheetViewer-C4tHoVLR.js";import{w as T}from"./withOsdkMetrics-tBsYI7eh.js";import{p as B}from"./passthrough-6sm3BHV7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DNWYE-f1.js";import"./useMediaContents-BCdgLWoE.js";import"./spin-CfJMVGCC.js";import"./svgIconContainer-DrDKA2Lc.js";import"./error-FVA4fmQK.js";const k=T(R,"SpreadsheetViewer"),d={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},D="./notional-spreadsheet-example.xlsx";function _(e,s){const t="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:s,sizeBytes:0,mediaType:t}),getMediaReference:()=>({mimeType:t,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function A(){const e=m.book_new();for(const t of d.sheets){const V=m.aoa_to_sheet(t.rows);m.book_append_sheet(e,V,t.name)}const s=P(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(s,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:s.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const U={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{spreadsheet:d},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{spreadsheet:{description:"Parsed spreadsheet data",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:A()},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(k,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer spreadsheet={parsedSpreadsheet} />`}}}},o={args:{spreadsheet:{sheets:[d.sheets[0]]}}},n={args:{media:_(D,"notional-spreadsheet-example.xlsx")},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(k,{media:e.media})}),parameters:{msw:{handlers:[M.get("*/notional-spreadsheet-example.xlsx",()=>B())]}}};var c,h,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    media: createMockSpreadsheetMedia()
  },
  render: (args: SpreadsheetViewerProps) => <div style={{
    height: "500px"
  }}>
      <SpreadsheetViewer media={args.media} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,g,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer spreadsheet={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,f,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    spreadsheet: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var E,v,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    media: createMockMediaFromUrl(SAMPLE_SPREADSHEET_URL, "notional-spreadsheet-example.xlsx")
  },
  render: (args: SpreadsheetViewerProps) => <div style={{
    height: "600px"
  }}>
      <SpreadsheetViewer media={args.media} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("*/notional-spreadsheet-example.xlsx", () => passthrough())]
    }
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const z=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{a as Default,o as SingleSheet,n as WithRealFile,i as WithSpreadsheet,z as __namedExportsOrder,U as default};

import{j as r,h as V}from"./iframe-DnZQIvTT.js";import{S as R,B as p,u as d,w as P}from"./SpreadsheetViewer-BuFFu2Ly.js";import{w as T}from"./withOsdkMetrics-fofNv3K2.js";import{p as B}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BkW8a5rl.js";import"./index-9hlHlyou.js";import"./useMediaContents-CJqzip2u.js";import"./spin-Ccs_h70H.js";import"./svgIconContainer-yuQ64jxi.js";import"./error-BLztiVY7.js";const v=T(R,"SpreadsheetViewer"),m={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},D="/osdk-ts/storybook/pr-3803/d2834148c2a5353b5bc477bf03297ad41ceb8f32/notional-spreadsheet-example.xlsx";function _(e,t){const s="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:t,sizeBytes:0,mediaType:s}),getMediaReference:()=>({mimeType:s,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function b(){const e=d.book_new();for(const s of m.sheets){const M=d.aoa_to_sheet(s.rows);d.book_append_sheet(e,M,s.name)}const t=P(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(t,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:t.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const U={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{spreadsheet:m},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{spreadsheet:{description:"Parsed spreadsheet data",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:b()},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(v,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer spreadsheet={parsedSpreadsheet} />`}}}},o={args:{spreadsheet:{sheets:[m.sheets[0]]}}},n={args:{media:_(D,"notional-spreadsheet-example.xlsx")},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(v,{media:e.media})}),parameters:{msw:{handlers:[V.get("*/notional-spreadsheet-example.xlsx",()=>B())]}}};var c,h,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    media: createMockSpreadsheetMedia()
  },
  render: (args: SpreadsheetViewerMediaProps) => <div style={{
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
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var E,y,k;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    media: createMockMediaFromUrl(SAMPLE_SPREADSHEET_URL, "notional-spreadsheet-example.xlsx")
  },
  render: (args: SpreadsheetViewerMediaProps) => <div style={{
    height: "600px"
  }}>
      <SpreadsheetViewer media={args.media} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("*/notional-spreadsheet-example.xlsx", () => passthrough())]
    }
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const z=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{a as Default,o as SingleSheet,n as WithRealFile,i as WithSpreadsheet,z as __namedExportsOrder,U as default};

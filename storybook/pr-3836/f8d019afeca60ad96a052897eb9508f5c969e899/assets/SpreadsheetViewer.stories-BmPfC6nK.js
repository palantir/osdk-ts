import{j as r,h as V}from"./iframe-B5hHVZQu.js";import{S as R,B as p,u as d,w as P}from"./SpreadsheetViewer-ChNikNiK.js";import{w as T}from"./withOsdkMetrics-DvK36u8X.js";import{p as B}from"./passthrough-6sm3BHV7.js";import"./preload-helper-DyqMQgY0.js";import"./index-DaYiiRu5.js";import"./useMediaContents-BvuC8HIq.js";import"./spin-DIW6Y7__.js";import"./svgIconContainer-DXyLBKXl.js";import"./error-DRrdgJam.js";const v=T(R,"SpreadsheetViewer"),m={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},D="/osdk-ts/storybook/pr-3836/f8d019afeca60ad96a052897eb9508f5c969e899/notional-spreadsheet-example.xlsx";function _(e,s){const a="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:s,sizeBytes:0,mediaType:a}),getMediaReference:()=>({mimeType:a,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function A(){const e=d.book_new();for(const a of m.sheets){const M=d.aoa_to_sheet(a.rows);d.book_append_sheet(e,M,a.name)}const s=P(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(s,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:s.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const U={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{spreadsheet:m},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{spreadsheet:{description:"Parsed spreadsheet data",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},t={args:{media:A()},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(v,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer spreadsheet={parsedSpreadsheet} />`}}}},o={args:{spreadsheet:{sheets:[m.sheets[0]]}}},n={args:{media:_(D,"notional-spreadsheet-example.xlsx")},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(v,{media:e.media})}),parameters:{msw:{handlers:[V.get("*/notional-spreadsheet-example.xlsx",()=>B())]}}};var c,h,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=t.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,g,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const z=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{t as Default,o as SingleSheet,n as WithRealFile,i as WithSpreadsheet,z as __namedExportsOrder,U as default};

import{j as t,h as M}from"./iframe-DjJ9fG9k.js";import{S as R,B as p,u as m,w as T}from"./SpreadsheetViewer-B1vRiqmt.js";import{w as B}from"./withOsdkMetrics-DtrDT4Gg.js";import{p as D}from"./passthrough-6sm3BHV7.js";import"./preload-helper-CzF3ego9.js";import"./index-BUkKlB3h.js";import"./useMediaContents-Sla3YPzd.js";import"./spin-Dlxi8kUD.js";import"./svgIconContainer-DVza0T8P.js";import"./error-CPN3xdYh.js";const v=B(R,"SpreadsheetViewer"),d={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},P="/osdk-ts/storybook/pr-1927/c8c8b0334a41084765fcdfae2780866833c20a43/notional-spreadsheet-example.xlsx";function _(e,a){const r="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:0,mediaType:r}),getMediaReference:()=>({mimeType:r,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function A(){const e=m.book_new();for(const r of d.sheets){const V=m.aoa_to_sheet(r.rows);m.book_append_sheet(e,V,r.name)}const a=T(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(a,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:a.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const U={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{content:d},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed spreadsheet to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},s={args:{media:A()},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(v,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},o={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />`}}}},n={args:{content:{sheets:[d.sheets[0]]}}},i={args:{media:_(P,"notional-spreadsheet-example.xlsx")},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(v,{media:e.media})}),parameters:{msw:{handlers:[M.get("*/notional-spreadsheet-example.xlsx",()=>D())]}}};var c,h,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,g,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var x,f,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    content: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  }
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var E,y,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const z=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{s as Default,n as SingleSheet,i as WithRealFile,o as WithSpreadsheet,z as __namedExportsOrder,U as default};

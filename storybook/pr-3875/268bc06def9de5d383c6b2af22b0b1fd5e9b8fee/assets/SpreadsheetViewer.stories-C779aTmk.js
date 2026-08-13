import{j as t,h as M}from"./iframe-5bssl6VS.js";import{S as R,B as p,u as m,w as T}from"./SpreadsheetViewer-grdPe-GX.js";import{w as b}from"./withOsdkMetrics-CZkoO3-I.js";import{p as B}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BHXvjcwa.js";import"./index-B13HoCGw.js";import"./useMediaContents-M1cJ2_XG.js";import"./spin-CNX3JY02.js";import"./svgIconContainer-DrtwtWvp.js";import"./error-BGrVIj_t.js";const v=b(R,"SpreadsheetViewer"),d={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},D="/osdk-ts/storybook/pr-3875/268bc06def9de5d383c6b2af22b0b1fd5e9b8fee/notional-spreadsheet-example.xlsx";function P(e,s){const r="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:s,sizeBytes:0,mediaType:r}),getMediaReference:()=>({mimeType:r,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function _(){const e=m.book_new();for(const r of d.sheets){const V=m.aoa_to_sheet(r.rows);m.book_append_sheet(e,V,r.name)}const s=T(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(s,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:s.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const U={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{content:d},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed spreadsheet to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:_()},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(v,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},o={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />`}}}},n={args:{content:{sheets:[d.sheets[0]]}}},i={args:{media:P(D,"notional-spreadsheet-example.xlsx")},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(v,{media:e.media})}),parameters:{msw:{handlers:[M.get("*/notional-spreadsheet-example.xlsx",()=>B())]}}};var c,h,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,g,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,x,u;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    content: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  }
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var E,y,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const z=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{a as Default,n as SingleSheet,i as WithRealFile,o as WithSpreadsheet,z as __namedExportsOrder,U as default};

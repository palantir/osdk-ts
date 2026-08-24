import{j as r,h as M}from"./iframe-c92eWBTm.js";import{S as R,B as p,u as d,w as B}from"./SpreadsheetViewer-DJITHHGA.js";import{w as b}from"./withOsdkMetrics-3UcJmunM.js";import{p as D}from"./passthrough-6sm3BHV7.js";import"./preload-helper-C_mEB70A.js";import"./index-BNyL3dmc.js";import"./useMediaContents-CcuXRVPd.js";import"./spin-CDYJIpma.js";import"./svgIconContainer-BR-sWY_B.js";import"./error-10PygTue.js";const y=b(R,"SpreadsheetViewer"),m={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},T="/osdk-ts/storybook/pr-3925/b3d2145d149a38d110a8a5346d4f504a6c9c70ea/notional-spreadsheet-example.xlsx";function A(e,s){const t="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:s,sizeBytes:0,mediaType:t}),getMediaReference:()=>({mimeType:t,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function $(){const e=d.book_new();for(const t of m.sheets){const v=d.aoa_to_sheet(t.rows);d.book_append_sheet(e,v,t.name)}const s=B(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(s,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:s.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const N={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{content:m},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed spreadsheet to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:$()},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(y,{media:e.media})}),parameters:{docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<SpreadsheetViewer media={myOsdkMedia} />`}}}},n={parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />`}}}},o={args:{content:{sheets:[m.sheets[0]]}},parameters:{docs:{source:{code:`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

// With one sheet the tab bar is hidden
<BaseSpreadsheetViewer
  content={{
    sheets: [
      {
        name: "Employees",
        rows: [
          ["Name", "Department", "Salary"],
          ["Alice Johnson", "Engineering", "$145,000"],
        ],
      },
    ],
  }}
/>`}}}},i={args:{media:A(T,"notional-spreadsheet-example.xlsx")},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(y,{media:e.media})}),parameters:{msw:{handlers:[M.get("*/notional-spreadsheet-example.xlsx",()=>D())]},docs:{source:{code:`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

// SpreadsheetViewer fetches and parses the xlsx workbook itself, so a real
// multi-sheet file needs no extra wiring
<SpreadsheetViewer media={quarter.headcountReport} />`}}}};var c,h,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,w,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

<BaseSpreadsheetViewer content={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var g,f,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`import { BaseSpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

// With one sheet the tab bar is hidden
<BaseSpreadsheetViewer
  content={{
    sheets: [
      {
        name: "Employees",
        rows: [
          ["Name", "Department", "Salary"],
          ["Alice Johnson", "Engineering", "$145,000"],
        ],
      },
    ],
  }}
/>\`
      }
    }
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var k,V,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    },
    docs: {
      source: {
        code: \`import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";

// SpreadsheetViewer fetches and parses the xlsx workbook itself, so a real
// multi-sheet file needs no extra wiring
<SpreadsheetViewer media={quarter.headcountReport} />\`
      }
    }
  }
}`,...(E=(V=i.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const O=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{a as Default,o as SingleSheet,i as WithRealFile,n as WithSpreadsheet,O as __namedExportsOrder,N as default};

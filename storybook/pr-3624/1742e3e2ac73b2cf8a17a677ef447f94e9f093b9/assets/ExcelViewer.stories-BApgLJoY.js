import{j as r,h as V}from"./iframe-BeCKStTi.js";import{E as R,B as d,u as m,w as B}from"./ExcelViewer-Bmn6t-jC.js";import{w as _}from"./withOsdkMetrics-DoKVZacI.js";import{p as P}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BICrzKRt.js";import"./index-BfYzXW_3.js";import"./useMediaContents-kF_r5JHt.js";import"./spin-Dc6yxLwi.js";import"./svgIconContainer-D-9_AOAs.js";import"./error-DvUULirA.js";const v=_(R,"ExcelViewer"),c={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},T="/osdk-ts/storybook/pr-3624/1742e3e2ac73b2cf8a17a677ef447f94e9f093b9/notional-excel-example.xlsx";function $(e,a){const t="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({mediaType:t,path:a,sizeBytes:0}),getMediaReference:()=>({mimeType:t,reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}function D(){const e=m.book_new();for(const t of c.sheets){const M=m.aoa_to_sheet(t.rows);m.book_append_sheet(e,M,t.name)}const a=B(e,{bookType:"xlsx",type:"array"});return{fetchContents:()=>Promise.resolve(new Response(a,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",path:"report.xlsx",sizeBytes:a.byteLength}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"},type:"mediaSetViewItem"}})}}const X={argTypes:{className:{control:"text",description:"Additional CSS class name for the root element"},spreadsheet:{control:!1,description:"Parsed spreadsheet data"}},args:{spreadsheet:c},component:d,parameters:{controls:{expanded:!0}},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(d,{...e})}),tags:["beta"],title:"Components/DocumentViewer/Renderers/ExcelViewer"},s={args:{media:D()},parameters:{docs:{source:{code:`import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={myOsdkMedia} />`}}},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(v,{media:e.media})})},i={parameters:{docs:{source:{code:`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<BaseExcelViewer spreadsheet={parsedSpreadsheet} />`}}}},o={args:{spreadsheet:{sheets:[c.sheets[0]]}}},n={args:{media:$(T,"notional-excel-example.xlsx")},parameters:{msw:{handlers:[V.get("*/notional-excel-example.xlsx",()=>P())]}},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(v,{media:e.media})})};var p,l,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    media: createMockExcelMedia()
  },
  parameters: {
    docs: {
      source: {
        code: \`import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={myOsdkMedia} />\`
      }
    }
  },
  render: (args: ExcelViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <ExcelViewer media={args.media} />
    </div>
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<BaseExcelViewer spreadsheet={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,u,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    spreadsheet: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  }
}`,...(E=(u=o.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var S,y,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    media: createMockMediaFromUrl(SAMPLE_XLSX_URL, "notional-excel-example.xlsx")
  },
  parameters: {
    msw: {
      handlers: [http.get("*/notional-excel-example.xlsx", () => passthrough())]
    }
  },
  render: (args: ExcelViewerMediaProps) => <div style={{
    height: "600px"
  }}>
      <ExcelViewer media={args.media} />
    </div>
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const H=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{s as Default,o as SingleSheet,n as WithRealFile,i as WithSpreadsheet,H as __namedExportsOrder,X as default};

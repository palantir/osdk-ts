import{j as r,h as V}from"./iframe-BbjW9ru2.js";import{E as R,B as d,u as m,w as B}from"./ExcelViewer-CJTVrdK2.js";import{w as _}from"./withOsdkMetrics-K7yNfEUf.js";import{p as P}from"./passthrough-6sm3BHV7.js";import"./preload-helper-BBqenLAY.js";import"./index-D6yb_Az8.js";import"./useMediaContents-Ceodqrbw.js";import"./spin-BtSrd2IV.js";import"./svgIconContainer-B3OjmCik.js";import"./error-Cp-Qt5xo.js";const v=_(R,"ExcelViewer"),c={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},T="/osdk-ts/storybook/pr-3725/0ab6f0953ac30c716917236b2b317c6c07cc2883/notional-excel-example.xlsx";function $(e,a){const t="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:a,sizeBytes:0,mediaType:t}),getMediaReference:()=>({mimeType:t,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function b(){const e=m.book_new();for(const t of c.sheets){const M=m.aoa_to_sheet(t.rows);m.book_append_sheet(e,M,t.name)}const a=B(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(a,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:a.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const X={title:"Components/DocumentViewer/Renderers/ExcelViewer",component:d,tags:["beta"],args:{spreadsheet:c},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(d,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{spreadsheet:{description:"Parsed spreadsheet data",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},s={args:{media:b()},render:e=>r.jsx("div",{style:{height:"500px"},children:r.jsx(v,{media:e.media})}),parameters:{docs:{source:{code:`import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<BaseExcelViewer spreadsheet={parsedSpreadsheet} />`}}}},o={args:{spreadsheet:{sheets:[c.sheets[0]]}}},n={args:{media:$(T,"notional-excel-example.xlsx")},render:e=>r.jsx("div",{style:{height:"600px"},children:r.jsx(v,{media:e.media})}),parameters:{msw:{handlers:[V.get("*/notional-excel-example.xlsx",()=>P())]}}};var p,l,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    media: createMockExcelMedia()
  },
  render: (args: ExcelViewerMediaProps) => <div style={{
    height: "500px"
  }}>
      <ExcelViewer media={args.media} />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var h,g,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<BaseExcelViewer spreadsheet={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(w=(g=i.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,u,E;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    spreadsheet: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  }
}`,...(E=(u=o.parameters)==null?void 0:u.docs)==null?void 0:E.source}}};var S,y,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    media: createMockMediaFromUrl(SAMPLE_XLSX_URL, "notional-excel-example.xlsx")
  },
  render: (args: ExcelViewerMediaProps) => <div style={{
    height: "600px"
  }}>
      <ExcelViewer media={args.media} />
    </div>,
  parameters: {
    msw: {
      handlers: [http.get("*/notional-excel-example.xlsx", () => passthrough())]
    }
  }
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const H=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{s as Default,o as SingleSheet,n as WithRealFile,i as WithSpreadsheet,H as __namedExportsOrder,X as default};

import{j as o,h as B}from"./iframe-2P5rSZYB.js";import{E as A,B as p,u as a,w as V}from"./ExcelViewer-BzavqfJe.js";import{w as T}from"./withOsdkMetrics-DoJyDwoq.js";import{p as $}from"./passthrough-6sm3BHV7.js";import"./preload-helper-DUMBN1oE.js";import"./index-CAoow5Tc.js";import"./useMediaContents-B5TvoMUx.js";import"./error-pihzJHIB.js";import"./svgIconContainer-BuLz4yUd.js";import"./spin-zJNybsCz.js";const b=T(A,"ExcelViewer"),d={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},C="/osdk-ts/storybook/pr-3680/c24e753afbf5359d3082a3274f929015c607f443/notional-excel-example.xlsx";function D(e,r){const t="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:0,mediaType:t}),getMediaReference:()=>({mimeType:t,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function P(){const e=a.book_new();for(const t of d.sheets){const s=a.aoa_to_sheet(t.rows);a.book_append_sheet(e,s,t.name)}const r=V(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(r,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:r.byteLength,mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-excel",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function R(e){const r=a.book_new();for(const l of e.sheets){const _=a.aoa_to_sheet(l.rows);a.book_append_sheet(r,_,l.name)}const t=V(r,{type:"array",bookType:"xlsx"}),s=t instanceof Uint8Array?t:new Uint8Array(t);return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const J={title:"Components/DocumentViewer/Renderers/ExcelViewer",component:p,tags:["beta"],args:{content:R(d)},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"Raw .xlsx bytes to parse and display",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},n={args:{media:P()},render:e=>o.jsx("div",{style:{height:"500px"},children:o.jsx(b,{media:e.media})}),parameters:{docs:{source:{code:`import { ExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

<ExcelViewer media={myOsdkMedia} />`}}}},i={parameters:{docs:{source:{code:`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

// content is raw .xlsx bytes (e.g. from media.fetchContents())
<BaseExcelViewer content={xlsxBytes} />`}}}},m={args:{content:R({sheets:[d.sheets[0]]})}},c={args:{media:D(C,"notional-excel-example.xlsx")},render:e=>o.jsx("div",{style:{height:"600px"},children:o.jsx(b,{media:e.media})}),parameters:{msw:{handlers:[B.get("*/notional-excel-example.xlsx",()=>$())]}}};var x,f,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,g,u;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { BaseExcelViewer } from "@osdk/react-components/experimental/excel-viewer";

// content is raw .xlsx bytes (e.g. from media.fetchContents())
<BaseExcelViewer content={xlsxBytes} />\`
      }
    }
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,E,S;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    content: toXlsxArrayBuffer({
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    })
  }
}`,...(S=(E=m.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var k,v,M;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const N=["Default","WithContent","SingleSheet","WithRealFile"];export{n as Default,m as SingleSheet,i as WithContent,c as WithRealFile,N as __namedExportsOrder,J as default};

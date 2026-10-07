import{j as t,h as v}from"./iframe-BMLtitQA.js";import{S as R,B as p,u as d,w as b}from"./SpreadsheetViewer-C9HK2btq.js";import{w as B}from"./withOsdkMetrics-Bco6NPuI.js";import{p as D}from"./passthrough-6sm3BHV7.js";import"./preload-helper-B7zvwNzg.js";import"./index-BKoaBi8s.js";import"./useMediaContents-BeF8_aaX.js";import"./spin-Dwd9CEQd.js";import"./svgIconContainer-DG_uvfKl.js";import"./error-DwpvxQx3.js";const V=B(R,"SpreadsheetViewer"),m={sheets:[{name:"Employees",rows:[["Name","Department","Title","Start Date","Salary"],["Alice Johnson","Engineering","Senior Engineer","2022-03-15","$145,000"],["Bob Smith","Marketing","Marketing Manager","2021-07-01","$120,000"],["Carol Davis","Engineering","Staff Engineer","2020-01-10","$165,000"],["Dave Wilson","Sales","Account Executive","2023-05-20","$95,000"],["Eve Brown","Engineering","Junior Engineer","2024-01-08","$90,000"]]},{name:"Departments",rows:[["Department","Head Count","Budget"],["Engineering","3","$400,000"],["Marketing","1","$120,000"],["Sales","1","$95,000"]]},{name:"Summary",rows:[["Metric","Value"],["Total Employees","5"],["Total Budget","$615,000"],["Average Salary","$123,000"]]}]},T="/osdk-ts/storybook/pr-4160/a0756ff7326ea5af1fe6ae579b953239978d4e5e/notional-spreadsheet-example.xlsx";function A(e,r){const s="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";return{fetchContents:()=>fetch(e),fetchMetadata:()=>Promise.resolve({path:r,sizeBytes:0,sizeBytesLong:"0",mediaType:s}),getMediaReference:()=>({mimeType:s,reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet-file",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}function $(){const e=d.book_new();for(const s of m.sheets){const M=d.aoa_to_sheet(s.rows);d.book_append_sheet(e,M,s.name)}const r=b(e,{type:"array",bookType:"xlsx"});return{fetchContents:()=>Promise.resolve(new Response(r,{headers:{"Content-Type":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}})),fetchMetadata:()=>Promise.resolve({path:"report.xlsx",sizeBytes:r.byteLength,sizeBytesLong:String(r.byteLength),mediaType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}),getMediaReference:()=>({mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",reference:{type:"mediaSetViewItem",mediaSetViewItem:{mediaItemRid:"ri.mio.main.media-item.mock-spreadsheet",mediaSetRid:"ri.mio.main.media-set.mock-set",mediaSetViewRid:"ri.mio.main.media-set-view.mock-view"}}})}}const J={title:"Components/DocumentViewer/Renderers/SpreadsheetViewer",component:p,tags:["beta"],args:{content:m},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(p,{...e})}),parameters:{controls:{expanded:!0}},argTypes:{content:{description:"The parsed spreadsheet to render",control:!1},className:{description:"Additional CSS class name for the root element",control:"text"}}},a={args:{media:$()},render:e=>t.jsx("div",{style:{height:"500px"},children:t.jsx(V,{media:e.media})}),parameters:{docs:{source:{code:"<SpreadsheetViewer media={myOsdkMedia} />"}}}},n={parameters:{docs:{source:{code:"<BaseSpreadsheetViewer content={parsedSpreadsheet} />"}}}},o={args:{content:{sheets:[m.sheets[0]]}},parameters:{docs:{source:{code:`// With one sheet the tab bar is hidden
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
/>`}}}},i={args:{media:A(T,"notional-spreadsheet-example.xlsx")},render:e=>t.jsx("div",{style:{height:"600px"},children:t.jsx(V,{media:e.media})}),parameters:{msw:{handlers:[v.get("*/notional-spreadsheet-example.xlsx",()=>D())]},docs:{source:{code:`// SpreadsheetViewer fetches and parses the xlsx workbook itself, so a real
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
        code: \`<SpreadsheetViewer media={myOsdkMedia} />\`
      }
    }
  }
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var S,g,u;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<BaseSpreadsheetViewer content={parsedSpreadsheet} />\`
      }
    }
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var w,f,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    content: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!]
    }
  },
  parameters: {
    docs: {
      source: {
        code: \`// With one sheet the tab bar is hidden
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
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,E,k;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        code: \`// SpreadsheetViewer fetches and parses the xlsx workbook itself, so a real
// multi-sheet file needs no extra wiring
<SpreadsheetViewer media={quarter.headcountReport} />\`
      }
    }
  }
}`,...(k=(E=i.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const N=["Default","WithSpreadsheet","SingleSheet","WithRealFile"];export{a as Default,o as SingleSheet,i as WithRealFile,n as WithSpreadsheet,N as __namedExportsOrder,J as default};

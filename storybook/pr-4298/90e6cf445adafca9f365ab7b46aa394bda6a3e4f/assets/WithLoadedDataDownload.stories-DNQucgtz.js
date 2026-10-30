import{f as b,j as a,r as i}from"./iframe-BUjiwBf5.js";import{O as u}from"./object-table-T218K9GP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B6c2vp8P.js";import"./Table-BavlU92v.js";import"./index-CKk_335J.js";import"./Dialog-CXOR505b.js";import"./cross-DMwbX_xt.js";import"./svgIconContainer-B-5qucwe.js";import"./useBaseUiId-C7GiG9Zo.js";import"./InternalBackdrop-BzH1HGPT.js";import"./composite-DKWT5B2T.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./index-DJII1UoI.js";import"./useEventCallback-CMhzkP6E.js";import"./SkeletonBar-Dhr5qRE5.js";import"./LoadingCell-CEsQO4QS.js";import"./ColumnConfigDialog-CtpCcWgp.js";import"./DraggableList-BfbbCqU-.js";import"./search-DWZ7jrir.js";import"./Input-DrlS66iR.js";import"./useControlled-u72cUfPk.js";import"./Button-DdiFhH1O.js";import"./small-cross-SPUOYKUf.js";import"./ActionButton-DU3dAhJf.js";import"./Checkbox-DIykPK3s.js";import"./useValueChanged-CLO0Bb-9.js";import"./CollapsiblePanel-DQj3H5Sg.js";import"./MultiColumnSortDialog-gWJOz4lo.js";import"./MenuTrigger-C3kS5B-X.js";import"./CompositeItem-BuyG-Xnd.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./getDisabledMountTransitionStyles-C5iHJfar.js";import"./getPseudoElementBounds-DtI19hhj.js";import"./chevron-down-BxUE_6XI.js";import"./index-Bh90kKL7.js";import"./error-Dm0kzNQU.js";import"./BaseCbacBanner-D0xcDype.js";import"./makeExternalStore-DQVcY1um.js";import"./Tooltip-D3YkEYkV.js";import"./PopoverPopup-DozBvSpZ.js";import"./debounce-66rESf0W.js";import"./useOsdkClient-CKRo4EpN.js";import"./tick-4j-y4QUt.js";import"./DropdownField-Cb0C-mKV.js";import"./isEqual-whmmFY8e.js";import"./withOsdkMetrics-DPL7FlTV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = ${f};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);`}}},render:()=>a.jsx(C,{})};function C(){const e=i.useRef(null),[n,t]=i.useState(!1),r=i.useCallback(async()=>{var o;t(!0);try{const s=await((o=e.current)==null?void 0:o.getSnapshot());if(!s)return;await g(E(s.columns,s.rows),"employees.csv")}finally{t(!1)}},[]);return a.jsxs("div",{className:"object-table-container",style:{height:"600px",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"8px 0",marginBottom:8},children:a.jsx("button",{disabled:n,onClick:r,type:"button",style:{...y,...n?{cursor:"not-allowed",opacity:.6}:null},children:n?"Downloading…":"Download as CSV"})}),a.jsx(u,{objectType:h,columnDefinitions:w,pageSize:f,tableRef:e})]})}function E(e,n){return[e.map(t=>c(t.name)).join(","),...n.map(t=>e.map(r=>c(S(t.getValue(r.id)))).join(","))].join(`
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/u.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Uses \`tableRef.current.getSnapshot()\` to build and download a CSV from the ObjectTable's data. The Full name column uses \`renderCell\`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an \`Error\` instance from \`row.getValue\`, which the CSV renders as a literal marker."
      },
      source: {
        code: \`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
const PAGE_SIZE = \${PAGE_SIZE};

const handleDownload = async () => {
  const snapshot = await tableRef.current?.getSnapshot();
  if (!snapshot) {
    return;
  }

  const csv = toCsv(snapshot.columns, snapshot.rows);
  downloadCsv(csv, "employees.csv");
};

return (
  <>
    <button onClick={handleDownload}>Download as CSV</button>
    <ObjectTable
      objectType={Employee}
      columnDefinitions={employeeColumns}
      pageSize={PAGE_SIZE}
      tableRef={tableRef}
    />
  </>
);\`
      }
    }
  },
  render: () => <LoadedDataDownloadExample />
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};

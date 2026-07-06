import{f as b,j as a,r as i}from"./iframe-6JVXeTWS.js";import{O as u}from"./object-table-C1ipw78N.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw1MFz_c.js";import"./Table-9ygqOewK.js";import"./index-CCRcN1k8.js";import"./Dialog-Bsn9Rk_r.js";import"./cross-5SRrceXd.js";import"./svgIconContainer-D_jRBUY4.js";import"./useBaseUiId-a7slHkDQ.js";import"./InternalBackdrop-pmr63x3R.js";import"./composite-DTzkFL_Y.js";import"./index-CKLXtTUZ.js";import"./index-akSI5u-L.js";import"./index-DZuT87X3.js";import"./useEventCallback-DYoiHgul.js";import"./SkeletonBar-rM9ABjT8.js";import"./LoadingCell-LaAz_fNS.js";import"./ColumnConfigDialog-D5jnte8R.js";import"./DraggableList-Dl53n4NM.js";import"./search-BvHHgQAn.js";import"./Input-SnHDB1yK.js";import"./useControlled-BXAX7das.js";import"./Button-HAvPtIv5.js";import"./small-cross-jS-NdMr0.js";import"./ActionButton-DASxk3lE.js";import"./Checkbox-DMkoRXZh.js";import"./useValueChanged-UwHPgUvg.js";import"./CollapsiblePanel-CpbfknWt.js";import"./MultiColumnSortDialog-BZb2hn9y.js";import"./MenuTrigger-CXl2Q-iR.js";import"./CompositeItem-Cxv47m7T.js";import"./ToolbarRootContext-DfFG8vJ4.js";import"./getDisabledMountTransitionStyles-DuM_w5_T.js";import"./getPseudoElementBounds-bE3BlAsx.js";import"./chevron-down-DxkqjctO.js";import"./index-Bd6rbSg8.js";import"./error-dc7Jmoqx.js";import"./BaseCbacBanner-DxIPYIdW.js";import"./makeExternalStore-DctrMw-f.js";import"./Tooltip-B3aByQMb.js";import"./PopoverPopup-Qdk1sxDf.js";import"./toNumber-CuMo-qtP.js";import"./useOsdkClient-BNpIjZXO.js";import"./tick-B-Qe8cb0.js";import"./DropdownField-3fvIF2hf.js";import"./withOsdkMetrics-BS6Er7Nk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

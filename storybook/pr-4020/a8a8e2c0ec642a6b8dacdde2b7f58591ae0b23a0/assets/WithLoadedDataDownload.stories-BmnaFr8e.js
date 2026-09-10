import{f as b,j as a,r as i}from"./iframe-C2ZZ3cOF.js";import{O as u}from"./object-table-D9lkTMXk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJtcF0-s.js";import"./Table-DpsKDQYa.js";import"./index-DsoOCFTI.js";import"./Dialog-BZHpATCh.js";import"./cross--ibNnIEf.js";import"./svgIconContainer-DGGhigwB.js";import"./useBaseUiId-rOymOOAJ.js";import"./InternalBackdrop-DCDgroAI.js";import"./composite-Ddvv9IrU.js";import"./index-CTwT6nYN.js";import"./index-DSVH0ev_.js";import"./index-yDJJIzMt.js";import"./useEventCallback-B3d5wrwR.js";import"./SkeletonBar-CuXnc-bL.js";import"./LoadingCell-CMtPsv4A.js";import"./ColumnConfigDialog-DuvVpeqU.js";import"./DraggableList-C4T7r2IB.js";import"./search-U62jo3I0.js";import"./Input-Dmhhrwdm.js";import"./useControlled-OqQhu2z4.js";import"./Button-D9oV_2gB.js";import"./small-cross-D1YvVRXB.js";import"./ActionButton-Behm8cD1.js";import"./Checkbox-Dnufhn9O.js";import"./useValueChanged-DCNsd_18.js";import"./CollapsiblePanel-omRA8Wab.js";import"./MultiColumnSortDialog-DvXdzalI.js";import"./MenuTrigger-ffNJhOok.js";import"./CompositeItem-DUancClF.js";import"./ToolbarRootContext-B1pHyjdA.js";import"./getDisabledMountTransitionStyles-Baz1yk5y.js";import"./getPseudoElementBounds-CKnr_cwE.js";import"./chevron-down-Btxrg9J1.js";import"./index-DlwYymDm.js";import"./error-fD8lMeVM.js";import"./BaseCbacBanner-tUaxtrFw.js";import"./makeExternalStore-C0CUUcCC.js";import"./Tooltip-_hliLngy.js";import"./PopoverPopup-BaZJt03D.js";import"./debounce-BLIS2g0T.js";import"./useOsdkClient-C074xW8m.js";import"./tick-BQbrvSw2.js";import"./DropdownField-BLQjRzQd.js";import"./isEqual-cE_q7Xx5.js";import"./withOsdkMetrics-vMcZolIP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

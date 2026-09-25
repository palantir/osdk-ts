import{f as b,j as a,r as i}from"./iframe-D9Hj5gXP.js";import{O as u}from"./object-table-Bzw1yp1a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-46igzL0d.js";import"./Table-CMOy0Hhh.js";import"./index-BGKBGloN.js";import"./Dialog-B15eJBe2.js";import"./cross-Q-Rh6Md8.js";import"./svgIconContainer-DUAmOtu_.js";import"./useBaseUiId-B3UGffNT.js";import"./InternalBackdrop-DlA1FKGc.js";import"./composite-aH77Cbrs.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./index-jowm6RnV.js";import"./useEventCallback-Bwe-RZ2-.js";import"./SkeletonBar-DXV33xVm.js";import"./LoadingCell-DaoSKNPM.js";import"./ColumnConfigDialog-NielXSTy.js";import"./DraggableList-CVNnHbov.js";import"./search-Itm3619L.js";import"./Input-CbGZkwW7.js";import"./useControlled-Bt5_5gUM.js";import"./Button-Djg1VeWx.js";import"./small-cross-C9HLCPSm.js";import"./ActionButton-n9ZfdiZ_.js";import"./Checkbox-V_Hcv-4P.js";import"./useValueChanged-tLVk5hgi.js";import"./CollapsiblePanel-DJVPti5E.js";import"./MultiColumnSortDialog-v5JhTEnu.js";import"./MenuTrigger-BrLf1mzD.js";import"./CompositeItem-DWvpMhCv.js";import"./ToolbarRootContext-D-kNo729.js";import"./getDisabledMountTransitionStyles-nKpBFA9S.js";import"./getPseudoElementBounds-BLiX7v_s.js";import"./chevron-down-CTUGvO1x.js";import"./index-dBvJuZc1.js";import"./error-CBRvRAY4.js";import"./BaseCbacBanner-CXx3HT4t.js";import"./makeExternalStore-BMGSmgu1.js";import"./Tooltip-bqfYO4-a.js";import"./PopoverPopup-CsWrH6rr.js";import"./debounce-DfbGHQI5.js";import"./useOsdkClient-DldD5hq7.js";import"./tick-DjzXnXMl.js";import"./DropdownField-szw3P9fl.js";import"./isEqual-txn9w4tS.js";import"./withOsdkMetrics-CL-J3VAE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BNXnxiJa.js";import{O as u}from"./object-table-Cb1oSNVI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CT8T0PJp.js";import"./Table-CH4uKdSM.js";import"./index-Ch-h42fp.js";import"./Dialog-CKvDjFCt.js";import"./cross-DNfPdLmM.js";import"./svgIconContainer-T3xea5l3.js";import"./useBaseUiId-BjmHkgmf.js";import"./InternalBackdrop-PmKOV69k.js";import"./composite-Cinouu0K.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./index-KZulTNIE.js";import"./useEventCallback-BmB9ehFQ.js";import"./SkeletonBar-C4SZgVA_.js";import"./LoadingCell-BfBhkylv.js";import"./ColumnConfigDialog-C9bO7pUK.js";import"./DraggableList-DKJFkDus.js";import"./search-DQwSGm2k.js";import"./Input-BQdVPwVd.js";import"./useControlled-DBRd_jSA.js";import"./Button-CDesYXNY.js";import"./small-cross-r42AjjlG.js";import"./ActionButton-CuFNzu9O.js";import"./Checkbox-1jAc03ff.js";import"./useValueChanged-BMp_-0Ka.js";import"./CollapsiblePanel-BKAENuDp.js";import"./MultiColumnSortDialog-D3Ok2AK3.js";import"./MenuTrigger-_gElmUn1.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./getDisabledMountTransitionStyles-TqKYti97.js";import"./getPseudoElementBounds-C28IzjDZ.js";import"./chevron-down-CLu6_2JJ.js";import"./index-Be-Y0iQr.js";import"./error-BMUe0AWc.js";import"./BaseCbacBanner-DWO6AJ4A.js";import"./makeExternalStore-C77jTvWN.js";import"./Tooltip-Depdrqez.js";import"./PopoverPopup-C9jn2tje.js";import"./debounce-Dw0w9syk.js";import"./useOsdkClient-CKYOKSIJ.js";import"./tick-DtOuh9ys.js";import"./DropdownField-7JT5lhAG.js";import"./isEqual-BSNPV3Xn.js";import"./withOsdkMetrics-CGp4DYy1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

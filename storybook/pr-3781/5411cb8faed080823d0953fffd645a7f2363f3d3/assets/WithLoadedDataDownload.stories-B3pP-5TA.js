import{f as b,j as a,r as i}from"./iframe-DywKiRJ4.js";import{O as u}from"./object-table-BPc3eFSX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DnISu9SO.js";import"./Table-TcAaYlP2.js";import"./index-sdvv-Vmx.js";import"./Dialog-Bf55-VY4.js";import"./cross-CQksztLC.js";import"./svgIconContainer-BcOW5YRH.js";import"./useBaseUiId-C48Qv8Zq.js";import"./InternalBackdrop-Cpxyg-Ky.js";import"./composite-ZtNMv5XC.js";import"./index-DPwii3iK.js";import"./index-DqrMsXLY.js";import"./index-dA00YQm8.js";import"./useEventCallback-CppQh8Tw.js";import"./SkeletonBar-IiCmFQe8.js";import"./LoadingCell-CGfJC6P-.js";import"./ColumnConfigDialog-DEjm_EY6.js";import"./DraggableList-BHZ55AyS.js";import"./search-BqXYSkFu.js";import"./Input-C0MsgEOV.js";import"./useControlled-IjJG5oHn.js";import"./isEqual-CMqPJSO6.js";import"./isObject-C5jPAKNO.js";import"./Button-CDqHXNFi.js";import"./ActionButton-DZ3T_Hts.js";import"./Checkbox-C_Hoe2CZ.js";import"./useValueChanged-CzSHuwPy.js";import"./CollapsiblePanel-DvuaVJxN.js";import"./MultiColumnSortDialog-CFSzAgHA.js";import"./MenuTrigger-CSGpp6_f.js";import"./CompositeItem-BHZTQbjb.js";import"./ToolbarRootContext-BdKTbPdV.js";import"./getDisabledMountTransitionStyles-Do5D0uth.js";import"./getPseudoElementBounds-CH2A8lCF.js";import"./chevron-down-DFkNi3fh.js";import"./index-Bi9mx1Ld.js";import"./error-CTO_HqOG.js";import"./BaseCbacBanner-DDIvxm3S.js";import"./makeExternalStore-CVHUFZOf.js";import"./Tooltip-DWQ3NBX-.js";import"./PopoverPopup-kSQR-f1B.js";import"./toNumber-oB5ILiEz.js";import"./useOsdkClient-BGVCYVYl.js";import"./tick-CHvQk3IN.js";import"./DropdownField-fsCjlWHf.js";import"./withOsdkMetrics-mz9t4H8j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

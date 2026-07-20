import{f as b,j as a,r as i}from"./iframe-CT8qFPUV.js";import{O as u}from"./object-table-DPPlKtuR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHyrK0we.js";import"./Table-BEPPJ5mU.js";import"./index-IIFqr_Jh.js";import"./Dialog-CM51v1Ey.js";import"./cross-CMW1v6Nr.js";import"./svgIconContainer-9rSG-q0q.js";import"./useBaseUiId-CAvMPjp1.js";import"./InternalBackdrop-Cmwys2rA.js";import"./composite-Cvq6s1zD.js";import"./index-CnAG97BE.js";import"./index-G14nPyHu.js";import"./index-D23kGKaC.js";import"./useEventCallback-D2Qc1mZc.js";import"./SkeletonBar-nJZQ_-v7.js";import"./LoadingCell-Cd_n8-ek.js";import"./ColumnConfigDialog-Di2gJjR_.js";import"./DraggableList-VGLolp8U.js";import"./search-B7W0NEyo.js";import"./Input-Hz6uGvXQ.js";import"./useControlled-BSUn0zkZ.js";import"./isEqual-CezrfRsb.js";import"./isObject-DFiQBwbw.js";import"./Button-CIZ3jWX3.js";import"./ActionButton-CzUPf6AH.js";import"./Checkbox-C1bIRGLG.js";import"./useValueChanged-ct7ZORh8.js";import"./CollapsiblePanel-wvp206Kx.js";import"./MultiColumnSortDialog-CGmXG29a.js";import"./MenuTrigger-U21ZTp6v.js";import"./CompositeItem-CS9_X5Cg.js";import"./ToolbarRootContext-DTfoBz1Z.js";import"./getDisabledMountTransitionStyles-Y5ZZEkI9.js";import"./getPseudoElementBounds-Dk4xseC2.js";import"./chevron-down-D594BBPu.js";import"./index-C85Q-p1W.js";import"./error-CaKFwUNR.js";import"./BaseCbacBanner-DOYjKT-C.js";import"./makeExternalStore-HyEzRDXC.js";import"./Tooltip-DGExIBxF.js";import"./PopoverPopup-Cmkus2jj.js";import"./toNumber-o6uE0Yrs.js";import"./useOsdkClient-CnL1e7f2.js";import"./tick-zQ8lDjPu.js";import"./DropdownField-B2_auR_f.js";import"./withOsdkMetrics-C55IRa3U.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

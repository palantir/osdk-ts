import{f as b,j as a,r as i}from"./iframe-CDGAWL5z.js";import{O as u}from"./object-table-DtXQYtP2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CI5YRKwA.js";import"./Table-DLf6dOM5.js";import"./index-3MCsyJen.js";import"./Dialog-Gmy4msys.js";import"./cross-BeVSOrEe.js";import"./svgIconContainer-Dcej3m5n.js";import"./useBaseUiId-DY77c4-A.js";import"./InternalBackdrop-BVMsH6hp.js";import"./composite-BFqrbf78.js";import"./index-BUnuXFxA.js";import"./index-CZEvu-cD.js";import"./index-DM6_L-S2.js";import"./useEventCallback-CurJQDBH.js";import"./SkeletonBar-B1robTcF.js";import"./LoadingCell-BnzujRh0.js";import"./ColumnConfigDialog-BzzNFXDq.js";import"./DraggableList-tWeCPBYW.js";import"./search-BrgQI2y6.js";import"./Input-B1WQ9LTD.js";import"./useControlled-xutsfVXO.js";import"./isEqual-Bja32Sem.js";import"./isObject-JyW4d2OA.js";import"./Button-XNbmfuiS.js";import"./ActionButton-C2x0RC9m.js";import"./Checkbox-XoF4FZ1X.js";import"./useValueChanged-CXVUyp3K.js";import"./CollapsiblePanel-D5hccQ-X.js";import"./MultiColumnSortDialog-DUYJZ_uN.js";import"./MenuTrigger-DpLR4WSl.js";import"./CompositeItem-Cl4JUDwX.js";import"./ToolbarRootContext-CTDwZ0pE.js";import"./getDisabledMountTransitionStyles-xoor5amX.js";import"./getPseudoElementBounds-WES_yW35.js";import"./chevron-down-dvsoYA_H.js";import"./index-CLEKU3H0.js";import"./error-q7YHjSp-.js";import"./BaseCbacBanner-Bqi4-Jcc.js";import"./makeExternalStore-ql6Iw7cR.js";import"./Tooltip-DfyX7Dwe.js";import"./PopoverPopup-HHAC8mLC.js";import"./toNumber-B7X19R9_.js";import"./useOsdkClient-Dkt3V3jM.js";import"./tick-Bf0agguz.js";import"./DropdownField-C3mpb7DV.js";import"./withOsdkMetrics-BT43AOFX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-D4LVDAiJ.js";import{O as u}from"./object-table-D1_mVYyU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BRiuw1tM.js";import"./Table-DOpeTxiX.js";import"./index-Doq37HVC.js";import"./Dialog-Bx_F1j1I.js";import"./cross-CrN1mHSM.js";import"./svgIconContainer-CKDcZSuW.js";import"./useBaseUiId-t0XnwFOX.js";import"./InternalBackdrop-BOzYgdF3.js";import"./composite-BgyxEEOk.js";import"./index-DgptZbMC.js";import"./index-9wm5pOXR.js";import"./index-BFnO8bnI.js";import"./useEventCallback-ecbQBYez.js";import"./SkeletonBar-MoCvVI88.js";import"./LoadingCell-H4ZHpqgi.js";import"./ColumnConfigDialog-D0Zpm4uY.js";import"./DraggableList-C--cWquz.js";import"./search-BWsEyD_y.js";import"./Input-Dus9QmGC.js";import"./useControlled-BSRYlGKN.js";import"./Button-De22pfKg.js";import"./small-cross-BGgjchjT.js";import"./ActionButton-hlHYq4Ql.js";import"./Checkbox-Nx_0sa1a.js";import"./useValueChanged-eXWosK3O.js";import"./CollapsiblePanel-D8e_JP8A.js";import"./MultiColumnSortDialog-BHIJoffJ.js";import"./MenuTrigger-Dm3yFkAm.js";import"./CompositeItem-BgdG338-.js";import"./ToolbarRootContext-VbrNfAOv.js";import"./getDisabledMountTransitionStyles-DHkhoqiG.js";import"./getPseudoElementBounds-BHzzAx7-.js";import"./chevron-down-DO0q0xd1.js";import"./index-CgV2ExFN.js";import"./error-B5872Opm.js";import"./BaseCbacBanner-C3Z3yFar.js";import"./makeExternalStore-CGuk3GA7.js";import"./Tooltip-1Df9hLxD.js";import"./PopoverPopup--885M2Lm.js";import"./debounce-B-C1jtyL.js";import"./useOsdkClient--x9hnGz1.js";import"./tick-Du1HMgdZ.js";import"./DropdownField-BuncSUDK.js";import"./isEqual-BPsbN3op.js";import"./withOsdkMetrics-ooLMpNFk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

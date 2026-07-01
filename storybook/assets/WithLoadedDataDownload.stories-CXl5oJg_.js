import{f as b,j as a,r as i}from"./iframe-CQqcNnwi.js";import{O as u}from"./object-table-BxiAXAz7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BFcuNwcI.js";import"./index-BGqNz3HP.js";import"./Dialog-CsKFRitx.js";import"./cross-C6Rm_Lrn.js";import"./svgIconContainer-IQ0gBQ0C.js";import"./useBaseUiId-81HNnwRN.js";import"./InternalBackdrop-Cg4UhYKA.js";import"./composite-Du3fY-K0.js";import"./index-BFZh7uCY.js";import"./index-C4QRzzj4.js";import"./index-Dbx2WRpg.js";import"./useEventCallback-zi5J63Yc.js";import"./SkeletonBar-ClzIpiDk.js";import"./LoadingCell-BCAIHQVc.js";import"./ColumnConfigDialog-CDH_IF5R.js";import"./DraggableList-DxZ-7_gS.js";import"./search-T4DuTzMx.js";import"./Input-B_Q9krhW.js";import"./useControlled-D_CwS4tB.js";import"./Button-D78VRn98.js";import"./small-cross-CJePShLT.js";import"./ActionButton-CEleWzrZ.js";import"./Checkbox-BW7whx4O.js";import"./minus-DGBq1uHg.js";import"./tick-Dx88n3jL.js";import"./useValueChanged-C3UxWEWM.js";import"./caret-down-C7tUwnbq.js";import"./CollapsiblePanel-DmtebVDB.js";import"./MultiColumnSortDialog-Dl2rylL1.js";import"./MenuTrigger-CR54dlXa.js";import"./CompositeItem-Byt82z5M.js";import"./ToolbarRootContext-on_UmCVp.js";import"./getDisabledMountTransitionStyles-CdIgwyH4.js";import"./getPseudoElementBounds-Bd9GqyuT.js";import"./chevron-down-DQ9a4skg.js";import"./index-CsF8MjB7.js";import"./error-Cw0E_S2M.js";import"./BaseCbacBanner-BBS2sTPn.js";import"./makeExternalStore-C7H6nJI4.js";import"./Tooltip-C0WvHN5Q.js";import"./PopoverPopup-BCNaGLsH.js";import"./toNumber-BHVLWmFE.js";import"./useOsdkClient-DLVAuYaT.js";import"./DropdownField-B7zxWFL9.js";import"./withOsdkMetrics-DvpJoQW9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

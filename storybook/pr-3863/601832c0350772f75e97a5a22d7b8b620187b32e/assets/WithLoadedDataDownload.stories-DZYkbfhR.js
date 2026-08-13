import{f as b,j as a,r as i}from"./iframe-O0prbF-O.js";import{O as u}from"./object-table-CyA9NVMi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BqjLgX7i.js";import"./Table-DfMGlvWA.js";import"./index-D3_kNOcu.js";import"./Dialog-BOTrMu9R.js";import"./cross-EqH9AD7w.js";import"./svgIconContainer-D708LBZG.js";import"./useBaseUiId-CF66BVsU.js";import"./InternalBackdrop-DBKeGWdw.js";import"./composite-CBSaDCOL.js";import"./index-DlLn8lVY.js";import"./index-CO7cUuHh.js";import"./index-Cb14-kzt.js";import"./useEventCallback-CI7uH06C.js";import"./SkeletonBar-BoocyUZM.js";import"./LoadingCell-4o2z_nRc.js";import"./ColumnConfigDialog-BnMcit-A.js";import"./DraggableList-CbxkUNCT.js";import"./search-BZRyw4sv.js";import"./Input-DALr2Z65.js";import"./useControlled-DTs4YsMd.js";import"./Button-B2dXrYMV.js";import"./small-cross-3PczLChY.js";import"./ActionButton-DlLbzVoC.js";import"./Checkbox-CUIX5M1x.js";import"./useValueChanged-BA2LO4xE.js";import"./CollapsiblePanel-BEvSUTtF.js";import"./MultiColumnSortDialog-C2vJ_N3H.js";import"./MenuTrigger-0pjqaEFx.js";import"./CompositeItem-Cx6Y5iRt.js";import"./ToolbarRootContext-B9PiDCp_.js";import"./getDisabledMountTransitionStyles-Dxu7DtWP.js";import"./getPseudoElementBounds-xaQ_TG8i.js";import"./chevron-down-NYKhWxp5.js";import"./index-JUBariVe.js";import"./error-CBnxuMvh.js";import"./BaseCbacBanner-CX3faeRn.js";import"./makeExternalStore-DO75Ws4H.js";import"./Tooltip-BcwYOBDs.js";import"./PopoverPopup-C8bmh7JY.js";import"./toNumber-mpunM_CU.js";import"./useOsdkClient-D80isL3g.js";import"./tick-a2QdToMK.js";import"./DropdownField-a5Wh6R5w.js";import"./withOsdkMetrics-h2oIPj-a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

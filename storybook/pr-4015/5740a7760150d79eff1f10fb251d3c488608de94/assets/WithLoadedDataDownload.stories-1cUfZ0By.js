import{f as b,j as a,r as i}from"./iframe-BTZXjcS6.js";import{O as u}from"./object-table-D_sLcuJX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C9NzPdgc.js";import"./Table-DPotH737.js";import"./index-CeqBwR3m.js";import"./Dialog-CKsDrnqD.js";import"./cross-B7KIcqou.js";import"./svgIconContainer-B_6Ye4VC.js";import"./useBaseUiId-BYa5JSvm.js";import"./InternalBackdrop-D9v-IY9L.js";import"./composite-Bir0R2T2.js";import"./index-Bc5CyDlw.js";import"./index-PyK1kYPr.js";import"./index-D4TIv0Oq.js";import"./useEventCallback-C8TjJx_C.js";import"./SkeletonBar-Cl9ArMG3.js";import"./LoadingCell-BQH4NmwW.js";import"./ColumnConfigDialog-DrgaikaZ.js";import"./DraggableList-DwILAAnX.js";import"./search-B_jja5k9.js";import"./Input-CufnAxBU.js";import"./useControlled-D3czSe4k.js";import"./Button-tBNbm5Ca.js";import"./small-cross-C8iYyEOq.js";import"./ActionButton-DtvrG6sU.js";import"./Checkbox-D1G0cO7j.js";import"./useValueChanged-dea3ckth.js";import"./CollapsiblePanel-CiJsgmp5.js";import"./MultiColumnSortDialog-C9vv9d7M.js";import"./MenuTrigger-QWlI38EG.js";import"./CompositeItem-BbZyoEpe.js";import"./ToolbarRootContext-CSsWfPwj.js";import"./getDisabledMountTransitionStyles-CE8RpoIN.js";import"./getPseudoElementBounds-CEAZG3b7.js";import"./chevron-down-BnB-eP8_.js";import"./index-BwVZwZx_.js";import"./error-CNEXn0eH.js";import"./BaseCbacBanner-6VvjFDu5.js";import"./makeExternalStore-CzWUEmmK.js";import"./Tooltip-4a177B8O.js";import"./PopoverPopup-C-rIrhf-.js";import"./debounce-BkHDw0VY.js";import"./useOsdkClient-Cw0tNi-2.js";import"./tick-CZ2olpkR.js";import"./DropdownField-BGDFHIhQ.js";import"./isEqual-BOZ0NKP1.js";import"./withOsdkMetrics-Ca4dglEg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-yzha5v0q.js";import{O as u}from"./object-table-7QNEleDy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-8FAAW5.js";import"./Table-1KtfhII5.js";import"./index-60EGa8qT.js";import"./Dialog-C5JPUXP6.js";import"./cross-BlwLOBUQ.js";import"./svgIconContainer-C44iOk89.js";import"./useBaseUiId-BbIMkHOG.js";import"./InternalBackdrop-Tn-t9TYq.js";import"./composite-BDH9_dFX.js";import"./index-O5EAmeT1.js";import"./index-BVrkRt64.js";import"./index-C1kDTagr.js";import"./useEventCallback-DsjWVVDr.js";import"./SkeletonBar-aZ1R4mdC.js";import"./LoadingCell-BQBa2JlH.js";import"./ColumnConfigDialog-CVF6mbu9.js";import"./DraggableList-Blt51KXd.js";import"./search-gm56Xs7t.js";import"./Input-EyuyzT2W.js";import"./useControlled-D0bVi2TG.js";import"./Button-BiUOfKuO.js";import"./small-cross-Cm5dK0ec.js";import"./ActionButton-DTkeL8Lj.js";import"./Checkbox-tgD1qeBp.js";import"./useValueChanged-B6X9c3a_.js";import"./CollapsiblePanel-DOlyQkQE.js";import"./MultiColumnSortDialog-S4FDUM3S.js";import"./MenuTrigger-CuI3s9S9.js";import"./CompositeItem-ha9gBhOi.js";import"./ToolbarRootContext-D2IbjqCY.js";import"./getDisabledMountTransitionStyles-IE49pSF5.js";import"./getPseudoElementBounds-DPNIWnqr.js";import"./chevron-down-DLVlSQ8P.js";import"./index-DbIozRF2.js";import"./error-B0YQBao9.js";import"./BaseCbacBanner-DjcIjJbq.js";import"./makeExternalStore-DbXaKl2K.js";import"./Tooltip-DPFg4mPg.js";import"./PopoverPopup-C3DSbH4l.js";import"./debounce-X5gf-7Uy.js";import"./useOsdkClient-Bxqh4Bcm.js";import"./tick-DY8FjhzJ.js";import"./DropdownField-Dw87S1et.js";import"./isEqual-BwFhy3Dl.js";import"./withOsdkMetrics-DqbCp-LC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

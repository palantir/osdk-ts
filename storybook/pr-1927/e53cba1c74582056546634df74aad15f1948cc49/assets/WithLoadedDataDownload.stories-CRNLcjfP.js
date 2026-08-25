import{f as b,j as a,r as i}from"./iframe-YwePy6Na.js";import{O as u}from"./object-table-Dp9r6Amm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C5O8HAF_.js";import"./Table-vKwb6riK.js";import"./index-kDdf5Tk2.js";import"./Dialog-DkeogbIL.js";import"./cross-Y-lq_61F.js";import"./svgIconContainer-nKGCa_Yw.js";import"./useBaseUiId-vveaqpRL.js";import"./InternalBackdrop-n_VXKU8h.js";import"./composite-BvfYu_Ep.js";import"./index-B-58BhWJ.js";import"./index-Y7QOpJkL.js";import"./index-TgM_EtVZ.js";import"./useEventCallback-B9544m6r.js";import"./SkeletonBar-C0QVMjH7.js";import"./LoadingCell-COl8_Q6l.js";import"./ColumnConfigDialog-DwZUCWad.js";import"./DraggableList-z6CvTLCx.js";import"./search-CkQaqOfS.js";import"./Input-BbXslpL4.js";import"./useControlled-CXJ0FOIB.js";import"./Button-CajACsUP.js";import"./small-cross-BoYlxTd8.js";import"./ActionButton--mSG10q_.js";import"./Checkbox-B-rZLKxz.js";import"./useValueChanged-DOhoBYTW.js";import"./CollapsiblePanel-DhdNZ43G.js";import"./MultiColumnSortDialog-BDmfQifF.js";import"./MenuTrigger-H-hNI4h4.js";import"./CompositeItem-DwKpE3E9.js";import"./ToolbarRootContext-IvyHUIol.js";import"./getDisabledMountTransitionStyles-Dp-GSE2g.js";import"./getPseudoElementBounds-DvHm1E4j.js";import"./chevron-down-APdhRSd1.js";import"./index-B8BnOK3F.js";import"./error-BpwHZdni.js";import"./BaseCbacBanner-CV3UV8UT.js";import"./makeExternalStore-BDW_RQe5.js";import"./Tooltip-DWBJxFHb.js";import"./PopoverPopup-Di-M8mNa.js";import"./debounce-EjzoHQP3.js";import"./useOsdkClient-Dvnc0JJ7.js";import"./tick-yO9PCDBT.js";import"./DropdownField-DJy3CWMh.js";import"./isEqual-CjW4gmi7.js";import"./withOsdkMetrics-CdgeYRWr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

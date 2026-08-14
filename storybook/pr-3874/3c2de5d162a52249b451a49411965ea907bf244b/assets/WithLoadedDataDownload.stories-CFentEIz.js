import{f as b,j as a,r as i}from"./iframe-DPKjJbUl.js";import{O as u}from"./object-table-CiA2mgLE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-jysXR-to.js";import"./Table-CkCIOkQc.js";import"./index-2SPkUawk.js";import"./Dialog-Bxoi34Wm.js";import"./cross-Bur9aTxF.js";import"./svgIconContainer-DcOBBk2S.js";import"./useBaseUiId-CpCoqI7r.js";import"./InternalBackdrop-CNupZRS_.js";import"./composite-4w9rumvd.js";import"./index-BJOf7s-T.js";import"./index-BHZ9rsvc.js";import"./index-BLTHUTFO.js";import"./useEventCallback-CfXNQR5R.js";import"./SkeletonBar-_y5I33tw.js";import"./LoadingCell-DcLgQ4Ug.js";import"./ColumnConfigDialog-BnUf7DkN.js";import"./DraggableList-UzQEUU7r.js";import"./search-CfvDmUdq.js";import"./Input-Cp0wF4SO.js";import"./useControlled-36BIvyhs.js";import"./Button-DhDj0z4t.js";import"./small-cross-jfjdmJHA.js";import"./ActionButton-CR2Evx-a.js";import"./Checkbox-C4uEDJZr.js";import"./useValueChanged-BPifwweb.js";import"./CollapsiblePanel-C7tnC6NS.js";import"./MultiColumnSortDialog-DGfaXG6u.js";import"./MenuTrigger-C-T3X_LR.js";import"./CompositeItem-C1vm5CBx.js";import"./ToolbarRootContext-BNVI8n48.js";import"./getDisabledMountTransitionStyles-BpxmMrDd.js";import"./getPseudoElementBounds-CH0myo6i.js";import"./chevron-down-CkO13R5T.js";import"./index-CazPboEE.js";import"./error-Cbkkosws.js";import"./BaseCbacBanner-D8PUVhgH.js";import"./makeExternalStore-BrJQqJjN.js";import"./Tooltip-Ct0waVPJ.js";import"./PopoverPopup-CqPpOpqV.js";import"./debounce-DSQ3zwts.js";import"./useOsdkClient-X3frRnwW.js";import"./tick-BKzW071D.js";import"./DropdownField-BWhPjm6f.js";import"./isEqual-BcnxjguD.js";import"./withOsdkMetrics-V_4YWEt4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

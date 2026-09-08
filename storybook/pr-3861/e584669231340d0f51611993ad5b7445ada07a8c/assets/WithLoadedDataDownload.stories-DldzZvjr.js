import{f as b,j as a,r as i}from"./iframe-CtGIC4wf.js";import{O as u}from"./object-table-BN3z22rO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ch20KRc2.js";import"./Table-Dr92ijU5.js";import"./index-D-8enqIL.js";import"./Dialog-DPt6P-_t.js";import"./cross-7ld4MA3o.js";import"./svgIconContainer-CIwPC-KF.js";import"./useBaseUiId-DmITm_fg.js";import"./InternalBackdrop-C6_oJFVY.js";import"./composite-BpxrOvE9.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./index-AbkXWi4D.js";import"./useEventCallback-oTKJ3xMt.js";import"./SkeletonBar--zC5Nde7.js";import"./LoadingCell-CvRX1HDA.js";import"./ColumnConfigDialog-BfcXzIVd.js";import"./DraggableList-Cxcx9nuu.js";import"./search-w1jm1zVn.js";import"./Input-CpszBXLO.js";import"./useControlled-Dn14MKUN.js";import"./Button-Bzw6-RIC.js";import"./small-cross-BW3uw9Pp.js";import"./ActionButton-9nlxbcnf.js";import"./Checkbox-V0KCS8m5.js";import"./useValueChanged-hcUETskz.js";import"./CollapsiblePanel-Bsia-ST0.js";import"./MultiColumnSortDialog-Cvm-2t9m.js";import"./MenuTrigger-tQhUbfmN.js";import"./CompositeItem-Blb9OYTf.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./getDisabledMountTransitionStyles-GHCQL6h5.js";import"./getPseudoElementBounds-BIuGb1kA.js";import"./chevron-down-kLepJLrY.js";import"./index-CJuiV3p2.js";import"./error-C6MzmjpC.js";import"./BaseCbacBanner-B2lub7wV.js";import"./makeExternalStore-WvYcSVhg.js";import"./Tooltip-BlDgcFqM.js";import"./PopoverPopup-Br8L-Z3H.js";import"./debounce-l8hrNpo8.js";import"./useOsdkClient-MCjUhV1U.js";import"./tick-BOhfL1zL.js";import"./DropdownField-Cfkapk5B.js";import"./isEqual-n6diGMGR.js";import"./withOsdkMetrics-ozl4Wy9n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

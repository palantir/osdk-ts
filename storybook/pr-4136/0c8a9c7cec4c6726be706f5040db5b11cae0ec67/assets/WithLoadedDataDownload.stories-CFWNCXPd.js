import{f as b,j as a,r as i}from"./iframe-CcC1m7dm.js";import{O as u}from"./object-table-z-o8Y4iJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DeCk53aw.js";import"./Table-XdRQ7Pf5.js";import"./index-0gvTVOTK.js";import"./Dialog-DPbZCooR.js";import"./cross-DV51ECIz.js";import"./svgIconContainer-yjiCwwqK.js";import"./useBaseUiId-CzCqcGop.js";import"./InternalBackdrop-9qsE-EbY.js";import"./composite-tUxKNezP.js";import"./index-CEYaUBZr.js";import"./index-40ATCYrw.js";import"./index-BxRkQYGY.js";import"./useEventCallback-Blu-LJRb.js";import"./SkeletonBar-DnFTb433.js";import"./LoadingCell-n5L8BfX4.js";import"./ColumnConfigDialog-CmQYy65e.js";import"./DraggableList-BWAET7wQ.js";import"./search-BXFqiFKZ.js";import"./Input-CPQRmcYd.js";import"./useControlled-SAzSAZAO.js";import"./Button-D0RNeWLg.js";import"./small-cross-DS174T3T.js";import"./ActionButton-BhdUY9pE.js";import"./Checkbox-C12Dz3AB.js";import"./useValueChanged-BstO879O.js";import"./CollapsiblePanel-vSa8PNib.js";import"./MultiColumnSortDialog-BoKeQuHw.js";import"./MenuTrigger-CxgA7hxA.js";import"./CompositeItem-BC1QTYXK.js";import"./ToolbarRootContext-CjeMCr-E.js";import"./getDisabledMountTransitionStyles-1Tab1F_A.js";import"./getPseudoElementBounds-DJdribUH.js";import"./chevron-down-C2TUiN-F.js";import"./index-CNWy2Wzu.js";import"./error-hsPgizh-.js";import"./BaseCbacBanner-Cx9EGDV_.js";import"./makeExternalStore-cat_cA42.js";import"./Tooltip-B0OqTl9G.js";import"./PopoverPopup-C7-o66fe.js";import"./debounce-C2vAZ4aB.js";import"./useOsdkClient-DUcNDZWw.js";import"./tick-BhUO318A.js";import"./DropdownField-BHSw1oU1.js";import"./isEqual-vdF0S_a3.js";import"./withOsdkMetrics-Cqfc_v3H.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

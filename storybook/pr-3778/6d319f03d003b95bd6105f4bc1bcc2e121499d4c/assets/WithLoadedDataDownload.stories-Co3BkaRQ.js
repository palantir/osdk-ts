import{f as b,j as a,r as i}from"./iframe-KU9UF-HD.js";import{O as u}from"./object-table-DrS3gL9T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dqh0wZ2N.js";import"./Table-XdQgP9TG.js";import"./index-C_Sqgn7G.js";import"./Dialog-DblEXQa7.js";import"./cross-DKVxU0vG.js";import"./svgIconContainer-B9-V7dQw.js";import"./useBaseUiId-DoU6rO79.js";import"./InternalBackdrop-zwrZRiWG.js";import"./composite-CgL8wB-0.js";import"./index-COBeGTh1.js";import"./index-DvccYxK1.js";import"./index-CbFKn6SO.js";import"./useEventCallback-Xvi1rtsL.js";import"./SkeletonBar-CA3bHLco.js";import"./LoadingCell-D4mvPFrH.js";import"./ColumnConfigDialog-DzLGAe8w.js";import"./DraggableList-DoLFOuKy.js";import"./search-CM8qjOlV.js";import"./Input-D0hsZPVl.js";import"./useControlled-BFyqY8nn.js";import"./isEqual-C9E2_N5N.js";import"./isObject-CcQhopsJ.js";import"./Button-Dx_Hy474.js";import"./ActionButton-DuQolFVX.js";import"./Checkbox-ClqYZBVr.js";import"./useValueChanged-Bthc0dAB.js";import"./CollapsiblePanel-DPyCltIZ.js";import"./MultiColumnSortDialog-uAHUp7ML.js";import"./MenuTrigger-D3r6zpiC.js";import"./CompositeItem-CUcahBHg.js";import"./ToolbarRootContext-Dxnyr84z.js";import"./getDisabledMountTransitionStyles-DvWpsgyl.js";import"./getPseudoElementBounds-CivnY4w8.js";import"./chevron-down-CVXhBImd.js";import"./index-B-ApflCd.js";import"./error-6yDwFave.js";import"./BaseCbacBanner-DqeMmN8d.js";import"./makeExternalStore-_neCuudA.js";import"./Tooltip-DL_3VSwR.js";import"./PopoverPopup-8kqMbkfH.js";import"./toNumber-D60oT1WS.js";import"./useOsdkClient-BbbNdZZX.js";import"./tick-lXnSKMHf.js";import"./DropdownField-CSHkKzua.js";import"./withOsdkMetrics-CyPRFmfB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

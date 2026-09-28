import{f as b,j as a,r as i}from"./iframe-yLJxkVzB.js";import{O as u}from"./object-table-BjJ7VNCo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BvwH_ZL2.js";import"./index-nIKj5uY4.js";import"./Dialog-2IuBkREG.js";import"./cross-Owpme9BE.js";import"./svgIconContainer-TK-Ji3z6.js";import"./useBaseUiId-C2QLSnG8.js";import"./InternalBackdrop-BBxC8DKB.js";import"./composite-dCt9YpUk.js";import"./index-BA5McYn9.js";import"./index-DfLe8XpU.js";import"./index-CozEKZMT.js";import"./useEventCallback-fdgxuXgo.js";import"./SkeletonBar-DZZlKsf1.js";import"./LoadingCell-CUdyrdoA.js";import"./ColumnConfigDialog-DQt6LAOo.js";import"./DraggableList-Dl4LF87d.js";import"./search-B5yRV9xp.js";import"./Input-CPmagxfJ.js";import"./useControlled-CJJ5Ltiy.js";import"./Button-wUttMbxG.js";import"./small-cross-CG34SVyC.js";import"./ActionButton-Clr_BQ-v.js";import"./Checkbox-Cy7DSLTa.js";import"./useValueChanged-BAqw25z8.js";import"./CollapsiblePanel-DgS9WHma.js";import"./MultiColumnSortDialog-DXJkaF5P.js";import"./MenuTrigger-CTEiO2Bu.js";import"./CompositeItem-Bteys6EZ.js";import"./ToolbarRootContext-LMgR1PX5.js";import"./getDisabledMountTransitionStyles-Dokq89QC.js";import"./getPseudoElementBounds-B28lIi_Q.js";import"./chevron-down-NEt8c7o4.js";import"./index-vF_-Jyj8.js";import"./error-CkjCJkJz.js";import"./BaseCbacBanner-BLXv67Yn.js";import"./makeExternalStore-BrbywmR6.js";import"./Tooltip-D82BZFwQ.js";import"./PopoverPopup-DvlntHwZ.js";import"./debounce-CAdN6VB_.js";import"./useOsdkClient-BeKNNCDt.js";import"./tick-BN9LdMqy.js";import"./DropdownField-BBTmJj7c.js";import"./isEqual-BU8jNfNb.js";import"./withOsdkMetrics-EW4d60np.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

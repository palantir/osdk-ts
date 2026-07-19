import{f as b,j as a,r as i}from"./iframe-1jbFjwiV.js";import{O as u}from"./object-table-DZBc9IUl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DDQFdjFD.js";import"./Table-C_dMXnIz.js";import"./index-DrtZOUD6.js";import"./Dialog-BMVsWGMi.js";import"./cross-Bl1j4Wqv.js";import"./svgIconContainer-BZV_aBV9.js";import"./useBaseUiId-BKjYHqRc.js";import"./InternalBackdrop-B1nt4hXd.js";import"./composite-C_OP_X0f.js";import"./index-jEd0VEdG.js";import"./index-CeLprUqR.js";import"./index-CAsisKrM.js";import"./useEventCallback-BhbbY7ZB.js";import"./SkeletonBar-DnzQpZV3.js";import"./LoadingCell-nJ2QoqhW.js";import"./ColumnConfigDialog-BVsSlSRA.js";import"./DraggableList-DsYK8qtZ.js";import"./search-fjW_pUDA.js";import"./Input-CwglRXzQ.js";import"./useControlled-D_GXWtOb.js";import"./isEqual-B1qBzrVP.js";import"./isObject-CQI39Yha.js";import"./Button-BjqCYLqC.js";import"./ActionButton-Do9hQIoV.js";import"./Checkbox-YlqVNjLb.js";import"./useValueChanged-DN_zXLi3.js";import"./CollapsiblePanel-W7x1bVZD.js";import"./MultiColumnSortDialog-BBNkIVqj.js";import"./MenuTrigger-KDqGMAAX.js";import"./CompositeItem-BtXbDyV5.js";import"./ToolbarRootContext-BpBhNPL-.js";import"./getDisabledMountTransitionStyles-DktTLR3G.js";import"./getPseudoElementBounds-D-tKLfAf.js";import"./chevron-down-D5mZ3A2l.js";import"./index-4XSemlsK.js";import"./error-2uW8vzmQ.js";import"./BaseCbacBanner-XdfJYp2i.js";import"./makeExternalStore-DBATKRlp.js";import"./Tooltip-5dUCdvZN.js";import"./PopoverPopup-L5EkKzcv.js";import"./toNumber-KEpIcbR-.js";import"./useOsdkClient-BY7yvIOO.js";import"./tick-C7SI_jPJ.js";import"./DropdownField-DHZIIgcn.js";import"./withOsdkMetrics-C0Xi5TsE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

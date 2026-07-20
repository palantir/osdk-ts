import{f as b,j as a,r as i}from"./iframe-Dsqo2Te7.js";import{O as u}from"./object-table-B0HGJYoE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C00VWsW9.js";import"./Table-CMoDx9pP.js";import"./index-CJIEMWbJ.js";import"./Dialog-Cw9EXoZk.js";import"./cross-BBE-eoHs.js";import"./svgIconContainer-BiCW5V8l.js";import"./useBaseUiId-ByGgpH05.js";import"./InternalBackdrop-CQl3ZlNA.js";import"./composite-dCCZG-QB.js";import"./index-d7L08DFU.js";import"./index-BUiXT7C6.js";import"./index-D1DkXvj6.js";import"./useEventCallback-O3yu0Zs7.js";import"./SkeletonBar-BQhEWRkm.js";import"./LoadingCell-DVUIdNXY.js";import"./ColumnConfigDialog-BWlmvw0l.js";import"./DraggableList-Ci2O7Ee1.js";import"./search-DrXmUYNB.js";import"./Input-D052xPpl.js";import"./useControlled-D0ueKSiO.js";import"./isEqual-cNN2Sa1e.js";import"./isObject-EOHsfNuN.js";import"./Button-CLJwxOKS.js";import"./ActionButton-lctsbi_E.js";import"./Checkbox-BKR_YBke.js";import"./useValueChanged-BflBdGS8.js";import"./CollapsiblePanel-CGdzvjnF.js";import"./MultiColumnSortDialog-Bk7ZdgUa.js";import"./MenuTrigger-BjX0hAmP.js";import"./CompositeItem-mCNVQvhZ.js";import"./ToolbarRootContext-BqymNalt.js";import"./getDisabledMountTransitionStyles-C-Did450.js";import"./getPseudoElementBounds-Dh1fwNyK.js";import"./chevron-down-C3JFAOUv.js";import"./index-C_DVuBu-.js";import"./error-Cm_26CfQ.js";import"./BaseCbacBanner-DpEmWdJ8.js";import"./makeExternalStore-DjsQKVpV.js";import"./Tooltip-lD0QkrE2.js";import"./PopoverPopup-C590THOP.js";import"./toNumber-C_qt5dbZ.js";import"./useOsdkClient-D44odvTr.js";import"./tick-DAFy2fx0.js";import"./DropdownField-DUdqrhHb.js";import"./withOsdkMetrics-l-RgHE7X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

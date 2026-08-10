import{f as b,j as a,r as i}from"./iframe-DBDiaCFH.js";import{O as u}from"./object-table-DzPjZ5wA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWzIkJz_.js";import"./Table-BKuVdOeS.js";import"./index-D_Q-x2L7.js";import"./Dialog-TVzYgLAf.js";import"./cross-CgXQH7_j.js";import"./svgIconContainer-6ctrVKh_.js";import"./useBaseUiId-DgDIOl-3.js";import"./InternalBackdrop-CBuZjigt.js";import"./composite-CjFrvZji.js";import"./index-BMfgUa25.js";import"./index-B5wN7D3f.js";import"./index-Dw3yDBgP.js";import"./useEventCallback-CCU0ou4a.js";import"./SkeletonBar-BIWH6fja.js";import"./LoadingCell-CI5ABUAv.js";import"./ColumnConfigDialog-CUMGYbNI.js";import"./DraggableList-CCHb2Foi.js";import"./search-CyOIbSz8.js";import"./Input-DKUt-MlO.js";import"./useControlled-BpXAkJvi.js";import"./isEqual-CMZMOgMY.js";import"./isObject-DqQC86dg.js";import"./Button-pSxneB8s.js";import"./ActionButton-CctFmRuO.js";import"./Checkbox-CKac-IxQ.js";import"./useValueChanged-CWt7t3qS.js";import"./CollapsiblePanel-BbNVGzEc.js";import"./MultiColumnSortDialog-DxxaaEbK.js";import"./MenuTrigger-BpWfF_OZ.js";import"./CompositeItem-B5nUuPn8.js";import"./ToolbarRootContext-A98l2Fo-.js";import"./getDisabledMountTransitionStyles-cV85HYgT.js";import"./getPseudoElementBounds-B5mUW0aI.js";import"./chevron-down-Ce9XSsNp.js";import"./index-Dfh84t6i.js";import"./error-CW5BzoP2.js";import"./BaseCbacBanner-CUK3Clcg.js";import"./makeExternalStore-BzqUGqFb.js";import"./Tooltip-CLt9Lwfx.js";import"./PopoverPopup-CmEuBpr5.js";import"./toNumber-CCQvBWWu.js";import"./useOsdkClient-CDjN6C8U.js";import"./tick-Cvhdnzky.js";import"./DropdownField-BCHUjyWz.js";import"./withOsdkMetrics-CD41Q7Nf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

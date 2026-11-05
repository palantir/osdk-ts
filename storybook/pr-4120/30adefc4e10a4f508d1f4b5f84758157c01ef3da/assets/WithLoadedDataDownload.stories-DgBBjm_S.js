import{f as b,j as a,r as i}from"./iframe-Dua4ajQH.js";import{O as u}from"./object-table-BSBQ7353.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-TWiFBZiW.js";import"./Table-DyO6ZkMd.js";import"./index-B5QPpnt_.js";import"./Dialog-CoMuSCwK.js";import"./cross-Dk_ZgApr.js";import"./svgIconContainer-BndmJKKI.js";import"./useBaseUiId-BiStwtEQ.js";import"./InternalBackdrop-LR3Q-MAi.js";import"./composite-C1niPINm.js";import"./index-DfHqmq9q.js";import"./index-X9-XOgeq.js";import"./index-Bj03qASY.js";import"./useEventCallback-DZJs1tu0.js";import"./SkeletonBar-BtuMnAJN.js";import"./LoadingCell-CIVBKFE1.js";import"./ColumnConfigDialog-D5XiHMJ_.js";import"./DraggableList-CU9ZT-2r.js";import"./search-BpzzW9g6.js";import"./Input-CWXiSgRy.js";import"./useControlled-jEZs-eRF.js";import"./Button--2vsDgC3.js";import"./small-cross-CErn4ZoN.js";import"./ActionButton-6icQAY27.js";import"./Checkbox-wBcS_UPd.js";import"./useValueChanged-Dl2xjnKi.js";import"./CollapsiblePanel-Pt5pzLj1.js";import"./MultiColumnSortDialog-E8hvHAyR.js";import"./MenuTrigger-DMCiVOOQ.js";import"./CompositeItem-BwhFHjMK.js";import"./ToolbarRootContext-jICZlJZR.js";import"./getDisabledMountTransitionStyles-D--ljA0s.js";import"./getPseudoElementBounds-ruL93tCB.js";import"./chevron-down-CBHx2nKD.js";import"./index-kT6ASJhA.js";import"./error-B8MXwNx9.js";import"./BaseCbacBanner-BV5_M2D5.js";import"./makeExternalStore-C1Ti9SLi.js";import"./Tooltip-B0A5ZHrA.js";import"./PopoverPopup-DqsKdDvA.js";import"./debounce-CGnJH3Kx.js";import"./useOsdkClient-kLLc3fFG.js";import"./tick-C8Mo77j_.js";import"./DropdownField-BHc6qe6w.js";import"./isEqual-CzhJjz_a.js";import"./withOsdkMetrics-BPBDIPLq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

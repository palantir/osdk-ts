import{f as b,j as a,r as i}from"./iframe-B9hGOcVW.js";import{O as u}from"./object-table-1qd0gbMo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CEHJKNgD.js";import"./Table-BDWzuPuG.js";import"./index-WMs6XgHc.js";import"./Dialog-C7AaENM5.js";import"./cross-Kg25sWVz.js";import"./svgIconContainer-DJVhztLr.js";import"./useBaseUiId-Bv7mJDK-.js";import"./InternalBackdrop-CY5Sv-p0.js";import"./composite-BPGo720E.js";import"./index-DDiAWfcg.js";import"./index-C0zF1Hh-.js";import"./index-CLY61b3h.js";import"./useEventCallback-CRuXPfRQ.js";import"./SkeletonBar-DdBk-iAs.js";import"./LoadingCell-DMo5yi-9.js";import"./ColumnConfigDialog-CuHUO7sD.js";import"./DraggableList-72YsiWQv.js";import"./search-CIz89Kd0.js";import"./Input-DL4wCDaa.js";import"./useControlled-CuLTDJ7U.js";import"./Button-Kv95ZBq_.js";import"./small-cross-k_dWUzGn.js";import"./ActionButton-5hOfXxX5.js";import"./Checkbox-DmRWx-yX.js";import"./useValueChanged-BRgm995r.js";import"./CollapsiblePanel-BLpDHRNH.js";import"./MultiColumnSortDialog-CUeoMZUg.js";import"./MenuTrigger-D2PAdEJf.js";import"./CompositeItem-DJ_648IQ.js";import"./ToolbarRootContext-CI0oTBSQ.js";import"./getDisabledMountTransitionStyles-Btetjrhd.js";import"./getPseudoElementBounds-DoIsGQ2e.js";import"./chevron-down-cOiqTWha.js";import"./index-BOZqc1dp.js";import"./error-D0SwKHMs.js";import"./BaseCbacBanner-BK1b6COz.js";import"./makeExternalStore-X3bc05mq.js";import"./Tooltip-C5Zr6U13.js";import"./PopoverPopup-BOcc2TJb.js";import"./debounce-CzUX5qpY.js";import"./useOsdkClient-Dl6R5ARr.js";import"./tick-BCju8FEy.js";import"./DropdownField-DCxSSnaY.js";import"./isEqual-edacVGT3.js";import"./withOsdkMetrics-CgdP6FhV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-gvVvTYdX.js";import{O as u}from"./object-table-DFjBN_se.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C4B8pL_K.js";import"./Table-1Rz47czG.js";import"./index-BKV8xI6r.js";import"./Dialog-DBoNWch_.js";import"./cross-DXV_E_3w.js";import"./svgIconContainer-CbGtxYsB.js";import"./useBaseUiId-fY3jSIio.js";import"./InternalBackdrop-CNqwZwO_.js";import"./composite-U12YfSVj.js";import"./index-DFGGqFfD.js";import"./index-Y-Z5WvlR.js";import"./index-DCXWz-bU.js";import"./useEventCallback-DfimSMM1.js";import"./SkeletonBar-CVnxkGMs.js";import"./LoadingCell-DpBxHhHx.js";import"./ColumnConfigDialog-CWwBUXFN.js";import"./DraggableList-qN4wxLC1.js";import"./search-BpBkWvYy.js";import"./Input-B5s_ufnw.js";import"./useControlled-Cz01Hj64.js";import"./Button-CM6iPOlW.js";import"./small-cross-BV4qub4t.js";import"./ActionButton-BgSv7ShY.js";import"./Checkbox-DYgYeeFL.js";import"./useValueChanged-C3nivXet.js";import"./CollapsiblePanel-nOE5zCVh.js";import"./MultiColumnSortDialog-BdNNmNBG.js";import"./MenuTrigger-Q0BQc2_7.js";import"./CompositeItem-Ceyb7lxq.js";import"./ToolbarRootContext-_TM7bc4T.js";import"./getDisabledMountTransitionStyles-By9d2gS-.js";import"./getPseudoElementBounds-VG4Ji2N1.js";import"./chevron-down-DNhCoDCr.js";import"./index-Ct7dCOO5.js";import"./error-oahmhnhI.js";import"./BaseCbacBanner-D7bzuDy6.js";import"./makeExternalStore-eDqNkvsc.js";import"./Tooltip-gD2N15mM.js";import"./PopoverPopup-BLoCic10.js";import"./debounce-NgHrS01x.js";import"./useOsdkClient-Bxmva0H0.js";import"./tick-DcPidvDM.js";import"./DropdownField-CySas3qf.js";import"./isEqual-DTkPEdjj.js";import"./withOsdkMetrics-DQiolCAA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

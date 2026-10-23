import{f as b,j as a,r as i}from"./iframe-DbQMorYR.js";import{O as u}from"./object-table-CuscO_G6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DES03_oL.js";import"./Table-CyQzIj_n.js";import"./index-CHOCnb0f.js";import"./Dialog-h-CcUbBk.js";import"./cross-CE7V7QeW.js";import"./svgIconContainer-Cwo2AziM.js";import"./useBaseUiId-CKJO2MlM.js";import"./InternalBackdrop-Buze4txO.js";import"./composite-BjHYFgsw.js";import"./index-DpVhWfLY.js";import"./index-C0C-Vl87.js";import"./index-Dkbx_AOS.js";import"./useEventCallback-DDVJcajp.js";import"./SkeletonBar-CHw8W08J.js";import"./LoadingCell-CCoYUe9Q.js";import"./ColumnConfigDialog-CNsz8uaI.js";import"./DraggableList-DMkvCqAL.js";import"./search-ChjdgZEs.js";import"./Input-Q-MRNWMg.js";import"./useControlled-DOgj4MtD.js";import"./Button-S-V8j-aZ.js";import"./small-cross-Cq5E9zQ8.js";import"./ActionButton-CMzKEzrG.js";import"./Checkbox-Cacl4mQ_.js";import"./useValueChanged-BH_8poyT.js";import"./CollapsiblePanel-_cTDz2Uo.js";import"./MultiColumnSortDialog-C66gKvlF.js";import"./MenuTrigger-BTpBscFq.js";import"./CompositeItem-DHvx_K1s.js";import"./ToolbarRootContext-D619hRph.js";import"./getDisabledMountTransitionStyles-T22xlpK-.js";import"./getPseudoElementBounds-CcW8NnN6.js";import"./chevron-down-CVwhtMCl.js";import"./index-CwvWt_bc.js";import"./error-CkRxITwV.js";import"./BaseCbacBanner-QNT9vg-p.js";import"./makeExternalStore-smBq6vy5.js";import"./Tooltip-DxJ5tz0m.js";import"./PopoverPopup-uiUnYz9Z.js";import"./debounce-DMgjlNzy.js";import"./useOsdkClient-3n3qj0TA.js";import"./tick-DtRotk-c.js";import"./DropdownField-DwSBz2YC.js";import"./isEqual-CVwS2TLN.js";import"./withOsdkMetrics-BpNcVo1X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

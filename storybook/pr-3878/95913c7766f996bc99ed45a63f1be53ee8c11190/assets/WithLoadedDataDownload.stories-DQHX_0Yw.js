import{f as b,j as a,r as i}from"./iframe--ccl4y8N.js";import{O as u}from"./object-table-CR6w98zx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-eDRQxybW.js";import"./Table-CwJnTSLu.js";import"./index-Vig6W4vx.js";import"./Dialog-B__qzqHr.js";import"./cross-DXpDqiaU.js";import"./svgIconContainer-DanQ2deo.js";import"./useBaseUiId-fZY9l5U4.js";import"./InternalBackdrop-CcF1cHM3.js";import"./composite-BIOD5O0o.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./index-BGU5pc6Z.js";import"./useEventCallback-aG5NN5nQ.js";import"./SkeletonBar-CjkXHjrG.js";import"./LoadingCell-Dd_uLqZH.js";import"./ColumnConfigDialog-CMQdiYEt.js";import"./DraggableList-B5aeSYJb.js";import"./search-BSNzJLm0.js";import"./Input-CMEDwRP1.js";import"./useControlled-DnjkEDg6.js";import"./Button-WLNHPk3M.js";import"./small-cross-BpjjQ8hl.js";import"./ActionButton-CBwATAf_.js";import"./Checkbox-D4QlXADU.js";import"./useValueChanged-WfWZ-saZ.js";import"./CollapsiblePanel-CpfhC1pL.js";import"./MultiColumnSortDialog-DcUJ7g95.js";import"./MenuTrigger-DHolIQKG.js";import"./CompositeItem-CgDhVlw6.js";import"./ToolbarRootContext-DphUk-b_.js";import"./getDisabledMountTransitionStyles-Fp8bhwNn.js";import"./getPseudoElementBounds-C7suUQde.js";import"./chevron-down-CjjtTKBP.js";import"./index-DlRKciFL.js";import"./error-C1s20D2H.js";import"./BaseCbacBanner-BLo7Llvs.js";import"./makeExternalStore-CgFnBRv9.js";import"./Tooltip-CawT2Rn1.js";import"./PopoverPopup-D3eT8tPI.js";import"./debounce-C5k2VTX2.js";import"./useOsdkClient-VVFwCZnH.js";import"./tick-BSFeBmWe.js";import"./DropdownField-qGy4ydz7.js";import"./isEqual-Bv9sPlAd.js";import"./withOsdkMetrics-CgPXr3ib.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

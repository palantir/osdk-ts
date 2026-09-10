import{f as b,j as a,r as i}from"./iframe-vYDcoh77.js";import{O as u}from"./object-table-C88r-WHY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DSINEazd.js";import"./Table-DssIb2XA.js";import"./index-Dvlndinu.js";import"./Dialog-Di5B1QLo.js";import"./cross-Bh3JhpLG.js";import"./svgIconContainer-DRRBBWTo.js";import"./useBaseUiId-D0wGlEuT.js";import"./InternalBackdrop-Bmbg-Qqi.js";import"./composite-CbGeFR41.js";import"./index-CnEHE-8v.js";import"./index-k5xDOMrk.js";import"./index-SN9c52dU.js";import"./useEventCallback-HvgQ2Jp9.js";import"./SkeletonBar-DDd9jroq.js";import"./LoadingCell-BOe9IZBL.js";import"./ColumnConfigDialog-8IXi2hA2.js";import"./DraggableList-S-kgc1zg.js";import"./search-BbY6TLBc.js";import"./Input-D4hoKYSh.js";import"./useControlled-9JxLuZTe.js";import"./Button-C4utuT7d.js";import"./small-cross-DXqEeC7m.js";import"./ActionButton-CEGBUekT.js";import"./Checkbox-CSVANSDS.js";import"./useValueChanged-DvGgnr1I.js";import"./CollapsiblePanel-ClbxZsmn.js";import"./MultiColumnSortDialog-CFwnfwMI.js";import"./MenuTrigger-Bkb6t9HP.js";import"./CompositeItem-tKjm3ITX.js";import"./ToolbarRootContext-DC4Rn718.js";import"./getDisabledMountTransitionStyles-CPDXZ_d3.js";import"./getPseudoElementBounds-D-Q4b5_k.js";import"./chevron-down-DE4Yil-_.js";import"./index-C4jC_mo-.js";import"./error-BQSdaUYK.js";import"./BaseCbacBanner-B-S-FPnG.js";import"./makeExternalStore-C5vRMRFb.js";import"./Tooltip-7NXZ14u1.js";import"./PopoverPopup-Cgz3LCEw.js";import"./debounce-DUf2Feva.js";import"./useOsdkClient-Bc2tSKuP.js";import"./tick-CryZzvkg.js";import"./DropdownField-CfMw9HLs.js";import"./isEqual-B7tlXMU_.js";import"./withOsdkMetrics-o2mYvA2y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

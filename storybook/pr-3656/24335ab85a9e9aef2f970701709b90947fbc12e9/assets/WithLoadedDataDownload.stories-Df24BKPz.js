import{f as b,j as a,r as i}from"./iframe-HdcGgbdA.js";import{O as u}from"./object-table-CuenShC3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw_hR2Bn.js";import"./Table-CzpHUkoU.js";import"./index-e9PaiC4c.js";import"./Dialog-DtxUu4q3.js";import"./cross-BlrjY9iP.js";import"./svgIconContainer-quT0DxzY.js";import"./useBaseUiId-bzLFpoWT.js";import"./InternalBackdrop-BrU_RKHN.js";import"./composite-CUyk41eZ.js";import"./index-jZ7Wgdp9.js";import"./index-DgsRemEa.js";import"./index-C7hPrun6.js";import"./useEventCallback-gHXe8fUF.js";import"./SkeletonBar-CSzWa3XN.js";import"./LoadingCell-BwKBNfUF.js";import"./ColumnConfigDialog-BgcqhX78.js";import"./DraggableList-qR8Hygj3.js";import"./search-BXojRFA9.js";import"./Input-BY_Kw-ep.js";import"./useControlled-DKlPK4uU.js";import"./Button-DFu1lsOn.js";import"./small-cross-AuOZiNEe.js";import"./ActionButton-FT_-lE8U.js";import"./Checkbox-021smIRS.js";import"./useValueChanged-DmlpvgL3.js";import"./CollapsiblePanel-D-mzT31v.js";import"./MultiColumnSortDialog-C9mhdaFc.js";import"./MenuTrigger-DV3wD3lB.js";import"./CompositeItem-Bop6ZfZQ.js";import"./ToolbarRootContext-BQxfk6gj.js";import"./getDisabledMountTransitionStyles-snraxPat.js";import"./getPseudoElementBounds-DwiK9ttk.js";import"./chevron-down-pBVAZbVQ.js";import"./index-C2JC-hxO.js";import"./error-OlBsv4yQ.js";import"./BaseCbacBanner-DG69W7vt.js";import"./makeExternalStore-DI7WV0pI.js";import"./Tooltip-W1jVUm6n.js";import"./PopoverPopup-B1u9Ulhw.js";import"./toNumber-C4qKmEDN.js";import"./useOsdkClient-005dEyh0.js";import"./tick-Caq-927r.js";import"./DropdownField-B4PT1k0h.js";import"./withOsdkMetrics-E6333lzv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

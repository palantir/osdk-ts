import{f as b,j as a,r as i}from"./iframe-BRAN6mwJ.js";import{O as u}from"./object-table-Bx2wWP_j.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-X-_euM3S.js";import"./Table-DRbSoQOy.js";import"./index-BtPJ513K.js";import"./Dialog-CMZdYx9W.js";import"./cross-fVcbgOgO.js";import"./svgIconContainer-VG5m1OWT.js";import"./useBaseUiId-As0o-zvu.js";import"./InternalBackdrop-CZ3_cdU8.js";import"./composite-JH2uFn8O.js";import"./index-CWFn4kDt.js";import"./index-Bjm1W2Qh.js";import"./index-3LlDx94I.js";import"./useEventCallback-K_kUc5Bb.js";import"./SkeletonBar-C5hstbkk.js";import"./LoadingCell-DYEqBQ_w.js";import"./ColumnConfigDialog-Bs8h4LbN.js";import"./DraggableList-DFAcJjrk.js";import"./search-BZSvBuOj.js";import"./Input-D4S4zska.js";import"./useControlled-Bl0Kxrtm.js";import"./Button-DvBPGTcG.js";import"./small-cross-CXdjjvcg.js";import"./ActionButton-C8AHXfuu.js";import"./Checkbox-CG28xJMY.js";import"./useValueChanged-CCmJ6sLa.js";import"./CollapsiblePanel-D8Nk-qTM.js";import"./MultiColumnSortDialog-CxxP_kx4.js";import"./MenuTrigger-DGFLqotq.js";import"./CompositeItem-C1kNAstD.js";import"./ToolbarRootContext-CGMWo3-1.js";import"./getDisabledMountTransitionStyles-BfkYVs9f.js";import"./getPseudoElementBounds-DvRiCaZy.js";import"./chevron-down-BIA4jTfU.js";import"./index-DmVpTzvr.js";import"./error-CudqN4ed.js";import"./BaseCbacBanner-DI6p8IW2.js";import"./makeExternalStore-BHZHOET0.js";import"./Tooltip-CzBe-wDP.js";import"./PopoverPopup-FlGwIyET.js";import"./toNumber-BIU6FNYy.js";import"./useOsdkClient-nWHxm1RL.js";import"./tick-BfHb9-1x.js";import"./DropdownField-CJWDjA1V.js";import"./withOsdkMetrics-DkYyIFw2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Cr2bpw19.js";import{O as u}from"./object-table-DCOccJp2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_Wd2tIW.js";import"./Table-BjXngxCh.js";import"./index-HKSeYDtX.js";import"./Dialog-DgTafkr7.js";import"./cross-DerUaPtE.js";import"./svgIconContainer-BdwTWCXC.js";import"./useBaseUiId-BsHSNQc2.js";import"./InternalBackdrop-D4g3oYCc.js";import"./composite-Cktz544g.js";import"./index-tVKD-Epk.js";import"./index-BWlzJ_-u.js";import"./index-Bk25D5KY.js";import"./useEventCallback-0Un1rJGa.js";import"./SkeletonBar-CeIQhfQy.js";import"./LoadingCell-BxDMRyGf.js";import"./ColumnConfigDialog-B5IDj2oc.js";import"./DraggableList-CYS1PCg6.js";import"./search-aGII2Iab.js";import"./Input-D8iQjGaO.js";import"./useControlled-CtsC-hEl.js";import"./Button-wtCP8XMP.js";import"./small-cross-d4ra4Um-.js";import"./ActionButton-HPB4ADKq.js";import"./Checkbox-Cjhd7iqA.js";import"./useValueChanged-D31dGWaR.js";import"./CollapsiblePanel-DNu3bG03.js";import"./MultiColumnSortDialog-CkvUreHh.js";import"./MenuTrigger-1ulPFAHS.js";import"./CompositeItem-DiUvRjmE.js";import"./ToolbarRootContext-CivexTIu.js";import"./getDisabledMountTransitionStyles-DZln-1Iq.js";import"./getPseudoElementBounds-BCxYLTqf.js";import"./chevron-down-CPF_RvK3.js";import"./index-qHL-28bq.js";import"./error-s73FCl63.js";import"./BaseCbacBanner-Dw8piuko.js";import"./makeExternalStore-BO-peT-K.js";import"./Tooltip-VnOrH8hU.js";import"./isObject-srhcKzzy.js";import"./debounce-B3GzHEdf.js";import"./useOsdkClient-ClyAxHlq.js";import"./tick-BRyPHZ4_.js";import"./DropdownField-BfaMBsWj.js";import"./isEqual-eKau0Myf.js";import"./_baseIsEqual-tNXrt5IF.js";import"./withOsdkMetrics-Ceo_vgdr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

import{f as b,j as a,r as i}from"./iframe-BYL7doMn.js";import{O as u}from"./object-table-V267myMJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-WjgK3yby.js";import"./Table-BA_92qvg.js";import"./index-DGp8JCsS.js";import"./Dialog-CMqzmjeu.js";import"./cross-As5FKXY-.js";import"./svgIconContainer-_aqU2ceG.js";import"./useBaseUiId-BDHrOOKV.js";import"./InternalBackdrop-Dj_rHuJA.js";import"./composite-DVT3Eov_.js";import"./index-BNCWFBwe.js";import"./index-B9iEbSri.js";import"./index-DPYDxTi4.js";import"./useEventCallback-Di1Qg9EE.js";import"./SkeletonBar-5t32e3g1.js";import"./LoadingCell-DcOdnC0j.js";import"./ColumnConfigDialog-CMj_U7ZP.js";import"./DraggableList-Du7vhXR6.js";import"./search-D5xrbzeg.js";import"./Input-CdbOxxHJ.js";import"./useControlled-v5GLNOSM.js";import"./Button-D8YUSgO5.js";import"./small-cross-BTIlfNGz.js";import"./ActionButton-qrKLXhxR.js";import"./Checkbox-PCLWJ8pS.js";import"./useValueChanged-CPcnC0pw.js";import"./CollapsiblePanel-C3ibyufi.js";import"./MultiColumnSortDialog-DRNlFUoI.js";import"./MenuTrigger-5G_f-uSX.js";import"./CompositeItem--33NfDsU.js";import"./ToolbarRootContext-BRf2421Z.js";import"./getDisabledMountTransitionStyles-CeI4j3Nx.js";import"./getPseudoElementBounds-DNSU3P07.js";import"./chevron-down-CE9oTrOB.js";import"./index-C_YsYgd4.js";import"./error-CTTbPhSu.js";import"./BaseCbacBanner-ZpT21Jaa.js";import"./makeExternalStore-DN7NmVRj.js";import"./Tooltip-BCtrBqwm.js";import"./PopoverPopup-CNV_9kc0.js";import"./debounce-RtjII4tG.js";import"./useOsdkClient-D6ajiaFe.js";import"./tick-DO5AFC-5.js";import"./DropdownField-eU4OOCad.js";import"./isEqual-BZ_ll_pL.js";import"./withOsdkMetrics-Cw_wIhS5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

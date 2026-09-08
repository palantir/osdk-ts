import{f as b,j as a,r as i}from"./iframe-CxUFDRLk.js";import{O as u}from"./object-table-Cwk7xm14.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BOCVFqPP.js";import"./Table-Dqfk7wyN.js";import"./index-D3P2PnfT.js";import"./Dialog-BU96hrNx.js";import"./cross-BABVEZtV.js";import"./svgIconContainer-lhP_uqYt.js";import"./useBaseUiId-B_I-AE6w.js";import"./InternalBackdrop-2L9B9MFF.js";import"./composite-C6x_RQDW.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./index-D6DNyq_c.js";import"./useEventCallback-ZNNLb4EC.js";import"./SkeletonBar-B-5lxJx6.js";import"./LoadingCell-D2xXOTjr.js";import"./ColumnConfigDialog-CEY5behw.js";import"./DraggableList-B2trtdD6.js";import"./search-Bycz8Mke.js";import"./Input-BnQ1Pqm-.js";import"./useControlled-i_PgyXUB.js";import"./Button-DfD1hoUH.js";import"./small-cross-HxQFWB4N.js";import"./ActionButton-D1b2dROh.js";import"./Checkbox-BoRXXaXQ.js";import"./useValueChanged-DiYqY4ta.js";import"./CollapsiblePanel-KaZ7CRFP.js";import"./MultiColumnSortDialog-DuDCgPoI.js";import"./MenuTrigger-Cnc_xPLq.js";import"./CompositeItem-Bm2eQNpM.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./getDisabledMountTransitionStyles-kKhuwNUe.js";import"./getPseudoElementBounds-0LLCjN2z.js";import"./chevron-down-CGVLA0Cv.js";import"./index-Dh-mEvCI.js";import"./error-D-IJQZZn.js";import"./BaseCbacBanner-CighYLtt.js";import"./makeExternalStore-YOPDBlSx.js";import"./Tooltip-CMU-bxvV.js";import"./PopoverPopup-pze7gDjU.js";import"./debounce-CAh4NXmJ.js";import"./useOsdkClient-BpG5SD2k.js";import"./tick-D4sARw8j.js";import"./DropdownField-DPW3dnFU.js";import"./isEqual-GlpYI2kv.js";import"./withOsdkMetrics-CPTjHpfw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-B9KQ9d_Q.js";import{O as u}from"./object-table-DqaTrbMk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DeuuX8Pw.js";import"./Table-DOYY4qcj.js";import"./index-DjGmCvwN.js";import"./Dialog-CYyi-44k.js";import"./cross-CYACTAyc.js";import"./svgIconContainer-Dkipw4BE.js";import"./useBaseUiId-CACmZoDt.js";import"./InternalBackdrop-OOq8jdLP.js";import"./composite-Dkfcd9K6.js";import"./index-DeQVC1y1.js";import"./index-abmL8mI0.js";import"./index-DKOGf7iK.js";import"./useEventCallback-Cd4OTTOk.js";import"./SkeletonBar-atgdfo4P.js";import"./LoadingCell-CucVNeOI.js";import"./ColumnConfigDialog-C7qfhNEC.js";import"./DraggableList-P4LEG0x_.js";import"./search-CLgwBxIh.js";import"./Input-3YBkK_9B.js";import"./useControlled-7mPXTkWJ.js";import"./Button-CsNzNUJM.js";import"./small-cross-BYgKAIfM.js";import"./ActionButton-DjuxRTRi.js";import"./Checkbox-DN2XN2fh.js";import"./useValueChanged-Cz_ZJD7e.js";import"./CollapsiblePanel-BmB-jOoE.js";import"./MultiColumnSortDialog-RNmGD8qK.js";import"./MenuTrigger-BejjvYj7.js";import"./CompositeItem-lvWGvgnE.js";import"./ToolbarRootContext-CDRb2CiM.js";import"./getDisabledMountTransitionStyles-bdhvM1oO.js";import"./getPseudoElementBounds-BQaZMSHF.js";import"./chevron-down-C-NtZAg2.js";import"./index-C7_CeCDa.js";import"./error-aMms0fQH.js";import"./BaseCbacBanner-BtCiqxx6.js";import"./makeExternalStore-foZLPFy5.js";import"./Tooltip-RtLjcY2v.js";import"./PopoverPopup-Ddll_-Gc.js";import"./toNumber-C2lagFO-.js";import"./useOsdkClient-DFf46QMV.js";import"./tick-Cw2UPp6W.js";import"./DropdownField-BuIeHmzL.js";import"./withOsdkMetrics-B8cbL6XT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

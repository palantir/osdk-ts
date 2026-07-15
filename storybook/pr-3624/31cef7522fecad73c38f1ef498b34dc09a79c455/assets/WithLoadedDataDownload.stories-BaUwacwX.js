import{f as b,j as a,r as i}from"./iframe-Br9LRUXS.js";import{O as u}from"./object-table-Ba9dwImi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_qrdcre.js";import"./Table-D2b2fni6.js";import"./index-CZz-vvhK.js";import"./Dialog-BAVvfVz5.js";import"./cross-k5kdi8c7.js";import"./svgIconContainer-Cw_Fe7ch.js";import"./useBaseUiId-BADWPJVf.js";import"./InternalBackdrop-PRSBTaEj.js";import"./composite-BvtS-MCL.js";import"./index-BMkqW9Ai.js";import"./index-B05D-_kz.js";import"./index-CGMzlPa0.js";import"./useEventCallback-CxNSVsWt.js";import"./SkeletonBar-BPPe8Dwi.js";import"./LoadingCell-C0ox8oD7.js";import"./ColumnConfigDialog-ydmSWR4T.js";import"./DraggableList-DIFshxrt.js";import"./search-CyHs5wWO.js";import"./Input-B5eDlNiP.js";import"./useControlled-zE00DqWa.js";import"./Button-BwHiS4QI.js";import"./small-cross-BDIclt6W.js";import"./ActionButton-BQDjoK39.js";import"./Checkbox-CYi6lRFg.js";import"./useValueChanged-DmdwyfB6.js";import"./CollapsiblePanel-C70k5KlF.js";import"./MultiColumnSortDialog-BPlkYAys.js";import"./MenuTrigger-tVY73qPz.js";import"./CompositeItem-BUq-oaxe.js";import"./ToolbarRootContext-CYgMjT8_.js";import"./getDisabledMountTransitionStyles-xzC4aXXo.js";import"./getPseudoElementBounds-4_NOdflx.js";import"./chevron-down-fhSKKc30.js";import"./index-BMxCDFSh.js";import"./error-BYqIwzq6.js";import"./BaseCbacBanner-BoDuATLr.js";import"./makeExternalStore-KBYueQvT.js";import"./Tooltip-BSGxuAlV.js";import"./PopoverPopup-KcHXGeVb.js";import"./toNumber-DkwHSs3u.js";import"./useOsdkClient-Cl8usTaN.js";import"./tick-gYk_N5jC.js";import"./DropdownField-D5TyrI6_.js";import"./withOsdkMetrics-C5sh7xBo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

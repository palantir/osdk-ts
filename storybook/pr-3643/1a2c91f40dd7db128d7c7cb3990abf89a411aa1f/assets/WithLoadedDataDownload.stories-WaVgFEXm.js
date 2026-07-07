import{f as b,j as a,r as i}from"./iframe-DyXIXGAR.js";import{O as u}from"./object-table-Co4kK50Y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPUGA4_w.js";import"./Table-0Hnv4J3y.js";import"./index-D_z_GSL5.js";import"./Dialog-CJHUoHH0.js";import"./cross-DcoLII47.js";import"./svgIconContainer-CyG8huw5.js";import"./useBaseUiId-Bex4jiwR.js";import"./InternalBackdrop-ChBg2eR-.js";import"./composite-BlnldHGd.js";import"./index-BK-KP2l0.js";import"./index-BNyU16np.js";import"./index-6EKWPOn3.js";import"./useEventCallback-CNgDOaNc.js";import"./SkeletonBar-BSq_7v8a.js";import"./LoadingCell-B5heaUkH.js";import"./ColumnConfigDialog-Bj4uS0JN.js";import"./DraggableList-CaPoJ5pe.js";import"./search-gYTl5Wxg.js";import"./Input-Dyc_Hx0U.js";import"./useControlled-DiZvw_qP.js";import"./Button-C3GbEyJU.js";import"./small-cross-BYPmH78T.js";import"./ActionButton-B0mdGVC-.js";import"./Checkbox-BIQrMqU2.js";import"./useValueChanged-wlHHBhZr.js";import"./CollapsiblePanel-UFQ1fzNO.js";import"./MultiColumnSortDialog-B_9HTeoq.js";import"./MenuTrigger-CyQojLO2.js";import"./CompositeItem-BDWwkTG_.js";import"./ToolbarRootContext-Bgq9ZztY.js";import"./getDisabledMountTransitionStyles-kgqqXkpt.js";import"./getPseudoElementBounds-FjKlWPr5.js";import"./chevron-down-CKmtchEU.js";import"./index-CcvHXuEm.js";import"./error-BXWdOUIw.js";import"./BaseCbacBanner-BnVAtHMp.js";import"./makeExternalStore-CX4MZXW6.js";import"./Tooltip-BaeCa8F8.js";import"./PopoverPopup-B9i6H3Qc.js";import"./toNumber-BdBFt-nB.js";import"./useOsdkClient-M10W2c5_.js";import"./tick-DaelROt4.js";import"./DropdownField-DcaaeQ_9.js";import"./withOsdkMetrics-Hrkwbp5U.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

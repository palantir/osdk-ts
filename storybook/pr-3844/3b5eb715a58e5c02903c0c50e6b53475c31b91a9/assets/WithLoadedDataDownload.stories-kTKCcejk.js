import{f as b,j as a,r as i}from"./iframe-DRBkbE1i.js";import{O as u}from"./object-table-C_j_0jcR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bhy-vhLy.js";import"./Table-C1q3NVW5.js";import"./index-Ga9rMgQo.js";import"./Dialog-DpzItFLS.js";import"./cross-0Mj0-pu3.js";import"./svgIconContainer-GQruUs5P.js";import"./useBaseUiId-BZVOUgQ3.js";import"./InternalBackdrop-1gUwgard.js";import"./composite-D-yjAodN.js";import"./index-BnWv0qmu.js";import"./index-ucRzESfs.js";import"./index-sOMbo7xM.js";import"./useEventCallback-CrX-MfN8.js";import"./SkeletonBar-Du0j_bJ1.js";import"./LoadingCell-B-pvt2hb.js";import"./ColumnConfigDialog-D9xD06Iq.js";import"./DraggableList-ClvcvVVQ.js";import"./search-BCFpbh-w.js";import"./Input-5siurHkP.js";import"./useControlled-DwqloCO6.js";import"./isEqual-BUHBmoa0.js";import"./isObject-DtZ0hGEB.js";import"./Button-BLvvEGYy.js";import"./ActionButton-C53YW_7q.js";import"./Checkbox-ClDUwm9r.js";import"./useValueChanged-CwOVIz65.js";import"./CollapsiblePanel-B6DMNgeu.js";import"./MultiColumnSortDialog-DwXXtltp.js";import"./MenuTrigger-Cb_yabDY.js";import"./CompositeItem-DFqDcWEk.js";import"./ToolbarRootContext-D1BoJMvj.js";import"./getDisabledMountTransitionStyles-BsNbfQXH.js";import"./getPseudoElementBounds-BEb3Hnaa.js";import"./chevron-down-XFaMqkP6.js";import"./index-CV6Dvu1R.js";import"./error-CZAmZxlc.js";import"./BaseCbacBanner-DHSUKASY.js";import"./makeExternalStore-zFNhFc_7.js";import"./Tooltip-kNmVaPUd.js";import"./PopoverPopup-DnoVF_UW.js";import"./toNumber-Bn9QajWk.js";import"./useOsdkClient-CJVpIN8w.js";import"./tick-HaTM7KoE.js";import"./DropdownField-DuRoHfH_.js";import"./withOsdkMetrics-BK4JgsVP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

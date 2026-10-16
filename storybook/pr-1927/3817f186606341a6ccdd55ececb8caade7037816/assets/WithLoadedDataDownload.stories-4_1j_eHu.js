import{f as b,j as a,r as i}from"./iframe-DmjyB9qr.js";import{O as u}from"./object-table-BgGiwYnL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CAx3wjDj.js";import"./Table-fnyTkzoV.js";import"./index-D4TDlc_O.js";import"./Dialog-3AtA3abT.js";import"./cross-C5lxgD8z.js";import"./svgIconContainer-D2c8Ba4-.js";import"./useBaseUiId-BIBlatd5.js";import"./InternalBackdrop-CPUdsPru.js";import"./composite-ClGRLeRM.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./index-DaPZuE20.js";import"./useEventCallback-BDzgTZ89.js";import"./SkeletonBar-D7_1dMLv.js";import"./LoadingCell-iGmoUmLt.js";import"./ColumnConfigDialog-5IQv3rnK.js";import"./DraggableList-Zr6y84A2.js";import"./search-CQ17z9WA.js";import"./Input-CLw0N-7T.js";import"./useControlled-Bb9znHKm.js";import"./Button-DBHSL7QN.js";import"./small-cross-DjWAfLNP.js";import"./ActionButton-B_Fb6ob-.js";import"./Checkbox-B1MeKgvP.js";import"./useValueChanged-BLYKdZPH.js";import"./CollapsiblePanel-BBVpPSYq.js";import"./MultiColumnSortDialog-BHEa5kPa.js";import"./MenuTrigger-Bt2b4Jd1.js";import"./CompositeItem-DhSM1hah.js";import"./ToolbarRootContext-9w_REGks.js";import"./getDisabledMountTransitionStyles-Cs3lm4js.js";import"./getPseudoElementBounds-DttlvabX.js";import"./chevron-down-8HOE1Tp7.js";import"./index-ByDovlnf.js";import"./error-C5ZuOycH.js";import"./BaseCbacBanner-zoKqjEbA.js";import"./makeExternalStore-BpvdNYu5.js";import"./Tooltip-DoFgPSBW.js";import"./PopoverPopup-B54LMItf.js";import"./debounce-BacvmWfK.js";import"./useOsdkClient-C4LtXzbF.js";import"./tick-BMnkz0dp.js";import"./DropdownField-B6gxSasK.js";import"./isEqual-8t1qMO1j.js";import"./withOsdkMetrics-DRRr7i5M.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

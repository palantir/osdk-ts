import{f as b,j as a,r as i}from"./iframe-DIZ-Bu8w.js";import{O as u}from"./object-table-DXEf7QZp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BCeaJvSh.js";import"./Table-CpSGMOkR.js";import"./index-U9LN2Bz3.js";import"./Dialog-DRlRU3T4.js";import"./cross-DxgTLWiz.js";import"./svgIconContainer-IKodGSm3.js";import"./useBaseUiId-CBNbS5zc.js";import"./InternalBackdrop-yM8Okk6y.js";import"./composite-g9iDGAQe.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./index-gGnzolpv.js";import"./useEventCallback-BDzfSq7p.js";import"./SkeletonBar-C61w2HiA.js";import"./LoadingCell-DjxUE7vP.js";import"./ColumnConfigDialog-CK0v3LgS.js";import"./DraggableList-DzoglXEc.js";import"./search-DmtLA8wB.js";import"./Input-CIeGAlok.js";import"./useControlled-CLVHgJsp.js";import"./Button-B1ALhdFr.js";import"./small-cross-CRaqECGa.js";import"./ActionButton-Dlu16gsr.js";import"./Checkbox-YrU0nqcl.js";import"./useValueChanged-CGUyZDFO.js";import"./CollapsiblePanel-DPTmyULg.js";import"./MultiColumnSortDialog-DqqrwBbG.js";import"./MenuTrigger-DEfP1V7x.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./getDisabledMountTransitionStyles-CQ2DPXAp.js";import"./getPseudoElementBounds-BUnDKKdE.js";import"./chevron-down-DSfB9wHE.js";import"./index-CkInxViu.js";import"./error-uSSd40F1.js";import"./BaseCbacBanner-Qx6E67Bb.js";import"./makeExternalStore-DE0i2YSI.js";import"./Tooltip-BMr-3bqI.js";import"./PopoverPopup-DYZGNom1.js";import"./debounce-C3kkqtjg.js";import"./useOsdkClient-BScEIiCr.js";import"./tick-BgvY-8AZ.js";import"./DropdownField-qfJaQs7S.js";import"./isEqual-luc_zc0m.js";import"./withOsdkMetrics-CD3VlAOg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

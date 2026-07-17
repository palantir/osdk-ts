import{f as b,j as a,r as i}from"./iframe-BPiQ61NS.js";import{O as u}from"./object-table-Bq7QN1Uu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJQ9k_fi.js";import"./Table-d1_7QzMV.js";import"./index-SZSXhZUW.js";import"./Dialog-C-d_ptLK.js";import"./cross-DvC9490N.js";import"./svgIconContainer-DDtODrDy.js";import"./useBaseUiId-Dvfg6NNH.js";import"./InternalBackdrop-CrULpEtL.js";import"./composite-By-vLfBy.js";import"./index-CqBvzeKE.js";import"./index-D5i89T0j.js";import"./index-oOO_dSqv.js";import"./useEventCallback-CFvCFGlh.js";import"./SkeletonBar-CpQYO9AF.js";import"./LoadingCell-tT8C8wuQ.js";import"./ColumnConfigDialog-DyiuPB9j.js";import"./DraggableList-BhWLwxlx.js";import"./search-C6hujKpf.js";import"./Input-DiYsbwYq.js";import"./useControlled-BltYGfw_.js";import"./isEqual-CmhzN_Hp.js";import"./isObject-5vLlkjFm.js";import"./Button-DJAQG-pE.js";import"./ActionButton-B16P-sif.js";import"./Checkbox-xDmEWHzv.js";import"./useValueChanged-BkjTAh5F.js";import"./CollapsiblePanel-D7dt4F-R.js";import"./MultiColumnSortDialog-Cw2ylYQt.js";import"./MenuTrigger-D9u0Vx_S.js";import"./CompositeItem-BsWK_ELB.js";import"./ToolbarRootContext-CXU6ndfp.js";import"./getDisabledMountTransitionStyles-PRz0u1s8.js";import"./getPseudoElementBounds-BCfH95-P.js";import"./chevron-down-gsnURcSJ.js";import"./index-CVebdf2y.js";import"./error-NzoaNWEe.js";import"./BaseCbacBanner-CiLdgRn9.js";import"./makeExternalStore-BNSm35RL.js";import"./Tooltip-CITVKjLr.js";import"./PopoverPopup-CLrei6NE.js";import"./toNumber-By6KbBaB.js";import"./useOsdkClient-P38RMJ1w.js";import"./tick-D0CWLy7V.js";import"./DropdownField-BDvBVq3P.js";import"./withOsdkMetrics-Cl-rqjb5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

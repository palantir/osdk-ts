import{f as b,j as a,r as i}from"./iframe-CMhwc6yu.js";import{O as u}from"./object-table-Rq5DxrG4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CbbeoF4N.js";import"./Table-DRQCyrCZ.js";import"./index-C2NWml_0.js";import"./Dialog-D-n2VjII.js";import"./cross-CI2EuVLe.js";import"./svgIconContainer-Do_XH38C.js";import"./useBaseUiId-C-AKSjpe.js";import"./InternalBackdrop-YttCJD5R.js";import"./composite-BeSuuE0r.js";import"./index-CLTQ2YZZ.js";import"./index-CYf-jFq0.js";import"./index-CcLC40Dq.js";import"./useEventCallback-Duz16abh.js";import"./SkeletonBar-Bbh35rlF.js";import"./LoadingCell-CFWKBMe3.js";import"./ColumnConfigDialog-CzL28oxe.js";import"./DraggableList-MH7eKqEF.js";import"./search-BYZu81Ts.js";import"./Input-7eUEZAd2.js";import"./useControlled-MLlvuDBf.js";import"./isEqual-xtw4nyWu.js";import"./isObject-nzaBmHWQ.js";import"./Button-CE_QE-eV.js";import"./ActionButton-CPnmehQy.js";import"./Checkbox-8RIdGXXF.js";import"./useValueChanged-cQhh4GcD.js";import"./CollapsiblePanel-EqTeVic5.js";import"./MultiColumnSortDialog-BYxVW7s0.js";import"./MenuTrigger-Bvljeq7z.js";import"./CompositeItem-C5Pf2lIH.js";import"./ToolbarRootContext-otfQj27w.js";import"./getDisabledMountTransitionStyles-pTrQZdF3.js";import"./getPseudoElementBounds-DQ39mZJs.js";import"./chevron-down-B9twCniC.js";import"./index-DCQ6MC0R.js";import"./error-DiGCKWWT.js";import"./BaseCbacBanner-Ci7fn3Ji.js";import"./makeExternalStore-Cd3U3q8T.js";import"./Tooltip-CfcrXACM.js";import"./PopoverPopup-DMZFfjT6.js";import"./toNumber-qPcxCkKr.js";import"./useOsdkClient-BAYVrfgb.js";import"./tick-CTaHT6NZ.js";import"./DropdownField-B2438tnE.js";import"./withOsdkMetrics-C7tthBfr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

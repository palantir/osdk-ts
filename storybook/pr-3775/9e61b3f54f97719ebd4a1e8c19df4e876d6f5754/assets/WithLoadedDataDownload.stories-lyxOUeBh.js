import{f as b,j as a,r as i}from"./iframe-ZAeU3zkK.js";import{O as u}from"./object-table-BI32PtsP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFsW7uwK.js";import"./Table-l3mPBzd1.js";import"./index-C9bCg_D0.js";import"./Dialog-Btj1QDjF.js";import"./cross-ItoF_QFP.js";import"./svgIconContainer-kZIk52CD.js";import"./useBaseUiId-Cr86WIIa.js";import"./InternalBackdrop-lV80e5CV.js";import"./composite-DFfGy7b5.js";import"./index-BrY0sG19.js";import"./index-BSgExDm2.js";import"./index-B_QXRGZh.js";import"./useEventCallback-D1zmtjsN.js";import"./SkeletonBar-ke7cILwX.js";import"./LoadingCell-q8CMiXdE.js";import"./ColumnConfigDialog-CtJCCHtI.js";import"./DraggableList-BDeEbSFQ.js";import"./search-DGJLlzUF.js";import"./Input-DZJFdIf0.js";import"./useControlled-CsDf-xSS.js";import"./isEqual-B3qe3pS1.js";import"./isObject-DRgm0nAf.js";import"./Button-btiulsx-.js";import"./ActionButton-swfO8HME.js";import"./Checkbox-BaVNDqn9.js";import"./useValueChanged-BqnyuSl8.js";import"./CollapsiblePanel-BwEoPyuP.js";import"./MultiColumnSortDialog-C9IFmKTT.js";import"./MenuTrigger-Uiz0PELH.js";import"./CompositeItem-B-J0xggi.js";import"./ToolbarRootContext-6UgAqfrb.js";import"./getDisabledMountTransitionStyles-KElE6z_O.js";import"./getPseudoElementBounds-BeDlRbET.js";import"./chevron-down-D_k3Y51h.js";import"./index-CjDYZjtC.js";import"./error-MpDB7OgY.js";import"./BaseCbacBanner-BEF2jKkB.js";import"./makeExternalStore-CLF-6_HY.js";import"./Tooltip-h2W3NXYk.js";import"./PopoverPopup-COPtTg9S.js";import"./toNumber-CEti0auR.js";import"./useOsdkClient-CACsolCb.js";import"./tick-CK1j0r_S.js";import"./DropdownField-D279pPiY.js";import"./withOsdkMetrics-D_HYVVwC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DKy1AV9s.js";import{O as u}from"./object-table-B9HBiAT2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BQnNVSqD.js";import"./Table-CgA0pJZo.js";import"./index-Du9AgFeI.js";import"./Dialog-CzH2sOkG.js";import"./cross-DWvNM6aD.js";import"./svgIconContainer-CmdDPKdW.js";import"./useBaseUiId-DXR-gGQN.js";import"./InternalBackdrop-Hx_fAg69.js";import"./composite-DIA_5bjb.js";import"./index-DYHGdsLl.js";import"./index-WeJ_Lope.js";import"./index-_0GvayOq.js";import"./useEventCallback-Dr0GHl4b.js";import"./SkeletonBar-5tg7WMK9.js";import"./LoadingCell-BRyArc3C.js";import"./ColumnConfigDialog-DIDxiY08.js";import"./DraggableList-CQBonzRI.js";import"./search-CoqdhJoi.js";import"./Input-ClkjPeCn.js";import"./useControlled-BeCa4j1K.js";import"./Button-CT75AnP8.js";import"./small-cross-B73khPHd.js";import"./ActionButton-Ch5xzSjH.js";import"./Checkbox-yfgCXt3G.js";import"./useValueChanged-Dzc4R6hM.js";import"./CollapsiblePanel-XdZ5rNxN.js";import"./MultiColumnSortDialog-Be3EoEW-.js";import"./MenuTrigger-DEiICrj5.js";import"./CompositeItem-D1YEdKX1.js";import"./ToolbarRootContext-B96YkNbH.js";import"./getDisabledMountTransitionStyles-DMo4BEvH.js";import"./getPseudoElementBounds-8aym6eDS.js";import"./chevron-down-BgiHHBSL.js";import"./index-DUh9Rd_7.js";import"./error-B2JG09GC.js";import"./BaseCbacBanner-DaWThKyM.js";import"./makeExternalStore-O-ViDFSd.js";import"./Tooltip-STNIv-wy.js";import"./PopoverPopup-Bt_JvPjL.js";import"./debounce-De_uQl3O.js";import"./useOsdkClient-BTgiLzGJ.js";import"./tick-CPA85Yzm.js";import"./DropdownField-CoeAa-lS.js";import"./isEqual-DGhgqELw.js";import"./withOsdkMetrics-DmspcQnU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

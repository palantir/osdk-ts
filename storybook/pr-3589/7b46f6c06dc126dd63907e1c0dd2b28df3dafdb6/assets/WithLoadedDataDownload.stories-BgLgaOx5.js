import{f as b,j as a,r as i}from"./iframe-OmSGaNMj.js";import{O as u}from"./object-table-DGjPEUXD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BxTFTclk.js";import"./Table-B0N7Xvm2.js";import"./index-Csst3lF4.js";import"./Dialog-BbaUQVhr.js";import"./cross-QB_I_1on.js";import"./svgIconContainer-B_tunsrW.js";import"./useBaseUiId-D4LJig10.js";import"./InternalBackdrop-BymBPe4c.js";import"./composite-DbP2kJ4g.js";import"./index-iJ6fimfD.js";import"./index-CBhglGWR.js";import"./index-Dr3lKNKa.js";import"./useEventCallback-BZU6NWuq.js";import"./SkeletonBar-DcZkeKhX.js";import"./LoadingCell-mRjrRfsk.js";import"./ColumnConfigDialog-CPe7NlBE.js";import"./DraggableList-8-Gvdbul.js";import"./search-ChqSwl5J.js";import"./Input-DhRElkh1.js";import"./useControlled-DDBgOSEI.js";import"./Button-D7UfI-My.js";import"./small-cross-Cr8GySmf.js";import"./ActionButton-CNpSKkLf.js";import"./Checkbox-C3Jd2cOX.js";import"./minus--kxQeT7R.js";import"./tick-6_fpN_ta.js";import"./useValueChanged-BmHgQi-w.js";import"./caret-down-DT_ffZip.js";import"./CollapsiblePanel-Ck2PIT9h.js";import"./MultiColumnSortDialog-BaeCB3D7.js";import"./MenuTrigger-S-xrKkIx.js";import"./CompositeItem-D9sf5ABe.js";import"./ToolbarRootContext-z4tZARu2.js";import"./getDisabledMountTransitionStyles-DBooNIRY.js";import"./getPseudoElementBounds-Bkn5qV2f.js";import"./chevron-down-Vm8dnS-v.js";import"./index-YTYrmtEq.js";import"./error-Dtvo8XX1.js";import"./BaseCbacBanner-DEd1ErA6.js";import"./makeExternalStore-DPvRmNE7.js";import"./Tooltip-BaCZcblq.js";import"./PopoverPopup-Gk_PS6w3.js";import"./toNumber-NVqzuEKT.js";import"./useOsdkClient-BNcQihPk.js";import"./DropdownField-BK60ilsJ.js";import"./withOsdkMetrics-CfiDkPmx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

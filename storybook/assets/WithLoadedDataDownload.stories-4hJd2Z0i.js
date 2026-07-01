import{f as b,j as a,r as i}from"./iframe-CKFk0arE.js";import{O as u}from"./object-table-CMqNqcE8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CZVHKIr_.js";import"./index-BjQgtYP9.js";import"./Dialog-D3AUol0J.js";import"./cross-fbZdFG_D.js";import"./svgIconContainer-BAT-Ac90.js";import"./useBaseUiId-DAw5VlH9.js";import"./InternalBackdrop-BGYD01M3.js";import"./composite-EscgZUjl.js";import"./index-BLoK5Iyu.js";import"./index-BPzeTJNp.js";import"./index-BQOiH8-N.js";import"./useEventCallback-B23bYEbg.js";import"./SkeletonBar-BBh5BiZW.js";import"./LoadingCell-N308t6eM.js";import"./ColumnConfigDialog-BNix9NWX.js";import"./DraggableList-D4xIW7L-.js";import"./search-BLu0EWyQ.js";import"./Input-VZxUx3mR.js";import"./useControlled-BmBr0tvV.js";import"./Button-c1BMMVFp.js";import"./small-cross-C_slTsDW.js";import"./ActionButton-BqBo569N.js";import"./Checkbox-BFZHIrw4.js";import"./minus-BiUPw5-m.js";import"./tick-ByAIYd8F.js";import"./useValueChanged-DdU8FLRh.js";import"./caret-down-DYKasZ1f.js";import"./CollapsiblePanel-BSzY6CAU.js";import"./MultiColumnSortDialog-CgJTgj8X.js";import"./MenuTrigger-CgCxlE4x.js";import"./CompositeItem-2K-NRXeL.js";import"./ToolbarRootContext-DC7lKy46.js";import"./getDisabledMountTransitionStyles-vjd7JeGK.js";import"./getPseudoElementBounds-C5wa_slk.js";import"./chevron-down-CdZBYj4j.js";import"./index-rXGyYBlQ.js";import"./error-BaydBvcG.js";import"./BaseCbacBanner-BCgZFns7.js";import"./makeExternalStore-DbZaAZFO.js";import"./Tooltip-cpbz2-_L.js";import"./PopoverPopup-Bo4pCaqv.js";import"./toNumber-BUvJd81v.js";import"./useOsdkClient-Bn93AzCF.js";import"./DropdownField-BXqyYdqr.js";import"./withOsdkMetrics-CSIAdfM7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CDHHzoJv.js";import{O as u}from"./object-table-e1rRZzcH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B4dkwi5q.js";import"./Table-BueKOape.js";import"./index-DIpk4oSm.js";import"./Dialog-ByYIc5nT.js";import"./cross-DOk1OK3c.js";import"./svgIconContainer-D_Xh0B1Q.js";import"./useBaseUiId-D2qLSisG.js";import"./InternalBackdrop-CGUfkZGB.js";import"./composite-p-GotdUy.js";import"./index-BAv16zx8.js";import"./index-BpuaQgyh.js";import"./index-B4h0MzDt.js";import"./useEventCallback-CtKBqCBv.js";import"./SkeletonBar-CCDUGfLo.js";import"./LoadingCell-aZmcfPSZ.js";import"./ColumnConfigDialog-BfIW21Yo.js";import"./DraggableList-DshWZoBt.js";import"./search-DJu7CnV2.js";import"./Input-BAm1Qz_G.js";import"./useControlled-qnu_GTzW.js";import"./Button-CTRiQbec.js";import"./small-cross-BSKQ5CpI.js";import"./ActionButton-D0lmVCiI.js";import"./Checkbox-BAny6qug.js";import"./minus-ChgewUzB.js";import"./tick-BMIEhCo4.js";import"./useValueChanged-cHwUJKg6.js";import"./caret-down-CliIcsDf.js";import"./CollapsiblePanel-BF-lIKyN.js";import"./MultiColumnSortDialog-DiIBC2iO.js";import"./MenuTrigger-CnVsqie5.js";import"./CompositeItem-CetiieSv.js";import"./ToolbarRootContext-DF8cuKYf.js";import"./getDisabledMountTransitionStyles-DRjVjqph.js";import"./getPseudoElementBounds-hTXanSaH.js";import"./chevron-down-CFaoCxzm.js";import"./index-CVJ4N9lK.js";import"./error-CrvBy8Ck.js";import"./BaseCbacBanner-C9bx_zLP.js";import"./makeExternalStore-BoJAPglE.js";import"./Tooltip-BmmkFcaS.js";import"./PopoverPopup-BR9GEqtV.js";import"./toNumber-DLTCsNv4.js";import"./useOsdkClient-D6I7GFcV.js";import"./DropdownField-wpuFFQTZ.js";import"./withOsdkMetrics-D5kT2_1u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

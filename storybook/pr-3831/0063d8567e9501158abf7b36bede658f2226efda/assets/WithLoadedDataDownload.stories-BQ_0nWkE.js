import{f as b,j as a,r as i}from"./iframe-Ba2LHmmw.js";import{O as u}from"./object-table-Dy6R_1mS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B7XB0fR8.js";import"./Table-g-0N3kvQ.js";import"./index-Di_rEjs8.js";import"./Dialog-CWlAWs2b.js";import"./cross-D_tW4Z6z.js";import"./svgIconContainer-T_6Rhm5F.js";import"./useBaseUiId-kAp3UjRK.js";import"./InternalBackdrop-EUHVbYsy.js";import"./composite-B5aXaGsd.js";import"./index-C__15Ssw.js";import"./index-DNbaFRaz.js";import"./index-Dfaz-I-s.js";import"./useEventCallback-lTWmfAeE.js";import"./SkeletonBar-EjekG6ih.js";import"./LoadingCell-Cs3S_WvF.js";import"./ColumnConfigDialog-CpjwB5oT.js";import"./DraggableList-Csd8qfYC.js";import"./search-DOVEiH9F.js";import"./Input-DYB11wZY.js";import"./useControlled-b4VWKtNW.js";import"./isEqual-Y296ziUA.js";import"./isObject-Bj8AkAg1.js";import"./Button-dXiY3Oih.js";import"./ActionButton-DBptDCp_.js";import"./Checkbox-DtB6bbQd.js";import"./useValueChanged-Bn3N2blk.js";import"./CollapsiblePanel-BZobfyJI.js";import"./MultiColumnSortDialog-Dhayd-uQ.js";import"./MenuTrigger-Dg0FM3v0.js";import"./CompositeItem-BkDvpDV-.js";import"./ToolbarRootContext-DksAfQmT.js";import"./getDisabledMountTransitionStyles-CdNG9aue.js";import"./getPseudoElementBounds-C3XJtjLS.js";import"./chevron-down-rpKQMPMV.js";import"./index--EllkZMo.js";import"./error-CAnhijT4.js";import"./BaseCbacBanner-CAmnOXyH.js";import"./makeExternalStore-vStluxin.js";import"./Tooltip-BW4XIqzG.js";import"./PopoverPopup-RHQG_Rg9.js";import"./toNumber-BRENFX6q.js";import"./useOsdkClient-ETIs1sC4.js";import"./tick-jGM_0Tj2.js";import"./DropdownField-G9ReHW4y.js";import"./withOsdkMetrics-DqTbcU1C.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

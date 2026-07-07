import{f as b,j as a,r as i}from"./iframe-ElIqY0cP.js";import{O as u}from"./object-table-Df5oaA0O.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D3LENibV.js";import"./Table-RnbpGaKx.js";import"./index-CBl-7t68.js";import"./Dialog-Cojdxyjy.js";import"./cross-NHyDc3_s.js";import"./svgIconContainer-gnV_r1h9.js";import"./useBaseUiId-BQgOxY9s.js";import"./InternalBackdrop-C_uSn9pC.js";import"./composite-3jlzYhEl.js";import"./index-B7Xi1qIm.js";import"./index-0Uuv0rr_.js";import"./index-DFdTnEH-.js";import"./useEventCallback-B3TrjylV.js";import"./SkeletonBar-DWRZ6Lhm.js";import"./LoadingCell-D7V88kC3.js";import"./ColumnConfigDialog-BjSgOF-J.js";import"./DraggableList-EtWwaQWn.js";import"./search-Cc15fq1P.js";import"./Input-BTWCRvyW.js";import"./useControlled-D34dOxey.js";import"./Button-BjN_nH7V.js";import"./small-cross-B686eK02.js";import"./ActionButton-BTFUyRph.js";import"./Checkbox-DNM8oR33.js";import"./useValueChanged-DHPtsJZ4.js";import"./CollapsiblePanel-Bb3W1GcB.js";import"./MultiColumnSortDialog-veXVP8ZS.js";import"./MenuTrigger-B0MONlEh.js";import"./CompositeItem-Dk1T7wo0.js";import"./ToolbarRootContext-DQir3MKX.js";import"./getDisabledMountTransitionStyles-Bv9M25-M.js";import"./getPseudoElementBounds-D3s_4ROO.js";import"./chevron-down-BE8ZqU7R.js";import"./index-DhXfPQcM.js";import"./error-BhRlw4Nb.js";import"./BaseCbacBanner-CzldGkj0.js";import"./makeExternalStore-NBxV0LlO.js";import"./Tooltip-CzXkdSG2.js";import"./PopoverPopup-CHbECa3h.js";import"./toNumber-xCqG-QMH.js";import"./useOsdkClient-D_pifF9S.js";import"./tick-BhXXlJH4.js";import"./DropdownField-CS1KMSYg.js";import"./withOsdkMetrics-DcF-TsBD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

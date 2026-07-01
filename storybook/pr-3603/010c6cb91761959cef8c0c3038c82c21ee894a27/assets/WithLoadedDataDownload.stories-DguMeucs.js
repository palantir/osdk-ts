import{f as b,j as a,r as i}from"./iframe-CCVCcgjV.js";import{O as u}from"./object-table-BUH_EW5P.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-V0_EXFHR.js";import"./Table-BHqkTGYu.js";import"./index-D_o5YvhA.js";import"./Dialog-DeUf3EEs.js";import"./cross-DFiDzZfG.js";import"./svgIconContainer-CP_uSZNo.js";import"./useBaseUiId-B7sncwP6.js";import"./InternalBackdrop-Cd_MgOeE.js";import"./composite-B676ApEQ.js";import"./index-DEm73OrF.js";import"./index-CTeDgTsI.js";import"./index-CYoYuLy4.js";import"./useEventCallback-CDCmG-V3.js";import"./SkeletonBar-CY_mfR1m.js";import"./LoadingCell-BI0_uzv3.js";import"./ColumnConfigDialog-Cwlm8-Ow.js";import"./DraggableList-D5YJBdRE.js";import"./search-D3jdU1iX.js";import"./Input-DnTfZm7C.js";import"./useControlled-CC9okYJm.js";import"./Button-DJJKBClZ.js";import"./small-cross-AFA6riVj.js";import"./ActionButton-Ii42K1Xt.js";import"./Checkbox-n5nLZRgu.js";import"./minus-wXHEZMFI.js";import"./tick-lkh1yIAk.js";import"./useValueChanged-3j0Q1uDy.js";import"./caret-down-D5H2q3i4.js";import"./CollapsiblePanel-Zedr8MZA.js";import"./MultiColumnSortDialog-D4icmH38.js";import"./MenuTrigger-CFivCJgp.js";import"./CompositeItem-DBKBqhLR.js";import"./ToolbarRootContext-R7hpo3R4.js";import"./getDisabledMountTransitionStyles-DpDR9Sis.js";import"./getPseudoElementBounds-BR_0Bn3u.js";import"./chevron-down-DkQgBUL3.js";import"./index-IGGOCBKx.js";import"./error-BSLDPawg.js";import"./BaseCbacBanner-CgEyatN8.js";import"./makeExternalStore-BaWXL9U-.js";import"./Tooltip-R00e_8MY.js";import"./PopoverPopup-qgt3sp-U.js";import"./toNumber-DOmH7qWH.js";import"./useOsdkClient-CBhyLga7.js";import"./DropdownField-Bw0NTUiY.js";import"./withOsdkMetrics-DYRl-Wvo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

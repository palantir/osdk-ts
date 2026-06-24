import{f as b,j as a,r as i}from"./iframe-B0oEEPte.js";import{O as u}from"./object-table-UMP8_Zd2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BSbvu8GQ.js";import"./Table-jrWX1EY3.js";import"./index-DFr9bRTl.js";import"./Dialog-Bx8hyoRm.js";import"./cross-Cyn-JjeY.js";import"./svgIconContainer-69wx9JC3.js";import"./useBaseUiId-DzZtd95w.js";import"./InternalBackdrop-B89_Ug9k.js";import"./composite-DarLCWE2.js";import"./index-DzRZzQbW.js";import"./index-DYvh4vHQ.js";import"./index-BB1COxXt.js";import"./useEventCallback-CjYvsMtA.js";import"./SkeletonBar-Bsrdcm68.js";import"./LoadingCell-CXctNKDM.js";import"./ColumnConfigDialog-mWBVEte6.js";import"./DraggableList-Bs6Rdad3.js";import"./Input-rn_ecV3j.js";import"./useControlled-Cvn-ldWm.js";import"./Button-Dlno79rG.js";import"./small-cross-CuUg1i1Y.js";import"./ActionButton-BrDLRs-c.js";import"./Checkbox-_bGjOqU8.js";import"./minus-UHMg0aVE.js";import"./useValueChanged-BAW-aMwo.js";import"./caret-down-DhudXhw_.js";import"./CollapsiblePanel-CZGFDPhu.js";import"./MultiColumnSortDialog-De9cxc3f.js";import"./MenuTrigger-B781uaC4.js";import"./CompositeItem-ErSro4zV.js";import"./ToolbarRootContext-jLG8XKgb.js";import"./getDisabledMountTransitionStyles-DaEya3sA.js";import"./getPseudoElementBounds-CwyUaNzk.js";import"./chevron-down-DaNPV6F1.js";import"./index-BJFFNloC.js";import"./error-D-71H6jO.js";import"./BaseCbacBanner-DFywqCaf.js";import"./makeExternalStore-mQGUB93m.js";import"./Tooltip-B7Z3BbnH.js";import"./PopoverPopup-0HKFAb-S.js";import"./toNumber-Cl9JO3iN.js";import"./useOsdkClient-CZrvyWnr.js";import"./DropdownField-8Jsn8Oqm.js";import"./withOsdkMetrics-D4_xLDdy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

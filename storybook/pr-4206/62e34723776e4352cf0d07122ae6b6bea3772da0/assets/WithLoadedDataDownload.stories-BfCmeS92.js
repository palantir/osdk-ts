import{f as b,j as a,r as i}from"./iframe-kxdUQCve.js";import{O as u}from"./object-table-BAMrafAm.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cuq4TkHU.js";import"./Table-ZCQwY607.js";import"./index-Dj-vHPb7.js";import"./Dialog-CzGO940J.js";import"./cross-BGuVVI58.js";import"./svgIconContainer-0muFsb9b.js";import"./useBaseUiId-DHH2yIbk.js";import"./InternalBackdrop-BZ9l1zrW.js";import"./composite-Bj70JY7P.js";import"./index-DLOXxPse.js";import"./index-Cm3W4-OV.js";import"./index-ClZwirhD.js";import"./useEventCallback-Bq9ZgDOO.js";import"./SkeletonBar-tkvmB8An.js";import"./LoadingCell-QLYyy_ta.js";import"./ColumnConfigDialog-CmW0Mys6.js";import"./DraggableList-BoFiuN1_.js";import"./search-Dtrnv9od.js";import"./Input-DaXzRTeY.js";import"./useControlled-BW2k3psm.js";import"./Button-Ca-rtxgT.js";import"./small-cross-CNq41qjz.js";import"./ActionButton-DqspKp5t.js";import"./Checkbox-D-YxkcmG.js";import"./useValueChanged-DqoHHV3-.js";import"./CollapsiblePanel-MI7Qpoh1.js";import"./MultiColumnSortDialog-Q2AWLRsd.js";import"./MenuTrigger-CixaXCmF.js";import"./CompositeItem-CSpMJ9Wh.js";import"./ToolbarRootContext-CW6avnm2.js";import"./getDisabledMountTransitionStyles-lcQ0Umsd.js";import"./getPseudoElementBounds-CPNZb4-2.js";import"./chevron-down-CKJ5Wwcf.js";import"./index-CAihI7G4.js";import"./error-Dc_ezcGJ.js";import"./BaseCbacBanner-xD1_g2fI.js";import"./makeExternalStore-CNzfft50.js";import"./Tooltip-BfGevlTY.js";import"./PopoverPopup-uby0I1CE.js";import"./debounce-BnMuliNi.js";import"./useOsdkClient-B1pTCJqX.js";import"./tick-Brv0cW5L.js";import"./DropdownField-ggEkgwUW.js";import"./isEqual-C16UXMCJ.js";import"./withOsdkMetrics-BsNzoRp3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

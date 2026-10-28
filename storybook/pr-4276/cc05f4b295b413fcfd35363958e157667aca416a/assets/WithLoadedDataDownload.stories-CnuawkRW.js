import{f as b,j as a,r as i}from"./iframe-B2ls_m6L.js";import{O as u}from"./object-table-CLdWUbM7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DP2nAHeT.js";import"./Table-UvcN073C.js";import"./index-DcpRv5Au.js";import"./Dialog-BwkAAeQ-.js";import"./cross-DiYUblgV.js";import"./svgIconContainer-Dtr7_c7L.js";import"./useBaseUiId-D1As3N2D.js";import"./InternalBackdrop-poQ1Ks4a.js";import"./composite-nADOaRwJ.js";import"./index-HgFM_z-w.js";import"./index-BKdY56eR.js";import"./index-BFbPpLDJ.js";import"./useEventCallback-C_OLTNA8.js";import"./SkeletonBar-CDSwBps9.js";import"./LoadingCell-Bc890wP7.js";import"./ColumnConfigDialog-BCy_GDuN.js";import"./DraggableList-Dz-MKiiJ.js";import"./search-C0yxcI0O.js";import"./Input-Cxa2FMNZ.js";import"./useControlled-DyDb9EZF.js";import"./Button-DJwARfG7.js";import"./small-cross-BtkQ0vb4.js";import"./ActionButton-BnyLqoQD.js";import"./Checkbox-BaAquE_6.js";import"./useValueChanged-BAEr9orZ.js";import"./CollapsiblePanel-CggaZMfT.js";import"./MultiColumnSortDialog-BLuJj5S7.js";import"./MenuTrigger-jLNdpDEJ.js";import"./CompositeItem-uAkHZ6IU.js";import"./ToolbarRootContext-BCVvVfQ9.js";import"./getDisabledMountTransitionStyles-7kyYRvXc.js";import"./getPseudoElementBounds-BzQUOkaY.js";import"./chevron-down-CD5bKFpW.js";import"./index-C3iibYgA.js";import"./error-xfz1itQC.js";import"./BaseCbacBanner-CYTc_peL.js";import"./makeExternalStore-Dex4IqlO.js";import"./Tooltip-7yrVH1gX.js";import"./isObject-CKlJzEzc.js";import"./debounce-DfStzg0U.js";import"./useOsdkClient-ODHX8UXJ.js";import"./tick-Dp72_Noz.js";import"./DropdownField-BFaK5X74.js";import"./isEqual-CY4vxoGb.js";import"./_baseIsEqual-DHT5s9nl.js";import"./withOsdkMetrics-6BgTImPT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

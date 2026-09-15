import{f as b,j as a,r as i}from"./iframe-CpWBydph.js";import{O as u}from"./object-table-BNn1Ll-c.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2EqYees.js";import"./Table-DVh8Ouz0.js";import"./index-DvfucFad.js";import"./Dialog-Cp3umFkg.js";import"./cross-NuddkLO5.js";import"./svgIconContainer-DbE5PrYx.js";import"./useBaseUiId-COtj2_rS.js";import"./InternalBackdrop-BSfinE2G.js";import"./composite-B-otFn75.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./index-5xD2A4-R.js";import"./useEventCallback-BLTuArat.js";import"./SkeletonBar-XV3C3ne0.js";import"./LoadingCell-_Kzizub0.js";import"./ColumnConfigDialog-K0YRT_ip.js";import"./DraggableList-CwbCSsnT.js";import"./search-CA9yp1JF.js";import"./Input-CBPVcjqK.js";import"./useControlled-BmS1IvVS.js";import"./Button-CVph9TxQ.js";import"./small-cross-toPDb3Us.js";import"./ActionButton-CSVHMrTJ.js";import"./Checkbox-NGkojnFm.js";import"./useValueChanged-VjU-WqRp.js";import"./CollapsiblePanel-CygfXvb2.js";import"./MultiColumnSortDialog-B4rwN1TP.js";import"./MenuTrigger-CGEbHfg2.js";import"./CompositeItem-nG423aGN.js";import"./ToolbarRootContext-DMifvP-V.js";import"./getDisabledMountTransitionStyles-BccbayF2.js";import"./getPseudoElementBounds-D6k5ZcCj.js";import"./chevron-down-D78fMNFz.js";import"./index-D9R22dHy.js";import"./error-Due8my_O.js";import"./BaseCbacBanner-6xWHfIM4.js";import"./makeExternalStore-C7U98bYJ.js";import"./Tooltip-BhubVngg.js";import"./PopoverPopup-9FwNVPH6.js";import"./debounce-ClJ8DjPv.js";import"./useOsdkClient-OrClxpkO.js";import"./tick-1IBp_A8v.js";import"./DropdownField-Cj_IdBfJ.js";import"./isEqual-D7VM7CcB.js";import"./withOsdkMetrics-CmC654Yj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

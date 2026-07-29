import{f as b,j as a,r as i}from"./iframe-ZUB6IC-i.js";import{O as u}from"./object-table-DqXpM9nf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-JSGDW2EE.js";import"./Table-BLlMduka.js";import"./index-kkF-sHSR.js";import"./Dialog-C5bdms97.js";import"./cross-DAlFLQ8V.js";import"./svgIconContainer-vkeEtLLq.js";import"./useBaseUiId-8JVytAd4.js";import"./InternalBackdrop-C1gMFC_6.js";import"./composite-CYJkcK0Q.js";import"./index-BnGIgAZn.js";import"./index-BjqQMb7M.js";import"./index-BtELYtbZ.js";import"./useEventCallback-BQWo0XOa.js";import"./SkeletonBar-DdW3wJCW.js";import"./LoadingCell-C_PYltWi.js";import"./ColumnConfigDialog-B9oB7EmY.js";import"./DraggableList-B2l0L13f.js";import"./search-Cxmpkc3b.js";import"./Input-B0ErIUZ2.js";import"./useControlled-D5JAD95y.js";import"./Button-9-saF2rs.js";import"./small-cross-CiR4Ogs1.js";import"./ActionButton-Dg6ResVF.js";import"./Checkbox-BKKaJe3n.js";import"./minus-oAtQTwgm.js";import"./tick-BJNtpojT.js";import"./useValueChanged-C6wGv_F3.js";import"./caret-down-CM67Qc_g.js";import"./CollapsiblePanel-CytwC8BP.js";import"./MultiColumnSortDialog-BxX3Gf7u.js";import"./MenuTrigger-DvWnlAjk.js";import"./CompositeItem-DxD9hL6l.js";import"./ToolbarRootContext-DXYxYbuP.js";import"./getDisabledMountTransitionStyles-BAiLTdY4.js";import"./getPseudoElementBounds-6ElEA1xK.js";import"./chevron-down-C67n9eRn.js";import"./index-CvCX7BzG.js";import"./error-B-AGre3U.js";import"./BaseCbacBanner-J9qIbOCV.js";import"./makeExternalStore-DwG2idL0.js";import"./Tooltip-tQTXjl9-.js";import"./PopoverPopup-D-EEkwJQ.js";import"./toNumber-DZrzsv1u.js";import"./useOsdkClient-Cg1MzSTt.js";import"./DropdownField-CqxJU-Q2.js";import"./withOsdkMetrics-hA4DBR4r.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

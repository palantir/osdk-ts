import{f as b,j as a,r as i}from"./iframe-DYo6IeSP.js";import{O as u}from"./object-table-CG59J4N8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-oxCfAJG1.js";import"./Table-o7JrwQ4C.js";import"./index-DzBcJ-bt.js";import"./Dialog-B6h3APIA.js";import"./cross-B1TB2OCT.js";import"./svgIconContainer-B2FaZn-h.js";import"./useBaseUiId-BiLXq879.js";import"./InternalBackdrop-iazQE0l1.js";import"./composite-KlwepRBQ.js";import"./index-CTN_uXGU.js";import"./index-Bz8-sxMZ.js";import"./index-_zGOJ2qq.js";import"./useEventCallback-CFgD9ZNE.js";import"./SkeletonBar-ClV0sc18.js";import"./LoadingCell-Dc6lAwrA.js";import"./ColumnConfigDialog-Dhr-G6cs.js";import"./DraggableList-CLsVKaXp.js";import"./search-XvRzOpyc.js";import"./Input-DzarD0SN.js";import"./useControlled-Flk4w1fp.js";import"./Button-48QIVM3v.js";import"./small-cross-CLGnXlJe.js";import"./ActionButton-DOvJ2Rd9.js";import"./Checkbox-Dw_wGWK9.js";import"./minus-BLhW6Wur.js";import"./tick-BaX6sEAv.js";import"./useValueChanged-CLcXd_x7.js";import"./caret-down-CPbx1euP.js";import"./CollapsiblePanel-BAoTV-mA.js";import"./MultiColumnSortDialog-CnLdDpYk.js";import"./MenuTrigger-WWa1NBV4.js";import"./CompositeItem-BU1Uxx4m.js";import"./ToolbarRootContext-B6UoS49F.js";import"./getDisabledMountTransitionStyles-BkoC45jm.js";import"./getPseudoElementBounds-BWBakkdn.js";import"./chevron-down-DdiIc6o8.js";import"./index-DwUuBiAr.js";import"./error-PHk7WabF.js";import"./BaseCbacBanner-yRCGH9aU.js";import"./makeExternalStore-DX5ANJAM.js";import"./Tooltip-B_H9Neaq.js";import"./PopoverPopup-DJ2tpDWr.js";import"./toNumber-Dyr8c359.js";import"./useOsdkClient-1Adnm9ii.js";import"./DropdownField-CnqB9ICP.js";import"./withOsdkMetrics-D6hlhkD1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

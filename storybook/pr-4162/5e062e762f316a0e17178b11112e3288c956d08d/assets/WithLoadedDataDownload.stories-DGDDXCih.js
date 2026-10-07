import{f as b,j as a,r as i}from"./iframe-Cidbd9U_.js";import{O as u}from"./object-table-DOYUvVE2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CDZ9ml3u.js";import"./Table-Cm9n3Fcz.js";import"./index-DHtVl5lr.js";import"./Dialog-Cc422kNb.js";import"./cross-BTGq5cWg.js";import"./svgIconContainer-BRrBCQQQ.js";import"./useBaseUiId-qBbflN1T.js";import"./InternalBackdrop-CRTpZ3Mc.js";import"./composite-wQgj7E4E.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./index-ZSi5hxUD.js";import"./useEventCallback-CO_HzDJy.js";import"./SkeletonBar-DL5xvDTN.js";import"./LoadingCell-BXhBEBYw.js";import"./ColumnConfigDialog-O6Wlhrjg.js";import"./DraggableList-CZhlEIQW.js";import"./search-d8u8t1Cm.js";import"./Input-DOViwQP-.js";import"./useControlled-CD8kHrNC.js";import"./Button-B5k9EJ-k.js";import"./small-cross-DlRvHu10.js";import"./ActionButton-CipDVnp9.js";import"./Checkbox-BD3PmDNr.js";import"./useValueChanged-DYHqJuk7.js";import"./CollapsiblePanel-CDei_9JY.js";import"./MultiColumnSortDialog-MAcg3lHH.js";import"./MenuTrigger-DZEXzv0N.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./getDisabledMountTransitionStyles-DeD1w0n_.js";import"./getPseudoElementBounds-BvCzK4YA.js";import"./chevron-down-gf2GhVLl.js";import"./index-CSBG_Ogr.js";import"./error-CLTZOyUS.js";import"./BaseCbacBanner-BadiuEUJ.js";import"./makeExternalStore-Cw6sOONN.js";import"./Tooltip-DjjgX0Td.js";import"./PopoverPopup-Bs69cHyF.js";import"./debounce-DvHpY4Ou.js";import"./useOsdkClient-BgKg3-oj.js";import"./tick-C2hQsqLU.js";import"./DropdownField-DiOH_8ae.js";import"./isEqual-L9bITeX8.js";import"./withOsdkMetrics-CFH71nhb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

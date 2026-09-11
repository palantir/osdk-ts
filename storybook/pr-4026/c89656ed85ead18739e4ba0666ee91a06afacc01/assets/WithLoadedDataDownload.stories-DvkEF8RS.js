import{f as b,j as a,r as i}from"./iframe-CrZ39q4W.js";import{O as u}from"./object-table-D26OUOhu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CBYzcUhb.js";import"./Table-sL8vfG-J.js";import"./index-BD7m3jFK.js";import"./Dialog-C2Aq5Vnf.js";import"./cross-CgqXpQyr.js";import"./svgIconContainer-JiAQFJfX.js";import"./useBaseUiId-sTwbXHgE.js";import"./InternalBackdrop-C5GI9506.js";import"./composite-DRGdlpPN.js";import"./index-C_XnOq4s.js";import"./index--ClJ2plo.js";import"./index-CE_0GkNT.js";import"./useEventCallback-B3yH_W0Y.js";import"./SkeletonBar-CM8cFu92.js";import"./LoadingCell-deaFhM3X.js";import"./ColumnConfigDialog-DbRgxxnF.js";import"./DraggableList-BojvlFr5.js";import"./search-BqRMZJ3s.js";import"./Input-DIQd25cc.js";import"./useControlled-BBNkc-4m.js";import"./Button-C2GAq-XZ.js";import"./small-cross-Dpu5uUbJ.js";import"./ActionButton-DwqwMLmx.js";import"./Checkbox-DxQnBKfn.js";import"./useValueChanged-6_0vBwFL.js";import"./CollapsiblePanel-AgJKSqQy.js";import"./MultiColumnSortDialog-_im0eHu_.js";import"./MenuTrigger-CopAsfDs.js";import"./CompositeItem-DwChmrQE.js";import"./ToolbarRootContext-Bd0nHJjt.js";import"./getDisabledMountTransitionStyles-D3nUrh49.js";import"./getPseudoElementBounds-C_NMVDl6.js";import"./chevron-down-Do1ARTyC.js";import"./index-DyFGpZZr.js";import"./error-mXLWjtku.js";import"./BaseCbacBanner-DsLWPX37.js";import"./makeExternalStore-Bbx2CBha.js";import"./Tooltip-GYXLgvYO.js";import"./PopoverPopup-DSVB_f17.js";import"./debounce-CrnOUVh-.js";import"./useOsdkClient-DGv3o-sm.js";import"./tick-lwLiufa4.js";import"./DropdownField-CpkGq24N.js";import"./isEqual-cp97OYAK.js";import"./withOsdkMetrics-CEEcnA0Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

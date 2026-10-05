import{f as b,j as a,r as i}from"./iframe-D4DE_xCy.js";import{O as u}from"./object-table-g6VGtRMd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B6-3aPT9.js";import"./Table-EWARVZic.js";import"./index-D326T4JO.js";import"./Dialog-BF6fe3fI.js";import"./cross-DXk5c3Hx.js";import"./svgIconContainer-jzN4JDBP.js";import"./useBaseUiId-BXESL0ei.js";import"./InternalBackdrop-LoBq40Ym.js";import"./composite-Dnv2BJfH.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./index-BGyff1g6.js";import"./useEventCallback-Z4zWj0DE.js";import"./SkeletonBar-DOfR0REZ.js";import"./LoadingCell-Cp8Oh-gF.js";import"./ColumnConfigDialog-DmmOy8gz.js";import"./DraggableList-BT3g7YEB.js";import"./search-DMWfSMTs.js";import"./Input-BdkDXHFP.js";import"./useControlled-C35ONjfY.js";import"./Button-ByxF5usp.js";import"./small-cross-CNDGm87l.js";import"./ActionButton-D5oyS5dM.js";import"./Checkbox-BwYysanO.js";import"./useValueChanged-f4hwQLIJ.js";import"./CollapsiblePanel-A6BmXTdr.js";import"./MultiColumnSortDialog-kRefOv0N.js";import"./MenuTrigger-CNPytmAJ.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./getDisabledMountTransitionStyles-BKMXDL5b.js";import"./getPseudoElementBounds-mvlACyB9.js";import"./chevron-down-9HoUrmLz.js";import"./index-CVC749TS.js";import"./error-BbjQgfT9.js";import"./BaseCbacBanner-DrmZ6hu-.js";import"./makeExternalStore-BrutYjE5.js";import"./Tooltip-BR6r3LZL.js";import"./PopoverPopup-s43YRtvQ.js";import"./debounce-zunEXKGq.js";import"./useOsdkClient-Dq4Nep3C.js";import"./tick-BC_4-l9I.js";import"./DropdownField-CN5yaMV7.js";import"./isEqual-Bh_n2tIz.js";import"./withOsdkMetrics-DNRznGfV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

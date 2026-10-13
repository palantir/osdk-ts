import{f as b,j as a,r as i}from"./iframe-DCKvSy3g.js";import{O as u}from"./object-table-BOBMMITQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C9_QzmoW.js";import"./Table-BnqpJ3kb.js";import"./index-CjqUtRqG.js";import"./Dialog-CO2HiAWS.js";import"./cross-Bgi1b_0b.js";import"./svgIconContainer-DUPiMOGt.js";import"./useBaseUiId-hGdClsAp.js";import"./InternalBackdrop-31WohGhl.js";import"./composite-Bftlp7o-.js";import"./index-CF-VmLVs.js";import"./index-Dqoie1xV.js";import"./index-VT2qwhQZ.js";import"./useEventCallback-B7A3-78b.js";import"./SkeletonBar-DwIduN_L.js";import"./LoadingCell-GcW2-KWT.js";import"./ColumnConfigDialog-Cifl3j_D.js";import"./DraggableList-CB0fnFNu.js";import"./search-DnxSmR02.js";import"./Input-DAFKBr8O.js";import"./useControlled-23Be6Ua4.js";import"./Button-B8kaenDu.js";import"./small-cross-Cwle5e15.js";import"./ActionButton-Df-iyCXJ.js";import"./Checkbox-CUNIx5wV.js";import"./useValueChanged-Dw4sBVYO.js";import"./CollapsiblePanel-b_i0qiWN.js";import"./MultiColumnSortDialog-BXy1g6m6.js";import"./MenuTrigger-DxP1cL8Z.js";import"./CompositeItem-BaLy62YM.js";import"./ToolbarRootContext-Dfcq71Kx.js";import"./getDisabledMountTransitionStyles-wfE8zBrh.js";import"./getPseudoElementBounds-DdimKXjW.js";import"./chevron-down-CQzxndpd.js";import"./index-BZTMgR5k.js";import"./error-DC-QmFfK.js";import"./BaseCbacBanner-DqXXezVg.js";import"./makeExternalStore-DhsTa73k.js";import"./Tooltip-B14J5KK5.js";import"./PopoverPopup-BnMpvGpN.js";import"./debounce-BpOqmw8g.js";import"./useOsdkClient-BY9Wn_Dg.js";import"./tick-BvA7Cxf1.js";import"./DropdownField-C6HEFrFd.js";import"./isEqual-B9WX-sis.js";import"./withOsdkMetrics-C6hFOzPu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

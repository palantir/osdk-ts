import{f as b,j as a,r as i}from"./iframe-CuEjl7Uz.js";import{O as u}from"./object-table-BITZzvFk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bnv-TItm.js";import"./Table-CsgrbezX.js";import"./index-BYfl2w_f.js";import"./Dialog-KrYLboQj.js";import"./cross-CXL6d4Nc.js";import"./svgIconContainer-Dd92hyPw.js";import"./useBaseUiId-CvRriR4c.js";import"./InternalBackdrop-DcE5eYzx.js";import"./composite-kFUoCHQq.js";import"./index-Bx0fAKss.js";import"./index-CS1Bngb_.js";import"./index-B3zdRm73.js";import"./useEventCallback-C-EIfkX3.js";import"./SkeletonBar-B2aVF1IS.js";import"./LoadingCell-lVLricku.js";import"./ColumnConfigDialog-B9syA1Pp.js";import"./DraggableList-DR6kSV0E.js";import"./search-3wsQQ4iP.js";import"./Input-ZdxPnrAH.js";import"./useControlled-DBpnwX6L.js";import"./Button-DPfa27EA.js";import"./small-cross-DCrST3c9.js";import"./ActionButton-1-u7iqO6.js";import"./Checkbox-CUFcZVaU.js";import"./useValueChanged-BFSxxbsm.js";import"./CollapsiblePanel-at5Dj9bi.js";import"./MultiColumnSortDialog-BBjEkITd.js";import"./MenuTrigger-B3ks3gjl.js";import"./CompositeItem-BhUbIVeo.js";import"./ToolbarRootContext-BwI8s8FH.js";import"./getDisabledMountTransitionStyles-DoMAwNBT.js";import"./getPseudoElementBounds-DdEyzNDy.js";import"./chevron-down-CP7RGjpz.js";import"./index-DxunnI8U.js";import"./error-NZ5oWKud.js";import"./BaseCbacBanner-TiPMEh07.js";import"./makeExternalStore-oyLiubSi.js";import"./Tooltip-BPjWBB-n.js";import"./PopoverPopup-BpweqeTi.js";import"./debounce-CqTUPdUu.js";import"./useOsdkClient-BeVXJa4E.js";import"./tick-BgOklV5K.js";import"./DropdownField-BIOMSijU.js";import"./isEqual-CLN111pk.js";import"./withOsdkMetrics-B8uWkY4g.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

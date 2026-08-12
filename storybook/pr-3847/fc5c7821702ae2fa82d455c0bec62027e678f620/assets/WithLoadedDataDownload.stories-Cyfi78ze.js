import{f as b,j as a,r as i}from"./iframe-Bfu51uKD.js";import{O as u}from"./object-table-ZisTagRp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CzYQogJ9.js";import"./Table-DsoGa2FL.js";import"./index-DQHJlggZ.js";import"./Dialog-BmpyHtLd.js";import"./cross-Cj0zRN-P.js";import"./svgIconContainer-BznedMGF.js";import"./useBaseUiId-BMFIksfI.js";import"./InternalBackdrop-vxJhONV7.js";import"./composite-cjjayGq4.js";import"./index-C7HMsQca.js";import"./index-bKbCmQEs.js";import"./index-DeDNMLrn.js";import"./useEventCallback-Ci69gKLi.js";import"./SkeletonBar-D3W8qW_m.js";import"./LoadingCell-DzIW3PIc.js";import"./ColumnConfigDialog-B6bW1hs_.js";import"./DraggableList-B18qaVoP.js";import"./search-DiqUH8-G.js";import"./Input-BARZRbjA.js";import"./useControlled-DiKj9TwT.js";import"./isEqual-zZQp1Tf_.js";import"./isObject-Dl748mdT.js";import"./Button-BczMqlK6.js";import"./ActionButton-DdI7_jIN.js";import"./Checkbox-D5o9wSO_.js";import"./useValueChanged-D3dCBJ9W.js";import"./CollapsiblePanel-wUtJF-2b.js";import"./MultiColumnSortDialog--0c-JbQA.js";import"./MenuTrigger-ISZjXtIA.js";import"./CompositeItem-DJ-aCdOv.js";import"./ToolbarRootContext-fCSUIj3k.js";import"./getDisabledMountTransitionStyles-DaieVKBp.js";import"./getPseudoElementBounds-DA_wzyEX.js";import"./chevron-down-zP9dxkSq.js";import"./index-yGcDT_JP.js";import"./error-DGXpdtF_.js";import"./BaseCbacBanner-f0-HF5WI.js";import"./makeExternalStore-CT8wDfgr.js";import"./Tooltip-CGMIo-xb.js";import"./PopoverPopup-D_2s96me.js";import"./toNumber-Bs_rfsY9.js";import"./useOsdkClient-Dw12XehB.js";import"./tick-WDJS8_jm.js";import"./DropdownField-Bd1ER7PN.js";import"./withOsdkMetrics-DUx07Whe.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

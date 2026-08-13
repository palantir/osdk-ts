import{f as b,j as a,r as i}from"./iframe-KgHs4zat.js";import{O as u}from"./object-table-DV5y26_M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-74UoGiwT.js";import"./index-4vqX9qxC.js";import"./Dialog-BpGjciNF.js";import"./cross-DhFqeu01.js";import"./svgIconContainer-DQnAfD0o.js";import"./useBaseUiId-DalgrHe6.js";import"./InternalBackdrop-DViNfjhE.js";import"./composite-IhPVrKNo.js";import"./index-sG7sensQ.js";import"./index-C8wkzaSL.js";import"./index-Cvi9YUqR.js";import"./useEventCallback-k4xeUSxb.js";import"./SkeletonBar-Bf7e_vZS.js";import"./LoadingCell-DKEWteEU.js";import"./ColumnConfigDialog-CbKTIPgu.js";import"./DraggableList-89OxstIM.js";import"./search-EITjVgXy.js";import"./Input-a2sXSpjj.js";import"./useControlled-CxaIzWVI.js";import"./Button-Dpxg_r7U.js";import"./small-cross-D0RxxQjs.js";import"./ActionButton-C50xJeW0.js";import"./Checkbox-DrjqhFVh.js";import"./useValueChanged-BFs6pXAE.js";import"./CollapsiblePanel-Z924RNew.js";import"./MultiColumnSortDialog-mu_PjvZK.js";import"./MenuTrigger-BpEoVlQn.js";import"./CompositeItem-7z4K7NB3.js";import"./ToolbarRootContext-D2FvLITL.js";import"./getDisabledMountTransitionStyles-NJe8la4r.js";import"./getPseudoElementBounds-BZaAPVEY.js";import"./chevron-down-CkShUoKE.js";import"./index-Dtd5pHFd.js";import"./error-DM5-tWgF.js";import"./BaseCbacBanner-D7M6Q2cB.js";import"./makeExternalStore-CgubNTuf.js";import"./Tooltip-DgoYnTNF.js";import"./PopoverPopup-DrtPa-a0.js";import"./debounce-CDJ8NUNV.js";import"./useOsdkClient-DCQJMlbA.js";import"./tick-9dKwtDHQ.js";import"./DropdownField-TNE9D_Wl.js";import"./isEqual-DtaZ63Yd.js";import"./withOsdkMetrics-fRmXbymy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

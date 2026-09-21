import{f as b,j as a,r as i}from"./iframe-eyZPO-r8.js";import{O as u}from"./object-table-DngYOc4G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1V99eN4.js";import"./Table-dxXXc1zF.js";import"./index-Gdnr7hdE.js";import"./Dialog-DF5CklX0.js";import"./cross-BDtR8km0.js";import"./svgIconContainer-BYYEkT6q.js";import"./useBaseUiId-DuycL1XH.js";import"./InternalBackdrop-47eHZtxY.js";import"./composite-BQIBWjV1.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./index-DQ49IRLG.js";import"./useEventCallback-0WugJweh.js";import"./SkeletonBar-Czp6H1QV.js";import"./LoadingCell-D5uFu_3a.js";import"./ColumnConfigDialog-DA84oAQ9.js";import"./DraggableList-h1DTHUPL.js";import"./search-C_tBHa91.js";import"./Input-CwJlG5HX.js";import"./useControlled-RnivCiUR.js";import"./Button-DYsGegFs.js";import"./small-cross-DM_xhuPC.js";import"./ActionButton-DepzqUcv.js";import"./Checkbox-ByNijBVh.js";import"./useValueChanged-gzjrwQir.js";import"./CollapsiblePanel-CpdU7F-n.js";import"./MultiColumnSortDialog-DNlGctld.js";import"./MenuTrigger-Ddng4r_f.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./getDisabledMountTransitionStyles-D1KI5R6m.js";import"./getPseudoElementBounds-DGpPk1TO.js";import"./chevron-down-C6BwuTUh.js";import"./index-Dhfw8vgu.js";import"./error-vxQVtw9f.js";import"./BaseCbacBanner-K41hGtlu.js";import"./makeExternalStore-TlPHbOId.js";import"./Tooltip-UpAI-IXV.js";import"./PopoverPopup-D20NUS2f.js";import"./debounce-DpI20L6M.js";import"./useOsdkClient-DpWMI8Fp.js";import"./tick-DL7gzaWC.js";import"./DropdownField-B28WZREh.js";import"./isEqual-fw4VSZCU.js";import"./withOsdkMetrics-O_Dwj_Kt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DdFNuve9.js";import{O as u}from"./object-table-DQTsbNm4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BF0zHEQ9.js";import"./Table-B_ldMpC3.js";import"./index-COFBYoj0.js";import"./Dialog-CZKykb2z.js";import"./cross-B7UPksVb.js";import"./svgIconContainer-BqEjzz1q.js";import"./useBaseUiId-DrBZRYC3.js";import"./InternalBackdrop-B8Hewn_Z.js";import"./composite-C6KVf4LM.js";import"./index-CoKG21UB.js";import"./index-LHJitHOy.js";import"./index-D1P0vuc0.js";import"./useEventCallback-DY4RU0bI.js";import"./SkeletonBar-jb0OzX38.js";import"./LoadingCell-Bs4kfMYn.js";import"./ColumnConfigDialog-B8X5q4A3.js";import"./DraggableList-5BhBxM5G.js";import"./search-CL3Pgcnj.js";import"./Input-CnU8KDdl.js";import"./useControlled-S1lUya7y.js";import"./Button-iraM8Bjb.js";import"./small-cross-CdiQ7hdd.js";import"./ActionButton-BvxY4KIJ.js";import"./Checkbox-D2Qv3ic4.js";import"./useValueChanged-CEIVp2aj.js";import"./CollapsiblePanel-CjIgVUOq.js";import"./MultiColumnSortDialog-Ddd38VEM.js";import"./MenuTrigger-Bc8702_S.js";import"./CompositeItem-D3i9R6e9.js";import"./ToolbarRootContext-lq7yZP_w.js";import"./getDisabledMountTransitionStyles-B_So2Fld.js";import"./getPseudoElementBounds-DJL0g8Q1.js";import"./chevron-down-BQgLyWBH.js";import"./index-CWvJ-sqM.js";import"./error-BFEjzhDR.js";import"./BaseCbacBanner-BzE4b8i3.js";import"./makeExternalStore-C_cS4qu3.js";import"./Tooltip-DS6i2lfZ.js";import"./PopoverPopup-DSz7COAo.js";import"./debounce-D6YkW0bB.js";import"./useOsdkClient-DWubOs8f.js";import"./tick-DllXzrp2.js";import"./DropdownField-CAgPW_N_.js";import"./isEqual-CIzLxBkl.js";import"./withOsdkMetrics-DBiHNDc8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

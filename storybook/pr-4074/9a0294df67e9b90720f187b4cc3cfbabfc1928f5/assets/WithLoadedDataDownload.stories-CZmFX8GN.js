import{f as b,j as a,r as i}from"./iframe-BGhobRtu.js";import{O as u}from"./object-table-COtS4Qnz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-pGzP1r6a.js";import"./Table-QJqNuUM-.js";import"./index-vtFPCgDX.js";import"./Dialog-BdhR34Gc.js";import"./cross-CuYz6VCw.js";import"./svgIconContainer-B7bAtHsS.js";import"./useBaseUiId-DQZ7iRRg.js";import"./InternalBackdrop-BuZZp4vX.js";import"./composite-N1fMxm4N.js";import"./index-qA_bivHa.js";import"./index-C0Y6HNv7.js";import"./index-4ZAX8LQC.js";import"./useEventCallback-IjK4E44x.js";import"./SkeletonBar-is7FW6bL.js";import"./LoadingCell-CAE1DLa0.js";import"./ColumnConfigDialog-CWqi8rZq.js";import"./DraggableList-U86vXP5Q.js";import"./search-CD-rabLl.js";import"./Input-C3PEeUtQ.js";import"./useControlled-Dp1hI4GV.js";import"./Button-DAz_khhf.js";import"./small-cross-sN4wSsnF.js";import"./ActionButton-CGHRv_-b.js";import"./Checkbox-aid0nh5t.js";import"./useValueChanged-COn_Wnb4.js";import"./CollapsiblePanel-DLLULbui.js";import"./MultiColumnSortDialog-R3tQGeIC.js";import"./MenuTrigger-BoRN7fZ3.js";import"./CompositeItem-C8P235hg.js";import"./ToolbarRootContext-DV_dajLa.js";import"./getDisabledMountTransitionStyles-DUpLtIxq.js";import"./getPseudoElementBounds-D0oEP3_T.js";import"./chevron-down-DAtIJVst.js";import"./index-EPx86zSw.js";import"./error-CFVPudD2.js";import"./BaseCbacBanner-CaTQcvxF.js";import"./makeExternalStore-Imo5q4ya.js";import"./Tooltip-DUd70Gw0.js";import"./PopoverPopup-uv4NdOtP.js";import"./debounce-ChAiSJEZ.js";import"./useOsdkClient-DzPyphix.js";import"./tick-CgJs5kuo.js";import"./DropdownField-DMnr6Z_R.js";import"./isEqual-JnfXh9I5.js";import"./withOsdkMetrics-qR-yFxPK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

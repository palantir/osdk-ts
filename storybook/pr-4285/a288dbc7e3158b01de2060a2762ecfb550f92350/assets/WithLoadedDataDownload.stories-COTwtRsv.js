import{f as b,j as a,r as i}from"./iframe-CTMkKkzw.js";import{O as u}from"./object-table-BoI1Twv3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DG8pwmv3.js";import"./Table-BbZEYEYW.js";import"./index-BL_iYgDS.js";import"./Dialog-DQWTaCay.js";import"./cross-B-D9SFl0.js";import"./svgIconContainer-BUps9CL-.js";import"./useBaseUiId-Nc3myLqM.js";import"./InternalBackdrop-svBxXw7w.js";import"./composite-np7yuSJU.js";import"./index-B9bA0pQd.js";import"./index-KMN5SPjN.js";import"./index-BJk5b2Mi.js";import"./useEventCallback-f_5J5lhm.js";import"./SkeletonBar-Cam1cO27.js";import"./LoadingCell-nmJ0UveC.js";import"./ColumnConfigDialog-CpB6YrKO.js";import"./DraggableList-BqU_NHOS.js";import"./search-8dNzS2xV.js";import"./Input-SxG8NTwK.js";import"./useControlled-Dmn8OKSb.js";import"./Button-u7wDd7Jy.js";import"./small-cross-reWYho1p.js";import"./ActionButton-DwFZ69ro.js";import"./Checkbox-DsqG9F4o.js";import"./useValueChanged-DAzMvShK.js";import"./CollapsiblePanel-q_Q68xut.js";import"./MultiColumnSortDialog-BYp7xfWY.js";import"./MenuTrigger-3EqQfhmD.js";import"./CompositeItem-CSULberz.js";import"./ToolbarRootContext-CIGDW9Ar.js";import"./getDisabledMountTransitionStyles-DWNlrkIU.js";import"./getPseudoElementBounds-CcioB7ar.js";import"./chevron-down-BCsUFncR.js";import"./index-C4YYp6_d.js";import"./error-BFPACif0.js";import"./BaseCbacBanner-CNBD9coo.js";import"./makeExternalStore-CLmOAONC.js";import"./Tooltip-DQT__ibc.js";import"./PopoverPopup-CqAzZfVr.js";import"./debounce-ByrkZFkK.js";import"./useOsdkClient-DH7pH4yQ.js";import"./tick-ZXxKzXjV.js";import"./DropdownField-Cg1kzpH9.js";import"./isEqual-CCbd-MC2.js";import"./withOsdkMetrics-BkagLhYt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

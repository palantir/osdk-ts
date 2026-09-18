import{f as b,j as a,r as i}from"./iframe-TxXxbmz5.js";import{O as u}from"./object-table-DOS0WT1a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CpxRQbhd.js";import"./Table-C2X14doc.js";import"./index-CN0gJRJO.js";import"./Dialog-DT7VSMak.js";import"./cross-VXN4aiwS.js";import"./svgIconContainer-CELXinHy.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./InternalBackdrop-CetaIsfW.js";import"./composite-DOASapxT.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./index-DyCiBw5P.js";import"./useEventCallback-g6vs120_.js";import"./SkeletonBar-BMAk9jbB.js";import"./LoadingCell-DPGrgI7B.js";import"./ColumnConfigDialog-zuV-SXCD.js";import"./DraggableList-DN_w3IKW.js";import"./search-BC9yKYZ2.js";import"./Input-B4WkyavH.js";import"./useControlled-DruZmDs3.js";import"./Button-LZRzEtLJ.js";import"./small-cross-Cdx0iwCB.js";import"./ActionButton-D-hbTAJE.js";import"./Checkbox-CARz_iuB.js";import"./useValueChanged-CWKC294z.js";import"./CollapsiblePanel-dwMPUOFS.js";import"./MultiColumnSortDialog-Dg0KJEfa.js";import"./MenuTrigger-BBnNVDOO.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./getDisabledMountTransitionStyles-C9uIvqp9.js";import"./getPseudoElementBounds-DfyCOY8U.js";import"./chevron-down-BclEY4pC.js";import"./index-CRtDM6bX.js";import"./error-DK4Y1HxX.js";import"./BaseCbacBanner-BekuzNeO.js";import"./makeExternalStore-Da0z5igE.js";import"./Tooltip-FiY13jbJ.js";import"./PopoverPopup-CPS5tfTo.js";import"./debounce-CnngSnsz.js";import"./useOsdkClient-CCaWk0Px.js";import"./tick-CF_Cqk30.js";import"./DropdownField-Cuo6Kh-T.js";import"./isEqual-Vj9O0wAi.js";import"./withOsdkMetrics-BEHPBM8E.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

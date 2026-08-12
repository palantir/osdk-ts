import{f as b,j as a,r as i}from"./iframe-BH5IiT7r.js";import{O as u}from"./object-table-BW6RTOXg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CgcnXVY5.js";import"./Table-D_W9urGu.js";import"./index-C-xq5Jew.js";import"./Dialog-C6OztUa_.js";import"./cross-ffgBmB0d.js";import"./svgIconContainer-GOdrTkUX.js";import"./useBaseUiId-BT9W5-EQ.js";import"./InternalBackdrop-CW3CGDGx.js";import"./composite-zGPWEU1s.js";import"./index-CgtSgOie.js";import"./index-17g8derX.js";import"./index-gEdevmN0.js";import"./useEventCallback-CVRpqdys.js";import"./SkeletonBar-C-uw19Eo.js";import"./LoadingCell-D2amFioP.js";import"./ColumnConfigDialog-BHvw7gNa.js";import"./DraggableList-MtpUaxAL.js";import"./search-BDtWZjZ5.js";import"./Input-BFWuvbJ_.js";import"./useControlled-CWW3ek2h.js";import"./isEqual-BC2M-2CX.js";import"./isObject-CMbI-zc1.js";import"./Button-BFL5vhLR.js";import"./ActionButton-BeBI1zwZ.js";import"./Checkbox-DWu4oxw1.js";import"./useValueChanged-BIJBxhOX.js";import"./CollapsiblePanel-CE6t4zMY.js";import"./MultiColumnSortDialog-Dq1D8klA.js";import"./MenuTrigger-DJczZRaO.js";import"./CompositeItem-DLW8zfDE.js";import"./ToolbarRootContext-BVDM8PzK.js";import"./getDisabledMountTransitionStyles-D_kMbb23.js";import"./getPseudoElementBounds-Cu4Nj1AV.js";import"./chevron-down-DlwuI3Cv.js";import"./index-D0K_ANpa.js";import"./error-BQnTtdHZ.js";import"./BaseCbacBanner-BLenB8LF.js";import"./makeExternalStore-Bf5Duafr.js";import"./Tooltip-BLCkRQ77.js";import"./PopoverPopup-BPSLn2US.js";import"./toNumber-CFbWl-Bc.js";import"./useOsdkClient-DuTHbZmX.js";import"./tick-CgIBwy3v.js";import"./DropdownField-X9oL0fth.js";import"./withOsdkMetrics-DGdq_Xe-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

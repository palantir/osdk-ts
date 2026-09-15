import{f as b,j as a,r as i}from"./iframe-CpvsyndC.js";import{O as u}from"./object-table-wDn8u1NQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-v1ULc-zT.js";import"./Table-D8DVt9rQ.js";import"./index-OXZTet4E.js";import"./Dialog-B4LKyPNu.js";import"./cross-Bcfh6JZM.js";import"./svgIconContainer-Msyl1KBc.js";import"./useBaseUiId-CYqXXgOS.js";import"./InternalBackdrop-CRstaiGF.js";import"./composite-Bs9G8wyi.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./index-C9kvG9bI.js";import"./useEventCallback-TcvyV0P6.js";import"./SkeletonBar-CBAJCw1t.js";import"./LoadingCell-NGN7xI4A.js";import"./ColumnConfigDialog-DSpgaopW.js";import"./DraggableList-BYHWAua5.js";import"./search-CKGbca0G.js";import"./Input-D6DNjjz9.js";import"./useControlled-D-CxRUi2.js";import"./Button-CCew8i_i.js";import"./small-cross-D3J472u7.js";import"./ActionButton-BfYiSCcv.js";import"./Checkbox-k22hzlYz.js";import"./useValueChanged-CfxM7xWl.js";import"./CollapsiblePanel-CI8PgSve.js";import"./MultiColumnSortDialog-D6yyxhCn.js";import"./MenuTrigger-Dy0Pp6pd.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./getDisabledMountTransitionStyles-CD-yuuJB.js";import"./getPseudoElementBounds-OuRRLSTT.js";import"./chevron-down-AhYvmllp.js";import"./index-4rhUuJvO.js";import"./error-o4jN_MzE.js";import"./BaseCbacBanner-Decf3pyE.js";import"./makeExternalStore-BjYOVJLR.js";import"./Tooltip-BS2jpkpK.js";import"./PopoverPopup-BfQ70eOn.js";import"./debounce-CzKUTwhW.js";import"./useOsdkClient-C7Ga7ftv.js";import"./tick-B3tE0rZT.js";import"./DropdownField--U9fCIxx.js";import"./isEqual-qnNML_NE.js";import"./withOsdkMetrics-BrjOXXvf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

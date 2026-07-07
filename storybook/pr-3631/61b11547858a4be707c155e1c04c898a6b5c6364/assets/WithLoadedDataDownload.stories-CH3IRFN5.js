import{f as b,j as a,r as i}from"./iframe-DacBaETh.js";import{O as u}from"./object-table-DTffgWOc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-0LZOEI6c.js";import"./Table-C4awNQst.js";import"./index-BLI3b5Ls.js";import"./Dialog-B4ulVYRG.js";import"./cross-Cd9V6GlP.js";import"./svgIconContainer-D-FnRMc4.js";import"./useBaseUiId-DJdCXPOy.js";import"./InternalBackdrop-Dduq1D9s.js";import"./composite-B7s-sf7Y.js";import"./index-CeSgy9Z5.js";import"./index-BZzzpwcb.js";import"./index-B-eDlzeR.js";import"./useEventCallback-fg8QomR5.js";import"./SkeletonBar-D9tVPT8w.js";import"./LoadingCell-B6O-G6BN.js";import"./ColumnConfigDialog-op9dWZ3J.js";import"./DraggableList-BtnNIYbu.js";import"./search-B7TSHRZ6.js";import"./Input-DcSiOxgm.js";import"./useControlled-C21yq5Uu.js";import"./Button-EGX1Ztue.js";import"./small-cross-CeXztEdK.js";import"./ActionButton-C38IQUcx.js";import"./Checkbox-KvMb-L2-.js";import"./useValueChanged-CcYchfZ_.js";import"./CollapsiblePanel-Bow3We0M.js";import"./MultiColumnSortDialog-BeDkVivd.js";import"./MenuTrigger-ChVofddd.js";import"./CompositeItem-DSjuMmIy.js";import"./ToolbarRootContext-BB7Ifw49.js";import"./getDisabledMountTransitionStyles-DFUAAr1B.js";import"./getPseudoElementBounds-Bkdncwbc.js";import"./chevron-down-TVGeU_9X.js";import"./index-MSmZ_9Sr.js";import"./error-Dwxf8wvh.js";import"./BaseCbacBanner-Bdh773_-.js";import"./makeExternalStore-CtZ0c0QD.js";import"./Tooltip-Dduv9L03.js";import"./PopoverPopup-YaZr6cL6.js";import"./toNumber-1OgnMnv3.js";import"./useOsdkClient-CGjrsjbk.js";import"./tick-x9_PC_Nm.js";import"./DropdownField-O1k0Brj2.js";import"./withOsdkMetrics-BXXzNPYT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

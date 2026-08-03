import{f as b,j as a,r as i}from"./iframe-CDM8VvCL.js";import{O as u}from"./object-table-BsWHLv7x.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DfBWA75O.js";import"./Table-DNz2f0EG.js";import"./index-C6PbldxU.js";import"./Dialog-Cw7DA-a5.js";import"./cross-DMe_NFrB.js";import"./svgIconContainer-C1O7d22_.js";import"./useBaseUiId-YyZMVoz3.js";import"./InternalBackdrop-3sJqJhUy.js";import"./composite-BMzBsQCY.js";import"./index-C2c3YLny.js";import"./index-DgkciYYF.js";import"./index-BMPydb50.js";import"./useEventCallback--wvu9urt.js";import"./SkeletonBar-CCO1CZRx.js";import"./LoadingCell-BnU3j0Og.js";import"./ColumnConfigDialog-BAT6TgRk.js";import"./DraggableList-CSkLY4Wt.js";import"./search-ChMgyiyS.js";import"./Input-B__e197v.js";import"./useControlled-CPS_mZpC.js";import"./isEqual-Cw7ELw8L.js";import"./isObject-DOvv4t3H.js";import"./Button-Dow9ecKk.js";import"./ActionButton-D1zapzbS.js";import"./Checkbox-DWiRPOgD.js";import"./useValueChanged-CJQfTB0a.js";import"./CollapsiblePanel-DUVWmcbN.js";import"./MultiColumnSortDialog-Cu--lc5T.js";import"./MenuTrigger-DVnc9IN2.js";import"./CompositeItem-DG32YQLD.js";import"./ToolbarRootContext-eNrqlMGW.js";import"./getDisabledMountTransitionStyles-BcYqQrLA.js";import"./getPseudoElementBounds-CLK-CIxy.js";import"./chevron-down-GK8uglpz.js";import"./index-C_gjknLZ.js";import"./error-BLTG8w8a.js";import"./BaseCbacBanner-qQd0gBK1.js";import"./makeExternalStore-DhNYhl9Y.js";import"./Tooltip-CrrdlhKL.js";import"./PopoverPopup-K7nHHNKP.js";import"./toNumber-BqSuiLcc.js";import"./useOsdkClient-6YFeBNNr.js";import"./tick-BWD1BWlb.js";import"./DropdownField-CzJ5Q7Vg.js";import"./withOsdkMetrics-C30IttKx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

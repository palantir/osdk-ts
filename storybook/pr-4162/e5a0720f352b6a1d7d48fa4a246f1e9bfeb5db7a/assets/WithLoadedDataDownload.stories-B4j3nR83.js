import{f as b,j as a,r as i}from"./iframe-TTTmSYHm.js";import{O as u}from"./object-table-Br4ipIAQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ClYOkReB.js";import"./Table-B2Fm57Ri.js";import"./index-MsEGuD0o.js";import"./Dialog-DELJOsWQ.js";import"./cross-DqugLD6r.js";import"./svgIconContainer-DU6hcGdL.js";import"./useBaseUiId-DzbI9-Sb.js";import"./InternalBackdrop-mImnYcgQ.js";import"./composite-BPJ0g_Cp.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./index-B9nxHhHn.js";import"./useEventCallback-BjYhRPw3.js";import"./SkeletonBar-Bu7s4m6h.js";import"./LoadingCell-BHnTaYLh.js";import"./ColumnConfigDialog-BL2ky_X9.js";import"./DraggableList-BdnVzN0F.js";import"./search-CpIo6FKV.js";import"./Input-B2lkln1U.js";import"./useControlled-bG7LsTar.js";import"./Button-D_Pqa9bY.js";import"./small-cross-CNQD1rAJ.js";import"./ActionButton-kMMiGbeY.js";import"./Checkbox-Bl7Mxayg.js";import"./useValueChanged-BXWrU09i.js";import"./CollapsiblePanel-ExecBSLk.js";import"./MultiColumnSortDialog--EIsLxx4.js";import"./MenuTrigger-BKoeXidj.js";import"./CompositeItem-DOKaGOjC.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./getDisabledMountTransitionStyles-DvLD3XZY.js";import"./getPseudoElementBounds-C3b80VkD.js";import"./chevron-down-BWZ8_fkX.js";import"./index-DKumu57d.js";import"./error-BU0mbQfC.js";import"./BaseCbacBanner-Ct-Zyv71.js";import"./makeExternalStore-BiPnQfDm.js";import"./Tooltip-Dz8LBLaM.js";import"./PopoverPopup-Ezl5Gloz.js";import"./debounce-COnGppqi.js";import"./useOsdkClient-ATs7aeG_.js";import"./tick-F9zQ07Eh.js";import"./DropdownField-Cmj70H5z.js";import"./isEqual-YNXKjBKf.js";import"./withOsdkMetrics-C1xKtNKq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

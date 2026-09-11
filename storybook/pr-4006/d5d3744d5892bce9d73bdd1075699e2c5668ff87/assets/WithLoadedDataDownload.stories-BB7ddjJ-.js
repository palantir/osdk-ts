import{f as b,j as a,r as i}from"./iframe-uvdRxhm4.js";import{O as u}from"./object-table-YhtUStHb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ByxB1amM.js";import"./Table-vm8xu-PB.js";import"./index-Co_pmQht.js";import"./Dialog-XwGMrHpI.js";import"./cross-CVk2zvc8.js";import"./svgIconContainer-BrEtjUlS.js";import"./useBaseUiId-BxI9rYKQ.js";import"./InternalBackdrop-C6QFY2GA.js";import"./composite-BG1x_r8M.js";import"./index-lOYDDVZK.js";import"./index-3i2S2NsZ.js";import"./index-DTOiGnqw.js";import"./useEventCallback-DXlTwTX-.js";import"./SkeletonBar-BeFEtzbz.js";import"./LoadingCell-By-abxKM.js";import"./ColumnConfigDialog-D5s3A6Au.js";import"./DraggableList-BGMk2AQC.js";import"./search-C_3VgOnT.js";import"./Input-DsPKjuvY.js";import"./useControlled-BumCnOkf.js";import"./Button-Bo9SA5iL.js";import"./small-cross-Ducb2njs.js";import"./ActionButton-C-rT9f5F.js";import"./Checkbox-CE4hiEyB.js";import"./useValueChanged-VS0IrIAr.js";import"./CollapsiblePanel-BnrWUQOr.js";import"./MultiColumnSortDialog-DofKpjRN.js";import"./MenuTrigger-e--GdtbV.js";import"./CompositeItem-B-Ruk_4Z.js";import"./ToolbarRootContext-BdEFWnMH.js";import"./getDisabledMountTransitionStyles-CICtbxTC.js";import"./getPseudoElementBounds-CN21HRRj.js";import"./chevron-down-S5HS9Wt5.js";import"./index-BZDxYY65.js";import"./error-coR5DdC1.js";import"./BaseCbacBanner-DpGzGhEj.js";import"./makeExternalStore-BamzP3ZM.js";import"./Tooltip-BS__xmI7.js";import"./PopoverPopup-CYPwIDjx.js";import"./debounce-CnVQWIJt.js";import"./useOsdkClient-Bnqq9tvc.js";import"./tick-Bt4QaKZ2.js";import"./DropdownField-B9p3-g28.js";import"./isEqual-CfnJRls-.js";import"./withOsdkMetrics-BYNBs9jS.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

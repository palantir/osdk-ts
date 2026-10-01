import{f as b,j as a,r as i}from"./iframe-BBS1bhxz.js";import{O as u}from"./object-table-CM7ekgEE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DbqFABQK.js";import"./Table-DEUb_dRE.js";import"./index-BwzBBeai.js";import"./Dialog-D2wutk-0.js";import"./cross-CNiIBNRR.js";import"./svgIconContainer-DkabfjQp.js";import"./useBaseUiId-CYB9Dsir.js";import"./InternalBackdrop-CCOzVtc1.js";import"./composite-6tiSR5Xk.js";import"./index-8i8Pb6X4.js";import"./index-KEup_jqV.js";import"./index-CnkYP-F4.js";import"./useEventCallback-B33OkFzu.js";import"./SkeletonBar-BUB4_ue2.js";import"./LoadingCell-ClWqsny_.js";import"./ColumnConfigDialog-DajqHBHt.js";import"./DraggableList-Dzhfo3BO.js";import"./search-DcQmB7Y_.js";import"./Input-xVXK2Roi.js";import"./useControlled-0gW62wDn.js";import"./Button-BB3rVnV9.js";import"./small-cross-Ch3xmnh1.js";import"./ActionButton-DGhxQdJx.js";import"./Checkbox-G67U5DCG.js";import"./useValueChanged-DRgrYEiY.js";import"./CollapsiblePanel-CLoilge1.js";import"./MultiColumnSortDialog-YQlGJpTo.js";import"./MenuTrigger-CSqVk1g8.js";import"./CompositeItem-BGGFMuw6.js";import"./ToolbarRootContext-COBR2HeU.js";import"./getDisabledMountTransitionStyles-C8xFS_dz.js";import"./getPseudoElementBounds-C9THLdDk.js";import"./chevron-down-CHLXsa5V.js";import"./index-DRQ9Ijyk.js";import"./error-D-l7GhZN.js";import"./BaseCbacBanner-D2vA0T6x.js";import"./makeExternalStore-CzAndpId.js";import"./Tooltip-IRK0CKSi.js";import"./PopoverPopup-DRjPHcEC.js";import"./debounce-EWPwneHB.js";import"./useOsdkClient-JNX9ytGe.js";import"./tick-WrvbSOaH.js";import"./DropdownField-Br5LnCsz.js";import"./isEqual-BCXdRNL7.js";import"./withOsdkMetrics-BcsPvRcs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

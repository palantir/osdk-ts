import{f as b,j as a,r as i}from"./iframe-ClMgtSuk.js";import{O as u}from"./object-table--l5P5fZV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DTt1WWTr.js";import"./Table-Bs1Mc4j4.js";import"./index-CldZE-Fz.js";import"./Dialog-B8YbOYMH.js";import"./cross-viQYDEND.js";import"./svgIconContainer-oOu9mbxW.js";import"./useBaseUiId-woEv5Hvl.js";import"./InternalBackdrop-lzq1-uho.js";import"./composite-AMpBTCaD.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./index-Ct_fn0U-.js";import"./useEventCallback-Df1aTrS2.js";import"./SkeletonBar-ClzuP6Go.js";import"./LoadingCell-uwKDV78Q.js";import"./ColumnConfigDialog-LYkt6wr0.js";import"./DraggableList-DuEHNMRv.js";import"./search-COwJRDi0.js";import"./Input-BtIh3kKl.js";import"./useControlled-8r5NxEZn.js";import"./Button-BCu1jtHq.js";import"./small-cross-CqFS18i-.js";import"./ActionButton-DSjTpeTA.js";import"./Checkbox-ASKiaSYC.js";import"./useValueChanged-BUHPg38E.js";import"./CollapsiblePanel-CtkO9azS.js";import"./MultiColumnSortDialog-QlO6Azc5.js";import"./MenuTrigger-CZRm3cej.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./getDisabledMountTransitionStyles-DS7SGJ-f.js";import"./getPseudoElementBounds-DAVljBL_.js";import"./chevron-down-DRfUqPRw.js";import"./index-Dlvw17dt.js";import"./error-D3qiwtEy.js";import"./BaseCbacBanner-CN_XmouS.js";import"./makeExternalStore-v6XUl8OF.js";import"./Tooltip-CsPWprPe.js";import"./PopoverPopup-C7ZCNFox.js";import"./debounce-DNxed3Zp.js";import"./useOsdkClient-DebYYw8a.js";import"./tick-BVkIDnpf.js";import"./DropdownField-C5-pHjL8.js";import"./isEqual-z0aK0gs6.js";import"./withOsdkMetrics-H7JHankc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

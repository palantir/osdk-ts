import{f as b,j as a,r as i}from"./iframe-NiFGfRsz.js";import{O as u}from"./object-table-Co0kMHVr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCFXQM4X.js";import"./Table-D9-6YVBO.js";import"./index-Dp7XOyO-.js";import"./Dialog-DajmNvWm.js";import"./cross-CFFQ0sQ5.js";import"./svgIconContainer-B-51rSqm.js";import"./useBaseUiId-BZ0T_Y09.js";import"./InternalBackdrop-DAi-KTzQ.js";import"./composite-DizwB12a.js";import"./index-vXDAK5tU.js";import"./index-BN_cMd1l.js";import"./index-cWSUoc8b.js";import"./useEventCallback-tF3gctSP.js";import"./SkeletonBar-BlLnyVx8.js";import"./LoadingCell-B6hvHZ1V.js";import"./ColumnConfigDialog-BfgxV-wF.js";import"./DraggableList-CPfbGln-.js";import"./search-X81DnpVg.js";import"./Input-gKc9tvRQ.js";import"./useControlled-BmoBTadd.js";import"./Button-D8xL5lB5.js";import"./small-cross-CeI0m1pY.js";import"./ActionButton-CfUr3RjE.js";import"./Checkbox-BOLEvp6U.js";import"./useValueChanged-B2_iof2Z.js";import"./CollapsiblePanel-BYCYtPW9.js";import"./MultiColumnSortDialog-NC5qXB_v.js";import"./MenuTrigger-q94kD1PH.js";import"./CompositeItem-bzaX9daE.js";import"./ToolbarRootContext-CC3NWZjB.js";import"./getDisabledMountTransitionStyles-BUiwQ7FC.js";import"./getPseudoElementBounds-CBkbD7R-.js";import"./chevron-down-h41veWCf.js";import"./index-kWkA5eh9.js";import"./error-CZNtpaf8.js";import"./BaseCbacBanner-BISX0EDQ.js";import"./makeExternalStore-jd4qdjld.js";import"./Tooltip-DHIqFccA.js";import"./PopoverPopup-B4aC61JR.js";import"./toNumber-CVExGNiV.js";import"./useOsdkClient-BQHNmPmn.js";import"./tick-BD0BHmQw.js";import"./DropdownField-Cz9pU8vl.js";import"./withOsdkMetrics-DdyqXqjN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

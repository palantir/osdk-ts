import{f as b,j as a,r as i}from"./iframe-FtcUBUVc.js";import{O as u}from"./object-table-Cg5qwIEK.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C1DqyS6M.js";import"./Table-BfRaiK3i.js";import"./index-BrOlmJ2Z.js";import"./Dialog-CLH8UVx4.js";import"./cross-CzxFF0QG.js";import"./svgIconContainer-N_OtDM-z.js";import"./useBaseUiId-CE5itc9W.js";import"./InternalBackdrop-CIZ6_1M7.js";import"./composite-7rmuBxl6.js";import"./index-D40iZtqR.js";import"./index-DEH9dzt7.js";import"./index-DoRBg5ik.js";import"./useEventCallback-BBlYjqsb.js";import"./SkeletonBar-U4JWfogU.js";import"./LoadingCell-DeypyuwO.js";import"./ColumnConfigDialog-CMfL490p.js";import"./DraggableList-gcmWlo1u.js";import"./search-dRD30Vx4.js";import"./Input-ByVchIyr.js";import"./useControlled-DyZru4zO.js";import"./Button-GQVi1do4.js";import"./small-cross-BOnfyvVq.js";import"./ActionButton-DEqbbTdP.js";import"./Checkbox-CP36iAuz.js";import"./useValueChanged-B76qlGnm.js";import"./CollapsiblePanel-BYu_oFbL.js";import"./MultiColumnSortDialog-BqzEf6pZ.js";import"./MenuTrigger-Ala7VFV4.js";import"./CompositeItem-CnrRuFeY.js";import"./ToolbarRootContext-C1QQQlr9.js";import"./getDisabledMountTransitionStyles-o44LTai8.js";import"./getPseudoElementBounds-Cn7KCI-8.js";import"./chevron-down-gXp7YXqe.js";import"./index-0OE-AeSh.js";import"./error-DVkQT4u5.js";import"./BaseCbacBanner-DE1-9f-i.js";import"./makeExternalStore-_r-qOFy4.js";import"./Tooltip-B0wu6hL7.js";import"./PopoverPopup-mGK6D3QU.js";import"./debounce-CZPjIx0M.js";import"./useOsdkClient-BzBjGJN-.js";import"./tick-BVYtpY6h.js";import"./DropdownField-BOsCn1Qx.js";import"./isEqual-CWJKbuKS.js";import"./withOsdkMetrics-C6QmSgDy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

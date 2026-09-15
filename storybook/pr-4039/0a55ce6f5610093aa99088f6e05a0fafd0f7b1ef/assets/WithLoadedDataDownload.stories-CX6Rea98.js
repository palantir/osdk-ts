import{f as b,j as a,r as i}from"./iframe-KFmuHpi6.js";import{O as u}from"./object-table-Ci6iHK5H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DA3sodJk.js";import"./Table-Ctn2BHK_.js";import"./index-CBTTDR05.js";import"./Dialog-DXD3Yb-U.js";import"./cross-BxqJFApi.js";import"./svgIconContainer-D_AfyEve.js";import"./useBaseUiId-CrXnmgW5.js";import"./InternalBackdrop-CHvDuBxy.js";import"./composite-Bv5M65D9.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./index-D41spogg.js";import"./useEventCallback-CjOHxRvH.js";import"./SkeletonBar-BMkWU_25.js";import"./LoadingCell-DhiN6Nif.js";import"./ColumnConfigDialog-CEXFOadJ.js";import"./DraggableList-BzrmwoQC.js";import"./search-Bq4-27c_.js";import"./Input-B-ppJqtJ.js";import"./useControlled-D9mNQgHG.js";import"./Button-CS75p-oM.js";import"./small-cross-D9wsbyzz.js";import"./ActionButton-NpNjrugw.js";import"./Checkbox-BTxxH2kF.js";import"./useValueChanged-YKfipK9M.js";import"./CollapsiblePanel-TR3Y0YZC.js";import"./MultiColumnSortDialog-BE5wOz1H.js";import"./MenuTrigger-BdBfvPxr.js";import"./CompositeItem-BqmVxYgk.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./getDisabledMountTransitionStyles-v24lbGuZ.js";import"./getPseudoElementBounds-CCT63s9j.js";import"./chevron-down-BDNkXUjZ.js";import"./index-tH9oz2kR.js";import"./error-BbvMlxw1.js";import"./BaseCbacBanner-CwkjYwzX.js";import"./makeExternalStore-C27aCTGI.js";import"./Tooltip-CBzWZ40Q.js";import"./PopoverPopup-oWKBQoRn.js";import"./debounce-JwfeVHKk.js";import"./useOsdkClient-jK4jvHg5.js";import"./tick-yLHvFrbb.js";import"./DropdownField-CGz7tZKd.js";import"./isEqual-BObLPwl5.js";import"./withOsdkMetrics-BaXo7wYf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-QZNV0zY0.js";import{O as u}from"./object-table-DfDRF29E.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-KM8tXi5L.js";import"./Table-CuqG87F8.js";import"./index-DBM_aGHQ.js";import"./Dialog-d4EElO47.js";import"./cross-J9xkeTdd.js";import"./svgIconContainer-B8Ql_wUB.js";import"./useBaseUiId-DGf8qofv.js";import"./InternalBackdrop-DcvOIGzY.js";import"./composite-CmJ23A7k.js";import"./index-Dt775aIT.js";import"./index-Bq588UAZ.js";import"./index-BjmxLv4V.js";import"./useEventCallback-Cev7r3vI.js";import"./SkeletonBar-CGrxci-Q.js";import"./LoadingCell-BHvJUCIN.js";import"./ColumnConfigDialog-CPLwbyGn.js";import"./DraggableList-By3_wuW5.js";import"./search-BB3pPNkM.js";import"./Input-2byi3xAm.js";import"./useControlled-DihNxNbE.js";import"./Button-9l069q3l.js";import"./small-cross-BTwx2TJa.js";import"./ActionButton-BwyStZIU.js";import"./Checkbox-Bag4UDN6.js";import"./useValueChanged-DXYYvTKc.js";import"./CollapsiblePanel-C3j7qtPg.js";import"./MultiColumnSortDialog-Cei4GyF7.js";import"./MenuTrigger-AP08xSa7.js";import"./CompositeItem-P4J3iqkU.js";import"./ToolbarRootContext-DaCpu9EQ.js";import"./getDisabledMountTransitionStyles-ClOzGYc0.js";import"./getPseudoElementBounds-drKd3G7p.js";import"./chevron-down-BX_1bk7N.js";import"./index-Crk9oV48.js";import"./error-B6j2nIx9.js";import"./BaseCbacBanner-DfyoyB3p.js";import"./makeExternalStore-CtcgWyO0.js";import"./Tooltip-D4UQif__.js";import"./PopoverPopup-DpUWgTJc.js";import"./toNumber-CvYT9yDn.js";import"./useOsdkClient-asYkcj2R.js";import"./tick-BRAuHq0H.js";import"./DropdownField-CKTZX7E_.js";import"./withOsdkMetrics-CyFyHeyy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

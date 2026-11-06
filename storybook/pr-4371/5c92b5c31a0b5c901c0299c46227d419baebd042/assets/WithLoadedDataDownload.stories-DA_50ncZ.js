import{f as b,j as a,r as i}from"./iframe-BTjo4hoa.js";import{O as u}from"./object-table-COqd_imt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GDbQ32hR.js";import"./Table-BgnMVoEe.js";import"./index-DzoGtTYW.js";import"./Dialog-BRtSRW0Z.js";import"./cross-C7uzIn7X.js";import"./svgIconContainer-Ci_Sec47.js";import"./useBaseUiId-DiKKztfj.js";import"./InternalBackdrop-C3VRyl9V.js";import"./composite-DnWT1pj_.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./index-CoDC80rb.js";import"./useEventCallback-C_wT4v2Q.js";import"./SkeletonBar-Been06Cr.js";import"./LoadingCell-D7jqLojg.js";import"./ColumnConfigDialog-Db1F5W2r.js";import"./DraggableList-D8um3vjp.js";import"./search-CK191Oob.js";import"./Input-C7imWp_z.js";import"./useControlled-DrQ-vlJr.js";import"./Button-BcNFr6aW.js";import"./small-cross-Brkvg0Wi.js";import"./ActionButton-tTZpGoIh.js";import"./Checkbox-w9B-XeGE.js";import"./useValueChanged-CDlZmnEp.js";import"./CollapsiblePanel-CEseDnp9.js";import"./MultiColumnSortDialog-DMotawsh.js";import"./MenuTrigger-CwoMUaEm.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./getDisabledMountTransitionStyles-ClFFQye4.js";import"./getPseudoElementBounds-DsfXOZwR.js";import"./chevron-down-Ca_e0izc.js";import"./index-Dnr1AQ4b.js";import"./error-D2oiLEA6.js";import"./BaseCbacBanner-fgj6pUDq.js";import"./makeExternalStore-Ch7iFOMP.js";import"./Tooltip-BPmE3Z94.js";import"./isObject-aHdVZCJ4.js";import"./debounce-mxu17zY-.js";import"./useOsdkClient-BVjPnTI9.js";import"./tick-B6UzXqFV.js";import"./DropdownField-R4jwd9Zw.js";import"./isEqual-BWdJtmMa.js";import"./_baseIsEqual-D9LRnwMe.js";import"./withOsdkMetrics-DsZGAGfW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

import{f as b,j as a,r as i}from"./iframe-BTIka0mU.js";import{O as u}from"./object-table-Dn1D4m5-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-px61uG1k.js";import"./Table-_U89uYE2.js";import"./index-BSUZmBMj.js";import"./Dialog-CTd2WPT7.js";import"./cross-Y1xE6j58.js";import"./svgIconContainer-_rcFoVfV.js";import"./useBaseUiId-C1-4UPjr.js";import"./InternalBackdrop-CeFBNfZq.js";import"./composite-_RYTITLD.js";import"./index-DJWApIIr.js";import"./index-BZqP7QHW.js";import"./index-BT9Z6v1L.js";import"./useEventCallback-C71sRmII.js";import"./SkeletonBar-CZabTLyj.js";import"./LoadingCell-Ci9j6m_n.js";import"./ColumnConfigDialog-DBGT53TU.js";import"./DraggableList-aQo2-qEs.js";import"./search-klzOiLLV.js";import"./Input-CHu4cTHa.js";import"./useControlled-CL1DBA2V.js";import"./isEqual--t9zKOFS.js";import"./isObject-CxBV9Ohn.js";import"./Button-C_wYQPHZ.js";import"./ActionButton-DKaLVnbU.js";import"./Checkbox-CgcbYrKi.js";import"./useValueChanged-Bz-meo30.js";import"./CollapsiblePanel-D9Wl1m7m.js";import"./MultiColumnSortDialog-BqVx8qLY.js";import"./MenuTrigger-CFDVbb7D.js";import"./CompositeItem-H6HgtU07.js";import"./ToolbarRootContext-DPmgZ9H3.js";import"./getDisabledMountTransitionStyles-Ba7aUPdV.js";import"./getPseudoElementBounds-ooqE2e_e.js";import"./chevron-down-CYoX06Sv.js";import"./index-Cz1dZR80.js";import"./error-GBqEqKOX.js";import"./BaseCbacBanner-Cx_zyMgv.js";import"./makeExternalStore-1GNwblPW.js";import"./Tooltip-C7QOXrku.js";import"./PopoverPopup-BU_dnZfL.js";import"./toNumber-DMQQ3TFc.js";import"./useOsdkClient-BQFCB37k.js";import"./tick-C8bpK66h.js";import"./DropdownField-P907ZQhX.js";import"./withOsdkMetrics-BCXnSjLq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

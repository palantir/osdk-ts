import{f as b,j as a,r as i}from"./iframe-DTMqKPBE.js";import{O as u}from"./object-table-BsHUN6wF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CjsYpY57.js";import"./Table-DU03s7G2.js";import"./index-UDd9WuYK.js";import"./Dialog-BCGY3t42.js";import"./cross-B4qzvymc.js";import"./svgIconContainer-CTrmoxuh.js";import"./useBaseUiId-CEeKBGAz.js";import"./InternalBackdrop-BBkZ1Zk6.js";import"./composite-ythbHTkl.js";import"./index-C4q2yfqG.js";import"./index-JW1fQ_Y7.js";import"./index-a5K6iVF8.js";import"./useEventCallback-DtDN3sTJ.js";import"./SkeletonBar-B8XEOwQs.js";import"./LoadingCell-1n2Faz1K.js";import"./ColumnConfigDialog-DBo2NVl6.js";import"./DraggableList-JhsJuV4q.js";import"./search-DI2V8WRZ.js";import"./Input-7TR5u0Qr.js";import"./useControlled-BHnYSqNh.js";import"./Button-xDEOgU6J.js";import"./small-cross-CsVdUc7Z.js";import"./ActionButton-hkXpDER8.js";import"./Checkbox-CQ4B7qvq.js";import"./useValueChanged-pTbCnzad.js";import"./CollapsiblePanel-BI6FTHdI.js";import"./MultiColumnSortDialog-48DxKrQQ.js";import"./MenuTrigger-Cimzkx02.js";import"./CompositeItem-vKvJJfWL.js";import"./ToolbarRootContext-BFkkbk8n.js";import"./getDisabledMountTransitionStyles-CkPdKkG_.js";import"./getPseudoElementBounds-JkpSFn6Z.js";import"./chevron-down-CHkr5iXo.js";import"./index-BsUTfLWI.js";import"./error-DhhuqABX.js";import"./BaseCbacBanner-oJ-bR1A-.js";import"./makeExternalStore-BqhBup0t.js";import"./Tooltip-hCwJnzIt.js";import"./PopoverPopup-DWI1XAxj.js";import"./debounce-BYCLDSg8.js";import"./useOsdkClient-172IoC-V.js";import"./tick-BzPsR4V6.js";import"./DropdownField-CyxvPr-x.js";import"./isEqual-CnGd_Xos.js";import"./withOsdkMetrics-C9k-iTWj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DgRWURIN.js";import{O as u}from"./object-table-BEi-k5Ys.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-IpEDQFmi.js";import"./Table-C-1BHEX-.js";import"./index-Vb1ULZ8L.js";import"./Dialog-lMLC_a0j.js";import"./cross-BJMNYJ2C.js";import"./svgIconContainer-CzC7EOV6.js";import"./useBaseUiId-0NkCIExB.js";import"./InternalBackdrop-ria6xw--.js";import"./composite-B_K6iJHg.js";import"./index-DwPO5rm_.js";import"./index-DVFUwbrI.js";import"./index-i3YNBJDk.js";import"./useEventCallback-CtJjK7KW.js";import"./SkeletonBar-CY26rfwE.js";import"./LoadingCell-0GEq1V8P.js";import"./ColumnConfigDialog-DAseNjgk.js";import"./DraggableList-BIbX17uO.js";import"./Input-DCqvxjkL.js";import"./useControlled-BSIJHXUv.js";import"./Button-B3EIEY2G.js";import"./small-cross-DeDXSvCI.js";import"./ActionButton-EOOrmqWG.js";import"./Checkbox-BF8cEOjo.js";import"./minus-DSmDAAnM.js";import"./useValueChanged-b4jLxIww.js";import"./caret-down-D1SN8Sq5.js";import"./CollapsiblePanel-B4vZKzeG.js";import"./MultiColumnSortDialog-W9A08hh0.js";import"./MenuTrigger-DklcoZrd.js";import"./CompositeItem-BqFb59Pw.js";import"./ToolbarRootContext-C3qrF21_.js";import"./getDisabledMountTransitionStyles-BBq88bKm.js";import"./getPseudoElementBounds-CjERo64e.js";import"./chevron-down-DHLoYz_f.js";import"./index-CG09zLwJ.js";import"./error-BInEq3Ok.js";import"./BaseCbacBanner-C4n5f4wi.js";import"./makeExternalStore-jT2gj--9.js";import"./Tooltip-Ba9Jqq7L.js";import"./PopoverPopup-EplE7Ihy.js";import"./toNumber-Cyl-LQBc.js";import"./useOsdkClient-cVNU7KBc.js";import"./DropdownField-D3vleURI.js";import"./withOsdkMetrics-Db-tQd-Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

import{f as b,j as a,r as i}from"./iframe-BkXStBnn.js";import{O as u}from"./object-table-0OskJlcP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C6eJ-LAJ.js";import"./Table-BsaDm4T0.js";import"./index-CQxVyxO9.js";import"./Dialog-CEWZog5k.js";import"./cross-kW0EKRmx.js";import"./svgIconContainer-BOZhbAbH.js";import"./useBaseUiId-96F5yHVy.js";import"./InternalBackdrop-BdYFQb3t.js";import"./composite-DEOhu-ZQ.js";import"./index-CtVGck09.js";import"./index-CDh6F1Zg.js";import"./index-C4IkCmST.js";import"./useEventCallback-CH-hvduU.js";import"./SkeletonBar-Ctttl4g0.js";import"./LoadingCell-DC3q_kaJ.js";import"./ColumnConfigDialog-CDTeYQKc.js";import"./DraggableList-BYNJ4Xog.js";import"./search-BVUjqmoy.js";import"./Input-DxDpsYC6.js";import"./useControlled-Bs-hAIWu.js";import"./Button-tcqZupxX.js";import"./small-cross-Sg31I6zP.js";import"./ActionButton-Cf5BY1g0.js";import"./Checkbox-DqQ0vsU_.js";import"./useValueChanged-HslFxBcd.js";import"./CollapsiblePanel-ddkAZxfQ.js";import"./MultiColumnSortDialog-B08XNyF_.js";import"./MenuTrigger-Cv8msX7x.js";import"./CompositeItem-CqdHioqm.js";import"./ToolbarRootContext-CPU8X__7.js";import"./getDisabledMountTransitionStyles-583SAe4r.js";import"./getPseudoElementBounds-C11mWzsA.js";import"./chevron-down-BqO1VsFu.js";import"./index-mxwJCmPs.js";import"./error-BWtJwOh6.js";import"./BaseCbacBanner-DW10jlbi.js";import"./makeExternalStore-D61zLkvo.js";import"./Tooltip-COBqsjpT.js";import"./PopoverPopup-CSkaVaIl.js";import"./debounce-D3smnzmF.js";import"./useOsdkClient-B0RQ_x0Y.js";import"./tick-Bd8vtLY5.js";import"./DropdownField-CuSoYmnK.js";import"./isEqual-N3GxBSAA.js";import"./withOsdkMetrics-CndFlT5a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

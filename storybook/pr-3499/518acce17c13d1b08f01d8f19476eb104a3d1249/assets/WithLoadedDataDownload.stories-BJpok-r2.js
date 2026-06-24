import{f as b,j as a,r as i}from"./iframe-x2-cfQxg.js";import{O as u}from"./object-table-BnXOIbvV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLkIcpwq.js";import"./Table-CT3VMMxo.js";import"./index-B84hqV3p.js";import"./Dialog-BNr3EdB3.js";import"./cross-sQjrSNhE.js";import"./svgIconContainer-BRmFBXVT.js";import"./useBaseUiId-RxZWVLhz.js";import"./InternalBackdrop-B2PU8IVf.js";import"./composite-iIR3UcfH.js";import"./index-aRK24jVF.js";import"./index-DLpspjDb.js";import"./index-4g0ELqnU.js";import"./useEventCallback-BctdSjeq.js";import"./SkeletonBar-CnVgmZQC.js";import"./LoadingCell-LFPU6OZV.js";import"./ColumnConfigDialog-BOhzJ1YU.js";import"./DraggableList-2j6e8gZF.js";import"./Input-CELaRZCY.js";import"./useControlled-BLeoY5Oc.js";import"./Button-DtFdx_p9.js";import"./small-cross-y6n8TBfC.js";import"./ActionButton-CNnE2Jyl.js";import"./Checkbox-BT4HiG2J.js";import"./minus-D_05B2qj.js";import"./useValueChanged-iIMkG3Q5.js";import"./caret-down-CDyUL3QQ.js";import"./CollapsiblePanel-A5f0qdfO.js";import"./MultiColumnSortDialog-BqpY7GdF.js";import"./MenuTrigger-DB7BEUUN.js";import"./CompositeItem-Dqy6AQwb.js";import"./ToolbarRootContext-BTnwJXb-.js";import"./getDisabledMountTransitionStyles-C8tCkG5u.js";import"./getPseudoElementBounds-CZjTc9BT.js";import"./chevron-down-B6ZXDnXt.js";import"./index-cEubUTa-.js";import"./error-CeV8yWLv.js";import"./BaseCbacBanner-BaoMuX_b.js";import"./makeExternalStore-BFySga81.js";import"./Tooltip-C_u-3ZQQ.js";import"./PopoverPopup-BdYdTnOl.js";import"./toNumber-DdOUM5-z.js";import"./useOsdkClient-BC4HbXEJ.js";import"./DropdownField-DWT-oCk5.js";import"./withOsdkMetrics-BCm2-y3y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

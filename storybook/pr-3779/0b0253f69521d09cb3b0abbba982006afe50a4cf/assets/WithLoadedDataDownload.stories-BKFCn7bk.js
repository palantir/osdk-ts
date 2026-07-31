import{f as b,j as a,r as i}from"./iframe-BH0RiS07.js";import{O as u}from"./object-table-Dw7wP583.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ByubuHXR.js";import"./Table-xSzS9mg-.js";import"./index-7v2RjI2w.js";import"./Dialog-BrxKY4U3.js";import"./cross-D9ZUP5Ns.js";import"./svgIconContainer-FtuH6umr.js";import"./useBaseUiId-CUYaSpyz.js";import"./InternalBackdrop-30LaOI8b.js";import"./composite-Bx3ib-QK.js";import"./index-BPstulOd.js";import"./index-C2T1E1t9.js";import"./index-DWOM7wqb.js";import"./useEventCallback-D3r1tBuv.js";import"./SkeletonBar-CHLz7Pge.js";import"./LoadingCell-CHqJC0Jc.js";import"./ColumnConfigDialog-Byj8iSeW.js";import"./DraggableList-BjdYdEPc.js";import"./search-Bk-_LlpL.js";import"./Input-elqhlQ-r.js";import"./useControlled-CIhWFCzo.js";import"./isEqual-vJ1Qj1LB.js";import"./isObject-3i0MZCeP.js";import"./Button-Dpxlhfn0.js";import"./ActionButton-DIeKcdCW.js";import"./Checkbox-B4-NPCZf.js";import"./useValueChanged-gmanHop6.js";import"./CollapsiblePanel-DzvSaaqJ.js";import"./MultiColumnSortDialog-C_rWXuaq.js";import"./MenuTrigger-Bk13KZ3o.js";import"./CompositeItem-YyL2cv7w.js";import"./ToolbarRootContext-Dy6qwQeR.js";import"./getDisabledMountTransitionStyles-DA2haucZ.js";import"./getPseudoElementBounds-Bg_oiIin.js";import"./chevron-down-DuuQaagn.js";import"./index-BkgjoZmi.js";import"./error-BPzajNoT.js";import"./BaseCbacBanner-CSXlxhGL.js";import"./makeExternalStore-Cn2OHyrh.js";import"./Tooltip-BAkr9kah.js";import"./PopoverPopup-D3PXg0cX.js";import"./toNumber-BmEn9jnI.js";import"./useOsdkClient-DVK7fMCH.js";import"./tick-BKXV2n6K.js";import"./DropdownField-BB3NRdoL.js";import"./withOsdkMetrics-BwSBQoqW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

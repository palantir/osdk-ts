import{f as b,j as a,r as i}from"./iframe-Cj5XhV0K.js";import{O as u}from"./object-table-BBAQ4iZ-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CuJrIVwN.js";import"./Table-ZBUw1MDQ.js";import"./index-BUuf6QFI.js";import"./Dialog-H-Z7HMFG.js";import"./cross-ipEa_Fgv.js";import"./svgIconContainer-B4JaXaFc.js";import"./useBaseUiId-EaNfd7E5.js";import"./InternalBackdrop-DAf5h5Ih.js";import"./composite-DourfYiy.js";import"./index-3sVAsvdZ.js";import"./index-KpoTnuXn.js";import"./index-BkAkxe5V.js";import"./useEventCallback-BYNvEizO.js";import"./SkeletonBar-BBF7yRC_.js";import"./LoadingCell-C0oQaK7C.js";import"./ColumnConfigDialog-CurtstEo.js";import"./DraggableList-BUd7BBZo.js";import"./search-8fWNri7B.js";import"./Input-DpvlHRmk.js";import"./useControlled-BqmBP-xo.js";import"./Button-C0iKOXSP.js";import"./small-cross-BTK8lVXe.js";import"./ActionButton-DerugDVR.js";import"./Checkbox-B1PRAVxC.js";import"./minus-Dt5gz2Wp.js";import"./tick-D7-BXBdH.js";import"./useValueChanged-Cr5nNLsd.js";import"./caret-down-BC5F8GeJ.js";import"./CollapsiblePanel-C_C-XrOO.js";import"./MultiColumnSortDialog-CiM3ohMZ.js";import"./MenuTrigger-CMQV_neq.js";import"./CompositeItem-uYx2vIaG.js";import"./ToolbarRootContext-C5rbQ6xe.js";import"./getDisabledMountTransitionStyles-BAqZpw4e.js";import"./getPseudoElementBounds-BYdtGyMi.js";import"./chevron-down-iqXj3iA3.js";import"./index-CfT4_Ghf.js";import"./error-BhxFFmsR.js";import"./BaseCbacBanner-DbbxevJm.js";import"./makeExternalStore-bPaMfi75.js";import"./Tooltip-DyySdUWE.js";import"./PopoverPopup-CM4RQhnl.js";import"./toNumber-BDicVHpS.js";import"./useOsdkClient-Dq181usN.js";import"./DropdownField-B30g9ojY.js";import"./withOsdkMetrics-DEOsKe5t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

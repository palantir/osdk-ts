import{f as b,j as a,r as i}from"./iframe-DhSxUQkX.js";import{O as u}from"./object-table-DbphsC1p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-sXoL7niC.js";import"./Table-Cxw9cwM6.js";import"./index-BvSFmfl4.js";import"./Dialog-BT2zLzQV.js";import"./cross-DPp5FPP-.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./useBaseUiId-CZTbsmZg.js";import"./InternalBackdrop-C1ZWO4Fv.js";import"./composite-CVjZUaK1.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./index-jTHMQX5i.js";import"./useEventCallback-CvDvv5HC.js";import"./SkeletonBar-CyDJ1Ldz.js";import"./LoadingCell-CYynvORP.js";import"./ColumnConfigDialog-oy9TAHvX.js";import"./DraggableList-B0EZBRPj.js";import"./search-DUqXaRZn.js";import"./Input-CZERibHA.js";import"./useControlled-BFOHrubs.js";import"./Button-WT-hQp_M.js";import"./small-cross-sUBGXhQ0.js";import"./ActionButton-D68fVxeC.js";import"./Checkbox-BeTRGy-6.js";import"./useValueChanged-O0UVeLkr.js";import"./CollapsiblePanel-CnIi4ruU.js";import"./MultiColumnSortDialog-DQ1pW78O.js";import"./MenuTrigger-BGLuUfjR.js";import"./CompositeItem-B0iGyW5R.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./getDisabledMountTransitionStyles-B8WSataG.js";import"./getPseudoElementBounds-Dg91PpPW.js";import"./chevron-down-DgOK1tfP.js";import"./index-DS-3NohG.js";import"./error-BkDo7z_m.js";import"./BaseCbacBanner-DfrB6rgb.js";import"./makeExternalStore-C6P_xGma.js";import"./Tooltip-GjEUJm8I.js";import"./PopoverPopup-BhdoMacR.js";import"./debounce-CttzonmO.js";import"./useOsdkClient-JBSVfS2z.js";import"./tick-DIF_A_6E.js";import"./DropdownField-eY4WYUsH.js";import"./isEqual-BPbLcVx_.js";import"./withOsdkMetrics-BwywW8LF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

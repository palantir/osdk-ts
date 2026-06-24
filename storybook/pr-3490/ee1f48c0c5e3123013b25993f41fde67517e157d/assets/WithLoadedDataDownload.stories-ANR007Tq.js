import{f as b,j as a,r as i}from"./iframe-C5LVRbsy.js";import{O as u}from"./object-table-BT8Ac0oQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-K1ylsg2m.js";import"./Table-B4a_9DEB.js";import"./index-BEkT1F7H.js";import"./Dialog-CbcheREs.js";import"./cross-DbX0Gn7n.js";import"./svgIconContainer-DcjXl59C.js";import"./useBaseUiId-Cex6lMBa.js";import"./InternalBackdrop-CLXYuIrG.js";import"./composite-Bvfbgvr6.js";import"./index-BrY-UWMk.js";import"./index-CoTPiixG.js";import"./index--8R4rgbm.js";import"./useEventCallback-CJLqrufe.js";import"./SkeletonBar-Bm8_31ik.js";import"./LoadingCell-RPoJaTLX.js";import"./ColumnConfigDialog-BTxV2uRg.js";import"./DraggableList-C9sVslZg.js";import"./Input-E-Lsewxd.js";import"./useControlled-Dv3XRtLo.js";import"./Button-CFO0hH20.js";import"./small-cross-DarlYaZj.js";import"./ActionButton-jAfM1c_2.js";import"./Checkbox-Cy3qLuEL.js";import"./minus-CkAc4Zjo.js";import"./useValueChanged-BGdmROTD.js";import"./caret-down-B6bDXZDL.js";import"./CollapsiblePanel-jZD52qbq.js";import"./MultiColumnSortDialog-DuELXTq-.js";import"./MenuTrigger-4CG6FkIu.js";import"./CompositeItem-RqoJNm3t.js";import"./ToolbarRootContext-D4qe3WEg.js";import"./getDisabledMountTransitionStyles-DKCZf36K.js";import"./getPseudoElementBounds-CMQaDoVv.js";import"./chevron-down-h7zqAvrF.js";import"./index-CXYDNjXC.js";import"./error-g8Js0Gy8.js";import"./BaseCbacBanner-C5cX60Bm.js";import"./makeExternalStore-CZe88uh1.js";import"./Tooltip-COvecdxD.js";import"./PopoverPopup-DbbuOs4d.js";import"./toNumber-CMXM86nv.js";import"./useOsdkClient-DLLoIgI_.js";import"./DropdownField-BNgX09f1.js";import"./withOsdkMetrics-CjR-Lgtt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

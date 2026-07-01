import{f as b,j as a,r as i}from"./iframe-BWK3j4Bc.js";import{O as u}from"./object-table-B5H4oTbl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dfe5MO2u.js";import"./Table-DqOm1dFD.js";import"./index-DxqGnzK1.js";import"./Dialog-AwDLv8th.js";import"./cross-DbLWNhwv.js";import"./svgIconContainer-D1lCxR_S.js";import"./useBaseUiId-DOMurdeY.js";import"./InternalBackdrop-DkasvxJc.js";import"./composite-Dfu_j4_V.js";import"./index-Dq5qOt3A.js";import"./index-BVFGLqJ0.js";import"./index-CmTDeJsN.js";import"./useEventCallback-D6RTmQqa.js";import"./SkeletonBar-furSyzu_.js";import"./LoadingCell-D8E9jlkd.js";import"./ColumnConfigDialog--cKNBoxs.js";import"./DraggableList-B6DVLwpL.js";import"./search-DGv78-ya.js";import"./Input-CivS3tPx.js";import"./useControlled-Bt-xtMWt.js";import"./Button-CYcagvus.js";import"./small-cross-C08jVvKd.js";import"./ActionButton-D-cyifGH.js";import"./Checkbox-DTuDo_k1.js";import"./minus-hpdP53eT.js";import"./tick-BfpQeNVU.js";import"./useValueChanged-yKxErBpy.js";import"./caret-down-TCOLLt_8.js";import"./CollapsiblePanel-CH1lara0.js";import"./MultiColumnSortDialog-Dj7XfRbU.js";import"./MenuTrigger-DAmaUz7R.js";import"./CompositeItem-DuBjebRr.js";import"./ToolbarRootContext-C0rt45Xb.js";import"./getDisabledMountTransitionStyles-E26QfBiY.js";import"./getPseudoElementBounds-C2zreZjK.js";import"./chevron-down-Bsx7mpFG.js";import"./index-Cyil71YA.js";import"./error-Bk9VHHeM.js";import"./BaseCbacBanner-pg0-_YJN.js";import"./makeExternalStore-BR11O0-P.js";import"./Tooltip-B6Xv27oz.js";import"./PopoverPopup-msbaWyOv.js";import"./toNumber-DYByPN90.js";import"./useOsdkClient-B480YshP.js";import"./DropdownField-FUuLd2nG.js";import"./withOsdkMetrics-DxB6oO2V.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

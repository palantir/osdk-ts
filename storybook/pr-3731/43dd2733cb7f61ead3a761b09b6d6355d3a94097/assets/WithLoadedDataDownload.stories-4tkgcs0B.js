import{f as b,j as a,r as i}from"./iframe-Ds6ci5f_.js";import{O as u}from"./object-table-DJo8Hvyp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BmgiVgXk.js";import"./Table-CY2fqUML.js";import"./index-BF2buGCB.js";import"./Dialog-B4j4VlaZ.js";import"./cross-T2wtcCzG.js";import"./svgIconContainer-Dc9SJ_SV.js";import"./useBaseUiId-D5z5kVld.js";import"./InternalBackdrop-fgnk488v.js";import"./composite-CfTm1kpt.js";import"./index-C7rj8PmX.js";import"./index-BF1y1McZ.js";import"./index-C4iA4fv0.js";import"./useEventCallback-DTlUutSa.js";import"./SkeletonBar-CC-vdX0Q.js";import"./LoadingCell-yrde3eJz.js";import"./ColumnConfigDialog-DM-xJKcv.js";import"./DraggableList-GUAg5Dpp.js";import"./search-VNnWqJuM.js";import"./Input-C_GkCnWt.js";import"./useControlled-aWNAMtDj.js";import"./isEqual-CeuVkr2d.js";import"./isObject-DbC-Jx7m.js";import"./Button-BBlEXWMP.js";import"./ActionButton-BiW9Byve.js";import"./Checkbox-Cdiv4-44.js";import"./useValueChanged-Ch4Rz8la.js";import"./CollapsiblePanel-BYC6FcRU.js";import"./MultiColumnSortDialog-3aN9_CA3.js";import"./MenuTrigger-jcY8nQZI.js";import"./CompositeItem-CPz6r1FZ.js";import"./ToolbarRootContext-DxXa8C9m.js";import"./getDisabledMountTransitionStyles-DYPS8V0e.js";import"./getPseudoElementBounds-B-uuo1bm.js";import"./chevron-down-CpZWm6E5.js";import"./index-DZ4gcSou.js";import"./error-B-cgWIQQ.js";import"./BaseCbacBanner-D9abOnIg.js";import"./makeExternalStore-nT7iX2bb.js";import"./Tooltip-BFfOeZG7.js";import"./PopoverPopup-D5u1s52y.js";import"./toNumber-DNsx6Z-r.js";import"./useOsdkClient-cR6nS2vF.js";import"./tick-3jlUv760.js";import"./DropdownField-CJr-lUV4.js";import"./withOsdkMetrics-DRsF52NJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-8mEMf3e5.js";import{O as u}from"./object-table-CBeO6GJv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DbAS9a1v.js";import"./Table-2LaouPg7.js";import"./index--J3l5EbG.js";import"./Dialog-BXa8SM-x.js";import"./cross-UGSNun_i.js";import"./svgIconContainer-BDT9UouZ.js";import"./useBaseUiId-DKi4WO_9.js";import"./InternalBackdrop-CEKXh1r6.js";import"./composite-C_r6gpBa.js";import"./index-BFzy3rwW.js";import"./index-B4h71S0u.js";import"./index-Fnh0SKoA.js";import"./useEventCallback-BA3rmIgm.js";import"./SkeletonBar-B4q-fZON.js";import"./LoadingCell-BtMn-OKA.js";import"./ColumnConfigDialog-yGg0EZmf.js";import"./DraggableList-D8cZ2I0J.js";import"./search-D3-FY_Jd.js";import"./Input-D4BJzKx_.js";import"./useControlled-CxBgkGC_.js";import"./isEqual-DuszkGv8.js";import"./isObject-DLnm7mgx.js";import"./Button-DilAyh-o.js";import"./ActionButton-BYOem6VU.js";import"./Checkbox-DZsB_T0F.js";import"./useValueChanged--MxB3UJn.js";import"./CollapsiblePanel-xxPgX1M9.js";import"./MultiColumnSortDialog-BZMnhRkj.js";import"./MenuTrigger-BuOkqg4V.js";import"./CompositeItem-CxQ7s4vA.js";import"./ToolbarRootContext-zmF5Vdu_.js";import"./getDisabledMountTransitionStyles-BUd0X9ss.js";import"./getPseudoElementBounds-CuDU7ocY.js";import"./chevron-down-C6YJpuG9.js";import"./index-CRqHRu41.js";import"./error-75F6hF38.js";import"./BaseCbacBanner-DIOYHQZK.js";import"./makeExternalStore-BoR92T3E.js";import"./Tooltip-Dy5F6isQ.js";import"./PopoverPopup-ClxUddzo.js";import"./toNumber-D6lWBfW1.js";import"./useOsdkClient-IgGH-bJp.js";import"./tick-hmdyoMoc.js";import"./DropdownField-B__xqiLV.js";import"./withOsdkMetrics-BDnjGfwF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-n9hYnZ1k.js";import{O as u}from"./object-table-DIF0cZBQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BfllC993.js";import"./Table-LlnJI-Yy.js";import"./index-jFXEL4dj.js";import"./Dialog-D9exoXmi.js";import"./cross-B2c8g5Vb.js";import"./svgIconContainer-Ds9BUjSm.js";import"./useBaseUiId--HQwG44S.js";import"./InternalBackdrop-CzoOD5Ge.js";import"./composite-BHMqnRJI.js";import"./index-CD83LihZ.js";import"./index-CsVpqo9H.js";import"./index-BwfYcv9A.js";import"./useEventCallback-x8Kd3t-m.js";import"./SkeletonBar-BUxRGNdG.js";import"./LoadingCell-CHkKSLPb.js";import"./ColumnConfigDialog-B9Zg_5bp.js";import"./DraggableList-BVxljRWA.js";import"./search-DNZ54Yxb.js";import"./Input-D9iybl22.js";import"./useControlled-DVMhLBcM.js";import"./Button-C1ReapeD.js";import"./small-cross-UgWxpI9F.js";import"./ActionButton-CwGZb2W_.js";import"./Checkbox-BkmEuroC.js";import"./useValueChanged-Bk8VifO3.js";import"./CollapsiblePanel-DS7tzca4.js";import"./MultiColumnSortDialog-nBO__Yys.js";import"./MenuTrigger-C1g50UNL.js";import"./CompositeItem-CR3Fp4HR.js";import"./ToolbarRootContext-D77_KmSZ.js";import"./getDisabledMountTransitionStyles-C901m8ZM.js";import"./getPseudoElementBounds-BM01uxnJ.js";import"./chevron-down-0IZaGxOE.js";import"./index-BM8zROYs.js";import"./error-D9TzGXim.js";import"./BaseCbacBanner-DrNBQoWr.js";import"./makeExternalStore-C_HtZfof.js";import"./Tooltip-Cz0yU5is.js";import"./PopoverPopup-DZ28aU8u.js";import"./Select-F-RRM_58.js";import"./useOsdkClient-DB8tqHvc.js";import"./tick-Cw1T4_7H.js";import"./DropdownField-DjHzjuSX.js";import"./useDebouncedCallback-Cnujztnb.js";import"./isEqual-B8vYID_A.js";import"./_baseIsEqual-DZoBIkXn.js";import"./stableSerialize-gfVvfbkg.js";import"./withOsdkMetrics-3ldmX6a3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],Ee={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Se=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Se as __namedExportsOrder,Ee as default};

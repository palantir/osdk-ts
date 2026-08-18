import{f as b,j as a,r as i}from"./iframe-C1PJ2Ip3.js";import{O as u}from"./object-table-DrEfBfWz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-K62Nqc8W.js";import"./Table-bDGEE5Ye.js";import"./index-Bl_td8xL.js";import"./Dialog-D2A7rpXk.js";import"./cross-BL08wg1G.js";import"./svgIconContainer-CS1Om_Hp.js";import"./useBaseUiId-DyrsDa4O.js";import"./InternalBackdrop-18_u3Bxf.js";import"./composite-SuHb1-n8.js";import"./index-CQ1-7fux.js";import"./index-BwWp-Y48.js";import"./index-DbG8xmuF.js";import"./useEventCallback-CA44GkQU.js";import"./SkeletonBar-XjfXRsEZ.js";import"./LoadingCell-CraGbydn.js";import"./ColumnConfigDialog-wDx_lzxG.js";import"./DraggableList-Bm_-reKI.js";import"./search-664FgG4e.js";import"./Input-C990PYdc.js";import"./useControlled-DAF9cP4u.js";import"./Button-D_-j7_TT.js";import"./small-cross-BzOk2_U5.js";import"./ActionButton-CBvWgBp4.js";import"./Checkbox-B0HEuMZr.js";import"./useValueChanged-KUt7bhos.js";import"./CollapsiblePanel-DvU2YKX7.js";import"./MultiColumnSortDialog-BRtSFgNV.js";import"./MenuTrigger-PenfRPuT.js";import"./CompositeItem-Y5w5FHLX.js";import"./ToolbarRootContext-DK1JTwfB.js";import"./getDisabledMountTransitionStyles-CIuJRipc.js";import"./getPseudoElementBounds-UxfqvlrI.js";import"./chevron-down-DsYD0DIc.js";import"./index-DD9JVuxo.js";import"./error-4m8JSMdV.js";import"./BaseCbacBanner-Cu_HhiTv.js";import"./makeExternalStore-CZuSCPax.js";import"./Tooltip-a9XQHJAr.js";import"./PopoverPopup-BV20P4zG.js";import"./debounce-CzwkNGld.js";import"./useOsdkClient-BMcHutRF.js";import"./tick-CZuw3C8k.js";import"./DropdownField-DbjsbhxR.js";import"./isEqual-BESLgLUF.js";import"./withOsdkMetrics-CdeGhgQc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

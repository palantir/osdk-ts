import{f as b,j as a,r as i}from"./iframe-BqbigeuD.js";import{O as u}from"./object-table-ClqDNB1D.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-RQWAHosC.js";import"./index-D7s1vZwA.js";import"./Dialog-BuZiIJzM.js";import"./cross-CLJqu8dR.js";import"./svgIconContainer-CNyNUipw.js";import"./useBaseUiId-BrUQ1lUA.js";import"./InternalBackdrop-CADGsbSS.js";import"./composite-DOjpwy0F.js";import"./index-CLCCLTRM.js";import"./index-KjJeD42o.js";import"./index-CK3DihJa.js";import"./useEventCallback-B_T5g4Vi.js";import"./SkeletonBar-ByKW1A8u.js";import"./LoadingCell-DmWxZ4hr.js";import"./ColumnConfigDialog-LESDT8Pt.js";import"./DraggableList-Cw4KULFA.js";import"./search-BkoZ-p7h.js";import"./Input-w6FfiWMZ.js";import"./useControlled-BkV9XWg4.js";import"./Button-Bs_AcwvG.js";import"./small-cross-Wg6h33WU.js";import"./ActionButton-DESSk2L6.js";import"./Checkbox-Csso-sIn.js";import"./useValueChanged-BVNP8RsF.js";import"./CollapsiblePanel-BgblNzsZ.js";import"./MultiColumnSortDialog-HMq3ZHNG.js";import"./MenuTrigger-Bgxeic5c.js";import"./CompositeItem-dQj9Bt62.js";import"./ToolbarRootContext-B_mJM9-f.js";import"./getDisabledMountTransitionStyles-CCtmzqiZ.js";import"./getPseudoElementBounds-l5CwwhmS.js";import"./chevron-down-GBaXIHW1.js";import"./index-BfjKC9iU.js";import"./error-BChOvziS.js";import"./BaseCbacBanner-Bw6sSYx1.js";import"./makeExternalStore-kAlj8eNH.js";import"./Tooltip-CDaVt04k.js";import"./PopoverPopup-ClTiD7mI.js";import"./debounce-WRa7r5fz.js";import"./useOsdkClient-5ha46Acw.js";import"./tick-D0Qn2Cby.js";import"./DropdownField-CNzaS55x.js";import"./isEqual-CJ26dzBU.js";import"./withOsdkMetrics-rp-esplT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

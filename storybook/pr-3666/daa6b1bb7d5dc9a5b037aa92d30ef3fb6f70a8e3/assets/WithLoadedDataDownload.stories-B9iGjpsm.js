import{f as b,j as a,r as i}from"./iframe-qUoJ8bD1.js";import{O as u}from"./object-table-C32Rb_v3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ol3ztxLZ.js";import"./Table-DRuLsJ_W.js";import"./index-vMykFoz6.js";import"./Dialog-Qn8cLgI0.js";import"./cross-Cb35bm_z.js";import"./svgIconContainer-BFdHToqX.js";import"./useBaseUiId-DfL4ZZ8P.js";import"./InternalBackdrop-Cy_T0_FE.js";import"./composite-tj8owiCg.js";import"./index-DP_UhRTF.js";import"./index-Cz64Jyqa.js";import"./index-CB8C7-cG.js";import"./useEventCallback-DyvP_A81.js";import"./SkeletonBar-B4W7I0T9.js";import"./LoadingCell-C15wAKb0.js";import"./ColumnConfigDialog-BYKxoyE9.js";import"./DraggableList-DoSjLXZ2.js";import"./search-tL4GtzWj.js";import"./Input-CvSd3bUP.js";import"./useControlled-FmFohdHO.js";import"./isEqual-B_BmCAxf.js";import"./isObject-Dq2guUP7.js";import"./Button-DKNtfJMf.js";import"./ActionButton-CzoT9_MD.js";import"./Checkbox-MV4Nduzg.js";import"./useValueChanged-B3K31CFr.js";import"./CollapsiblePanel-Dkg1AscN.js";import"./MultiColumnSortDialog-DQTHxNJz.js";import"./MenuTrigger-2erLp3kW.js";import"./CompositeItem-BQsHw04j.js";import"./ToolbarRootContext-B_pSOxlb.js";import"./getDisabledMountTransitionStyles-CAcIXuef.js";import"./getPseudoElementBounds-BjRM6Xgm.js";import"./chevron-down-CMcKK_Lk.js";import"./index-SLkx8Rlc.js";import"./error-CbX-Ektr.js";import"./BaseCbacBanner-DQSGrcdr.js";import"./makeExternalStore-Os8YTNFV.js";import"./Tooltip-DpDnM_U4.js";import"./PopoverPopup-BMhFJB_0.js";import"./toNumber-6Rdthf3C.js";import"./useOsdkClient-BZmE3ry2.js";import"./tick-y6xP0Rva.js";import"./DropdownField-CqolFLg9.js";import"./withOsdkMetrics-DxfUN9ge.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

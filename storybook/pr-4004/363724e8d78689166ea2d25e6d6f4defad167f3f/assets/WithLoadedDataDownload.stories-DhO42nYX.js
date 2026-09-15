import{f as b,j as a,r as i}from"./iframe-D8hMLNEt.js";import{O as u}from"./object-table-BKVAudWN.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DdG7SQNV.js";import"./Table-DPcU3goU.js";import"./index-QDiAeGPl.js";import"./Dialog-CTNbHSyM.js";import"./cross-SP4nOs9x.js";import"./svgIconContainer-BJNLg_qp.js";import"./useBaseUiId-O-XOb3K-.js";import"./InternalBackdrop-BWmGo_0i.js";import"./composite-36-nzuho.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./index-CYi3P9bP.js";import"./useEventCallback-BUFtzlGF.js";import"./SkeletonBar-Br5GneAQ.js";import"./LoadingCell-Dc5q-JgP.js";import"./ColumnConfigDialog-Bv-9rG9y.js";import"./DraggableList-DFj2LmBF.js";import"./search-fDezn5AL.js";import"./Input-DMnyIvQ_.js";import"./useControlled-60YnUuGr.js";import"./Button-C5El-Ott.js";import"./small-cross-CnL6sI_q.js";import"./ActionButton-BBpnUKPy.js";import"./Checkbox-Cha3BFPL.js";import"./useValueChanged-Bm34Du_O.js";import"./CollapsiblePanel-Cy98f2QZ.js";import"./MultiColumnSortDialog-DXezHdvO.js";import"./MenuTrigger--bnc-pAS.js";import"./CompositeItem-C5rE64Sx.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./getDisabledMountTransitionStyles-C0Hmpzmq.js";import"./getPseudoElementBounds-BmPS8XBk.js";import"./chevron-down-BOORn2QE.js";import"./index-CXwV2iqk.js";import"./error-CLijhntf.js";import"./BaseCbacBanner-B0WVh69X.js";import"./makeExternalStore-Bvnv1DDu.js";import"./Tooltip-Cll_9OQu.js";import"./PopoverPopup-CnH8jKUA.js";import"./debounce-DSbZ-o5K.js";import"./useOsdkClient-Dp1gI7BH.js";import"./tick-CGx1uDyI.js";import"./DropdownField-B31FtCPd.js";import"./isEqual-Dbe--Ogh.js";import"./withOsdkMetrics-wAiRx6GW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

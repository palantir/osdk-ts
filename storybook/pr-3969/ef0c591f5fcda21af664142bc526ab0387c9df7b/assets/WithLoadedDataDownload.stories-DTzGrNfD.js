import{f as b,j as a,r as i}from"./iframe-D12e5Yf9.js";import{O as u}from"./object-table-C83DgUss.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-34QCnBMF.js";import"./Table-BwaFBq6A.js";import"./index-O4zTr8Ld.js";import"./Dialog-RlonKzaN.js";import"./cross-Cs_yM80q.js";import"./svgIconContainer-B0rntCL0.js";import"./useBaseUiId-s740CplR.js";import"./InternalBackdrop-BAYiAeOX.js";import"./composite-BD8updFS.js";import"./index-Hw5856rK.js";import"./index-GyhMgPa-.js";import"./index-CS6GRPG3.js";import"./useEventCallback-CSCtau5v.js";import"./SkeletonBar-Cka0V5Rd.js";import"./LoadingCell-DJKcxbzu.js";import"./ColumnConfigDialog-C3gIwO9D.js";import"./DraggableList-B5PA338U.js";import"./search-D5rTLbi7.js";import"./Input-dW8Zs2Bg.js";import"./useControlled-ID5WarEe.js";import"./Button-D5sAducB.js";import"./small-cross-DeNy61PY.js";import"./ActionButton-D-3sp6yo.js";import"./Checkbox-CUmX8lCr.js";import"./useValueChanged-BKRmcgi7.js";import"./CollapsiblePanel-ON1FZ9if.js";import"./MultiColumnSortDialog-BDa7i4rv.js";import"./MenuTrigger-D_-LX7s-.js";import"./CompositeItem-BNcuqAtd.js";import"./ToolbarRootContext-DNlY1kW_.js";import"./getDisabledMountTransitionStyles-Dqz1fAgY.js";import"./getPseudoElementBounds-D9Evvgka.js";import"./chevron-down-BHFsOBbt.js";import"./index-idqsRB9k.js";import"./error-DMTSuwww.js";import"./BaseCbacBanner-Du0rme9V.js";import"./makeExternalStore-HCjLV6k-.js";import"./Tooltip-DP25Isvd.js";import"./PopoverPopup-cuW7qwZh.js";import"./debounce-hXqbGHnZ.js";import"./useOsdkClient-PwSTMRmq.js";import"./tick-Bj9LbqSh.js";import"./DropdownField-o_Oc83C9.js";import"./isEqual-CL5yfhVm.js";import"./withOsdkMetrics-B58QGQVF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

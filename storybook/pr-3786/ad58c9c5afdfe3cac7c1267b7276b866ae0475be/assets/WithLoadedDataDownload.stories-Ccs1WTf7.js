import{f as b,j as a,r as i}from"./iframe-BUj1CfXg.js";import{O as u}from"./object-table-DyKvR0rE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZ45QRbv.js";import"./Table-CWSTK4rq.js";import"./index-NBVyoVsZ.js";import"./Dialog-B_j-bdOZ.js";import"./cross-DlyIjemV.js";import"./svgIconContainer-MYfqGk3H.js";import"./useBaseUiId-DaOhoyrU.js";import"./InternalBackdrop-DzPAcrCS.js";import"./composite-BkdiVfPs.js";import"./index-C1gw1Q5a.js";import"./index-B4P9wCIh.js";import"./index-CQceiGqI.js";import"./useEventCallback-BbRR7V1i.js";import"./SkeletonBar-DtLmqaeu.js";import"./LoadingCell--ZKV-a4a.js";import"./ColumnConfigDialog-Bq93dVdv.js";import"./DraggableList-BR-zSyBl.js";import"./search-CeD93pBN.js";import"./Input-BTDiXSNB.js";import"./useControlled-BjYCZfKY.js";import"./isEqual-CU5FZwCW.js";import"./isObject-C_gfn-Rb.js";import"./Button-B5y7ZCvT.js";import"./ActionButton-BmWBQE9y.js";import"./Checkbox-BHMj1n9f.js";import"./useValueChanged-RokLUTbm.js";import"./CollapsiblePanel-fD7arT3b.js";import"./MultiColumnSortDialog-B51pu96z.js";import"./MenuTrigger-HGKcp2Gy.js";import"./CompositeItem-C-wl7l8I.js";import"./ToolbarRootContext-BFvRmjuo.js";import"./getDisabledMountTransitionStyles-DUFQ-qCZ.js";import"./getPseudoElementBounds-BnMLzqS4.js";import"./chevron-down-DgAFPu4M.js";import"./index-BXPBNZV3.js";import"./error-peAS9X8o.js";import"./BaseCbacBanner-r6BnHO-C.js";import"./makeExternalStore-CN2SCzrt.js";import"./Tooltip-Byi-ofNp.js";import"./PopoverPopup-C7JRc8oc.js";import"./toNumber-CpnBpuJd.js";import"./useOsdkClient-k-jR9e5k.js";import"./tick-8bw-0Y7b.js";import"./DropdownField-BWBqfaQX.js";import"./withOsdkMetrics-CXkSfRrz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DVX-iFxA.js";import{O as u}from"./object-table-D6kf4eOA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-0vGU7s_D.js";import"./Table-BVSTf5g2.js";import"./index-Cn2uYV9E.js";import"./Dialog-Dfg5Uj0g.js";import"./cross-AKBZlCYC.js";import"./svgIconContainer-DIvvaSR0.js";import"./useBaseUiId-gG8bMQPn.js";import"./InternalBackdrop-DJ1ZwoZ6.js";import"./composite-MKnWREQg.js";import"./index-Bl00HuKQ.js";import"./index-CZtUkVEM.js";import"./index-dChBiCSh.js";import"./useEventCallback-DxP4NF1J.js";import"./SkeletonBar-2PIz6m3b.js";import"./LoadingCell-yihQBEOG.js";import"./ColumnConfigDialog-Bt-NO7rA.js";import"./DraggableList-BY7AGQqY.js";import"./Input-B_-bU7zr.js";import"./useControlled-N-Q3L4ZY.js";import"./Button-BWp2sCa_.js";import"./small-cross-BNNMdKZh.js";import"./ActionButton-CC7eO7K8.js";import"./Checkbox-BUW1YE8z.js";import"./useValueChanged-uNHW8YGZ.js";import"./CollapsiblePanel-DCcd11Gq.js";import"./MultiColumnSortDialog-ChKshzfC.js";import"./MenuTrigger-C6UGHtt2.js";import"./CompositeItem-K4e5xRVi.js";import"./ToolbarRootContext-Dm77GgFm.js";import"./getDisabledMountTransitionStyles-Cu8RrX42.js";import"./getPseudoElementBounds-DAkMEehU.js";import"./chevron-down-DOZ4R2pO.js";import"./index-CtKd7cJN.js";import"./error-CaTMSZaC.js";import"./BaseCbacBanner-_DIX43be.js";import"./makeExternalStore-DajWivXx.js";import"./Tooltip-BnE5RYhX.js";import"./PopoverPopup-gZAJMDwT.js";import"./toNumber-B_H3upUv.js";import"./useOsdkClient-s2ZrGdV3.js";import"./DropdownField-Bf4IbhSa.js";import"./withOsdkMetrics-BmY_UP3P.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],fe={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const be=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,be as __namedExportsOrder,fe as default};

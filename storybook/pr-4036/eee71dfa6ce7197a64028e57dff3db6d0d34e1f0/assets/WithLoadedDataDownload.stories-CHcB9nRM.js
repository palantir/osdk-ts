import{f as b,j as a,r as i}from"./iframe-DALIkhit.js";import{O as u}from"./object-table-BhKt55cA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DctxGWdw.js";import"./Table-DtcDSPkw.js";import"./index-CRXXRxj8.js";import"./Dialog-B_RuCNwj.js";import"./cross-Lsk0KBg0.js";import"./svgIconContainer-spB4tjSy.js";import"./useBaseUiId-DYLAsVU1.js";import"./InternalBackdrop-aOf-2TsU.js";import"./composite-DNV43Yqw.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./index-B4ELnjW2.js";import"./useEventCallback-DYhKCTqd.js";import"./SkeletonBar-DxPKDsZj.js";import"./LoadingCell-DexgFDI-.js";import"./ColumnConfigDialog-BcrcIj4z.js";import"./DraggableList-CN1TXGvD.js";import"./search-DGhvTCsG.js";import"./Input-lOkk4Did.js";import"./useControlled-D3lOoo5c.js";import"./Button-BsqgxFa7.js";import"./small-cross-C0Cw1tJu.js";import"./ActionButton-BxyaPNEd.js";import"./Checkbox-DMRQwsZt.js";import"./useValueChanged-ybVWH_rP.js";import"./CollapsiblePanel-C4equoJ3.js";import"./MultiColumnSortDialog-BWhsqyAr.js";import"./MenuTrigger-CX1MgxOd.js";import"./CompositeItem-jTsd3S2E.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./getDisabledMountTransitionStyles-BGaY7OxB.js";import"./getPseudoElementBounds-ORsAqzKa.js";import"./chevron-down-CAkJr31e.js";import"./index-C_CgxuxZ.js";import"./error-D7k6AgT2.js";import"./BaseCbacBanner-DJyF9NAx.js";import"./makeExternalStore-ByjGMN0z.js";import"./Tooltip-C28mGjrB.js";import"./PopoverPopup-BB9pf0-g.js";import"./debounce-DBBvjiY6.js";import"./useOsdkClient-DRA9qEhw.js";import"./tick-DF-H6RV9.js";import"./DropdownField-DRTmVUHk.js";import"./isEqual-6UGvStcv.js";import"./withOsdkMetrics-YLhbsdmr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

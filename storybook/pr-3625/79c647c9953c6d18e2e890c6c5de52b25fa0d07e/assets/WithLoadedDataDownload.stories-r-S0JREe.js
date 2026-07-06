import{f as b,j as a,r as i}from"./iframe--BTIj_Lo.js";import{O as u}from"./object-table-BIYJNZPY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CEmb-Q6f.js";import"./Table-C4eD3X8F.js";import"./index-5QzPu0zS.js";import"./Dialog-B11gp1as.js";import"./cross-BVyqMvNZ.js";import"./svgIconContainer-C8rvkcgB.js";import"./useBaseUiId-DSI_fwKo.js";import"./InternalBackdrop-mGWLJxDz.js";import"./composite-T6EOkG9k.js";import"./index-DfEVhqks.js";import"./index-L2eSYA45.js";import"./index-C4NeL8n3.js";import"./useEventCallback-BQlw9-QA.js";import"./SkeletonBar-C9mU17UI.js";import"./LoadingCell-BOzmB6vC.js";import"./ColumnConfigDialog-CZg5qiUW.js";import"./DraggableList-D74Lto_g.js";import"./search-CP4GV30M.js";import"./Input-BB8CG86K.js";import"./useControlled-CmpAGulH.js";import"./Button-BuCVTh2L.js";import"./small-cross-BkHLR8gD.js";import"./ActionButton-BrdsOqWv.js";import"./Checkbox-CbAh5OH5.js";import"./useValueChanged-P6b5TF8Y.js";import"./CollapsiblePanel-s2HT7sNF.js";import"./MultiColumnSortDialog-DKQUPqII.js";import"./MenuTrigger-BNbeqff8.js";import"./CompositeItem-BRO1zZpY.js";import"./ToolbarRootContext-D91fkyhg.js";import"./getDisabledMountTransitionStyles-BaYCzZGd.js";import"./getPseudoElementBounds-X_geufzJ.js";import"./chevron-down-BWTwUwIH.js";import"./index-Dz-4UQu6.js";import"./error-BmvmUc1M.js";import"./BaseCbacBanner-B9wVxPB3.js";import"./makeExternalStore-DzurZ1Cf.js";import"./Tooltip-CYTH1wPK.js";import"./PopoverPopup-DIkTznfG.js";import"./toNumber-b_2HAfbk.js";import"./useOsdkClient-Dyw1dsoW.js";import"./tick-Dcfkv1-Q.js";import"./DropdownField-BKsRGtTg.js";import"./withOsdkMetrics-DnOZdfps.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

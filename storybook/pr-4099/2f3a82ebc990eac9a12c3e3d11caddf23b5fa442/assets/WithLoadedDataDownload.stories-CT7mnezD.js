import{f as b,j as a,r as i}from"./iframe-BDPC3MGU.js";import{O as u}from"./object-table-Bel4yIfS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqLc1wpe.js";import"./Table-Dgr-gIm8.js";import"./index-wr-Wa-rJ.js";import"./Dialog-DTR1MYhK.js";import"./cross-DYURuHsA.js";import"./svgIconContainer-BbA1ZoWr.js";import"./useBaseUiId-98Vlp7TA.js";import"./InternalBackdrop-Cgbf8eQA.js";import"./composite-BmeraXkj.js";import"./index-BCVo02gU.js";import"./index--VX9rzYc.js";import"./index-BRzzcBKu.js";import"./useEventCallback-ButC9m8B.js";import"./SkeletonBar-CsWliIs4.js";import"./LoadingCell-Dqufu0HX.js";import"./ColumnConfigDialog-By9TyQEv.js";import"./DraggableList-DQNrHfSk.js";import"./search-CHOuY8gu.js";import"./Input-q3l62r8C.js";import"./useControlled-BH2-CGJ0.js";import"./Button-BuWPanNZ.js";import"./small-cross-Cmb1RV_x.js";import"./ActionButton-B2xYsKtl.js";import"./Checkbox-HciCFw3O.js";import"./useValueChanged-CMbbAfeq.js";import"./CollapsiblePanel-hce81KCR.js";import"./MultiColumnSortDialog-BWmVf4xL.js";import"./MenuTrigger-DYNmmqOz.js";import"./CompositeItem-Glk6Ljpg.js";import"./ToolbarRootContext-gDYw7M9I.js";import"./getDisabledMountTransitionStyles-Ca5SDU94.js";import"./getPseudoElementBounds-1wBk6-FK.js";import"./chevron-down-B2ocyj_k.js";import"./index-DH6huj2W.js";import"./error-BZbzk8xv.js";import"./BaseCbacBanner-BBCBr5LI.js";import"./makeExternalStore-zlVMHsWj.js";import"./Tooltip-B8W6XcXq.js";import"./PopoverPopup-Dx8llI49.js";import"./debounce-Dm3_movg.js";import"./useOsdkClient-D8d5JuS7.js";import"./tick-Csqr7cIl.js";import"./DropdownField-zGmV-Acf.js";import"./isEqual-C7uizYde.js";import"./withOsdkMetrics-Dge8_qYA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

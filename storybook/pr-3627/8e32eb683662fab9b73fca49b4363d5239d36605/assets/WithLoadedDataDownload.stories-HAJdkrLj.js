import{f as b,j as a,r as i}from"./iframe-X6aRn_A_.js";import{O as u}from"./object-table-BOGAzNJ7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BVpfEQS6.js";import"./Table-nSiHVTc-.js";import"./index-Cyl8tkUH.js";import"./Dialog-BELv6Bui.js";import"./cross-U21mFULk.js";import"./svgIconContainer-DEQ-IdoH.js";import"./useBaseUiId-d62_61Z8.js";import"./InternalBackdrop-DOTUmcqT.js";import"./composite-B6kCikc_.js";import"./index-mIA1XLzv.js";import"./index-B5lMo9VV.js";import"./index-CoB9cpBB.js";import"./useEventCallback-BB90yF-Q.js";import"./SkeletonBar-BwifJ0Tx.js";import"./LoadingCell-OxF8Tmul.js";import"./ColumnConfigDialog-DoNKSF8A.js";import"./DraggableList-8-4vW4MD.js";import"./search-DbrdMPT_.js";import"./Input-BrrEA2gh.js";import"./useControlled-D_rRgLsE.js";import"./Button-A56P5X5x.js";import"./small-cross-BchK_TBw.js";import"./ActionButton-BSgBn2-K.js";import"./Checkbox-BstvJPK9.js";import"./useValueChanged-Cg67RaKs.js";import"./CollapsiblePanel--fD4wpGl.js";import"./MultiColumnSortDialog-CFBDmVnb.js";import"./MenuTrigger-BeQmaV2q.js";import"./CompositeItem-wTkB1J4Z.js";import"./ToolbarRootContext-qs1Vhlbe.js";import"./getDisabledMountTransitionStyles-ibdF5f8p.js";import"./getPseudoElementBounds-4jpAj3pw.js";import"./chevron-down-D7ddD8SZ.js";import"./index-Dfl2Narl.js";import"./error-aHjvdeV3.js";import"./BaseCbacBanner-Tqa37gua.js";import"./makeExternalStore-Ckt6fzv-.js";import"./Tooltip-CjehJzWC.js";import"./PopoverPopup-B0J4Z5Rk.js";import"./toNumber-BZ4gMB2i.js";import"./useOsdkClient-B-5BeN2M.js";import"./tick-NP84hYxt.js";import"./DropdownField-BKdRq2JA.js";import"./withOsdkMetrics-CJci1eTx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

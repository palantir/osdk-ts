import{f as b,j as a,r as i}from"./iframe-D48Q2Ih8.js";import{O as u}from"./object-table-DATd4Pz4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CL77aTRo.js";import"./Table-CWfEJx7M.js";import"./index-BAc81QxV.js";import"./Dialog-CEjVroA8.js";import"./cross-7sczFfzI.js";import"./svgIconContainer-C8Iv3sR3.js";import"./useBaseUiId-DGTp0U_O.js";import"./InternalBackdrop-C1aj-xTs.js";import"./composite-AHBdhfMT.js";import"./index-DKv9tcd8.js";import"./index-CMlea4RE.js";import"./index-BHqJ1oa6.js";import"./useEventCallback-aEIzFPGy.js";import"./SkeletonBar-B5oNwZvF.js";import"./LoadingCell-7-2_99YR.js";import"./ColumnConfigDialog-uxjXxGDp.js";import"./DraggableList-CcqPBCqI.js";import"./search-C9PzHLND.js";import"./Input-BYdVsABv.js";import"./useControlled-CFgtbz8z.js";import"./Button-CRna_EZj.js";import"./small-cross-DjM-LCX5.js";import"./ActionButton-DXiBkKho.js";import"./Checkbox-DUUA5pAi.js";import"./useValueChanged-_pNhoUMT.js";import"./CollapsiblePanel-otyxGyv7.js";import"./MultiColumnSortDialog-B5o9fJfs.js";import"./MenuTrigger-DLjn-TCi.js";import"./CompositeItem-CIsGCI0M.js";import"./ToolbarRootContext-RyVic0HL.js";import"./getDisabledMountTransitionStyles-CW-RwN9m.js";import"./getPseudoElementBounds-9xeptCZR.js";import"./chevron-down-BKXBxbNC.js";import"./index-BSoRDxwG.js";import"./error-CmBzdsaE.js";import"./BaseCbacBanner-DsV8cD14.js";import"./makeExternalStore-CP04809A.js";import"./Tooltip-UTWEnQHo.js";import"./PopoverPopup-CTXF1CIh.js";import"./debounce-B6B9DlWV.js";import"./useOsdkClient-BH3gu2IN.js";import"./tick-Clvl1m1w.js";import"./DropdownField-BzDGU56S.js";import"./isEqual-B4HfJ3SA.js";import"./withOsdkMetrics-D4HQPyjO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DcDxDXPh.js";import{O as u}from"./object-table-Diie1dUd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJ_iPk25.js";import"./Table-CufYny3h.js";import"./index-CEdBBQfQ.js";import"./Dialog-uf0Hkf_Z.js";import"./cross-DLkj6s4G.js";import"./svgIconContainer-DmQcC8TZ.js";import"./useBaseUiId-CJV4f8ir.js";import"./InternalBackdrop-bLOqdFA0.js";import"./composite-BV8flE8-.js";import"./index-Bo7bFw7e.js";import"./index-Bd2fH6T1.js";import"./index-rnDS6JuP.js";import"./useEventCallback-D4vRBzVu.js";import"./SkeletonBar-4V2qsMpO.js";import"./LoadingCell-8kNCdR14.js";import"./ColumnConfigDialog-CoinOv4o.js";import"./DraggableList-_eNgIQ1M.js";import"./search-BIJAhPAv.js";import"./Input-C74RgTJ1.js";import"./useControlled-BOSZXyc3.js";import"./Button-x-QMq-Ld.js";import"./small-cross-QpcQcsBN.js";import"./ActionButton-2kaK6vOe.js";import"./Checkbox-CzyWDEiz.js";import"./useValueChanged-Dk8yNpd3.js";import"./CollapsiblePanel-BwuvB16x.js";import"./MultiColumnSortDialog-CPQ9KF9X.js";import"./MenuTrigger-BphmZFAA.js";import"./CompositeItem-EY_8vSU6.js";import"./ToolbarRootContext-DuPFC5xg.js";import"./getDisabledMountTransitionStyles-Cr6igIIA.js";import"./getPseudoElementBounds-wV-qD_HN.js";import"./chevron-down-GHr7mfww.js";import"./index-CQYalOHm.js";import"./error-BoT5VSIl.js";import"./BaseCbacBanner-mSp5NL2W.js";import"./makeExternalStore-CdCSrcFn.js";import"./Tooltip-BcbgnN6W.js";import"./PopoverPopup-B0jh_TSh.js";import"./toNumber--BCa706p.js";import"./useOsdkClient-4IHPzbi4.js";import"./tick-DYchyi13.js";import"./DropdownField-DGveOHEx.js";import"./withOsdkMetrics-4iii51WK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

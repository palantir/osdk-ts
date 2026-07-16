import{f as b,j as a,r as i}from"./iframe-2P5rSZYB.js";import{O as u}from"./object-table-DBZYYZ7V.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DUMBN1oE.js";import"./Table-tGI-RqsB.js";import"./index-CAoow5Tc.js";import"./Dialog-BqCkGum9.js";import"./cross-C8buVPN_.js";import"./svgIconContainer-BuLz4yUd.js";import"./useBaseUiId-DkVMBaZu.js";import"./InternalBackdrop-CWIMTXlO.js";import"./composite-wSp6B-w9.js";import"./index-Sbnqq9EV.js";import"./index-ZhrmGNEl.js";import"./index-DwuIiRHv.js";import"./useEventCallback-CuYb76_M.js";import"./SkeletonBar-cwSOP0v3.js";import"./LoadingCell-QdSu1e8-.js";import"./ColumnConfigDialog-Civ2cvhV.js";import"./DraggableList-9xmZqlTG.js";import"./search-BlAQj842.js";import"./Input-DzG-mEdZ.js";import"./useControlled-Cwm3UgkD.js";import"./Button-DgF_AxYC.js";import"./small-cross-RsorBwtB.js";import"./ActionButton-BUSQ8b9F.js";import"./Checkbox-BrBLynVL.js";import"./useValueChanged-B-o5hxCd.js";import"./CollapsiblePanel-CQUtIe1d.js";import"./MultiColumnSortDialog-NsaE_5cz.js";import"./MenuTrigger-DreGP4Mx.js";import"./CompositeItem-Bwok9D42.js";import"./ToolbarRootContext-D7fp9PDG.js";import"./getDisabledMountTransitionStyles-D_gtUdu-.js";import"./getPseudoElementBounds-BYwi6ks8.js";import"./chevron-down-DhT9HmUD.js";import"./index-KpZvxqHP.js";import"./error-pihzJHIB.js";import"./BaseCbacBanner-CKLdKt3Y.js";import"./makeExternalStore-Bn6vdpUB.js";import"./Tooltip-Cp8615gS.js";import"./PopoverPopup-CE0q6tnn.js";import"./toNumber-QdXTmCBs.js";import"./useOsdkClient-D8RwzEZe.js";import"./tick-D6AyEnNR.js";import"./DropdownField-n4Kv9KFR.js";import"./withOsdkMetrics-DoJyDwoq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

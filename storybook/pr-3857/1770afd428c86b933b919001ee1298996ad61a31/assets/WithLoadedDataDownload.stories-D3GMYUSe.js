import{f as b,j as a,r as i}from"./iframe-CpI7FB-T.js";import{O as u}from"./object-table-Dexfdtqv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B_hE2pBz.js";import"./Table-REyfQMd2.js";import"./index-Dd3y5ah7.js";import"./Dialog-KBoNfEPI.js";import"./cross-B20tfhAE.js";import"./svgIconContainer-CEg1T5tk.js";import"./useBaseUiId-CmfBo7dj.js";import"./InternalBackdrop-DZmYO_AD.js";import"./composite-BR65LiyS.js";import"./index-BPRvbx56.js";import"./index-DosPUwQU.js";import"./index-BDUgGgA4.js";import"./useEventCallback-B9o36XEn.js";import"./SkeletonBar-ULydxLuj.js";import"./LoadingCell-Z0bla46n.js";import"./ColumnConfigDialog-D-rJXor5.js";import"./DraggableList-xopIjLi6.js";import"./search-e6ClQ_VS.js";import"./Input-DdDoLRi6.js";import"./useControlled-CzotDDz1.js";import"./isEqual-DDC7Ff_s.js";import"./isObject-tXEwv9PV.js";import"./Button-CLOyqypH.js";import"./ActionButton-U9TB8zhE.js";import"./Checkbox-BH0H9xke.js";import"./useValueChanged-C9asjQNV.js";import"./CollapsiblePanel-CbWZAJxM.js";import"./MultiColumnSortDialog-CE_KwoFj.js";import"./MenuTrigger-C1BfiMac.js";import"./CompositeItem-CCWclQxp.js";import"./ToolbarRootContext-Bq8pd6_h.js";import"./getDisabledMountTransitionStyles-BO8zIF7H.js";import"./getPseudoElementBounds-sBl5ZUwT.js";import"./chevron-down-JaiM5xR9.js";import"./index-DzEbTyMP.js";import"./error-DM5U_BtV.js";import"./BaseCbacBanner-Dr_UpDH_.js";import"./makeExternalStore-NLBkDu7_.js";import"./Tooltip-EwE4yKNF.js";import"./PopoverPopup-CURpd358.js";import"./toNumber-yBJeXRUy.js";import"./useOsdkClient-I2HrApfP.js";import"./tick-DdhDmdN8.js";import"./DropdownField-DL3w_3o5.js";import"./withOsdkMetrics-ADEd6SH7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

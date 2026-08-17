import{f as b,j as a,r as i}from"./iframe-hkjMetp8.js";import{O as u}from"./object-table-BRxCfB_0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BG3PwWgg.js";import"./Table-Dko8Upk3.js";import"./index-DGAVzjUG.js";import"./Dialog-BOBWfbkF.js";import"./cross-BtmO4_tP.js";import"./svgIconContainer-6MVX_yz2.js";import"./useBaseUiId-vPjg87EZ.js";import"./InternalBackdrop-nPd6HaQG.js";import"./composite-CH-gf1yj.js";import"./index-DekbtEE0.js";import"./index-Cdw40tlt.js";import"./index-CZwKy0_e.js";import"./useEventCallback-DrBTYvw2.js";import"./SkeletonBar-CiIjXZ8Z.js";import"./LoadingCell-fVbK0evv.js";import"./ColumnConfigDialog-Dck2Ojjg.js";import"./DraggableList--J9ne7rl.js";import"./search-CEBIaEbf.js";import"./Input-5tyvJsuV.js";import"./useControlled-BbG65MVX.js";import"./isEqual-DxFkj09B.js";import"./isObject-BQUFjSwU.js";import"./Button-Ca8Yrp0-.js";import"./ActionButton-B2oiBf7l.js";import"./Checkbox-CvNyspqG.js";import"./useValueChanged-pSSuPQN8.js";import"./CollapsiblePanel-Db6NbA8L.js";import"./MultiColumnSortDialog--efeFQie.js";import"./MenuTrigger-T7OTl7Yr.js";import"./CompositeItem-DF9NnpkL.js";import"./ToolbarRootContext-Dr07gjpJ.js";import"./getDisabledMountTransitionStyles-5QCsfeUs.js";import"./getPseudoElementBounds-wN4T0YrG.js";import"./chevron-down-C1qRhGfc.js";import"./index-D9iCbPpq.js";import"./error-BfCVgfZr.js";import"./BaseCbacBanner-DKZQG3ac.js";import"./makeExternalStore-BByL-sEm.js";import"./Tooltip-bjs24eg9.js";import"./PopoverPopup-CcVfATcq.js";import"./toNumber-BRsGC7Sk.js";import"./useOsdkClient-BwTex2Oc.js";import"./tick-D4T1Ni-K.js";import"./DropdownField-Bo90G8ai.js";import"./withOsdkMetrics-BAFcUBo2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

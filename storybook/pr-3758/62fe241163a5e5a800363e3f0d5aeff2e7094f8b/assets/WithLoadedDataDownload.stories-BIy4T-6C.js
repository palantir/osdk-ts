import{f as b,j as a,r as i}from"./iframe-DSTev5eS.js";import{O as u}from"./object-table-BfGnW0RR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0ahMEab.js";import"./Table-DZIaqkCI.js";import"./index-BtWbeQUf.js";import"./Dialog-VfaVCThH.js";import"./cross-C10Jdqp4.js";import"./svgIconContainer-Cai_TSPH.js";import"./useBaseUiId-B59XoFeA.js";import"./InternalBackdrop-CEvJom9I.js";import"./composite-BJhDqHa5.js";import"./index-BwPzfPTv.js";import"./index-S3ZDNn8V.js";import"./index-XegCYuh1.js";import"./useEventCallback-KvrwGKDq.js";import"./SkeletonBar-DImFuTjI.js";import"./LoadingCell-BumKG1aU.js";import"./ColumnConfigDialog-Y2zJST67.js";import"./DraggableList-CxQgflTL.js";import"./search-DMSt_gFn.js";import"./Input-CzYxINMZ.js";import"./useControlled-Da-Y32Lj.js";import"./isEqual-B2qfbV2W.js";import"./isObject-CNoyAvLK.js";import"./Button-CdwVU5le.js";import"./ActionButton-gapXhp9b.js";import"./Checkbox-C3ybVd8y.js";import"./useValueChanged-DPsQXvZl.js";import"./CollapsiblePanel-DGmMO_kp.js";import"./MultiColumnSortDialog-8bpT1T9L.js";import"./MenuTrigger-Cnleo6p4.js";import"./CompositeItem-CNtoihVd.js";import"./ToolbarRootContext-BBHEgGcZ.js";import"./getDisabledMountTransitionStyles-Bk8gM2Hm.js";import"./getPseudoElementBounds-CPd5ApbU.js";import"./chevron-down-BhNoewVe.js";import"./index-dImclggj.js";import"./error-Dov-wMuf.js";import"./BaseCbacBanner-B0qn_muO.js";import"./makeExternalStore-CuCFyRpr.js";import"./Tooltip-DTJ2zgDX.js";import"./PopoverPopup-ChZ9Vu8V.js";import"./toNumber-CTCdAXlD.js";import"./useOsdkClient-DRuEyjWM.js";import"./tick-BrokP2U5.js";import"./DropdownField-B-9m17pd.js";import"./withOsdkMetrics-DyUr7g82.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

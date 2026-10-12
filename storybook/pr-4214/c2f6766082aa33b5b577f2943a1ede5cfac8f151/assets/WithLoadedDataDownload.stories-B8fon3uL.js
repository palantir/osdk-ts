import{f as b,j as a,r as i}from"./iframe-CgKUzItX.js";import{O as u}from"./object-table--UhP6wBB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C8NMj1_t.js";import"./Table-Dd1TltZl.js";import"./index-BGyRLoto.js";import"./Dialog-25Mkgz6y.js";import"./cross-BCuSuLMn.js";import"./svgIconContainer-3Z9BBN_f.js";import"./useBaseUiId-9QwtdzIz.js";import"./InternalBackdrop-Bg0vXpRx.js";import"./composite-C8pbzlSR.js";import"./index-DH7xuiv5.js";import"./index-DPbjuSTY.js";import"./index-BGmAK-zp.js";import"./useEventCallback-C9jSHP4H.js";import"./SkeletonBar-CBQXt1TI.js";import"./LoadingCell-D0L-fZQO.js";import"./ColumnConfigDialog-zvTp2IU4.js";import"./DraggableList-BmHxYwR-.js";import"./search-d4lpn-YX.js";import"./Input-YdwMEp0H.js";import"./useControlled-ywgC3TRl.js";import"./Button-vrPbejrg.js";import"./small-cross-B30TyiPZ.js";import"./ActionButton-BcgXFlaR.js";import"./Checkbox-acHCpw7a.js";import"./useValueChanged-DRRio9Te.js";import"./CollapsiblePanel-DVt2UmWD.js";import"./MultiColumnSortDialog-kMPo0868.js";import"./MenuTrigger-a4Fa52-F.js";import"./CompositeItem-BImsaWuE.js";import"./ToolbarRootContext-Cn9ARR1m.js";import"./getDisabledMountTransitionStyles-CMVjInPg.js";import"./getPseudoElementBounds-DrvvxQqn.js";import"./chevron-down-CUAqfL81.js";import"./index-8XKQJxIW.js";import"./error-CPGG1yPH.js";import"./BaseCbacBanner-Re9lp9Kj.js";import"./makeExternalStore-CkIkERDP.js";import"./Tooltip-C8G96OiC.js";import"./PopoverPopup-CPzBvckh.js";import"./debounce-BzubZrnK.js";import"./useOsdkClient-D6NF6aDi.js";import"./tick-D2qeh1kK.js";import"./DropdownField-T4Xd-ty_.js";import"./isEqual-CZoe1OIr.js";import"./withOsdkMetrics-BCBab3ni.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CpwJPeyh.js";import{O as u}from"./object-table-BnrqyQF6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GrGVcR2a.js";import"./Table-DzfjySjW.js";import"./index-DJkA5721.js";import"./Dialog-H-mKm1_Q.js";import"./cross-BJntrg2g.js";import"./svgIconContainer-CqkgEI8-.js";import"./useBaseUiId-DihNpFQ5.js";import"./InternalBackdrop-BIy4rB2g.js";import"./composite-C-Beuk3S.js";import"./index-tzu8SvT9.js";import"./index-B6xsto9n.js";import"./index-Bq9Ipd8V.js";import"./useEventCallback-Lg50Z1uB.js";import"./SkeletonBar-B7n7GM6J.js";import"./LoadingCell-UnqXRjOb.js";import"./ColumnConfigDialog-BXnck7ri.js";import"./DraggableList-BT6VmVR4.js";import"./search-rn4tl3gn.js";import"./Input-YvJt1O2i.js";import"./useControlled-DZ9apck0.js";import"./isEqual--gKKWI32.js";import"./isObject-CDJPgJy4.js";import"./Button-Bb-o9PCs.js";import"./ActionButton-BlyZTbqV.js";import"./Checkbox-Bq31nRAU.js";import"./useValueChanged-mSswcGvK.js";import"./CollapsiblePanel-fMkxFo_n.js";import"./MultiColumnSortDialog-L0sTM-wy.js";import"./MenuTrigger-l7mCAK2w.js";import"./CompositeItem-BnN8NUKf.js";import"./ToolbarRootContext-C-Uwte3Q.js";import"./getDisabledMountTransitionStyles-mgrrECha.js";import"./getPseudoElementBounds-BaQr93H7.js";import"./chevron-down-DUHALcBs.js";import"./index-_j5MOVdN.js";import"./error-D2J8vF0B.js";import"./BaseCbacBanner-Box_ntxc.js";import"./makeExternalStore-CC5gBc3G.js";import"./Tooltip-DvYwRJYL.js";import"./PopoverPopup-BNWXsbi8.js";import"./toNumber-DPTXrdYx.js";import"./useOsdkClient-B-FT6pj5.js";import"./tick-DqEVx7Lv.js";import"./DropdownField-CWfgf_Ao.js";import"./withOsdkMetrics-CbwW1UHo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BnrsOFns.js";import{O as u}from"./object-table--cX5SXPG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C6w5d29Q.js";import"./Table-BvdRlk5o.js";import"./index-tNt1Rsha.js";import"./Dialog-DM-IrXvU.js";import"./cross-DmYEQL4N.js";import"./svgIconContainer-DHTpClH2.js";import"./useBaseUiId-CnooZjs2.js";import"./InternalBackdrop-BaF0YRGc.js";import"./composite-D8-ppVWB.js";import"./index-BGU_qlki.js";import"./index-COCOeC7h.js";import"./index-BZW31MjY.js";import"./useEventCallback-CZng5Hbt.js";import"./SkeletonBar-6aKx3xfA.js";import"./LoadingCell-00htEzT2.js";import"./ColumnConfigDialog-CAUIIA7Q.js";import"./DraggableList-BSQYrR59.js";import"./search-Ch8w7dwR.js";import"./Input-Bh0uDmot.js";import"./useControlled-BkaP8RLt.js";import"./Button-CQyg3zRK.js";import"./small-cross-C6Err9V7.js";import"./ActionButton-zIEW8ID5.js";import"./Checkbox-B6BRsvTM.js";import"./useValueChanged-qkyo_zF3.js";import"./CollapsiblePanel-gvQpiFoS.js";import"./MultiColumnSortDialog-BBcnd61j.js";import"./MenuTrigger-o53B80RM.js";import"./CompositeItem-CoclYseh.js";import"./ToolbarRootContext-DKbWnJ_n.js";import"./getDisabledMountTransitionStyles-Da1PpZL2.js";import"./getPseudoElementBounds-yJ_WHN74.js";import"./chevron-down-CJXJGt0n.js";import"./index-D5j7HDb2.js";import"./error-5DZ7K3HO.js";import"./BaseCbacBanner-u8F6KIgM.js";import"./makeExternalStore-EV-ALQ58.js";import"./Tooltip-BujJSCDB.js";import"./PopoverPopup-C5dDiQD8.js";import"./debounce-CkNSqP1Q.js";import"./useOsdkClient-zEriq08y.js";import"./tick-CjP_LBfV.js";import"./DropdownField-STvnB7PE.js";import"./isEqual-Bzzv7Zaz.js";import"./withOsdkMetrics-zFHODIcB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

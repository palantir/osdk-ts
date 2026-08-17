import{f as b,j as a,r as i}from"./iframe-BykysWv2.js";import{O as u}from"./object-table-VL2pIuSS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-tSwkR5.js";import"./Table-DKKJuYn2.js";import"./index-CCmH1fLx.js";import"./Dialog-BYmQ2lK1.js";import"./cross-C6UPhC48.js";import"./svgIconContainer-DuuAzJ-q.js";import"./useBaseUiId-BtfasykQ.js";import"./InternalBackdrop-DcsekBaZ.js";import"./composite-DVza1WGR.js";import"./index-CdS3MnO1.js";import"./index-D5tO8tmB.js";import"./index-Cqonjd7p.js";import"./useEventCallback-B4_uUg37.js";import"./SkeletonBar-XxmSe_Cp.js";import"./LoadingCell-DjZgc0r1.js";import"./ColumnConfigDialog-B17ARdeN.js";import"./DraggableList-DRSLRpqD.js";import"./search-BDkejYae.js";import"./Input-B6kNrbT5.js";import"./useControlled-BHDm0MR_.js";import"./Button-CmlMFMdB.js";import"./small-cross-CSSivirH.js";import"./ActionButton-DSbQbnUR.js";import"./Checkbox-D24EyxhG.js";import"./useValueChanged-C9e2VdUl.js";import"./CollapsiblePanel-CXUAw-hA.js";import"./MultiColumnSortDialog-T2inBz5a.js";import"./MenuTrigger-DAeKyCnh.js";import"./CompositeItem-B2Va5Uj8.js";import"./ToolbarRootContext-hgVSKpi4.js";import"./getDisabledMountTransitionStyles-DPi8XNEW.js";import"./getPseudoElementBounds-84sUmk7I.js";import"./chevron-down-BhIvQaF5.js";import"./index-D5SG44W0.js";import"./error-DoPIKpmU.js";import"./BaseCbacBanner-iC1JAFKe.js";import"./makeExternalStore-Efjiv4ks.js";import"./Tooltip-D6tequ9v.js";import"./PopoverPopup-7-Z1ZTD2.js";import"./debounce-BQifmnVJ.js";import"./useOsdkClient-BSt3qc0S.js";import"./tick-bGW9sZOi.js";import"./DropdownField-xIr7Ptnm.js";import"./isEqual-CY52NdiV.js";import"./withOsdkMetrics-byqTEtiY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

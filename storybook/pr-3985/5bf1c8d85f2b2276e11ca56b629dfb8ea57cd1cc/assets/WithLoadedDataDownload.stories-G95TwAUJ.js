import{f as b,j as a,r as i}from"./iframe-CaMctZhM.js";import{O as u}from"./object-table-Bvnt7Wyt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DNMYa0Vf.js";import"./Table-D8AkL9yz.js";import"./index-CtdxRtEM.js";import"./Dialog-BfM0QFxQ.js";import"./cross-BG3r1-a6.js";import"./svgIconContainer--PB46C3w.js";import"./useBaseUiId-DXXB_44i.js";import"./InternalBackdrop-Cl0aIOdV.js";import"./composite-hogSzUb-.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./index-DZzpVNZd.js";import"./useEventCallback-Cp11P4CG.js";import"./SkeletonBar-BRGBX3xw.js";import"./LoadingCell-BuIVSGd7.js";import"./ColumnConfigDialog-B897TDFU.js";import"./DraggableList-BNCCZbEI.js";import"./search-jWF7X9or.js";import"./Input-BXSwuDSh.js";import"./useControlled-BPVVUVXR.js";import"./Button-BDNmY4BX.js";import"./small-cross-CCg3K2o4.js";import"./ActionButton-CubBHf-4.js";import"./Checkbox-Cmw9d5wR.js";import"./useValueChanged-gcwEr2UE.js";import"./CollapsiblePanel-C15Mx4Y2.js";import"./MultiColumnSortDialog-BqU8deem.js";import"./MenuTrigger-D5ES9GTN.js";import"./CompositeItem-DUaU3yqi.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./getDisabledMountTransitionStyles-Zsn1wRQz.js";import"./getPseudoElementBounds-BcOMbE_O.js";import"./chevron-down-BTzBC5n8.js";import"./index-BNjCIBi_.js";import"./error-Cuicm8UG.js";import"./BaseCbacBanner-g8NoEMM9.js";import"./makeExternalStore-BCTvNoj1.js";import"./Tooltip-DU6FxlSQ.js";import"./PopoverPopup-CqHYCBTd.js";import"./debounce-DSgq7d59.js";import"./useOsdkClient-aWMARsJj.js";import"./tick-CJ39txi1.js";import"./DropdownField-DKs0z5rG.js";import"./isEqual-C8fXJSQK.js";import"./withOsdkMetrics-DSeCvaBk.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

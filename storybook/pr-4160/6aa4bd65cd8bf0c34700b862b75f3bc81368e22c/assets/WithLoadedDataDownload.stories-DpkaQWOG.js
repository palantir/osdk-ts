import{f as b,j as a,r as i}from"./iframe-B5CnmteN.js";import{O as u}from"./object-table-gaX4hUZd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BvIIyaRb.js";import"./Table-CYEWxzsm.js";import"./index-8frbvTc0.js";import"./Dialog-CYPtfWTy.js";import"./cross-pkR4RJ0Q.js";import"./svgIconContainer-Q-T6gYyn.js";import"./useBaseUiId-CpmUOtyx.js";import"./InternalBackdrop-6TwkoN7E.js";import"./composite-DzRtfXwG.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./index-CiKFFLFD.js";import"./useEventCallback-H_-RfLRz.js";import"./SkeletonBar-CKpapgR8.js";import"./LoadingCell-DAczU-a4.js";import"./ColumnConfigDialog-Cn1lmaiq.js";import"./DraggableList-DpqDB0uQ.js";import"./search-BS3g1UNT.js";import"./Input-BFwAdaEg.js";import"./useControlled-BIkM9vG3.js";import"./Button-k7Ft62HK.js";import"./small-cross-CxROeBHB.js";import"./ActionButton-DGDbhDGz.js";import"./Checkbox-ClKS3ff4.js";import"./useValueChanged-DAkLpCOr.js";import"./CollapsiblePanel-Cb_s5Izf.js";import"./MultiColumnSortDialog-CikWbuVd.js";import"./MenuTrigger-Bm-IvUc5.js";import"./CompositeItem-GDYb2RvJ.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./getDisabledMountTransitionStyles-BgPPzZOr.js";import"./getPseudoElementBounds-C6KAFL2T.js";import"./chevron-down-Yu587uLP.js";import"./index-NUZYU-eZ.js";import"./error-DnL9Bib9.js";import"./BaseCbacBanner-CBd6F0qQ.js";import"./makeExternalStore-DQ9Dnm6S.js";import"./Tooltip-CT-rD5V_.js";import"./PopoverPopup-BFzT61y-.js";import"./debounce-B-2K-o_A.js";import"./useOsdkClient-qcHJ86eJ.js";import"./tick-DQyZDVkc.js";import"./DropdownField-BGVoK-k4.js";import"./isEqual-DJdARuJ_.js";import"./withOsdkMetrics-Dx9osySV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

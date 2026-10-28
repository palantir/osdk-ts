import{f as b,j as a,r as i}from"./iframe-Cbj36Vfl.js";import{O as u}from"./object-table-Ck_Gk-KX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9vtqHHo.js";import"./Table-CSAIsRfe.js";import"./index-CsY1LewD.js";import"./Dialog-B6LavUp4.js";import"./cross-BMM6M_v0.js";import"./svgIconContainer-hIUzSHkO.js";import"./useBaseUiId-Dm0BFRC6.js";import"./InternalBackdrop-BqigWIDb.js";import"./composite-BNLz_aLE.js";import"./index-BCwTQa_2.js";import"./index-C4i1VFtD.js";import"./index-D7hW5oga.js";import"./useEventCallback-Dlret5nm.js";import"./SkeletonBar-SALMo7gf.js";import"./LoadingCell-xwoMoQxj.js";import"./ColumnConfigDialog-Br62xFzv.js";import"./DraggableList-hYn9rXPD.js";import"./search-B0cFd55B.js";import"./Input-bczR2KJT.js";import"./useControlled-BLkU7nYF.js";import"./Button-BvKlSQww.js";import"./small-cross-CPlaBkT_.js";import"./ActionButton-C-4-1sk9.js";import"./Checkbox-KclU3XSR.js";import"./useValueChanged-Be0rmsr7.js";import"./CollapsiblePanel-DTg3GoH2.js";import"./MultiColumnSortDialog-DDicJckq.js";import"./MenuTrigger-DtrhwXCR.js";import"./CompositeItem-DyJlzvO6.js";import"./ToolbarRootContext-B2HRt-p3.js";import"./getDisabledMountTransitionStyles-DVNBPl0-.js";import"./getPseudoElementBounds-BzB85nEj.js";import"./chevron-down-b6fjz5-P.js";import"./index-DGMJzfmR.js";import"./error-B5SQU-7B.js";import"./BaseCbacBanner-i0Mk5qM4.js";import"./makeExternalStore-BQvhAloH.js";import"./Tooltip-DFxnzQIr.js";import"./PopoverPopup-DVJleO51.js";import"./debounce-C-I-lp5G.js";import"./useOsdkClient-Z_Xvqm2q.js";import"./tick-DrdzLXJS.js";import"./DropdownField-Bd5p68Fh.js";import"./isEqual-B4e635j3.js";import"./withOsdkMetrics-CvORwH-d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

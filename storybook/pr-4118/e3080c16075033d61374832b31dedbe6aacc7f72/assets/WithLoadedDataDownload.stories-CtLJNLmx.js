import{f as b,j as a,r as i}from"./iframe-za2gFZm7.js";import{O as u}from"./object-table-BS8MM0wq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B152vIQk.js";import"./Table-DKIXKU0X.js";import"./index-C4E5Dk0R.js";import"./Dialog-BKjUT0WY.js";import"./cross-TTEnlvkl.js";import"./svgIconContainer-Dr6j7alJ.js";import"./useBaseUiId-BpIGGvmI.js";import"./InternalBackdrop-CuWltaZZ.js";import"./composite-D56jxQaX.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./index-BXHLylGJ.js";import"./useEventCallback-B-1PMCAh.js";import"./SkeletonBar-DJX3wRZn.js";import"./LoadingCell-76SMTSbQ.js";import"./ColumnConfigDialog-x5n0fU9Y.js";import"./DraggableList-BN2F7Ttd.js";import"./search-FcuyWSqL.js";import"./Input-B_NAvwoc.js";import"./useControlled-x2G49QSH.js";import"./Button-DwQfUaLn.js";import"./small-cross-Cpr2Bt40.js";import"./ActionButton-yFn7B9Sr.js";import"./Checkbox-Bl7oN82I.js";import"./useValueChanged-CgoAhXS1.js";import"./CollapsiblePanel-f2IrHI_h.js";import"./MultiColumnSortDialog-BAtKqwsE.js";import"./MenuTrigger-DcOti6NU.js";import"./CompositeItem-BDB5_ay2.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./getDisabledMountTransitionStyles-BtrYbTrP.js";import"./getPseudoElementBounds-CYZLYzqG.js";import"./chevron-down-DJF2R6Zo.js";import"./index-CHACBaIH.js";import"./error-Dk8fbBB5.js";import"./BaseCbacBanner-DBUtzZ_e.js";import"./makeExternalStore-C8qXbmFn.js";import"./Tooltip-DpzWRQIQ.js";import"./PopoverPopup-BzwgnfVt.js";import"./debounce-BxVMhpPq.js";import"./useOsdkClient-DPxpEBB0.js";import"./tick-DCTTAhNR.js";import"./DropdownField-DbWdFCIz.js";import"./isEqual-Co-ogKGs.js";import"./withOsdkMetrics-U5yEFT5F.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

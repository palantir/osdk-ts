import{f as b,j as a,r as i}from"./iframe-D0kdPAo3.js";import{O as u}from"./object-table-CneNSn49.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-X5HFotRj.js";import"./Table-B0KQvr-x.js";import"./index-C2K0wsys.js";import"./Dialog-C_HKvFmk.js";import"./cross-Dp20Xkzu.js";import"./svgIconContainer-BmwAZIQM.js";import"./useBaseUiId-C6KTtyrN.js";import"./InternalBackdrop-DsRGKbT5.js";import"./composite-DFD2cJI4.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./index-BEujjIB4.js";import"./useEventCallback-wCYEJdyR.js";import"./SkeletonBar-Bny8Ap5P.js";import"./LoadingCell-ZQCHsDc5.js";import"./ColumnConfigDialog-Bmp89gH6.js";import"./DraggableList-BEr5f3hJ.js";import"./search-C3AmiWbF.js";import"./Input-CZD7bnty.js";import"./useControlled-DZabxLnK.js";import"./Button-DI6m0SX0.js";import"./small-cross-CZlKCJ9V.js";import"./ActionButton-B_wjtQIY.js";import"./Checkbox-SA0w8yHs.js";import"./useValueChanged-BSU3S3ph.js";import"./CollapsiblePanel-DLdNf4gN.js";import"./MultiColumnSortDialog-C_ETUXes.js";import"./MenuTrigger-CpfJKCPH.js";import"./CompositeItem-Sp5SCghr.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./getDisabledMountTransitionStyles-Bk9Rznwb.js";import"./getPseudoElementBounds-RJQJ-VSv.js";import"./chevron-down-PTlaQvf9.js";import"./index-4VxIXF47.js";import"./error-LXdit3w4.js";import"./BaseCbacBanner-v0K37KRd.js";import"./makeExternalStore-BHFwut4R.js";import"./Tooltip-udyINwMi.js";import"./PopoverPopup-g8Zg0gS_.js";import"./debounce-CAomu0Oz.js";import"./useOsdkClient-dHn_9ypV.js";import"./tick-RNPG6mE0.js";import"./DropdownField-BeyRtiaN.js";import"./isEqual-DCCU8xUM.js";import"./withOsdkMetrics-C30AWaoV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-KzP54st8.js";import{O as u}from"./object-table-o0JZeDi0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZ0_peag.js";import"./Table-BMQRg0Zc.js";import"./index-B5nqBBWp.js";import"./Dialog-DFr5f9PO.js";import"./cross-lnMk7dXt.js";import"./svgIconContainer-B_IEjFSj.js";import"./useBaseUiId-BA1-4W3F.js";import"./InternalBackdrop-CzWxzLnJ.js";import"./composite-CfrzbkGj.js";import"./index-Br5P7C2V.js";import"./index-BMXD2udq.js";import"./index-BQoDxnvf.js";import"./useEventCallback-CHYc0JHW.js";import"./SkeletonBar-DFXSW7YC.js";import"./LoadingCell-C1IZYySw.js";import"./ColumnConfigDialog-BZ3zVyDl.js";import"./DraggableList-DYQUzo9M.js";import"./search-Cb-crZIr.js";import"./Input-C6qaftyN.js";import"./useControlled-DYaDm29f.js";import"./Button-DwGnaIDL.js";import"./small-cross-CSHoeFRw.js";import"./ActionButton-DBQ-TeBZ.js";import"./Checkbox-sEbby4bB.js";import"./useValueChanged-JwsuVPmt.js";import"./CollapsiblePanel-CYOujYEK.js";import"./MultiColumnSortDialog-CM3CueLO.js";import"./MenuTrigger-jL7t-XBm.js";import"./CompositeItem-5AIUt4bR.js";import"./ToolbarRootContext-xfunMS_N.js";import"./getDisabledMountTransitionStyles-D7SWM4VP.js";import"./getPseudoElementBounds-C-w8h5Fq.js";import"./chevron-down-C83fmB_G.js";import"./index-BRJV35Oa.js";import"./error-CnxGfdHo.js";import"./BaseCbacBanner-DHNG911r.js";import"./makeExternalStore-DSq9r9yQ.js";import"./Tooltip-BCepzJDL.js";import"./PopoverPopup-BCLXp0oS.js";import"./debounce-BGthoR0W.js";import"./useOsdkClient-DlRniYh9.js";import"./tick-DIqBuVUT.js";import"./DropdownField-DBmNVyJA.js";import"./isEqual-CPVRUFPO.js";import"./withOsdkMetrics-DzdVKn4L.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

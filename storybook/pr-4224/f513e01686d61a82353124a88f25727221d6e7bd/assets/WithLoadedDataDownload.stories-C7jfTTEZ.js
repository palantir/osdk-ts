import{f as b,j as a,r as i}from"./iframe-niEbczVm.js";import{O as u}from"./object-table-BZaEWIQh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CUjUb6yR.js";import"./Table-L3UWLg70.js";import"./index-BEFpPyEu.js";import"./Dialog-BidNBHDm.js";import"./cross-Bcr8pGuL.js";import"./svgIconContainer-9VsGkNZz.js";import"./useBaseUiId-CH7YIJgS.js";import"./InternalBackdrop-v7weAe9K.js";import"./composite-DGaJRBaQ.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./index-BqQiJ2_G.js";import"./useEventCallback-BgYsgH1g.js";import"./SkeletonBar-CkUb_6G3.js";import"./LoadingCell-CykSoP0X.js";import"./ColumnConfigDialog-BzWOjFro.js";import"./DraggableList-BNKFwiq9.js";import"./search-ChyEY49Q.js";import"./Input-B4FHDv-3.js";import"./useControlled-CUyHc-Js.js";import"./Button-CFI_-pRJ.js";import"./small-cross-CjBKsPzJ.js";import"./ActionButton-B8kWvQVe.js";import"./Checkbox-Dx9SDg3Y.js";import"./useValueChanged-DPnKyoXq.js";import"./CollapsiblePanel-DDu9LnWB.js";import"./MultiColumnSortDialog-y51Oiaxo.js";import"./MenuTrigger-C9EVVsoN.js";import"./CompositeItem-CsOBUX0g.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./getDisabledMountTransitionStyles-BJk4B9MV.js";import"./getPseudoElementBounds-KgJkaKhr.js";import"./chevron-down-BBE32uOg.js";import"./index-C_O3jDKw.js";import"./error-mxcJOglh.js";import"./BaseCbacBanner-BDA92KNd.js";import"./makeExternalStore-CCkssviL.js";import"./Tooltip-CcPCpeng.js";import"./PopoverPopup-Dc4OKlIj.js";import"./debounce-BEX_S5I4.js";import"./useOsdkClient-BrHXTXJ2.js";import"./tick-CiAF04hP.js";import"./DropdownField-BnoXJlhp.js";import"./isEqual-BciiG4z6.js";import"./withOsdkMetrics-DWUucJCc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

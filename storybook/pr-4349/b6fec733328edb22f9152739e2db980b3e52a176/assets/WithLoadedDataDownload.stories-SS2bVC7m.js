import{f as b,j as a,r as i}from"./iframe-6rmEYQ4q.js";import{O as u}from"./object-table-C3g8Rgsf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CQFwNwom.js";import"./Table-DUEsztjk.js";import"./index-DHYmSSVn.js";import"./Dialog-B4_gKkCj.js";import"./cross-D-Hg8nzG.js";import"./svgIconContainer-BTOejcjp.js";import"./useBaseUiId-DutMLbwr.js";import"./InternalBackdrop-DgOuuiso.js";import"./composite-6RMh68ZK.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./index-Cushj5su.js";import"./useEventCallback-Byxoa0dh.js";import"./SkeletonBar-DOUZ-mE8.js";import"./LoadingCell-5tJCvwxm.js";import"./ColumnConfigDialog-DmAEs3Ph.js";import"./DraggableList-BazWYHtA.js";import"./search-BHn0KTJN.js";import"./Input-DHCuHilz.js";import"./useControlled-HeurI7_b.js";import"./Button-B5wqsid8.js";import"./small-cross-CHICJ2XI.js";import"./ActionButton-BV9UuRgT.js";import"./Checkbox-DlXCmFqY.js";import"./useValueChanged-DNZRcsJs.js";import"./CollapsiblePanel-CDBbZZyU.js";import"./MultiColumnSortDialog-DvErCYRD.js";import"./MenuTrigger-BIbOF5Wa.js";import"./CompositeItem-DuBtWhAd.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./getDisabledMountTransitionStyles-B3ra-kQw.js";import"./getPseudoElementBounds-DlcOVO-y.js";import"./chevron-down-DJM0Z3o9.js";import"./index-O1VLMwtD.js";import"./error-D2aG_W_b.js";import"./BaseCbacBanner-Cr9-xR0n.js";import"./makeExternalStore-D4L5Wrb5.js";import"./Tooltip-C2F6IU3H.js";import"./isObject-SiaksReL.js";import"./debounce-fovSx1xM.js";import"./useOsdkClient-DmHqy9pL.js";import"./tick-qf7hH7wH.js";import"./DropdownField-BIgaE5lU.js";import"./isEqual-LTMCApQW.js";import"./_baseIsEqual-CvZHeATj.js";import"./withOsdkMetrics-23-xBZ5M.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

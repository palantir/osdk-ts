import{f as b,j as a,r as i}from"./iframe-Ot0GxjTr.js";import{O as u}from"./object-table-QGE0eDi0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFpNKA9O.js";import"./Table-B0s1U3Mq.js";import"./index-BRML9mit.js";import"./Dialog-C3W0URlL.js";import"./cross-CpYxlxRI.js";import"./svgIconContainer-HicdYp2r.js";import"./useBaseUiId-DDlLKIgV.js";import"./InternalBackdrop-CTMLD0aO.js";import"./composite-DP1JrpiD.js";import"./index-Ozw8qwYC.js";import"./index-CxN3dem-.js";import"./index-IsrHjxnC.js";import"./useEventCallback-CwaLfXRC.js";import"./SkeletonBar-9939qlWr.js";import"./LoadingCell-Cjhu9VqR.js";import"./ColumnConfigDialog-CmQIfeyn.js";import"./DraggableList-BajWAPa6.js";import"./search-Br1hTVDJ.js";import"./Input-VABQru-I.js";import"./useControlled-Vo5SReNb.js";import"./Button-BF-MGMty.js";import"./small-cross-DsRgDD5M.js";import"./ActionButton-GxD-BebQ.js";import"./Checkbox-C2xIs2UX.js";import"./useValueChanged-ByBmdMD0.js";import"./CollapsiblePanel-ClNooCfi.js";import"./MultiColumnSortDialog-Bq2KujH8.js";import"./MenuTrigger-CGIOV3Fw.js";import"./CompositeItem-B1d6nBsa.js";import"./ToolbarRootContext-CgP0PFgV.js";import"./getDisabledMountTransitionStyles-BiiqvlVo.js";import"./getPseudoElementBounds-CiEwPnaU.js";import"./chevron-down-3bmQMyw7.js";import"./index-CflU78M4.js";import"./error-FTyzIopn.js";import"./BaseCbacBanner-CeabHNjy.js";import"./makeExternalStore-1z_XAK9i.js";import"./Tooltip-BnCYjbFc.js";import"./PopoverPopup-DJp0AJVa.js";import"./toNumber-B92OSo9e.js";import"./useOsdkClient-D_IquxfU.js";import"./tick-DRbogi8M.js";import"./DropdownField-Yo09_E3E.js";import"./withOsdkMetrics-DUE0eKfQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

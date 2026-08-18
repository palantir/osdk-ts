import{f as b,j as a,r as i}from"./iframe-B3O9T_SG.js";import{O as u}from"./object-table-Cz6Ax0W-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CPdbREwC.js";import"./Table-C-NLrUmP.js";import"./index-BwoUB_Qf.js";import"./Dialog-DyxMmZVC.js";import"./cross-Xt_GMyVs.js";import"./svgIconContainer-BPe5aJfR.js";import"./useBaseUiId-BICM1opj.js";import"./InternalBackdrop-BS30d1ux.js";import"./composite-D7y544dA.js";import"./index-CJOOs8zG.js";import"./index-QdBHREHi.js";import"./index-XMttNw81.js";import"./useEventCallback-DigiG9Xr.js";import"./SkeletonBar-uDL8CaFH.js";import"./LoadingCell-DcaOP2yK.js";import"./ColumnConfigDialog-DZPLl2H6.js";import"./DraggableList-BDMD6G6l.js";import"./search-Av7_nbfA.js";import"./Input-Dk0bR2r3.js";import"./useControlled-n7PhTfzO.js";import"./Button-DrW0QaFB.js";import"./small-cross-DK_4FkMK.js";import"./ActionButton-3prn6Dln.js";import"./Checkbox-C_OCS2UT.js";import"./useValueChanged-c0DtYdQL.js";import"./CollapsiblePanel-CM3enrfL.js";import"./MultiColumnSortDialog-BdgyQSSH.js";import"./MenuTrigger-iDnX6M_C.js";import"./CompositeItem-BqJr4Pc-.js";import"./ToolbarRootContext-CmKKFUT-.js";import"./getDisabledMountTransitionStyles-Cq0bqOj0.js";import"./getPseudoElementBounds-DVha8Hx2.js";import"./chevron-down-8HdkIbSK.js";import"./index-CwDIHAhZ.js";import"./error-B1lEKcyy.js";import"./BaseCbacBanner-CrbRG4w5.js";import"./makeExternalStore-DAW5CeGe.js";import"./Tooltip-B-wMuj2p.js";import"./PopoverPopup-BbibQ6TS.js";import"./debounce-D1aWhqSl.js";import"./useOsdkClient-V2N--xWx.js";import"./tick-DYY6YpT9.js";import"./DropdownField-hc9k2JiQ.js";import"./isEqual-CsPWNbb2.js";import"./withOsdkMetrics-DKpBc77k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

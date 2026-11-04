import{f as b,j as a,r as i}from"./iframe-6oxuiw9Z.js";import{O as u}from"./object-table-3jbSUztS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BTY9tSHX.js";import"./Table-pqx_radf.js";import"./index-DDLC59ec.js";import"./Dialog-Cd7a1III.js";import"./cross-DFvXSKDO.js";import"./svgIconContainer-CCWfPmIE.js";import"./useBaseUiId-CTF0uA8q.js";import"./InternalBackdrop-DBmGsDdc.js";import"./composite-D6aR9WOy.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./index-DVdku0Wi.js";import"./useEventCallback-BVuP13gs.js";import"./SkeletonBar-DzVrK6Gn.js";import"./LoadingCell-Ba_zo3cu.js";import"./ColumnConfigDialog-BoWl1kOd.js";import"./DraggableList-Ddn41pRq.js";import"./search-CEhUV7Cx.js";import"./Input-CFCgD2F3.js";import"./useControlled-Dfn-KuCH.js";import"./Button-BYfKNsB1.js";import"./small-cross-vimEE2_z.js";import"./ActionButton-IYlq4mb0.js";import"./Checkbox-CW5-sfvR.js";import"./useValueChanged-CP--SvLi.js";import"./CollapsiblePanel-CO8uQTa1.js";import"./MultiColumnSortDialog-ZV2q-T8B.js";import"./MenuTrigger-BFKWshZl.js";import"./CompositeItem-CxzD_nac.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./getDisabledMountTransitionStyles-DTLBovES.js";import"./getPseudoElementBounds-B_PMHS6a.js";import"./chevron-down-D5GnK5oF.js";import"./index-Buj0z2vt.js";import"./error-CCmYgvH-.js";import"./BaseCbacBanner-DaxLSJFu.js";import"./makeExternalStore-C5lUPI7i.js";import"./Tooltip-XVfngFaQ.js";import"./PopoverPopup-BcnCQgbT.js";import"./debounce-DF-eexkr.js";import"./useOsdkClient-B4tnXDgL.js";import"./tick-CaZ2jGqn.js";import"./DropdownField-B7TAl7Ih.js";import"./isEqual-DzVGf6G7.js";import"./withOsdkMetrics-DqypzTOB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

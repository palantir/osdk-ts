import{f as b,j as a,r as i}from"./iframe-ookINj4z.js";import{O as u}from"./object-table-5AJqsqmg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqoDrt8z.js";import"./index-B_G83cAE.js";import"./Dialog-BDjMTZx4.js";import"./cross-DBbP5D4h.js";import"./svgIconContainer-DyzYMl01.js";import"./useBaseUiId-ChW3iXZ-.js";import"./InternalBackdrop-Dbk1x9I9.js";import"./composite-BbXCVwQJ.js";import"./index-DKoQfkwR.js";import"./index-BnkKdipA.js";import"./index-D3pzoeiY.js";import"./useEventCallback-Ch3uqH9f.js";import"./SkeletonBar-DnUbvSjd.js";import"./LoadingCell-C-qgmHrp.js";import"./ColumnConfigDialog-Dj3srkfc.js";import"./DraggableList-DyG8Mo8T.js";import"./search-DTFSxkbH.js";import"./Input-NlWA1BDr.js";import"./useControlled-DmgaWuxn.js";import"./isEqual-Da-y1TCe.js";import"./isObject-Ba7UXz2t.js";import"./Button-C5Uo0dK-.js";import"./ActionButton-BVpermFe.js";import"./Checkbox-CVaNxm77.js";import"./useValueChanged-DfvVmxcA.js";import"./CollapsiblePanel-jqLyxjS9.js";import"./MultiColumnSortDialog-BNuvG1Jv.js";import"./MenuTrigger-C7D45Jns.js";import"./CompositeItem-OAduBL0E.js";import"./ToolbarRootContext-Bu_OObLI.js";import"./getDisabledMountTransitionStyles-DSLBAXz5.js";import"./getPseudoElementBounds-6w2bDLXh.js";import"./chevron-down-Hv5AOudc.js";import"./index-L_GsU3c8.js";import"./error-1dTAOxzn.js";import"./BaseCbacBanner-CUMyagmu.js";import"./makeExternalStore-DQCBlQ8C.js";import"./Tooltip-B3I6Rfj4.js";import"./PopoverPopup-BjNZ3wOK.js";import"./toNumber-CYf7JQBX.js";import"./useOsdkClient-BsdX-QC0.js";import"./tick-dpozkHc2.js";import"./DropdownField-CU0BwSPj.js";import"./withOsdkMetrics-CyPSaHwg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DtoP6UZw.js";import{O as u}from"./object-table-D_3I45zD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CFHJtsfx.js";import"./Table-BtMZ3tb4.js";import"./index-By2xjehZ.js";import"./Dialog-DI6oESBL.js";import"./cross-Bz8JPJRT.js";import"./svgIconContainer-DfGYICSx.js";import"./useBaseUiId-C9myCpxn.js";import"./InternalBackdrop-DpFHb2md.js";import"./composite-ZO42S3vI.js";import"./index-CeUVbJds.js";import"./index-D5DGgDMX.js";import"./index-qPBLNpVs.js";import"./useEventCallback-DjN8mM0o.js";import"./SkeletonBar-BvasMIuf.js";import"./LoadingCell-DVmQY3DI.js";import"./ColumnConfigDialog-Bqnkldiu.js";import"./DraggableList-DAiHAfLp.js";import"./search-BGmMu9uk.js";import"./Input-Cj3lDoEk.js";import"./useControlled-CLD2ZIzN.js";import"./Button-MPweKG2u.js";import"./small-cross-CuZnJmiX.js";import"./ActionButton-Q7OU6HgZ.js";import"./Checkbox-CoU6iSAR.js";import"./useValueChanged-DuhnSJjf.js";import"./CollapsiblePanel-Cmkp7L83.js";import"./MultiColumnSortDialog-MmoilBcM.js";import"./MenuTrigger-DRMD-66M.js";import"./CompositeItem-8ApCVdWW.js";import"./ToolbarRootContext-Chftn44K.js";import"./getDisabledMountTransitionStyles-wDP_kl-U.js";import"./getPseudoElementBounds-DVsLrH1i.js";import"./chevron-down-Cp3kMwRT.js";import"./index-D-jbKgqf.js";import"./error-BgO9vMGd.js";import"./BaseCbacBanner-DhhX6HVL.js";import"./makeExternalStore-CFHh14tM.js";import"./Tooltip-D8pj6bCS.js";import"./PopoverPopup-T9050naI.js";import"./debounce-C7WOXlCO.js";import"./useOsdkClient-DBRAdTeM.js";import"./tick-ql6tnj8R.js";import"./DropdownField-nkpjhsB4.js";import"./isEqual-CygTYWpT.js";import"./withOsdkMetrics-BylLLJIu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

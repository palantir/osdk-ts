import{f as b,j as a,r as i}from"./iframe-CAOw1_Np.js";import{O as u}from"./object-table-Bnm6FDPO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BtDOje63.js";import"./Table-B5_PXRuD.js";import"./index-rKNeW6R2.js";import"./Dialog-CBafvJcd.js";import"./cross-6UH6f3dc.js";import"./svgIconContainer-DJZ5kPqi.js";import"./useBaseUiId-BRTQVt9V.js";import"./InternalBackdrop-DdGTfKiB.js";import"./composite-ceXOKcGl.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./index-CSvoLCmH.js";import"./useEventCallback-DP-govtU.js";import"./SkeletonBar-4wb1Kl_E.js";import"./LoadingCell-Cj-L5vTI.js";import"./ColumnConfigDialog-Dh-jOaO7.js";import"./DraggableList-D1kkjKgg.js";import"./search-CAyVB4HI.js";import"./Input-BIFRYkQa.js";import"./useControlled-BcHOqTg-.js";import"./Button-BCAtXo9W.js";import"./small-cross-BhY_ToEZ.js";import"./ActionButton-D6SZJ9IH.js";import"./Checkbox-Bh7-Ldil.js";import"./useValueChanged-BFl7n5IX.js";import"./CollapsiblePanel-D09cr1ad.js";import"./MultiColumnSortDialog-BBIMSvJM.js";import"./MenuTrigger-447gUd-z.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./getDisabledMountTransitionStyles-BKTsnLJ9.js";import"./getPseudoElementBounds-B-ChLQl_.js";import"./chevron-down-CrNYgO2n.js";import"./index-DAICdrKF.js";import"./error-BklEgYFX.js";import"./BaseCbacBanner-CmQ2fwuw.js";import"./makeExternalStore-BP-pbk-j.js";import"./Tooltip-Brm-nAjm.js";import"./PopoverPopup-r-UXKcU9.js";import"./debounce-CxqcX0B2.js";import"./useOsdkClient-BinCW-Bh.js";import"./tick-C5OyQv1Y.js";import"./DropdownField-DPBhg9Lf.js";import"./isEqual-BqeFWCPf.js";import"./withOsdkMetrics-C9zKllhN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

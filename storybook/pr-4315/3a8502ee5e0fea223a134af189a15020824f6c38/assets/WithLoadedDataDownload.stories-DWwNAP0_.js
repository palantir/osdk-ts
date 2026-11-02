import{f as b,j as a,r as i}from"./iframe-BITxIQXM.js";import{O as u}from"./object-table-CegXVBry.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJCZF6BK.js";import"./Table-C1h4u2VM.js";import"./index-BXV9FcBB.js";import"./Dialog-DntjnMef.js";import"./cross-DYXRPDx7.js";import"./svgIconContainer-4yskBugb.js";import"./useBaseUiId-DoTbd__l.js";import"./InternalBackdrop-DCrVf-EE.js";import"./composite-CqBnb1yV.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./index-EOsqRXOu.js";import"./useEventCallback-DZfqIGxY.js";import"./SkeletonBar-DV7HgVRJ.js";import"./LoadingCell-BgiGg-3m.js";import"./ColumnConfigDialog-C7ESb4to.js";import"./DraggableList-txyAYhFd.js";import"./search-Bb0Ck9Ps.js";import"./Input-DB8ShKaf.js";import"./useControlled-Yy2fJI9L.js";import"./Button-CrhbLtNZ.js";import"./small-cross-GSrdzjDe.js";import"./ActionButton-D5dP9TnG.js";import"./Checkbox-DTkNiB8m.js";import"./useValueChanged-CTDlXj4Q.js";import"./CollapsiblePanel-Bo_h6-tV.js";import"./MultiColumnSortDialog-B7VJTi5T.js";import"./MenuTrigger-uMYu-NiS.js";import"./CompositeItem-TvjrH8CY.js";import"./ToolbarRootContext-Ddl053qU.js";import"./getDisabledMountTransitionStyles-Dp8AXCtE.js";import"./getPseudoElementBounds-BjyRTRRW.js";import"./chevron-down-DVE6tSD6.js";import"./index-DoQAUbhM.js";import"./error-DxPjfWes.js";import"./BaseCbacBanner-DXyBf0Bn.js";import"./makeExternalStore-C_t-r-t8.js";import"./Tooltip-BAiOzlh0.js";import"./PopoverPopup-PaNaO8o5.js";import"./debounce-BArBmm9m.js";import"./useOsdkClient-_qIeBz6R.js";import"./tick-Bshl7dq7.js";import"./DropdownField-8NieERJz.js";import"./isEqual-CmQgkTco.js";import"./withOsdkMetrics-B04gc41f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

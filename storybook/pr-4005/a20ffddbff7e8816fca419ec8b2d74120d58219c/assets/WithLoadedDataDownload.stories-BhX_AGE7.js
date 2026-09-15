import{f as b,j as a,r as i}from"./iframe-_9fkTt32.js";import{O as u}from"./object-table-Ds0LSr_A.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C1KDN5-b.js";import"./Table-BfH3AYXS.js";import"./index-cWweuLXs.js";import"./Dialog-DDti5sW6.js";import"./cross-CLyRJbq3.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./useBaseUiId-B9cqL2iw.js";import"./InternalBackdrop-ChDAtvSF.js";import"./composite-Cv5hA45I.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./index-CVU17NaB.js";import"./useEventCallback-DviACpK2.js";import"./SkeletonBar-NFYkElve.js";import"./LoadingCell-C3KVxeej.js";import"./ColumnConfigDialog-BLvSWbg7.js";import"./DraggableList-my9KWtYo.js";import"./search-2EBlNsrp.js";import"./Input-BJm5qzbn.js";import"./useControlled-MrPxBQF8.js";import"./Button-BQ2hDtz9.js";import"./small-cross-BsjnHbCi.js";import"./ActionButton-UeHjpWA6.js";import"./Checkbox-CQp1icRm.js";import"./useValueChanged-DtU61oMW.js";import"./CollapsiblePanel-CX7PBUWu.js";import"./MultiColumnSortDialog-Db5boUS7.js";import"./MenuTrigger-BtF80pzz.js";import"./CompositeItem-_4ruefbl.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./getDisabledMountTransitionStyles-DZsAnPct.js";import"./getPseudoElementBounds-Bjiyc-Ax.js";import"./chevron-down-YT2yainA.js";import"./index-DOjV8DU-.js";import"./error-BJKVIKgH.js";import"./BaseCbacBanner-EYfAEeto.js";import"./makeExternalStore-vS9m26hr.js";import"./Tooltip-BO96ovIJ.js";import"./PopoverPopup-DDdOTGgE.js";import"./debounce-BM4LBZIr.js";import"./useOsdkClient-_fcxm1-q.js";import"./tick-B_jFaN4q.js";import"./DropdownField-D3_R9BRa.js";import"./isEqual-Db12H7kj.js";import"./withOsdkMetrics-lqXp9PIO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

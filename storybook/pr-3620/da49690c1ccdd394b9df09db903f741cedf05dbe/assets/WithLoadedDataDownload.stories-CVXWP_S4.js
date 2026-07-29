import{f as b,j as a,r as i}from"./iframe-Bvc3GqwO.js";import{O as u}from"./object-table-L-raBK4q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0t1EL9b.js";import"./Table-Cb4VtDZ6.js";import"./index-Xuw5gDJk.js";import"./Dialog-CEOh12jr.js";import"./cross-DFgF4kLc.js";import"./svgIconContainer-RvZuTijS.js";import"./useBaseUiId-sWVGNDSC.js";import"./InternalBackdrop-DZFJiwIJ.js";import"./composite-CfI-HDCa.js";import"./index-D0suL3J6.js";import"./index-if-pT0qq.js";import"./index-BdnCh_8y.js";import"./useEventCallback-BAuarr7d.js";import"./SkeletonBar-DJ76m9dD.js";import"./LoadingCell-BrecIpHT.js";import"./ColumnConfigDialog-BZcRMhZv.js";import"./DraggableList-B_YeiXKq.js";import"./search-C4s6NW4T.js";import"./Input-rKjGz7ft.js";import"./useControlled-S-w7uv-V.js";import"./Button-CE6JFCro.js";import"./small-cross-B0L8atHp.js";import"./ActionButton-C-u41pWh.js";import"./Checkbox-CgkkKpKr.js";import"./useValueChanged-2n2YnjQz.js";import"./CollapsiblePanel-0CHcr55r.js";import"./MultiColumnSortDialog-DwPatPjA.js";import"./MenuTrigger-BY9vnw5A.js";import"./CompositeItem-C3lrh8v_.js";import"./ToolbarRootContext-DcA09HJY.js";import"./getDisabledMountTransitionStyles-B3ZcEH3_.js";import"./getPseudoElementBounds-DHA77V1w.js";import"./chevron-down-DB-wQkD7.js";import"./index-BBfvC_3C.js";import"./error-Cmb39vju.js";import"./BaseCbacBanner-BpydKwzs.js";import"./makeExternalStore-C7V97glS.js";import"./Tooltip-DcWN2WSs.js";import"./PopoverPopup-CfImPpLm.js";import"./toNumber-pPJJn738.js";import"./useOsdkClient-D0i57DgS.js";import"./tick-CnTf7B9g.js";import"./DropdownField-BvD6Dlja.js";import"./withOsdkMetrics-BErJ5uW5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

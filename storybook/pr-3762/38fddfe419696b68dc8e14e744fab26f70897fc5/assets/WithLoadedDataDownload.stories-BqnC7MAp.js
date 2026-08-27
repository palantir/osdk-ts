import{f as b,j as a,r as i}from"./iframe-BcdGDu9j.js";import{O as u}from"./object-table-CLlobdDW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CMbSo1WN.js";import"./Table-CbY9U08a.js";import"./index-CV-Cj0Fr.js";import"./Dialog-BFu9Jvbt.js";import"./cross-HX620Mow.js";import"./svgIconContainer-dXK4wDtR.js";import"./useBaseUiId-DuyHfeNj.js";import"./InternalBackdrop-ye5hVQhH.js";import"./composite-FZbs1kn9.js";import"./index-kWczGDq0.js";import"./index-Bf3lveVK.js";import"./index-DELrWLc6.js";import"./useEventCallback-0GkWAOSy.js";import"./SkeletonBar-IaH5vXYh.js";import"./LoadingCell-B9K2QG1V.js";import"./ColumnConfigDialog-BKYdkhP1.js";import"./DraggableList-BpJWrtjR.js";import"./search-CVgCtTip.js";import"./Input-DBRGGeXT.js";import"./useControlled-DXehS_Ds.js";import"./Button-BxGbP4Tj.js";import"./small-cross-Bc-bQBjF.js";import"./ActionButton-CoM8fqA1.js";import"./Checkbox-BubTyfqD.js";import"./useValueChanged-DPTlKWjR.js";import"./CollapsiblePanel-aNff5u-g.js";import"./MultiColumnSortDialog-Bj0C4GEb.js";import"./MenuTrigger-DlV5a9JX.js";import"./CompositeItem-D98IS09u.js";import"./ToolbarRootContext-BRDqWHEt.js";import"./getDisabledMountTransitionStyles-DH1jUBNu.js";import"./getPseudoElementBounds-QT6HlcN-.js";import"./chevron-down-DIIoHKL4.js";import"./index-Cz3Lv1z4.js";import"./error-0GjEwwWq.js";import"./BaseCbacBanner-VxS8s1Ia.js";import"./makeExternalStore-DW1w7Bj0.js";import"./Tooltip-B8GoiLs-.js";import"./PopoverPopup-CSwQSVBM.js";import"./debounce-GGX-LYbn.js";import"./useOsdkClient-8LhuH1T7.js";import"./tick-DyYg55N-.js";import"./DropdownField-B02oWN-k.js";import"./isEqual-BdDBDq6i.js";import"./withOsdkMetrics-CesyT9oD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

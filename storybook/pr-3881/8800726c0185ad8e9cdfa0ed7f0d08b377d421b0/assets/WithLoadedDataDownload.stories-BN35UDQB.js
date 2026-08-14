import{f as b,j as a,r as i}from"./iframe-Bfqgfvg5.js";import{O as u}from"./object-table-CGvvP8fy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-sbX0EP0E.js";import"./Table-CtWpiWd1.js";import"./index-BmFrK4uE.js";import"./Dialog-De4cyz94.js";import"./cross-B4_R7rVU.js";import"./svgIconContainer-DOVGkrjj.js";import"./useBaseUiId-BdhQOYo_.js";import"./InternalBackdrop-DCvZ8X87.js";import"./composite-DmYhjO8v.js";import"./index-Bl76L6mj.js";import"./index-CS_96wYM.js";import"./index-BlQFXGsd.js";import"./useEventCallback-B1nJIlEC.js";import"./SkeletonBar-C7y8g3ho.js";import"./LoadingCell-CwwWYKx6.js";import"./ColumnConfigDialog-DENP41HD.js";import"./DraggableList-BsJt6HPL.js";import"./search-Dn2xqqj5.js";import"./Input-C_7kfxom.js";import"./useControlled-D38Ax3L2.js";import"./Button-B2JqEm4Y.js";import"./small-cross-kYeT01JS.js";import"./ActionButton-2FoC5y02.js";import"./Checkbox-BO941x-z.js";import"./useValueChanged-Dx9C0HvB.js";import"./CollapsiblePanel-DeyFJV_M.js";import"./MultiColumnSortDialog-CMuwtBdD.js";import"./MenuTrigger-D2DoQiSy.js";import"./CompositeItem-CWhqikpO.js";import"./ToolbarRootContext-DCYSyhUf.js";import"./getDisabledMountTransitionStyles-BQDB16Rl.js";import"./getPseudoElementBounds-CS1VCemy.js";import"./chevron-down-Dtvuz0Wc.js";import"./index-BpPUDBTM.js";import"./error-Bs83EBeR.js";import"./BaseCbacBanner-jJamV-KH.js";import"./makeExternalStore-BJlkM_Kr.js";import"./Tooltip-DlgkUY-o.js";import"./PopoverPopup-C3yc73Ei.js";import"./debounce-CL7jkThf.js";import"./useOsdkClient-BASUQ_Dv.js";import"./tick-grm64bSY.js";import"./DropdownField-DE4NMuDY.js";import"./isEqual-CoQZln15.js";import"./withOsdkMetrics-DMZgHj0E.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BUYLyZP4.js";import{O as u}from"./object-table-Dgagpcdo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BfxS5EEE.js";import"./Table-Ck0afhL9.js";import"./index-TOGfLO60.js";import"./Dialog-CmY80bbx.js";import"./cross-Phnt9VWY.js";import"./svgIconContainer-C8uFt1vs.js";import"./useBaseUiId-BxFYu5yZ.js";import"./InternalBackdrop-DtQlgxru.js";import"./composite-CweMoood.js";import"./index-BLoZC7zp.js";import"./index-RS2rsans.js";import"./index-C9AYPMY1.js";import"./useEventCallback-9c5fBcoH.js";import"./SkeletonBar-CU3EW5xx.js";import"./LoadingCell-pyH64FD4.js";import"./ColumnConfigDialog-B4tLmXjs.js";import"./DraggableList-CHdJLUXf.js";import"./Input-kMNYpXbv.js";import"./useControlled-CkJswszX.js";import"./Button-honTZ6Mw.js";import"./small-cross-4qtj1F0R.js";import"./ActionButton-BeanqsYg.js";import"./Checkbox-Dd5fpNSn.js";import"./minus-eMMf0peO.js";import"./useValueChanged-DS076DBS.js";import"./caret-down-DwfBAhj_.js";import"./CollapsiblePanel-CYJPjpKw.js";import"./MultiColumnSortDialog-CtqF5MK_.js";import"./MenuTrigger-Cby6IkV9.js";import"./CompositeItem-CT3Nr8h1.js";import"./ToolbarRootContext-DwuMEk8N.js";import"./getDisabledMountTransitionStyles-BtAyeiiM.js";import"./getPseudoElementBounds-CZKk7xl4.js";import"./chevron-down-Vrk5hcyk.js";import"./index-BdU2S84P.js";import"./error-ALoGG1Oy.js";import"./BaseCbacBanner-CAzK1avr.js";import"./makeExternalStore-CZchowwZ.js";import"./Tooltip-ohFepPHH.js";import"./PopoverPopup-CV3c36zT.js";import"./toNumber-DarmYl6x.js";import"./useOsdkClient-CDJBkGnW.js";import"./DropdownField-D-2knuiH.js";import"./withOsdkMetrics-DnvsFnWV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

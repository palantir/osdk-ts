import{f as b,j as a,r as i}from"./iframe-CNV_mt9P.js";import{O as u}from"./object-table-C1dRRkw-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPBWnJ9k.js";import"./Table-FnznKnLN.js";import"./index-DzriBWGJ.js";import"./Dialog-B-xBaM23.js";import"./cross-CGS8iaCg.js";import"./svgIconContainer-n40nNhhk.js";import"./useBaseUiId-B507lKEX.js";import"./InternalBackdrop-CKtKxcdr.js";import"./composite-B4NSNRpR.js";import"./index-B9VnD0S9.js";import"./index-ZYGXogZ6.js";import"./index-CzbTPEgE.js";import"./useEventCallback-DxTsRCaa.js";import"./SkeletonBar-COlwnnaz.js";import"./LoadingCell-DYhv04kp.js";import"./ColumnConfigDialog-Bh_oEUiJ.js";import"./DraggableList-zwUOfuKZ.js";import"./search-5x3fK1oz.js";import"./Input-CcPOuoOy.js";import"./useControlled-BA63sYCw.js";import"./Button-DORSk1qY.js";import"./small-cross-DoyZJ6hM.js";import"./ActionButton-BleGjXJ_.js";import"./Checkbox-D2gO97Le.js";import"./useValueChanged-COmNVvAD.js";import"./CollapsiblePanel-Ba4zooS-.js";import"./MultiColumnSortDialog-DxSQxiCJ.js";import"./MenuTrigger-CAJuGKmn.js";import"./CompositeItem-DepW6j4m.js";import"./ToolbarRootContext-Bsc3Vu1l.js";import"./getDisabledMountTransitionStyles-DAmik8DG.js";import"./getPseudoElementBounds-C3Pa6viQ.js";import"./chevron-down-B2dQJpMF.js";import"./index-BNr1IhPY.js";import"./error-DFQlG2-a.js";import"./BaseCbacBanner-CJj81aQU.js";import"./makeExternalStore-DZlboohS.js";import"./Tooltip-BCybMNMs.js";import"./PopoverPopup-ULbncdfb.js";import"./toNumber-D4bWLfqW.js";import"./useOsdkClient-DhpNi0Pe.js";import"./tick-DRl5zB2Y.js";import"./DropdownField-BFL8fZSJ.js";import"./withOsdkMetrics-DX_ODbXs.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

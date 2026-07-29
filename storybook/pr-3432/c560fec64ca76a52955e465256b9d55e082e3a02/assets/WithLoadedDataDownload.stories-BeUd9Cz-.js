import{f as b,j as a,r as i}from"./iframe-BeLDoJDJ.js";import{O as u}from"./object-table-YkR3Rqo_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZlWemWx.js";import"./Table-BnJgnqxW.js";import"./index-CNOIOIrb.js";import"./Dialog-B1fIEJSW.js";import"./cross-DCG5TLV4.js";import"./svgIconContainer-BBtkfVDC.js";import"./useBaseUiId-LQ15WLyH.js";import"./InternalBackdrop-D5OQJWch.js";import"./composite-S97I0_tU.js";import"./index-Bt3oe8vo.js";import"./index-CfZxJNPe.js";import"./index-Ba61XdA0.js";import"./useEventCallback-D7hN4HKY.js";import"./SkeletonBar-VQWTr6u2.js";import"./LoadingCell-DGT9m269.js";import"./ColumnConfigDialog-jjVi1DBr.js";import"./DraggableList-CoTYdFdv.js";import"./search-BmHzBiZs.js";import"./Input-BJCADyvA.js";import"./useControlled-CwF9sQpL.js";import"./isEqual-DmFmNOmM.js";import"./isObject-7L6_sqP4.js";import"./Button-EnitxwgO.js";import"./ActionButton-C-98rI7n.js";import"./Checkbox-o7bol--P.js";import"./useValueChanged-DLEao6WC.js";import"./CollapsiblePanel-Dga8dkvV.js";import"./MultiColumnSortDialog-DOVUPWDG.js";import"./MenuTrigger-DCuqeVgG.js";import"./CompositeItem-CA7jBmHf.js";import"./ToolbarRootContext-CGUoqwzM.js";import"./getDisabledMountTransitionStyles-hl96xJYO.js";import"./getPseudoElementBounds-BqkXtj4-.js";import"./chevron-down-nLhl25OO.js";import"./index-Cqa5ciEF.js";import"./error-67kJMO00.js";import"./BaseCbacBanner-Bsfn304B.js";import"./makeExternalStore-DDJLENiS.js";import"./Tooltip-DDC50giw.js";import"./PopoverPopup-Rg2nIlJ0.js";import"./toNumber-CKRaMeAN.js";import"./useOsdkClient-C1wOhXH9.js";import"./tick-CZx6MvJR.js";import"./DropdownField-BzqwYiq4.js";import"./withOsdkMetrics-DtwNEj0a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

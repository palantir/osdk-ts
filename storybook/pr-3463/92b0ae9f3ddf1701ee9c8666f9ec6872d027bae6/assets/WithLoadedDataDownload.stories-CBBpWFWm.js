import{f as b,j as a,r as i}from"./iframe-Bj1MEzZt.js";import{O as u}from"./object-table-BC0yia3t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1FTf2If.js";import"./Table-nHIXVq93.js";import"./index-DeSLIOWc.js";import"./Dialog-CovfAVrp.js";import"./cross-0IJmXpL8.js";import"./svgIconContainer-DlmzthC9.js";import"./useBaseUiId-BqpIS-F-.js";import"./InternalBackdrop-Bj5ELeUU.js";import"./composite-Bi6Cj2uF.js";import"./index-XZ5d8N__.js";import"./index-CX0fm6C9.js";import"./index-BgWajjmf.js";import"./useEventCallback-DxAR1ff6.js";import"./SkeletonBar-CA2ACSK2.js";import"./LoadingCell-SN0drMT6.js";import"./ColumnConfigDialog-yb7C7ws7.js";import"./DraggableList-DKYV5u-Z.js";import"./search-kif-7SC4.js";import"./Input-BjZAvpMy.js";import"./useControlled-BsXhHg9D.js";import"./Button-Bxx-3lnA.js";import"./small-cross-J_ERw0XX.js";import"./ActionButton-DdT1xcsP.js";import"./Checkbox-DFV8iiYL.js";import"./useValueChanged-Dg8j-_e-.js";import"./CollapsiblePanel-jY6uiW4N.js";import"./MultiColumnSortDialog-C0oFejLb.js";import"./MenuTrigger-oft4l45T.js";import"./CompositeItem-lYV_12NC.js";import"./ToolbarRootContext-rh9b1pH4.js";import"./getDisabledMountTransitionStyles-7yClBl8N.js";import"./getPseudoElementBounds-W-4nVNw3.js";import"./chevron-down-CgyuwAZ7.js";import"./index-D22cm5dM.js";import"./error-I_yYOMPz.js";import"./BaseCbacBanner-BmYs9nWw.js";import"./makeExternalStore-CO194rEb.js";import"./Tooltip-BswTbyww.js";import"./PopoverPopup-Bk7SkigI.js";import"./toNumber-CbYg0YlJ.js";import"./useOsdkClient-O0BdObBn.js";import"./tick-DNZmbno-.js";import"./DropdownField-CPFGK459.js";import"./withOsdkMetrics-BQyhZxiE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

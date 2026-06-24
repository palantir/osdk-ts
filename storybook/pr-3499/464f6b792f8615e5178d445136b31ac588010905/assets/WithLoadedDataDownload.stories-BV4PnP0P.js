import{f as b,j as a,r as i}from"./iframe-DOG8I-eL.js";import{O as u}from"./object-table-kSRgb3IW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-lug39fn3.js";import"./Table-DFoDDBSH.js";import"./index-CEwMiCkF.js";import"./Dialog-Du7LcmUl.js";import"./cross-DDgUvHYg.js";import"./svgIconContainer-LPw3jrQi.js";import"./useBaseUiId-DdBDSHzH.js";import"./InternalBackdrop-DEeEcEbL.js";import"./composite-BYVJj0oB.js";import"./index-NgunwP8s.js";import"./index-D-86qJf-.js";import"./index-D_S-I_Xz.js";import"./useEventCallback-BnKTxmQE.js";import"./SkeletonBar-DN-md7S0.js";import"./LoadingCell-Bxkr7_VB.js";import"./ColumnConfigDialog-CR9ue_HW.js";import"./DraggableList-D-LB-r07.js";import"./Input-Ma79ab32.js";import"./useControlled-AIEHDiUm.js";import"./Button-BX-3Osuu.js";import"./small-cross-BHnaW0D8.js";import"./ActionButton-DQo3j25e.js";import"./Checkbox-BZPUVXb8.js";import"./minus-DnT60Wv5.js";import"./useValueChanged-BDU8u3YR.js";import"./caret-down-CiD9MFcw.js";import"./CollapsiblePanel-C5dlScs9.js";import"./MultiColumnSortDialog-LnzmJ3uJ.js";import"./MenuTrigger-BoZRZl4T.js";import"./CompositeItem-DjES7F0t.js";import"./ToolbarRootContext-C5bfDa8R.js";import"./getDisabledMountTransitionStyles-B9Mrq0ii.js";import"./getPseudoElementBounds-De4r8jsc.js";import"./chevron-down-BdiyUQTU.js";import"./index-B5xv-MXC.js";import"./error-C4Ugnr67.js";import"./BaseCbacBanner-ruC1yUDF.js";import"./makeExternalStore-BQy6EPde.js";import"./Tooltip-Bsri5v-j.js";import"./PopoverPopup-D4UbtKlz.js";import"./toNumber-BpkrrDK_.js";import"./useOsdkClient-Cdnxcvj3.js";import"./DropdownField-yKDSWTJe.js";import"./withOsdkMetrics-Dkdq65Zi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

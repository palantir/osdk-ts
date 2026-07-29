import{f as b,j as a,r as i}from"./iframe-Dgh8VYtn.js";import{O as u}from"./object-table-CrK3D4Ob.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CFJZ_ler.js";import"./Table-Ba1C4EO2.js";import"./index-CR8Gg0Zj.js";import"./Dialog-Bbn-ZaMm.js";import"./cross-DPNz-mem.js";import"./svgIconContainer-blw7niRf.js";import"./useBaseUiId-BzDeHhXv.js";import"./InternalBackdrop-BSutcF3C.js";import"./composite-D6oOJknJ.js";import"./index-DKfcKTHa.js";import"./index-B6PBiQ8K.js";import"./index-DTfohs9h.js";import"./useEventCallback-Vun2FRva.js";import"./SkeletonBar-hPocAHhW.js";import"./LoadingCell-DBobtsIr.js";import"./ColumnConfigDialog-CcogqKvL.js";import"./DraggableList-BmY3ilue.js";import"./search-B0l3LahF.js";import"./Input-5-CxMabY.js";import"./useControlled-B4IBQ9ng.js";import"./Button-BZm5BN2k.js";import"./small-cross-DWUvjwZL.js";import"./ActionButton-BPLuCXk7.js";import"./Checkbox-C1xVzc04.js";import"./useValueChanged-DVst17AL.js";import"./CollapsiblePanel-DrvbrhF2.js";import"./MultiColumnSortDialog-CXVzXi8y.js";import"./MenuTrigger-CCN_all-.js";import"./CompositeItem-Ckfi4QX3.js";import"./ToolbarRootContext-B-exhe9d.js";import"./getDisabledMountTransitionStyles-YN6L_PSY.js";import"./getPseudoElementBounds-Bb46lt1o.js";import"./chevron-down-CdpMlX1J.js";import"./index-CQ-zXVd9.js";import"./error-_UZv3G_I.js";import"./BaseCbacBanner-CRLlI3Gp.js";import"./makeExternalStore-BNACMlLS.js";import"./Tooltip-DGN4ft4r.js";import"./PopoverPopup-Cz46GyD3.js";import"./toNumber-DDthKoEs.js";import"./useOsdkClient-CZzw9Szu.js";import"./tick-CxEQ1pAU.js";import"./DropdownField-CwNxU7hW.js";import"./withOsdkMetrics-Dg6KSq_n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

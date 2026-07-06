import{f as b,j as a,r as i}from"./iframe-BxhNzdCJ.js";import{O as u}from"./object-table-tAO4IS1e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci3X22NU.js";import"./Table-BwtjkK5y.js";import"./index-fanh_WPF.js";import"./Dialog-ca0PmxFE.js";import"./cross-BOHizEE7.js";import"./svgIconContainer-CXD-puPH.js";import"./useBaseUiId-CTbNHlSx.js";import"./InternalBackdrop-B3Mf8s8D.js";import"./composite-sISphl_D.js";import"./index-CXR4AaOd.js";import"./index-BGjCYo6U.js";import"./index-gzUvqnxz.js";import"./useEventCallback-nVJPfxxX.js";import"./SkeletonBar-CAsANZTJ.js";import"./LoadingCell-BlwGn9qz.js";import"./ColumnConfigDialog-BUx2itHP.js";import"./DraggableList-Bo2TvcAz.js";import"./search-B_J-Ls4Z.js";import"./Input-Db5psvur.js";import"./useControlled-DvKCh5A7.js";import"./Button-Cxe4C__-.js";import"./small-cross-ClNuFQ5x.js";import"./ActionButton-Cl6qrblv.js";import"./Checkbox-BDXpw27p.js";import"./useValueChanged-iTNuMqYd.js";import"./CollapsiblePanel-DAu5Jb9J.js";import"./MultiColumnSortDialog-C7BUF2sq.js";import"./MenuTrigger-Cat9N4D4.js";import"./CompositeItem-jiPXxB8m.js";import"./ToolbarRootContext-VBUgETwl.js";import"./getDisabledMountTransitionStyles-DiN1cA4V.js";import"./getPseudoElementBounds-AtJgKmst.js";import"./chevron-down-AE2xmaec.js";import"./index-DxXXqXtC.js";import"./error-DR34QZtV.js";import"./BaseCbacBanner-BGAwM8iz.js";import"./makeExternalStore-D-dfFmaH.js";import"./Tooltip-DlAh04ya.js";import"./PopoverPopup--wiRngg0.js";import"./toNumber-blj0y3rl.js";import"./useOsdkClient-DDp9zlyg.js";import"./tick-CxaWKoWf.js";import"./DropdownField-Br4eaa0F.js";import"./withOsdkMetrics-Cm3IXA24.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

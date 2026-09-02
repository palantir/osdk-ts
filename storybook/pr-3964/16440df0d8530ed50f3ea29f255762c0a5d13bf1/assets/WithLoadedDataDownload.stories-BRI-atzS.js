import{f as b,j as a,r as i}from"./iframe-BPFPjQfN.js";import{O as u}from"./object-table-Y0mlN0Vb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BS5sFlIZ.js";import"./Table-CguB3Bpq.js";import"./index-DLsuK50b.js";import"./Dialog-Dg-1TYJ4.js";import"./cross-jacAbTr1.js";import"./svgIconContainer-BCrLikms.js";import"./useBaseUiId-XR0mowR0.js";import"./InternalBackdrop-Df1he87e.js";import"./composite--6cSo0WV.js";import"./index-B2XioIrj.js";import"./index-BOMANPh2.js";import"./index-Biydlrf3.js";import"./useEventCallback-DNQjSEKX.js";import"./SkeletonBar-CMuVE2LV.js";import"./LoadingCell-BlrvphZB.js";import"./ColumnConfigDialog-BbWkPFl5.js";import"./DraggableList-BUUF-S7z.js";import"./search-CZtJ4QjI.js";import"./Input-Cbr4DxDr.js";import"./useControlled-DWmknCjz.js";import"./Button-MukxU7Us.js";import"./small-cross-yjorOgrv.js";import"./ActionButton-CQmjB9pW.js";import"./Checkbox-DfSpVE3t.js";import"./useValueChanged-CuY1VjDq.js";import"./CollapsiblePanel-DYgAn-VX.js";import"./MultiColumnSortDialog-DgiO0ntJ.js";import"./MenuTrigger-CGQOXJie.js";import"./CompositeItem-BU1kZ6Zk.js";import"./ToolbarRootContext-DvfgzgjU.js";import"./getDisabledMountTransitionStyles-BoepTDS0.js";import"./getPseudoElementBounds-CV-CmjZt.js";import"./chevron-down-U37QTCrW.js";import"./index-D2ej1Jb2.js";import"./error-DEs_Iieb.js";import"./BaseCbacBanner-D18zz_iP.js";import"./makeExternalStore-BJ259EIr.js";import"./Tooltip-3bmH_QUq.js";import"./PopoverPopup-Bn_qWbD4.js";import"./debounce-CINcFD0i.js";import"./useOsdkClient-e-CK1Pug.js";import"./tick-DSAjIfQR.js";import"./DropdownField-Bu6RRAh2.js";import"./isEqual-DcRXgc-e.js";import"./withOsdkMetrics-DyIxSijK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

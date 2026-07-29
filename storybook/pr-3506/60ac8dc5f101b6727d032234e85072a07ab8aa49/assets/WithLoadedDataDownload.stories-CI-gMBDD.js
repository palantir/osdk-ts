import{f as b,j as a,r as i}from"./iframe-3kuQPU8S.js";import{O as u}from"./object-table-BZDWMwDp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BUvCftxI.js";import"./Table-DF9RxlF7.js";import"./index-BXJoDn_D.js";import"./Dialog-CLP2jCcM.js";import"./cross-dwCS9F2a.js";import"./svgIconContainer-azv5KHsA.js";import"./useBaseUiId-CqIpRaUh.js";import"./InternalBackdrop-DuXopd5r.js";import"./composite-BraebSd2.js";import"./index-BiPZcyfs.js";import"./index-BDuhy2nu.js";import"./index-DgYn_TKd.js";import"./useEventCallback-DE3eHJIb.js";import"./SkeletonBar-aKwfUvWk.js";import"./LoadingCell-BXPT1jL9.js";import"./ColumnConfigDialog-CbUo5E_T.js";import"./DraggableList-Co_YLnII.js";import"./Input-xOAawrTY.js";import"./useControlled-D-I8tcoy.js";import"./Button-Cpa6DHKS.js";import"./small-cross-Z2-J862N.js";import"./ActionButton-DbN9lJKW.js";import"./Checkbox-zoSKNWBN.js";import"./minus-CyarjVU6.js";import"./useValueChanged-BvChDTCw.js";import"./caret-down-DwP0-0r3.js";import"./CollapsiblePanel-mzsSz0Tq.js";import"./MultiColumnSortDialog-D3GLQzhH.js";import"./MenuTrigger-8Uyx9KUF.js";import"./CompositeItem-FrA_Bb2K.js";import"./ToolbarRootContext-C_y_UTEF.js";import"./getDisabledMountTransitionStyles-BJtrwu57.js";import"./getPseudoElementBounds-DKIpxsRV.js";import"./chevron-down-zwNVFBBC.js";import"./index-CvmEH9gm.js";import"./error-DgHRKez_.js";import"./BaseCbacBanner-C_Xle0yY.js";import"./makeExternalStore-BY_0_bTV.js";import"./Tooltip-NCyEs8uE.js";import"./PopoverPopup-CXXvP_zg.js";import"./toNumber-H_digNis.js";import"./useOsdkClient-CWDyM1Yg.js";import"./DropdownField-BN0fmGt1.js";import"./withOsdkMetrics-DeiioIqi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

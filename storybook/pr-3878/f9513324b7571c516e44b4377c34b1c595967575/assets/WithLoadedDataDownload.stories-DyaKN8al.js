import{f as b,j as a,r as i}from"./iframe-C3HGDapW.js";import{O as u}from"./object-table-CQz3p20b.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd-r_PP_.js";import"./Table-DFFYj90Y.js";import"./index-CJ776Wah.js";import"./Dialog-ZkfoqNUX.js";import"./cross-D5WvDMJV.js";import"./svgIconContainer-CFN5a8Be.js";import"./useBaseUiId-DDU_oadF.js";import"./InternalBackdrop-Be2xXmYq.js";import"./composite-C0TGio2P.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./index-CI4EIWpq.js";import"./useEventCallback-Lx0RHoQ3.js";import"./SkeletonBar-vwa0QD39.js";import"./LoadingCell-B_QIsEjI.js";import"./ColumnConfigDialog-Da8NeShu.js";import"./DraggableList-BK2bp82b.js";import"./search-B43uCRp2.js";import"./Input-BSSKD0Yf.js";import"./useControlled-U-IEPHgG.js";import"./Button-D-rdzhRE.js";import"./small-cross-AZq4qJ1d.js";import"./ActionButton-C4HUNn1x.js";import"./Checkbox-D3EvpIya.js";import"./useValueChanged-Dgd9m4pd.js";import"./CollapsiblePanel-BL4COOfP.js";import"./MultiColumnSortDialog-Cceo__Pb.js";import"./MenuTrigger-Cki9aRxB.js";import"./CompositeItem-ug1IBEV3.js";import"./ToolbarRootContext-DquNC5M6.js";import"./getDisabledMountTransitionStyles-C6vvAqBU.js";import"./getPseudoElementBounds-CkAjQIKN.js";import"./chevron-down-DzjGRqJz.js";import"./index-LE1XJX1v.js";import"./error-BHy_Uegk.js";import"./BaseCbacBanner-CcieG2Vc.js";import"./makeExternalStore-CFal4aDF.js";import"./Tooltip-5nh3-0V1.js";import"./PopoverPopup-Cr_rWDbz.js";import"./debounce-KZy00M_V.js";import"./useOsdkClient-CO8K2hWt.js";import"./tick-l_Py6lRO.js";import"./DropdownField-FtuodETP.js";import"./isEqual-C1sHjSdi.js";import"./withOsdkMetrics-TK1FZJZJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

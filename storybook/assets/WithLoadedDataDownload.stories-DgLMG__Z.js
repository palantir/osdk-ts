import{f as b,j as a,r as i}from"./iframe-CP6cTA_F.js";import{O as u}from"./object-table-iH_nDn0i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DPvmA7Zq.js";import"./index-ExTRoT-S.js";import"./Dialog-n5PLBCLP.js";import"./cross-CWv2CgwP.js";import"./svgIconContainer-CiUu7uLs.js";import"./useBaseUiId-D0sIK9VN.js";import"./InternalBackdrop-DTsLPRoT.js";import"./composite-CPmAS2e0.js";import"./index-92g2yr3h.js";import"./index-DfQvziz6.js";import"./index-gOwupRTS.js";import"./useEventCallback-g_-UBx9H.js";import"./SkeletonBar-DJB-DfH-.js";import"./LoadingCell-a0CHDbBj.js";import"./ColumnConfigDialog-eB2ic_kG.js";import"./DraggableList-Pvn_pOlX.js";import"./search-DPugjmQj.js";import"./Input-FpAyHSwM.js";import"./useControlled-dbis8QU3.js";import"./Button-tMP7gYE9.js";import"./small-cross-COTRJ0DV.js";import"./ActionButton-DY_8vflj.js";import"./Checkbox-NIl7cDeZ.js";import"./useValueChanged-CvyM_SOX.js";import"./CollapsiblePanel-BuiAZoAU.js";import"./MultiColumnSortDialog-DXgAkDjI.js";import"./MenuTrigger-DVDTnihL.js";import"./CompositeItem-CrH2QCUe.js";import"./ToolbarRootContext-DpI_4HJ8.js";import"./getDisabledMountTransitionStyles-B7weFR4t.js";import"./getPseudoElementBounds-ts0aGaOY.js";import"./chevron-down-CiprR_Xm.js";import"./index-CjtUux1o.js";import"./error-DGSliNR_.js";import"./BaseCbacBanner-CZRiFsMH.js";import"./makeExternalStore-CdnPWcvL.js";import"./Tooltip-Tcw1lOsZ.js";import"./PopoverPopup-BR_L2OtC.js";import"./toNumber-DCSdLbGB.js";import"./useOsdkClient-C3uE13JX.js";import"./tick-BlzG5F_2.js";import"./DropdownField-D1EmK9h6.js";import"./withOsdkMetrics-39RZR2Ts.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

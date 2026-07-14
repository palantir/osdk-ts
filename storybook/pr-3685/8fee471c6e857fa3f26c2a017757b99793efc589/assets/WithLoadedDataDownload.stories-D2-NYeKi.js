import{f as b,j as a,r as i}from"./iframe-BV4cbUlE.js";import{O as u}from"./object-table-C9g9NqVr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-rc11-G4k.js";import"./Table-Q__Bt9rB.js";import"./index-DXyrG5tp.js";import"./Dialog-DFl1HZtZ.js";import"./cross-COlLkHCW.js";import"./svgIconContainer-Dr7oGvpm.js";import"./useBaseUiId--8KmZa2_.js";import"./InternalBackdrop-D6IOegyZ.js";import"./composite-D3vh-suo.js";import"./index-RFLA8vEX.js";import"./index-DM_IWwPy.js";import"./index-CMs9oSwV.js";import"./useEventCallback-Dc-T_T8Q.js";import"./SkeletonBar-6r-uwrKR.js";import"./LoadingCell-7dgxxIXU.js";import"./ColumnConfigDialog-4ho3ENne.js";import"./DraggableList-CHwbyyIr.js";import"./search-BJZCsFkW.js";import"./Input-BrSfdZoS.js";import"./useControlled-Geq2FNof.js";import"./Button-CjFiJqEg.js";import"./small-cross-BK_fcA3U.js";import"./ActionButton-DRWoPCsq.js";import"./Checkbox-CIN_hk_R.js";import"./useValueChanged-C1rYMtt6.js";import"./CollapsiblePanel-B4Hsv5FC.js";import"./MultiColumnSortDialog-D6ZKaO6W.js";import"./MenuTrigger-Djitk654.js";import"./CompositeItem-Cabmgwfx.js";import"./ToolbarRootContext-DTX7Ze30.js";import"./getDisabledMountTransitionStyles-D0c2WvgE.js";import"./getPseudoElementBounds-jIzGDApe.js";import"./chevron-down-B6tzQXyN.js";import"./index-CQRRvGff.js";import"./error-B70U4E8b.js";import"./BaseCbacBanner-BxUhci3E.js";import"./makeExternalStore-CtIL_ulF.js";import"./Tooltip-UuLfMgrv.js";import"./PopoverPopup-BCa6SNwK.js";import"./toNumber-CFUMrPnY.js";import"./useOsdkClient-DaXXvU5X.js";import"./tick-icTzWNpu.js";import"./DropdownField-MFqJ_Uq0.js";import"./withOsdkMetrics-hmq2OmN3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

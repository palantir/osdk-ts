import{f as b,j as a,r as i}from"./iframe-CrIhlkWG.js";import{O as u}from"./object-table-B-8MVBhX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BdM1hQMI.js";import"./Table-CjK4BWju.js";import"./index-CfEHV_V1.js";import"./Dialog-nx3QISyU.js";import"./cross-Dav_ntOW.js";import"./svgIconContainer--TJe8Z_y.js";import"./useBaseUiId-DWzwKBeJ.js";import"./InternalBackdrop-NWQSC9XE.js";import"./composite-B_Bx_Z-y.js";import"./index-BsENGrJp.js";import"./index-BWUlQoJd.js";import"./index-CXjXMBM2.js";import"./useEventCallback-CLxGsati.js";import"./SkeletonBar-CxklY6sh.js";import"./LoadingCell-ByzWhko9.js";import"./ColumnConfigDialog-DviDPICq.js";import"./DraggableList-A7cA1AzH.js";import"./search-CNHl7oo4.js";import"./Input-DuRR9wbS.js";import"./useControlled-DSBWS2LY.js";import"./Button-CXL1iv3d.js";import"./small-cross-B0Od4AL4.js";import"./ActionButton-00_y0grd.js";import"./Checkbox-BegsN_oI.js";import"./useValueChanged-C5y-LE_V.js";import"./CollapsiblePanel-DqBKl8dI.js";import"./MultiColumnSortDialog-vncruWhz.js";import"./MenuTrigger-Dc6EabhG.js";import"./CompositeItem-BXGodCVh.js";import"./ToolbarRootContext-DKfv93TJ.js";import"./getDisabledMountTransitionStyles-D_UdztkP.js";import"./getPseudoElementBounds-Ba5iLLKq.js";import"./chevron-down-BFPGOAtb.js";import"./index-DqFqCA0c.js";import"./error-Czl3WPi0.js";import"./BaseCbacBanner-LTetyY9Y.js";import"./makeExternalStore-BSphl6MW.js";import"./Tooltip-DIV7LOaq.js";import"./PopoverPopup-BNaBxvfP.js";import"./toNumber-C-0KcCbG.js";import"./useOsdkClient-uUNRD3Rk.js";import"./tick-ZIRDQGxT.js";import"./DropdownField-Ba8sXDLR.js";import"./withOsdkMetrics-QURdURG6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

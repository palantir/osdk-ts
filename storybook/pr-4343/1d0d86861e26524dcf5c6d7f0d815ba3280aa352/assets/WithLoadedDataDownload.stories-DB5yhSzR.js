import{f as b,j as a,r as i}from"./iframe-DdqwQQfw.js";import{O as u}from"./object-table-DC2LuNpA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Do8DhNTP.js";import"./Table-DuFe3xsr.js";import"./index-BEo5fRZG.js";import"./Dialog-Cg65FL_X.js";import"./cross-D_2LRYUd.js";import"./svgIconContainer-z_HFHagN.js";import"./useBaseUiId-Bcpg3lGk.js";import"./InternalBackdrop-BI5ASDuz.js";import"./composite-BS7fyn0m.js";import"./index-DUGkPzpV.js";import"./index-DqbF2orL.js";import"./index-DGo2jayS.js";import"./useEventCallback-DRJH6OEM.js";import"./SkeletonBar-CxTwW2pN.js";import"./LoadingCell-T5dcwu1-.js";import"./ColumnConfigDialog-N9XdbNhr.js";import"./DraggableList-DpMAnnH0.js";import"./search-BAD3BF_p.js";import"./Input-Ddm5AThx.js";import"./useControlled-DlTcdMFR.js";import"./Button-D31p01oo.js";import"./small-cross-0mGWC0pa.js";import"./ActionButton-ixUyXV1s.js";import"./Checkbox-CJ9apblZ.js";import"./useValueChanged-DXSqqnXt.js";import"./CollapsiblePanel-DoAzLAFA.js";import"./MultiColumnSortDialog-DWe2imCo.js";import"./MenuTrigger-VDaXaEjF.js";import"./CompositeItem-rVjlE15s.js";import"./ToolbarRootContext-BDaRyBS_.js";import"./getDisabledMountTransitionStyles-BPMv8sxJ.js";import"./getPseudoElementBounds-CxeR3TvN.js";import"./chevron-down-RBc_HqKE.js";import"./index-ByyVIpwn.js";import"./error-BE-sE7Te.js";import"./BaseCbacBanner-9dan2OAm.js";import"./makeExternalStore-C_arn_CF.js";import"./Tooltip-CBEbeLyL.js";import"./PopoverPopup-CnpcTZxS.js";import"./debounce-C-_Fx2Z2.js";import"./useOsdkClient-DRVnONzi.js";import"./tick-CVZaQjhe.js";import"./DropdownField-DSWv5JEX.js";import"./isEqual-KM0nLl8C.js";import"./withOsdkMetrics-VwlQjk8h.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

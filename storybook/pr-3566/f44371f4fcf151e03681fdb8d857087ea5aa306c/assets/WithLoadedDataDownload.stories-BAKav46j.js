import{f as b,j as a,r as i}from"./iframe-L0ai1cqu.js";import{O as u}from"./object-table-ne0UGzkD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJV0phFD.js";import"./Table-Yi2Dw3-e.js";import"./index-5z3NwvK-.js";import"./Dialog-ZeTSBHHm.js";import"./cross-BldMnKGZ.js";import"./svgIconContainer-BXNeDKfE.js";import"./useBaseUiId-uRdy00NM.js";import"./InternalBackdrop-DCsjh2P3.js";import"./composite-CFzFTXZM.js";import"./index-goLx_Fcw.js";import"./index-DEaRVqB1.js";import"./index-CFEdM6FV.js";import"./useEventCallback-CWg2rvFg.js";import"./SkeletonBar-CYSccD39.js";import"./LoadingCell-DgiT6hv3.js";import"./ColumnConfigDialog-Cai_HsOF.js";import"./DraggableList-BiXBMObZ.js";import"./search-BKS6fiop.js";import"./Input-BM22UCCJ.js";import"./useControlled-DoS-DO0S.js";import"./isEqual-CY9rucrh.js";import"./isObject-BrRMXq4S.js";import"./Button-BSW9_-C2.js";import"./ActionButton-CnjBUHSn.js";import"./Checkbox-CyTJ8Zgl.js";import"./useValueChanged-Bm3Y-hkB.js";import"./CollapsiblePanel-CSA2s4Se.js";import"./MultiColumnSortDialog-Qvy_y3lD.js";import"./MenuTrigger-D2M0hnBx.js";import"./CompositeItem-BzKbnmXa.js";import"./ToolbarRootContext-UBtY_0iz.js";import"./getDisabledMountTransitionStyles-CifMVr-Z.js";import"./getPseudoElementBounds-DWZifzSe.js";import"./chevron-down-DVT4pCH4.js";import"./index-D9UbhpdK.js";import"./error-DF7L9Uny.js";import"./BaseCbacBanner-CuDa_C4M.js";import"./makeExternalStore-DSYTVPLR.js";import"./Tooltip-b9RLl_F3.js";import"./PopoverPopup-BujxcEP7.js";import"./toNumber-CIAbFPgG.js";import"./useOsdkClient-C3iUXV7q.js";import"./tick-CtivK5GP.js";import"./DropdownField-Bebf4HlQ.js";import"./withOsdkMetrics-BNutyxS8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

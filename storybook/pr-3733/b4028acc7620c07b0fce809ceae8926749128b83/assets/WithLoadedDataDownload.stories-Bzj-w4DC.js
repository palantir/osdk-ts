import{f as b,j as a,r as i}from"./iframe-BTtzWZu6.js";import{O as u}from"./object-table-xOXBCH9q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CW1gXID8.js";import"./Table-BrnOOcC5.js";import"./index-CyGMvcn3.js";import"./Dialog-hG2Nx2ga.js";import"./cross-CPfgu5lR.js";import"./svgIconContainer-D272he4K.js";import"./useBaseUiId-BnTa1Bnl.js";import"./InternalBackdrop-DxQ_W_gP.js";import"./composite-C4r_A0EF.js";import"./index-mRCQXlcJ.js";import"./index-BIhwaVmS.js";import"./index-Yms2JVEO.js";import"./useEventCallback-DRTqn6t5.js";import"./SkeletonBar-fTxq4SzF.js";import"./LoadingCell-5IjaPMMe.js";import"./ColumnConfigDialog-D-n-xLkA.js";import"./DraggableList-BeX-aE3d.js";import"./search-BTZla_o7.js";import"./Input-Cw4l7pni.js";import"./useControlled-Cx6N0n65.js";import"./isEqual-DuHILxCf.js";import"./isObject-DQ-GwuTl.js";import"./Button-CwkymPp-.js";import"./ActionButton-BNaMMQvK.js";import"./Checkbox-B990royF.js";import"./useValueChanged-BUEyi7Ad.js";import"./CollapsiblePanel-CSpuW-zg.js";import"./MultiColumnSortDialog-BqOS-ux5.js";import"./MenuTrigger-DxoJQ0DX.js";import"./CompositeItem-D8Wt2hkZ.js";import"./ToolbarRootContext-CmB9X01m.js";import"./getDisabledMountTransitionStyles-Dbj2jsly.js";import"./getPseudoElementBounds-DYOocShz.js";import"./chevron-down-ZTHlaDsM.js";import"./index-dZArKZlw.js";import"./error-CRr4Qgos.js";import"./BaseCbacBanner-B792w_pJ.js";import"./makeExternalStore-Df1Cn7Z5.js";import"./Tooltip-DhEsJAf3.js";import"./PopoverPopup-D5cCSPjU.js";import"./toNumber-CBI9fOH8.js";import"./useOsdkClient-DVYj3ETt.js";import"./tick-BOBmx-87.js";import"./DropdownField-7e2MPXia.js";import"./withOsdkMetrics-BdrzDzmf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

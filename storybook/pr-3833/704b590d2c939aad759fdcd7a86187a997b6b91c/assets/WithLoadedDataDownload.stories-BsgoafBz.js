import{f as b,j as a,r as i}from"./iframe-CE9D4JEg.js";import{O as u}from"./object-table-J6bL-P4e.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZkFqKXe.js";import"./Table-5jH2bIn9.js";import"./index-CqAb3zQU.js";import"./Dialog-CDgqCLwb.js";import"./cross-CEfizOG4.js";import"./svgIconContainer-CzB6UxLW.js";import"./useBaseUiId-By_k7w7S.js";import"./InternalBackdrop-BOutezVR.js";import"./composite-D8GuK9Lq.js";import"./index-C8x2Wal6.js";import"./index-TKpJPc24.js";import"./index-D4tIaWwP.js";import"./useEventCallback-B_j4s6Cv.js";import"./SkeletonBar-DS0akx8X.js";import"./LoadingCell-DkEjHWfP.js";import"./ColumnConfigDialog-BvKTDTH8.js";import"./DraggableList-DoEE1uR1.js";import"./search-Bd6q-htL.js";import"./Input-CP1qtpJz.js";import"./useControlled-3ExL0cgK.js";import"./isEqual-DhHPnCYC.js";import"./isObject-CvU8D3uq.js";import"./Button-C41nBApG.js";import"./ActionButton-DTiUKEcJ.js";import"./Checkbox-Df3pitEk.js";import"./useValueChanged-BS0Dmr34.js";import"./CollapsiblePanel-D1FzsCIw.js";import"./MultiColumnSortDialog-BtVN3bJQ.js";import"./MenuTrigger-D9NVy_PN.js";import"./CompositeItem-CbXGTBfN.js";import"./ToolbarRootContext-BEi2Iys0.js";import"./getDisabledMountTransitionStyles-DvxCzkJC.js";import"./getPseudoElementBounds-Dsw-FRYL.js";import"./chevron-down-C7EWI--r.js";import"./index-BrXNTpWP.js";import"./error-CQamlZ8D.js";import"./BaseCbacBanner-BTdzruE_.js";import"./makeExternalStore-Dl3CPFxJ.js";import"./Tooltip-BRZH-K7d.js";import"./PopoverPopup-Bo5NYsVr.js";import"./toNumber-pBmfXEHq.js";import"./useOsdkClient-Aujm3-Il.js";import"./tick-CvGUey2M.js";import"./DropdownField-GrpqsGo0.js";import"./withOsdkMetrics-CFMrDZ49.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BYRqOhSr.js";import{O as u}from"./object-table-C1zu1WDG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLGTrBKR.js";import"./Table-Dgu0q0Tw.js";import"./index-CSSebMeO.js";import"./Dialog-BholJzd6.js";import"./cross-Cdpkq547.js";import"./svgIconContainer-wW0CqYPP.js";import"./useBaseUiId-BFjTC6ra.js";import"./InternalBackdrop-DCg-_Sni.js";import"./composite-0rukfXMW.js";import"./index--Qkxp9Ch.js";import"./index-Crj6XLuG.js";import"./index-D9v2WBqW.js";import"./useEventCallback-D71ScrdE.js";import"./SkeletonBar-DvfqZoaT.js";import"./LoadingCell-Co7MMWAw.js";import"./ColumnConfigDialog-aTcyzx3L.js";import"./DraggableList-CtySVNWz.js";import"./search-DIpxBZ8i.js";import"./Input-DR73XI4T.js";import"./useControlled-BLCq1h60.js";import"./isEqual-3Z6cF9qG.js";import"./isObject-CcdWjjol.js";import"./Button-cKG_17Qb.js";import"./ActionButton-ExC3cibU.js";import"./Checkbox-CdERxcMz.js";import"./useValueChanged-C9z6EyUU.js";import"./CollapsiblePanel-AsX3Kr6W.js";import"./MultiColumnSortDialog-LB8bNOJz.js";import"./MenuTrigger-CYElN_HF.js";import"./CompositeItem-mcJO_U5b.js";import"./ToolbarRootContext-D6_V_hS-.js";import"./getDisabledMountTransitionStyles-v4JFZ5lq.js";import"./getPseudoElementBounds-DL5KJd8v.js";import"./chevron-down-DUmlt8XR.js";import"./index-CKEL1RmN.js";import"./error-DF1K1fTv.js";import"./BaseCbacBanner-BLUaN58l.js";import"./makeExternalStore-RjmvQ4XE.js";import"./Tooltip-CIIn7ppo.js";import"./PopoverPopup-LBvyw9jr.js";import"./toNumber-DsQD2KWL.js";import"./useOsdkClient-DTSr5eBl.js";import"./tick-DgN8qV2O.js";import"./DropdownField-DcXEiZFu.js";import"./withOsdkMetrics-BiRr5uSt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

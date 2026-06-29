import{f as b,j as a,r as i}from"./iframe-BgQGCMZK.js";import{O as u}from"./object-table-DGi5ojx7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DceMzvTp.js";import"./Table-BwK--m6r.js";import"./index-D0qM6_3F.js";import"./Dialog-XTOgmdwi.js";import"./cross-RpoL6ucO.js";import"./svgIconContainer-DjCbUlQN.js";import"./useBaseUiId-DUweHuqm.js";import"./InternalBackdrop-C-KkXhVz.js";import"./composite-BbaMzsMX.js";import"./index-DI0-04On.js";import"./index-Wkp08oh_.js";import"./index-CTszkxCl.js";import"./useEventCallback-Cbn4REYo.js";import"./SkeletonBar-Bc5GPczi.js";import"./LoadingCell-Bcytd3te.js";import"./ColumnConfigDialog-Do-fbJjG.js";import"./DraggableList-B40TwhtF.js";import"./search-Zc7R-E_2.js";import"./Input-CUdm70rf.js";import"./useControlled-DCsXBaGY.js";import"./Button-GgYxfYWW.js";import"./small-cross-BZ7ydq7Y.js";import"./ActionButton-DVXNZ8jM.js";import"./Checkbox-CFhpLHeE.js";import"./minus-DHXljQl6.js";import"./tick-Yj_7Mfse.js";import"./useValueChanged-B8xoRRSr.js";import"./caret-down-_fRrvn0V.js";import"./CollapsiblePanel-BUpK1HQh.js";import"./MultiColumnSortDialog-CvF5FERj.js";import"./MenuTrigger-D4GTioZh.js";import"./CompositeItem-Ww2GySUz.js";import"./ToolbarRootContext-BbJw-Q_h.js";import"./getDisabledMountTransitionStyles-_WTJrDNH.js";import"./getPseudoElementBounds-C31_Y2ZQ.js";import"./chevron-down-BIfCOlUi.js";import"./index-tp4G4vay.js";import"./error-BAwkgfC_.js";import"./BaseCbacBanner-C6ewlrRE.js";import"./makeExternalStore-CkvQswBh.js";import"./Tooltip-COfgRM0M.js";import"./PopoverPopup-CxSCaAOB.js";import"./toNumber-DVVr-KZF.js";import"./useOsdkClient-vZ0e3acl.js";import"./DropdownField-IkrvSbA8.js";import"./withOsdkMetrics-CPM5GGuF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

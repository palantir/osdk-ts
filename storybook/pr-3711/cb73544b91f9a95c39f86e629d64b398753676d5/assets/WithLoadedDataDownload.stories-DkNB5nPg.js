import{f as b,j as a,r as i}from"./iframe-BeWD4gFl.js";import{O as u}from"./object-table-kxr7lL-h.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw7qT2Q0.js";import"./Table-CsTZe9mw.js";import"./index-BXKqMrkH.js";import"./Dialog-BB46r7YI.js";import"./cross-D5kvX5ak.js";import"./svgIconContainer-DXjOt0sW.js";import"./useBaseUiId-BGPDWa3G.js";import"./InternalBackdrop-1EHWPanZ.js";import"./composite-nAA0SdpW.js";import"./index-Cl6Uh4EY.js";import"./index-4cN8XWCC.js";import"./index-BocqDfMV.js";import"./useEventCallback-DIsWsmOW.js";import"./SkeletonBar-D_WVZmsa.js";import"./LoadingCell-CtjJSRhl.js";import"./ColumnConfigDialog-6CV6SSHq.js";import"./DraggableList-CfKV8oK8.js";import"./search-CI0bdP3y.js";import"./Input-CAOYmcYS.js";import"./useControlled-Dqdvh-ch.js";import"./isEqual-FD81JcUf.js";import"./isObject-CjHqv28Z.js";import"./Button-CRhC6gUl.js";import"./ActionButton-CLWa40Ck.js";import"./Checkbox-B-pIlebK.js";import"./useValueChanged-CPtjmM5K.js";import"./CollapsiblePanel-CP0YRX0m.js";import"./MultiColumnSortDialog-CS2i_d3d.js";import"./MenuTrigger-DGmhqAjp.js";import"./CompositeItem-B0kK1CX0.js";import"./ToolbarRootContext-D9znTR5H.js";import"./getDisabledMountTransitionStyles-D6tYiR7K.js";import"./getPseudoElementBounds-B8BrzO0t.js";import"./chevron-down-jcoLaz3a.js";import"./index-CAel4vVU.js";import"./error-zP3pcuoR.js";import"./BaseCbacBanner-DL6YwPPT.js";import"./makeExternalStore-C1_YkvoA.js";import"./Tooltip-BytnA-aj.js";import"./PopoverPopup-BWcXlZ32.js";import"./toNumber-CxGch30D.js";import"./useOsdkClient-CUNCiNWK.js";import"./tick-DVsFno1_.js";import"./DropdownField-BBKTkkel.js";import"./withOsdkMetrics-t9e0BscJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BwUhzK2k.js";import{O as u}from"./object-table-DPsgSZIo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-uUx3RRbN.js";import"./Table-TUOw4-WL.js";import"./index-Ba16A1za.js";import"./Dialog-DZ8ZaaJX.js";import"./cross-CBynaPz7.js";import"./svgIconContainer-VI87NXz9.js";import"./useBaseUiId-DineJbLN.js";import"./InternalBackdrop-jJxEQc35.js";import"./composite-S9q_D-rs.js";import"./index-CQks9Ta9.js";import"./index-CoqzvABQ.js";import"./index-B_gTZOwG.js";import"./useEventCallback-DbusbfSs.js";import"./SkeletonBar-S5dF_A2n.js";import"./LoadingCell-CNx-LB_T.js";import"./ColumnConfigDialog-CMcvjtYT.js";import"./DraggableList-CQyuuh14.js";import"./search-BYjYe9mk.js";import"./Input-DP59Qchy.js";import"./useControlled-45iVGC9D.js";import"./Button-DwfxyI9K.js";import"./small-cross-ByAtqu5b.js";import"./ActionButton-CqAatWg7.js";import"./Checkbox-Bgl259bu.js";import"./useValueChanged-CxxXDLVl.js";import"./CollapsiblePanel-B4ds7sYX.js";import"./MultiColumnSortDialog-FHPlNFte.js";import"./MenuTrigger-pDedIerP.js";import"./CompositeItem-elb8_lc7.js";import"./ToolbarRootContext-rNb_ILvC.js";import"./getDisabledMountTransitionStyles-CbbI388h.js";import"./getPseudoElementBounds-ByIorp1L.js";import"./chevron-down-pY0ux560.js";import"./index-Bikbo-cd.js";import"./error-Cb3O1HD7.js";import"./BaseCbacBanner-CtgqNqzv.js";import"./makeExternalStore-YPGJ8BYC.js";import"./Tooltip-DNw31w9R.js";import"./PopoverPopup-B_mLxrhX.js";import"./toNumber-BM0UCm71.js";import"./useOsdkClient-B59N1H9e.js";import"./tick-CnuC5cP2.js";import"./DropdownField-DosbbLNz.js";import"./withOsdkMetrics-DQFQSEx0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

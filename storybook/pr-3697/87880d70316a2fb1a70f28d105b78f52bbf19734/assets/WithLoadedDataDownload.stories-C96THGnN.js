import{f as b,j as a,r as i}from"./iframe-V5Dsqq0d.js";import{O as u}from"./object-table-D_KLyo-Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bthw__r8.js";import"./Table-vC_SWQNL.js";import"./index-B75_VI1p.js";import"./Dialog-D5KSGijj.js";import"./cross-jbRB2TJp.js";import"./svgIconContainer-Cz3IKSsl.js";import"./useBaseUiId-DXRKShIH.js";import"./InternalBackdrop-D3crDW5k.js";import"./composite-hb-h17Su.js";import"./index-DgUBVLOU.js";import"./index-_BMAZb8P.js";import"./index-BXMNk3j9.js";import"./useEventCallback-B_UvXy6b.js";import"./SkeletonBar-BcKt417-.js";import"./LoadingCell-CdJqbP4U.js";import"./ColumnConfigDialog-C_XvrYBS.js";import"./DraggableList-DVIeIBSF.js";import"./search-Dfvk5b0g.js";import"./Input-Ck61Hw0f.js";import"./useControlled-B6wVKPoP.js";import"./Button-tYsz5pPM.js";import"./small-cross-D1AsSP7V.js";import"./ActionButton-KYeFq5X2.js";import"./Checkbox-50ox9mob.js";import"./useValueChanged-BQSQ7Her.js";import"./CollapsiblePanel-DtYk5wKa.js";import"./MultiColumnSortDialog-DneAdahx.js";import"./MenuTrigger-8q0KjjAa.js";import"./CompositeItem-DctY2Vmm.js";import"./ToolbarRootContext-Dxo6gOUC.js";import"./getDisabledMountTransitionStyles-TqeppgoQ.js";import"./getPseudoElementBounds-Ci1WT3yL.js";import"./chevron-down-CweBSDsu.js";import"./index-xE_yDc94.js";import"./error-BmuFdri0.js";import"./BaseCbacBanner-DMnfpi-a.js";import"./makeExternalStore-B7BZElb1.js";import"./Tooltip-BKNJ4CXW.js";import"./PopoverPopup-BXqpUswH.js";import"./toNumber-CPe3vDWf.js";import"./useOsdkClient-D4E0nqRl.js";import"./tick-Bgr1RKjf.js";import"./DropdownField-DRff_abd.js";import"./withOsdkMetrics-DCCDg2XQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

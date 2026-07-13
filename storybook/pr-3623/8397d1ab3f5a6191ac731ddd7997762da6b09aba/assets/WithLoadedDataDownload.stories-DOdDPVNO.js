import{f as b,j as a,r as i}from"./iframe-D13OvIO6.js";import{O as u}from"./object-table-BJJjUG5p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D5SNWq8-.js";import"./Table-De1zGHll.js";import"./index-H4QN0OBl.js";import"./Dialog-C81xGzcw.js";import"./cross-2WUvirnN.js";import"./svgIconContainer-B94D2qcl.js";import"./useBaseUiId-y58GEzqr.js";import"./InternalBackdrop-BOCEY4Pz.js";import"./composite-DpkCb7U_.js";import"./index-fRHUZYTt.js";import"./index-XlNIEKUK.js";import"./index-B9alaV6t.js";import"./useEventCallback-CQhxxtEl.js";import"./SkeletonBar-BrQBhLAw.js";import"./LoadingCell-CT2dJnWu.js";import"./ColumnConfigDialog-Di109sdr.js";import"./DraggableList-DNlZb68j.js";import"./search-C8nvyUgo.js";import"./Input-e5sKn9qR.js";import"./useControlled-BqUAMcfZ.js";import"./Button-DVYLGO83.js";import"./small-cross-CNZAufjA.js";import"./ActionButton-BIg0ZLEK.js";import"./Checkbox-CEdAPT5B.js";import"./useValueChanged-DDooMyS_.js";import"./CollapsiblePanel-BNie_Ck1.js";import"./MultiColumnSortDialog-C-1_pJrI.js";import"./MenuTrigger-CBkMsarv.js";import"./CompositeItem-DCNUmNPR.js";import"./ToolbarRootContext-CGxluKmw.js";import"./getDisabledMountTransitionStyles-C0PjBCeE.js";import"./getPseudoElementBounds-Cdp-0il5.js";import"./chevron-down--_FOD1tv.js";import"./index-_CZ2H6Pp.js";import"./error-DpcZtWhQ.js";import"./BaseCbacBanner-fWKK_-oS.js";import"./makeExternalStore-KSSdB1lG.js";import"./Tooltip-BazxrbVd.js";import"./PopoverPopup-CfsIlaCO.js";import"./toNumber-Bnf7Dflz.js";import"./useOsdkClient-B4hKTNPi.js";import"./tick-DF9c15Ll.js";import"./DropdownField-BqL35ukm.js";import"./withOsdkMetrics-D8_HxxxP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

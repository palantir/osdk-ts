import{f as b,j as a,r as i}from"./iframe-DncJSr5p.js";import{O as u}from"./object-table-pwcfr6xZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DROBlN7A.js";import"./Table-tpFZGtgF.js";import"./index-DnUlBG1A.js";import"./Dialog-BfvWJPmy.js";import"./cross-i5acO9JW.js";import"./svgIconContainer-op2ccpZF.js";import"./useBaseUiId-BSt68QBR.js";import"./InternalBackdrop-CbuWxTPN.js";import"./composite-pUmE0otM.js";import"./index-PUclW51s.js";import"./index-BjEAtvSg.js";import"./index-x75sYHfn.js";import"./useEventCallback-D-MlSqqX.js";import"./SkeletonBar-CiiJToyn.js";import"./LoadingCell-D1XTyO1r.js";import"./ColumnConfigDialog-Bf1LW8JF.js";import"./DraggableList-BGSDvL-T.js";import"./search-Dkd-n0Ml.js";import"./Input-BQdi7hpx.js";import"./useControlled-DyIxNgjv.js";import"./Button-AiULEb3a.js";import"./small-cross-C0E1LHkM.js";import"./ActionButton-Cxe_mufu.js";import"./Checkbox-DvnyR4N5.js";import"./useValueChanged-izoM9PyT.js";import"./CollapsiblePanel--eN-o2u_.js";import"./MultiColumnSortDialog-KAAFNr5w.js";import"./MenuTrigger-06X1jaZQ.js";import"./CompositeItem-jMDKTU8M.js";import"./ToolbarRootContext-C0UeEYZg.js";import"./getDisabledMountTransitionStyles-DSSGAiR5.js";import"./getPseudoElementBounds-BfAHvDVP.js";import"./chevron-down-D7W3sjBX.js";import"./index-Cgz4I0It.js";import"./error-BtXBxITc.js";import"./BaseCbacBanner-B6zNtBbE.js";import"./makeExternalStore-D1-pUQGc.js";import"./Tooltip-tjNCn-yC.js";import"./PopoverPopup-BSLnjdOS.js";import"./toNumber-8pp_RvoU.js";import"./useOsdkClient-WJgei-8U.js";import"./tick-Wx9VZKGf.js";import"./DropdownField-B9Oqc9Op.js";import"./withOsdkMetrics-Bm5xwXi6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

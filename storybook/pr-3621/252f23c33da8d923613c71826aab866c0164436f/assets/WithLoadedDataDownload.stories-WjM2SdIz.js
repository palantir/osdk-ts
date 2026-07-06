import{f as b,j as a,r as i}from"./iframe-DAPf5R79.js";import{O as u}from"./object-table-WskXs1WF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--c_tbeOe.js";import"./Table-DVxY7GB4.js";import"./index-xCoa8aGB.js";import"./Dialog-DrBivqPd.js";import"./cross-ClhQ1rpF.js";import"./svgIconContainer-BYkztrbc.js";import"./useBaseUiId-fYZwvqln.js";import"./InternalBackdrop-Cmth5hU7.js";import"./composite-D8yTLZWE.js";import"./index-AFTh5nTl.js";import"./index-CnB3s9IP.js";import"./index-Cwpo88Lp.js";import"./useEventCallback-DFKCOTZo.js";import"./SkeletonBar-BvUxO5nN.js";import"./LoadingCell-BAzaNcIu.js";import"./ColumnConfigDialog-RaXqiurW.js";import"./DraggableList-NT5o6iWc.js";import"./search-BnbwIFnT.js";import"./Input-ZkOVrlYt.js";import"./useControlled-DargH3t1.js";import"./Button-BjZAy2ji.js";import"./small-cross-CRM3O6dq.js";import"./ActionButton-wae5oJ9L.js";import"./Checkbox-DXLTMzWh.js";import"./useValueChanged-Bu8gZnsc.js";import"./CollapsiblePanel-DtHQrNdi.js";import"./MultiColumnSortDialog-IgS-lBbN.js";import"./MenuTrigger-fhWNE3-Z.js";import"./CompositeItem-BYrTCyd7.js";import"./ToolbarRootContext-Clg4QEmw.js";import"./getDisabledMountTransitionStyles-D-7qePfd.js";import"./getPseudoElementBounds-Dviz8JhL.js";import"./chevron-down-I9ELS6qu.js";import"./index-Dby3YX0k.js";import"./error-B7xwVXIY.js";import"./BaseCbacBanner-Bqxqh0bK.js";import"./makeExternalStore-ZfRGx0zA.js";import"./Tooltip-BAcCSea-.js";import"./PopoverPopup-GxfTJ8-O.js";import"./toNumber-D-DAklUK.js";import"./useOsdkClient-BrEcD_LB.js";import"./tick-I48KMwzT.js";import"./DropdownField-DZ8rSC_a.js";import"./withOsdkMetrics-4QHDEE-T.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

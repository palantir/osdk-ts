import{f as b,j as a,r as i}from"./iframe-CsWLXGze.js";import{O as u}from"./object-table-BF2Jp1RF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSH4YltX.js";import"./Table-HhXM9Oub.js";import"./index-M4a-IfHf.js";import"./Dialog-DW3IHBNE.js";import"./cross-BKDbV3FK.js";import"./svgIconContainer-1YcTNdfv.js";import"./useBaseUiId-fgChwSGu.js";import"./InternalBackdrop-BNpx8wum.js";import"./composite-DhVg6KqB.js";import"./index-BIwVsCzG.js";import"./index-sdEV9Iuk.js";import"./index-DbUjE1JE.js";import"./useEventCallback-UY2v0UaL.js";import"./SkeletonBar-CYKMWdpM.js";import"./LoadingCell-CV5Qc6So.js";import"./ColumnConfigDialog-DeS7jCjp.js";import"./DraggableList-BT4PZqTf.js";import"./search-5ko9ULaH.js";import"./Input-BIXIYg13.js";import"./useControlled-CGa31_jc.js";import"./Button-C4uLPH9T.js";import"./small-cross-CCfAvtSS.js";import"./ActionButton-tgMQSAXk.js";import"./Checkbox-6FQl010u.js";import"./useValueChanged-DGVPUxDt.js";import"./CollapsiblePanel-p_0IVO0X.js";import"./MultiColumnSortDialog-C8-Ij8_0.js";import"./MenuTrigger-DzOBCAOK.js";import"./CompositeItem-ZcMj5C8j.js";import"./ToolbarRootContext-By5rr9Ue.js";import"./getDisabledMountTransitionStyles-Cpjy482Z.js";import"./getPseudoElementBounds-BEV-jVND.js";import"./chevron-down-B_D-AKx7.js";import"./index-cr7KvQ6p.js";import"./error-i0f4hEhy.js";import"./BaseCbacBanner-C9y6PPlH.js";import"./makeExternalStore-C7HN_2a4.js";import"./Tooltip-D0JohZEL.js";import"./PopoverPopup-DNxYjEIm.js";import"./toNumber-COgzXkBT.js";import"./useOsdkClient-BEyUaLN-.js";import"./tick-DRkIgeMu.js";import"./DropdownField-iVQeWGBO.js";import"./withOsdkMetrics-BQkvG7az.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

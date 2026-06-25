import{f as b,j as a,r as i}from"./iframe-Ci9OEgk1.js";import{O as u}from"./object-table-CalR23l0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-8sCrdDbL.js";import"./Table-Ceqps-ut.js";import"./index-DkMA7RU6.js";import"./Dialog-DKRzZo0C.js";import"./cross-B4HZSJqw.js";import"./svgIconContainer-Dv1tejIq.js";import"./useBaseUiId-D6vQddwn.js";import"./InternalBackdrop-CBYAvGzI.js";import"./composite-GDbwZnW0.js";import"./index-SVikJX9n.js";import"./index-_iib4Iaf.js";import"./index-DhQ0vgBz.js";import"./useEventCallback-DPw0YfxT.js";import"./SkeletonBar-CxbHVr8t.js";import"./LoadingCell-DXfpPEWE.js";import"./ColumnConfigDialog-CQhKSZxw.js";import"./DraggableList-CU1a4t0D.js";import"./Input-BU9SX9xW.js";import"./useControlled-BIoQnqvN.js";import"./Button-ZKTKU8-L.js";import"./small-cross-D_3GFq1H.js";import"./ActionButton-DpQhPuej.js";import"./Checkbox-HH0Zpy9p.js";import"./minus-BJZs7W1B.js";import"./useValueChanged-Clx629G1.js";import"./caret-down-BZkmTWb4.js";import"./CollapsiblePanel-BlwuIWf5.js";import"./MultiColumnSortDialog-hCAoC3aA.js";import"./MenuTrigger-YC-2esKr.js";import"./CompositeItem-CXrizCRc.js";import"./ToolbarRootContext-CF1tznBs.js";import"./getDisabledMountTransitionStyles-CjbsvGPU.js";import"./getPseudoElementBounds-3Np-Ljbp.js";import"./chevron-down--eMrF9nV.js";import"./index-CoQOplZM.js";import"./error-BshhoQ9-.js";import"./BaseCbacBanner-CTlD8XE6.js";import"./makeExternalStore-BPvpIWV1.js";import"./Tooltip-C3cemgtD.js";import"./PopoverPopup-H2L6RQzg.js";import"./toNumber-CGkag2OW.js";import"./useOsdkClient-3tUyvk3C.js";import"./DropdownField-DBR2g8Yh.js";import"./withOsdkMetrics-21p2vZyJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

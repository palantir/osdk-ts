import{f as b,j as a,r as i}from"./iframe-D0ucOuid.js";import{O as u}from"./object-table-C_R1CGuL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dbago4K3.js";import"./Table-6vk0NWG1.js";import"./index-COXB08R9.js";import"./Dialog-DEuQjMyH.js";import"./cross-wHe_kbci.js";import"./svgIconContainer-A7aIUps5.js";import"./useBaseUiId-CMuGOdMh.js";import"./InternalBackdrop-B20BVMqv.js";import"./composite-Dg0n5z7n.js";import"./index-BeNrEhUO.js";import"./index-D4KPHE31.js";import"./index-GVcqnKRw.js";import"./useEventCallback-PFvr2XjW.js";import"./SkeletonBar-BRjbNXuJ.js";import"./LoadingCell-Cw4wNUkS.js";import"./ColumnConfigDialog-DfvvEj37.js";import"./DraggableList-vgwjXTUQ.js";import"./search-D5fdEY4D.js";import"./Input-B-v7pt1U.js";import"./useControlled-DoXK2GrK.js";import"./Button-DHAxKs9e.js";import"./small-cross-MsiFTGER.js";import"./ActionButton-Ba7Oys0r.js";import"./Checkbox-Fs3feZ77.js";import"./minus-OtKL2JR0.js";import"./tick-DLLkfYxr.js";import"./useValueChanged-D7rKQF8U.js";import"./caret-down-_4qF2xpO.js";import"./CollapsiblePanel-CmoZ2-SA.js";import"./MultiColumnSortDialog-GFvpMJpK.js";import"./MenuTrigger-CwvP_FDF.js";import"./CompositeItem-ByQnfEiz.js";import"./ToolbarRootContext-Cv8r3D5y.js";import"./getDisabledMountTransitionStyles-cSnLProB.js";import"./getPseudoElementBounds-DEdkD5FW.js";import"./chevron-down-DfkRu7ka.js";import"./index-DfZ4053_.js";import"./error-D7ovlyVk.js";import"./BaseCbacBanner-C6PFxX8m.js";import"./makeExternalStore-c_SqPNLS.js";import"./Tooltip-BdvGv68V.js";import"./PopoverPopup-C-Em_J-J.js";import"./toNumber-ff6r2pXr.js";import"./useOsdkClient-BgyMYSvm.js";import"./DropdownField-Bs7ruPpT.js";import"./withOsdkMetrics-BljmcISJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

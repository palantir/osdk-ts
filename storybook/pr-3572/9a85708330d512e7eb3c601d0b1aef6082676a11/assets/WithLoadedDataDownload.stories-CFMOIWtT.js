import{f as b,j as a,r as i}from"./iframe-6DWpb4n8.js";import{O as u}from"./object-table-BcB2EIM7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKC3MDBV.js";import"./Table-B01Rs_o6.js";import"./index-DvSw4Y8y.js";import"./Dialog-S8zailNB.js";import"./cross-DzEIRlDS.js";import"./svgIconContainer-CEcqlPd6.js";import"./useBaseUiId-BMfPZQEL.js";import"./InternalBackdrop-5g83KIMa.js";import"./composite-BP4DAUSV.js";import"./index-kjbPB0Tc.js";import"./index-DXie4Vqe.js";import"./index-B9yScdf6.js";import"./useEventCallback-EcZd48ml.js";import"./SkeletonBar-CLeyDOgJ.js";import"./LoadingCell-o5zxtv5_.js";import"./ColumnConfigDialog-Lwwv0W3J.js";import"./DraggableList-C7FxmE-H.js";import"./search-C_ZrWNSR.js";import"./Input-fwKnahH6.js";import"./useControlled-Cmd5jpf8.js";import"./Button-DZvQGd15.js";import"./small-cross-vfe1oVw5.js";import"./ActionButton-9H35vsSc.js";import"./Checkbox-CtGUERuj.js";import"./minus-BsyllDxp.js";import"./tick-Bi6gcR2I.js";import"./useValueChanged-YzasCaGg.js";import"./caret-down-C1_OAL1N.js";import"./CollapsiblePanel-D3qnZWVf.js";import"./MultiColumnSortDialog-WHLv-qIm.js";import"./MenuTrigger-CMHzFKSj.js";import"./CompositeItem-Zyxnw8On.js";import"./ToolbarRootContext-j9l86UQ6.js";import"./getDisabledMountTransitionStyles-BP6n7LlW.js";import"./getPseudoElementBounds-Bp8sQiT_.js";import"./chevron-down-DWI2AdOf.js";import"./index-BFiua2g7.js";import"./error-Co_RU7lE.js";import"./BaseCbacBanner-C48mSWNw.js";import"./makeExternalStore-M8_UnZ4Q.js";import"./Tooltip-CX3-lNin.js";import"./PopoverPopup-Cd0Rtz2g.js";import"./toNumber-CfhOoEau.js";import"./useOsdkClient-cWQvQ02f.js";import"./DropdownField-DxB8Gt1z.js";import"./withOsdkMetrics-DsHZN0Lu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

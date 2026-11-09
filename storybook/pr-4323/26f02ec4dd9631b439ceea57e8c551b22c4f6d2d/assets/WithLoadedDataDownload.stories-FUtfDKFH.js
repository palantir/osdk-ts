import{f as b,j as a,r as i}from"./iframe-D4P7etlB.js";import{O as u}from"./object-table-CmDASLiD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2lPWNQK.js";import"./Table-pBQAdc4d.js";import"./index--jClFyuO.js";import"./Dialog-KLia9iKn.js";import"./cross-2BDiF0Hd.js";import"./svgIconContainer-U5WzETGn.js";import"./useBaseUiId-DvebyHll.js";import"./InternalBackdrop-DGlO_IGy.js";import"./composite-EmCbbtLr.js";import"./index-CryUHWua.js";import"./index-CwQjgJZY.js";import"./index-_8-zIP07.js";import"./useEventCallback-DkNCpCyH.js";import"./SkeletonBar-BO8Ocj6J.js";import"./LoadingCell-Do7dTGvR.js";import"./ColumnConfigDialog-CohusCj_.js";import"./DraggableList-BqyQGRR3.js";import"./search-BeidNAh3.js";import"./Input-qm2XT5j9.js";import"./useControlled-Bt7GOIrD.js";import"./Button-DSmwZlqW.js";import"./small-cross-DTEPBgMK.js";import"./ActionButton-DK6o_d0J.js";import"./Checkbox-DyvnuZ96.js";import"./useValueChanged-cSUG-TZB.js";import"./CollapsiblePanel-rtSyYl_a.js";import"./MultiColumnSortDialog-q1L_KY4V.js";import"./MenuTrigger-DR872eUl.js";import"./CompositeItem-Ca01-11J.js";import"./ToolbarRootContext-BJaSUWck.js";import"./getDisabledMountTransitionStyles-CX4qj900.js";import"./getPseudoElementBounds-hPghm1P1.js";import"./chevron-down-6L8qWnzl.js";import"./index-C2PCEa1N.js";import"./error-BEbiBzi3.js";import"./BaseCbacBanner-O1ctCsiT.js";import"./makeExternalStore-B40swsdd.js";import"./Tooltip-rdRqYy6n.js";import"./isObject-XT_Sb81H.js";import"./debounce-BMR9Ivsx.js";import"./useOsdkClient-CeUx27Wr.js";import"./tick-BK6XBZsH.js";import"./DropdownField-CWcrlvwC.js";import"./isEqual-CO15cxJ9.js";import"./_baseIsEqual-CsrvH1cu.js";import"./withOsdkMetrics-DllWQK_5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

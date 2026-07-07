import{f as b,j as a,r as i}from"./iframe-DYNK02I_.js";import{O as u}from"./object-table-HOqSwTEY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVQqxqqG.js";import"./Table-BX68Lw8R.js";import"./index-DgcQGZHo.js";import"./Dialog-DAJmsbZg.js";import"./cross-BtSz2CJ7.js";import"./svgIconContainer-BIw5d8Z1.js";import"./useBaseUiId-DBmz8GTO.js";import"./InternalBackdrop-CuguROyf.js";import"./composite-BN0hmDQN.js";import"./index-BSXskgoy.js";import"./index-BFATeBzZ.js";import"./index-_adbjLmT.js";import"./useEventCallback-8eiGtYmr.js";import"./SkeletonBar-_cpMLDjQ.js";import"./LoadingCell-B4DHzo4C.js";import"./ColumnConfigDialog-BNtCf35a.js";import"./DraggableList-DOoR0K2N.js";import"./search-BrgJCdJ1.js";import"./Input-Hl3VDz84.js";import"./useControlled-C1nCVAdK.js";import"./Button-BIYMuHEo.js";import"./small-cross-Cd1wvMj2.js";import"./ActionButton-AgwSkRNM.js";import"./Checkbox-BDv7IG4W.js";import"./useValueChanged-4qh5N6pQ.js";import"./CollapsiblePanel-BhOo8rJK.js";import"./MultiColumnSortDialog-a1cmmNH9.js";import"./MenuTrigger-DhVqnJSB.js";import"./CompositeItem-DJcjaUR4.js";import"./ToolbarRootContext-dyjJ_3hL.js";import"./getDisabledMountTransitionStyles-BLMIoYSz.js";import"./getPseudoElementBounds-DBl3J9o4.js";import"./chevron-down-CGyUnEQ9.js";import"./index-DO8TnFyt.js";import"./error-DVUpGhgE.js";import"./BaseCbacBanner-BoTJQ41L.js";import"./makeExternalStore-atX7fbPr.js";import"./Tooltip-DYAVFLUz.js";import"./PopoverPopup-Dm2adbf4.js";import"./toNumber-BWVPVyju.js";import"./useOsdkClient-Di52ia0t.js";import"./tick-CFJahENf.js";import"./DropdownField-DvJq0SSj.js";import"./withOsdkMetrics-hkEMtyUb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

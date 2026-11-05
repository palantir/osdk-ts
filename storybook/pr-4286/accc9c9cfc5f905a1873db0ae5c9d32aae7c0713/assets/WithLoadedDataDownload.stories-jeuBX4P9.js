import{f as b,j as a,r as i}from"./iframe-BH1__lyA.js";import{O as u}from"./object-table-C_YYv9IJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CcoKPVmD.js";import"./Table-DdPOGwfn.js";import"./index-COEeIEse.js";import"./Dialog-B-tTj_Nw.js";import"./cross-BG9CU_85.js";import"./svgIconContainer-wKAlV-si.js";import"./useBaseUiId-CocyTtNa.js";import"./InternalBackdrop-Bf6tif4j.js";import"./composite-C3W7I4o1.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./index-BiGG8ZBE.js";import"./useEventCallback-CPUVFOtx.js";import"./SkeletonBar-BGI6vnAm.js";import"./LoadingCell-BBxmDmnN.js";import"./ColumnConfigDialog-B4fUNH1J.js";import"./DraggableList-l-YPQ9p_.js";import"./search-XcMkpgCF.js";import"./Input-hpLjYkh3.js";import"./useControlled-DOGwcjPy.js";import"./Button-DfUwNhvG.js";import"./small-cross-CAPHq35Q.js";import"./ActionButton-C1MKeMQV.js";import"./Checkbox-BWUQFoeG.js";import"./useValueChanged-41xr8V2-.js";import"./CollapsiblePanel-Dn2DChxX.js";import"./MultiColumnSortDialog-D-Q0C7Y-.js";import"./MenuTrigger-PQ3cFOHk.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./getDisabledMountTransitionStyles-DVj5IYmX.js";import"./getPseudoElementBounds-hmm0rsQk.js";import"./chevron-down-PjTLl0ZH.js";import"./index-CGXKdUZr.js";import"./error-Dg7pD9uX.js";import"./BaseCbacBanner-DJUtLNca.js";import"./makeExternalStore-CyAT35zT.js";import"./Tooltip-6cEOUv8s.js";import"./isObject-neNgVvou.js";import"./debounce-CxGZY-Kb.js";import"./useOsdkClient-BG_667E1.js";import"./tick-PqPtFkmd.js";import"./DropdownField-C55flNy_.js";import"./isEqual-DAwlJfTA.js";import"./_baseIsEqual-fFGR7Jxx.js";import"./withOsdkMetrics-B_AmLLOG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

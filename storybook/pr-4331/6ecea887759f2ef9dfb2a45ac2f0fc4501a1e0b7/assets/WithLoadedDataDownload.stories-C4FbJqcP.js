import{f as b,j as a,r as i}from"./iframe-B0O6MtlS.js";import{O as u}from"./object-table-DTfiu3fj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6pURdot.js";import"./Table-DM7Ks83Y.js";import"./index-CWmTKLGK.js";import"./Dialog-CNHkhkGm.js";import"./cross-CWEImtxT.js";import"./svgIconContainer-DXqgtHND.js";import"./useBaseUiId-BznU3LGS.js";import"./InternalBackdrop-BC098Jsb.js";import"./composite-BMg2yNSq.js";import"./index-iJddnt6C.js";import"./index-D_qtusqG.js";import"./index-DXznXhjK.js";import"./useEventCallback-BYZGQENt.js";import"./SkeletonBar-g2uwrnoF.js";import"./LoadingCell-W1Y0oSVI.js";import"./ColumnConfigDialog-AKtgY3IN.js";import"./DraggableList-CogmIw5o.js";import"./search-Ck63SNgv.js";import"./Input-C5r_FU3t.js";import"./useControlled-Bx-6J2ID.js";import"./Button-BoJolYQb.js";import"./small-cross-CvWDOY6F.js";import"./ActionButton-CX9VY3Vm.js";import"./Checkbox-CqyUc6So.js";import"./useValueChanged-C4aiVzbu.js";import"./CollapsiblePanel-CaYS0I-E.js";import"./MultiColumnSortDialog-DMytbJfG.js";import"./MenuTrigger-DVngFBgA.js";import"./CompositeItem-BbV5-QNT.js";import"./ToolbarRootContext-DCOU3uiJ.js";import"./getDisabledMountTransitionStyles-reeodFI6.js";import"./getPseudoElementBounds-9i5ws3FW.js";import"./chevron-down-7CANPOc8.js";import"./index-CIng004C.js";import"./error-CSV7R-eM.js";import"./BaseCbacBanner-C_-uFgBv.js";import"./makeExternalStore-CyQVHXN1.js";import"./Tooltip-BbpaHu5y.js";import"./isObject-4DXF1F0N.js";import"./debounce-6Otf2ylt.js";import"./useOsdkClient-DiYg4DLq.js";import"./tick-BcfAOxfQ.js";import"./DropdownField-CQin5nsR.js";import"./isEqual-0795DvIL.js";import"./_baseIsEqual-DpqgVj1P.js";import"./withOsdkMetrics-CPnPG3g5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

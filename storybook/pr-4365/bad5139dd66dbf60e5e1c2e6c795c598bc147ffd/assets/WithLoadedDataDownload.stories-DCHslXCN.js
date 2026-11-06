import{f as b,j as a,r as i}from"./iframe-D8PhF-eH.js";import{O as u}from"./object-table-QJ3HK8Pr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BAjhLXlD.js";import"./Table-CcECbzZu.js";import"./index-GeJSxn-b.js";import"./Dialog-C7slmPym.js";import"./cross-B-SWIjS0.js";import"./svgIconContainer-B9myFr8z.js";import"./useBaseUiId-B7vHmMIX.js";import"./InternalBackdrop-CDjt8EEZ.js";import"./composite-D3ANHq5C.js";import"./index-BjXCP1BI.js";import"./index-C2YCUhpZ.js";import"./index-2ug0u_LS.js";import"./useEventCallback-ajaCVaB8.js";import"./SkeletonBar-CAeyHB0y.js";import"./LoadingCell-D3HWPBCC.js";import"./ColumnConfigDialog-Ba_XCAXP.js";import"./DraggableList-DIfW0b4S.js";import"./search-CFo5JCpY.js";import"./Input-BVLD4pm0.js";import"./useControlled-Bb2LNbVb.js";import"./Button-DJIgkoJK.js";import"./small-cross-BD-mjh3z.js";import"./ActionButton-fOJ3EwAB.js";import"./Checkbox-bKsOVh7f.js";import"./useValueChanged-ByyRkrNk.js";import"./CollapsiblePanel-D_tXI55U.js";import"./MultiColumnSortDialog-CivCxfQ-.js";import"./MenuTrigger-CTHzCvWg.js";import"./CompositeItem-hs5t7L4r.js";import"./ToolbarRootContext-CfxpKT0G.js";import"./getDisabledMountTransitionStyles-CooKzbU3.js";import"./getPseudoElementBounds-BQakqMd3.js";import"./chevron-down-egnrEsvE.js";import"./index-3jm-2kpZ.js";import"./error-odhwE47h.js";import"./BaseCbacBanner-BLVhN8ZM.js";import"./makeExternalStore-XQeLMI6O.js";import"./Tooltip-BhGdix3S.js";import"./isObject-Ebfvx2IJ.js";import"./debounce-DR7aSozX.js";import"./useOsdkClient-Bm-QDIWM.js";import"./tick-ChgibA9T.js";import"./DropdownField-D1QY-U9Y.js";import"./isEqual-C80WN2k0.js";import"./_baseIsEqual-3sETV58K.js";import"./withOsdkMetrics-BIKp0vOQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

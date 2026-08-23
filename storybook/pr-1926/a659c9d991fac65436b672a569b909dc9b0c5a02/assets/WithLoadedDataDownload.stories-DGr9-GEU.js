import{f as b,j as a,r as i}from"./iframe-Dyt2g367.js";import{O as u}from"./object-table-BGrb6iBk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Iy-_aWsL.js";import"./Table-Dbyfkzfz.js";import"./index-CVbuIiNF.js";import"./Dialog-Dd_kDCnz.js";import"./cross-BGMDayEl.js";import"./svgIconContainer-CQnuEYht.js";import"./useBaseUiId-CNdrP4cM.js";import"./InternalBackdrop-D_O2FDbV.js";import"./composite-CioN3i6x.js";import"./index-C3uS1quW.js";import"./index-DX_nn_2Y.js";import"./index-CQBiAgvJ.js";import"./useEventCallback-B4DeWEdX.js";import"./SkeletonBar-COKv4C1t.js";import"./LoadingCell-D4jVSLP5.js";import"./ColumnConfigDialog-DPusEu3Q.js";import"./DraggableList-CDKAtbXG.js";import"./search-Dlesc_Bn.js";import"./Input-EjY_nd8e.js";import"./useControlled-B5GqLh5A.js";import"./Button-RkRB1WVt.js";import"./small-cross-F18Oi3GF.js";import"./ActionButton-B8gmucK7.js";import"./Checkbox-BEe2g6L-.js";import"./useValueChanged-CTa1gX9Z.js";import"./CollapsiblePanel-D1P_utse.js";import"./MultiColumnSortDialog-C1sdqr4R.js";import"./MenuTrigger-vstZFNDR.js";import"./CompositeItem-GHEjzrAu.js";import"./ToolbarRootContext-DbHSAu67.js";import"./getDisabledMountTransitionStyles-BFGyiY2l.js";import"./getPseudoElementBounds-B26mWoJW.js";import"./chevron-down-CoqmzOf8.js";import"./index-FIX-qPnt.js";import"./error-CoUpGJie.js";import"./BaseCbacBanner-EauHrW6a.js";import"./makeExternalStore-CoWyK-bl.js";import"./Tooltip-BqdBfPty.js";import"./PopoverPopup-DTLPFEsG.js";import"./debounce-CcTcFdOE.js";import"./useOsdkClient-BnH7y6EI.js";import"./tick-_Azp_NBs.js";import"./DropdownField-CGjuW6yJ.js";import"./isEqual-qXkbevHO.js";import"./withOsdkMetrics-C7K3xDQn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};

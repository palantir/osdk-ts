import{f as b,j as a,r as i}from"./iframe-D4PY-PnJ.js";import{O as u}from"./object-table-DpmToVs7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-01voB3Td.js";import"./Table-B3vWMM1P.js";import"./index-C3ze-A25.js";import"./Dialog-Zgls7Bxd.js";import"./cross-BCNCJ4zW.js";import"./svgIconContainer-BBFbqrO9.js";import"./useBaseUiId-CT5Nuzm7.js";import"./InternalBackdrop-1vKt8Vay.js";import"./composite-BW0oHWLe.js";import"./index-BmSitOna.js";import"./index-OJ7CE0nE.js";import"./index-WAJmZC5y.js";import"./useEventCallback-FrdIwkmw.js";import"./SkeletonBar-DdkRgmzO.js";import"./LoadingCell-DdSLSeFs.js";import"./ColumnConfigDialog-BBmjh2p4.js";import"./DraggableList-D8Qf2YDv.js";import"./search-DhGWTixT.js";import"./Input-DpVdAlwI.js";import"./useControlled-B0YZSF-a.js";import"./isEqual-xzqRc28g.js";import"./isObject-CWtFi4BZ.js";import"./Button-CRplF3wT.js";import"./ActionButton-BeCuIR_r.js";import"./Checkbox-C_rAo4wk.js";import"./useValueChanged-Csp7SvyO.js";import"./CollapsiblePanel-B5lJeWgz.js";import"./MultiColumnSortDialog-DQiVtXjC.js";import"./MenuTrigger-DW0TOV8C.js";import"./CompositeItem-C6S-nciI.js";import"./ToolbarRootContext-Dopp7FRe.js";import"./getDisabledMountTransitionStyles-v9LzkhPA.js";import"./getPseudoElementBounds-Cwc8lUx9.js";import"./chevron-down-D22F0u6Z.js";import"./index-1VGocKKR.js";import"./error-CsEWfIK9.js";import"./BaseCbacBanner-C4bkZKIf.js";import"./makeExternalStore-D4y_vvzd.js";import"./Tooltip-CkDFs6wN.js";import"./PopoverPopup-D3jFDXDL.js";import"./toNumber-1gZb9On-.js";import"./useOsdkClient-D1yJRK_G.js";import"./chevron-right-Cvh61v0W.js";import"./tick-BshIKwLK.js";import"./DropdownField-4Ot8i-6P.js";import"./withOsdkMetrics-CAIkKNTM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

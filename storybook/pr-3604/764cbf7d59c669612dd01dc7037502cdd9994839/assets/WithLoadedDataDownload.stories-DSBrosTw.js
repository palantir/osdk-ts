import{f as b,j as a,r as i}from"./iframe-CKp2GoGt.js";import{O as u}from"./object-table-Du6lkmxE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dwl_2zgn.js";import"./Table-3kaBvTKD.js";import"./index-CV5CMoJy.js";import"./Dialog-D8lqGQIC.js";import"./cross-D_J0Mx2k.js";import"./svgIconContainer-DpbAUHon.js";import"./useBaseUiId-PRbwLdOI.js";import"./InternalBackdrop-C8mEeC4M.js";import"./composite-DgO7Vm35.js";import"./index-DTnX0xVA.js";import"./index-D2il3bQJ.js";import"./index-DaqSnlCi.js";import"./useEventCallback-qi2FYpx0.js";import"./SkeletonBar-CcfQpdnF.js";import"./LoadingCell-HjECyVI8.js";import"./ColumnConfigDialog-DYtSsqIw.js";import"./DraggableList-B4b2GDU_.js";import"./search-DKMjaczW.js";import"./Input-DbTAg51B.js";import"./useControlled-BSjj1z3Z.js";import"./Button-DP3U52Zi.js";import"./small-cross-DZYL8ayJ.js";import"./ActionButton-Ded8nVsd.js";import"./Checkbox-CPm0vsZ_.js";import"./minus-BSnLNkUK.js";import"./tick-C261Gi14.js";import"./useValueChanged-DyeglUlD.js";import"./caret-down-B7HaT8DB.js";import"./CollapsiblePanel-Dnuno03i.js";import"./MultiColumnSortDialog-BkQA2Fmy.js";import"./MenuTrigger-D0kS97P2.js";import"./CompositeItem-BnJJ7eGh.js";import"./ToolbarRootContext-XlMRMSy8.js";import"./getDisabledMountTransitionStyles-BEUnbtJM.js";import"./getPseudoElementBounds-BO_DQhPo.js";import"./chevron-down-BtuHRN8u.js";import"./index-C2jZMrzZ.js";import"./error--DHYcfLX.js";import"./BaseCbacBanner-ZKOEq8Co.js";import"./makeExternalStore-DrdX9QDb.js";import"./Tooltip-CaLvVQqG.js";import"./PopoverPopup-DSBAV4Z3.js";import"./toNumber-DMcK6Iqq.js";import"./useOsdkClient-q25EN3zw.js";import"./DropdownField-BM0exSwW.js";import"./withOsdkMetrics-MWJghJCZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

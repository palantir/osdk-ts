import{f as b,j as a,r as i}from"./iframe-DPgxuER0.js";import{O as u}from"./object-table-D3sB9QpA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DAyr6J_f.js";import"./index-CzdpyvEq.js";import"./Dialog-C1KlA-1s.js";import"./cross-BwNaZ3E7.js";import"./svgIconContainer-DIzi4zOb.js";import"./useBaseUiId-Cm7I4H2e.js";import"./InternalBackdrop-C72lhBZT.js";import"./composite-Clt5qWfu.js";import"./index-utaNrd3G.js";import"./index-d7FyALzm.js";import"./index-Dts6GXIP.js";import"./useEventCallback-D98isyqV.js";import"./SkeletonBar-B2m1EgLv.js";import"./LoadingCell-CnWxfi5A.js";import"./ColumnConfigDialog-BAZsmC_M.js";import"./DraggableList-C_lBLUKl.js";import"./search-W4SNOJCm.js";import"./Input-Fe8hZ5NZ.js";import"./useControlled-s_RTodc2.js";import"./isEqual-DoQQjuOl.js";import"./isObject-Dq8xI3s2.js";import"./Button-DEiS8xLS.js";import"./ActionButton-COP86DSV.js";import"./Checkbox-D-KHLlw8.js";import"./useValueChanged-C_uOfymM.js";import"./CollapsiblePanel-Clh-Wdun.js";import"./MultiColumnSortDialog-C23dTAi7.js";import"./MenuTrigger-BHeEl1rC.js";import"./CompositeItem-BfVRyH-B.js";import"./ToolbarRootContext-oAgSrQkI.js";import"./getDisabledMountTransitionStyles-CWoMtXqz.js";import"./getPseudoElementBounds-CbsUepuL.js";import"./chevron-down-4z7FVQbP.js";import"./index-SQJSmql8.js";import"./error-rSfsp2Ux.js";import"./BaseCbacBanner-B2HUdfWo.js";import"./makeExternalStore-DacpQJm5.js";import"./Tooltip-Bq5nKCAb.js";import"./PopoverPopup-BAZGmEaM.js";import"./toNumber-BF7RP0YD.js";import"./useOsdkClient-B39lSgeE.js";import"./tick-DQOEJ2sU.js";import"./DropdownField-DKkpZC4E.js";import"./withOsdkMetrics-C_HRjZ2a.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

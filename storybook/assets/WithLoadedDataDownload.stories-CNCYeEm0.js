import{f as b,j as a,r as i}from"./iframe-Bf-sHAx5.js";import{O as u}from"./object-table-BQDJTwBe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-COGtrc4V.js";import"./index-CPYufUPv.js";import"./Dialog-CeMT2chU.js";import"./cross-CKUL4fQQ.js";import"./svgIconContainer-D94XRhPf.js";import"./useBaseUiId-BtnOSHgT.js";import"./InternalBackdrop-D9EVtWlk.js";import"./composite-BJBTp0LG.js";import"./index-CBOjLJdB.js";import"./index-CjByY2wF.js";import"./index-DDM5LG3P.js";import"./useEventCallback-BxzNz2NZ.js";import"./SkeletonBar-Dy6B_GXk.js";import"./LoadingCell-6QkdVwqD.js";import"./ColumnConfigDialog-B1B_1mQC.js";import"./DraggableList-6ZRbY_ME.js";import"./search-C6C64LDd.js";import"./Input-ggDyi7pA.js";import"./useControlled-Dgh6Ve4V.js";import"./Button-CjmRQsvR.js";import"./small-cross-Da-5WtOj.js";import"./ActionButton-BvM2V58M.js";import"./Checkbox-CEXgNBQM.js";import"./minus-B1jkT18P.js";import"./tick-yF22DCqx.js";import"./useValueChanged-Btvy0N1B.js";import"./caret-down-Bruc2G-l.js";import"./CollapsiblePanel-DXwBkIWE.js";import"./MultiColumnSortDialog-DY5PqCng.js";import"./MenuTrigger-BRWelcJD.js";import"./CompositeItem-go0BGcIT.js";import"./ToolbarRootContext-CUq4CBDE.js";import"./getDisabledMountTransitionStyles-jl5SsFvN.js";import"./getPseudoElementBounds-Dr8kB9Qn.js";import"./chevron-down-B7JXcLji.js";import"./index-DMzYbXTE.js";import"./error-Dce34fJA.js";import"./BaseCbacBanner-DMwuaCZx.js";import"./makeExternalStore-DeFTrL_D.js";import"./Tooltip-HaGk1c6U.js";import"./PopoverPopup-DD6okCen.js";import"./toNumber-CmFFoWfC.js";import"./useOsdkClient-Bihn-JDs.js";import"./DropdownField-6mJvcjo1.js";import"./withOsdkMetrics-CoqdMLh8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Bt1FGd4n.js";import{O as u}from"./object-table-DNU4U8Ka.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cd7qpJNf.js";import"./Table-CG1yY8rs.js";import"./index-BXmA99LJ.js";import"./Dialog-CkxdnDGI.js";import"./cross-Bl27BioQ.js";import"./svgIconContainer-1fMK_YRK.js";import"./useBaseUiId-Bed1A4wB.js";import"./InternalBackdrop-B7nAbuk0.js";import"./composite-Cx4iv6Gt.js";import"./index-NS9ffVkI.js";import"./index-Bi1CFq0b.js";import"./index-D9wVJJcV.js";import"./useEventCallback-B-waF5GG.js";import"./SkeletonBar-CnnprsXQ.js";import"./LoadingCell-Bcquh96j.js";import"./ColumnConfigDialog-DkYdYjdA.js";import"./DraggableList-CpBgYx91.js";import"./search-D6bVIcXN.js";import"./Input-CliK5hox.js";import"./useControlled-QExZAE6j.js";import"./Button-CnTnjrCD.js";import"./small-cross-B1dYyJkX.js";import"./ActionButton-FGBpyMym.js";import"./Checkbox-BNCSdJhL.js";import"./minus-DESlwISC.js";import"./tick-DMUntjWR.js";import"./useValueChanged-BfQlHgTL.js";import"./caret-down-COnNs73M.js";import"./CollapsiblePanel-C3RPSpHX.js";import"./MultiColumnSortDialog-MfEacKWM.js";import"./MenuTrigger-DfpeJOH4.js";import"./CompositeItem-DMxksI1g.js";import"./ToolbarRootContext-B-p9i1Nh.js";import"./getDisabledMountTransitionStyles-ClXWCS35.js";import"./getPseudoElementBounds-CvUGwBg2.js";import"./chevron-down-DA01aDAQ.js";import"./index-DnJdMzCw.js";import"./error-BCHDrnez.js";import"./BaseCbacBanner-Di5tcb09.js";import"./makeExternalStore-BDxrD6i4.js";import"./Tooltip-GeZZ93Qd.js";import"./PopoverPopup-DkggI-C3.js";import"./toNumber-Q1DzrIR1.js";import"./useOsdkClient-DKPhiPp3.js";import"./DropdownField-DjaXVsoW.js";import"./withOsdkMetrics-DYvQ4eTM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

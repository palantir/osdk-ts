import{f as b,j as a,r as i}from"./iframe-femnAnxu.js";import{O as u}from"./object-table-B4MfP3Tv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C-WXOK-U.js";import"./Table-IuHa1v7L.js";import"./index-Cbme1k2a.js";import"./Dialog-Dd-NugnF.js";import"./cross-UuwGvC_0.js";import"./svgIconContainer-DSUHrivN.js";import"./useBaseUiId-eii0WrfQ.js";import"./InternalBackdrop-BJeGqboe.js";import"./composite-Cm2mN-z1.js";import"./index-HUXPEUsO.js";import"./index-B82ftcNm.js";import"./index-BYcFbpGF.js";import"./useEventCallback-U2TwTlHx.js";import"./SkeletonBar-BdDuCFyj.js";import"./LoadingCell-DzvxGGnK.js";import"./ColumnConfigDialog-3wnHLJvl.js";import"./DraggableList-BAwHe8QN.js";import"./Input-lyinRyk6.js";import"./useControlled-GpTDQtny.js";import"./Button-DIcTOjx3.js";import"./small-cross-BaCUAzuP.js";import"./ActionButton-Ckj54VEE.js";import"./Checkbox-B4g1auEb.js";import"./minus-DIqAZ34C.js";import"./useValueChanged-6omolaRx.js";import"./caret-down-B9bewQFP.js";import"./CollapsiblePanel-DXUTLupk.js";import"./MultiColumnSortDialog-CFT0bZf5.js";import"./MenuTrigger-DdD_PxWz.js";import"./CompositeItem-BOw0SOmd.js";import"./ToolbarRootContext-BittqsQ9.js";import"./getDisabledMountTransitionStyles-DKIyk-rV.js";import"./getPseudoElementBounds-CiPZBSv9.js";import"./chevron-down-CBGhBZTh.js";import"./index-XzfaPc1h.js";import"./error-DjNZj1nA.js";import"./BaseCbacBanner-rksPT1-N.js";import"./makeExternalStore-Bh4QKTzj.js";import"./Tooltip-ZSC2nIZp.js";import"./PopoverPopup-CpoqDnQC.js";import"./toNumber-Bmy4PuFG.js";import"./useOsdkClient-BitMUCPS.js";import"./DropdownField-cnrIFtqY.js";import"./withOsdkMetrics-eqpNk8P2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

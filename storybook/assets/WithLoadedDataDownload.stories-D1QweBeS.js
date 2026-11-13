import{f as b,j as a,r as i}from"./iframe-DAHj67mi.js";import{O as u}from"./object-table-CF1_mpNc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C5TxACGe.js";import"./index-jtr0hjnV.js";import"./Dialog-DLC6pff3.js";import"./cross-BvmJ2kUU.js";import"./svgIconContainer-R6fLsDAI.js";import"./useBaseUiId-C8n2JbgI.js";import"./InternalBackdrop-BZgwOFWU.js";import"./composite-BjTY1dgM.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./index-BoBv6Oh5.js";import"./useEventCallback-B1gHHm4j.js";import"./SkeletonBar-DhFCtk-U.js";import"./LoadingCell-B2AiaHPg.js";import"./ColumnConfigDialog-BJ25K1mH.js";import"./DraggableList-MixG4jS2.js";import"./search-DlMMVas5.js";import"./Input-BqNeXUfN.js";import"./useControlled-wTpIHr1L.js";import"./Button-D3ukGqLV.js";import"./small-cross-DGpFJ7WA.js";import"./ActionButton-bdH5SZoM.js";import"./Checkbox-Cc1-PZPa.js";import"./useValueChanged-K_Rdj1zl.js";import"./CollapsiblePanel-rgTr9UFW.js";import"./MultiColumnSortDialog-DocotWMb.js";import"./MenuTrigger-Bc_s6vOl.js";import"./CompositeItem-ylUTChcd.js";import"./ToolbarRootContext-D0N5miEu.js";import"./getDisabledMountTransitionStyles-DLcvNa0d.js";import"./getPseudoElementBounds-DVEYMREJ.js";import"./chevron-down-CDzCov52.js";import"./index-B0icYv8E.js";import"./error-kGSlj1sb.js";import"./BaseCbacBanner-Dn4fA3fP.js";import"./makeExternalStore-CclpbdPf.js";import"./Tooltip-DigvRnDG.js";import"./PopoverPopup-UX8-cCYh.js";import"./Select-D2Soavwn.js";import"./useOsdkClient-DSpnlmuA.js";import"./tick-tJ7_3KbK.js";import"./DropdownField-FJYu2uWa.js";import"./useDebouncedCallback-C7UP5udY.js";import"./isEqual-B_3QYyrr.js";import"./_baseIsEqual-1hDRXEi_.js";import"./stableSerialize-BlYl1Cik.js";import"./withOsdkMetrics-DRVx42Qf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],Ee={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Se=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Se as __namedExportsOrder,Ee as default};

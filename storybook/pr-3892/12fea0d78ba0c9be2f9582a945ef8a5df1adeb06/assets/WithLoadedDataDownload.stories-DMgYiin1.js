import{f as b,j as a,r as i}from"./iframe-B6vHMBGp.js";import{O as u}from"./object-table-hplHVgdX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cp58PBL8.js";import"./Table-Cbkm2869.js";import"./index-CJzsmVv3.js";import"./Dialog-DO1kXGDu.js";import"./cross-9x5JmZ4A.js";import"./svgIconContainer-wg0Lc9CR.js";import"./useBaseUiId-h3pAp7nr.js";import"./InternalBackdrop-CCFcfiJW.js";import"./composite-DWtkffoP.js";import"./index-CujXwWwq.js";import"./index-i--ASWRG.js";import"./index-CT_nyNsS.js";import"./useEventCallback-B4FnW4FK.js";import"./SkeletonBar-D9zmYxM0.js";import"./LoadingCell-BrDuqTHC.js";import"./ColumnConfigDialog-CTMC6TNx.js";import"./DraggableList-B-bZaqE6.js";import"./search-DfKXJtDr.js";import"./Input-B7KllzPA.js";import"./useControlled-BVsysqHb.js";import"./Button-DGAYYgZ-.js";import"./small-cross-cIP7Vben.js";import"./ActionButton-C1eM3Km_.js";import"./Checkbox-wr-Xfc3W.js";import"./useValueChanged-BjmzSrQM.js";import"./CollapsiblePanel-DyJhoXcY.js";import"./MultiColumnSortDialog-Cx1QNkZS.js";import"./MenuTrigger-D1Xe-7_v.js";import"./CompositeItem-DDQHWJ0b.js";import"./ToolbarRootContext-7AQ420yY.js";import"./getDisabledMountTransitionStyles-sssYHGVb.js";import"./getPseudoElementBounds-Dsjz6vCL.js";import"./chevron-down-6pFsTB_r.js";import"./index-CzbMhBIL.js";import"./error-BqGkptHP.js";import"./BaseCbacBanner-Cc4gB5EG.js";import"./makeExternalStore-Blbdey5m.js";import"./Tooltip-tywS1TT8.js";import"./PopoverPopup-TsRJnCd_.js";import"./debounce-DW_YRCCu.js";import"./useOsdkClient-BpgI32Ud.js";import"./tick-CoPn3U77.js";import"./DropdownField-DpvuVLRh.js";import"./isEqual-BwEsvaE9.js";import"./withOsdkMetrics-CL6kHg8G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

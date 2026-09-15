import{f as b,j as a,r as i}from"./iframe-Ch3dDQ73.js";import{O as u}from"./object-table-BpQCrLuw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dt5E_MQT.js";import"./Table-bPK54u9G.js";import"./index-BPSQkvlq.js";import"./Dialog-Du7U6i8w.js";import"./cross-BwedcRbE.js";import"./svgIconContainer-DsDanRUJ.js";import"./useBaseUiId-BuMyPGEd.js";import"./InternalBackdrop-DnrpHvoH.js";import"./composite-79LVsM0Q.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./index-DvNjnhsf.js";import"./useEventCallback-DzSeWiWA.js";import"./SkeletonBar-DU3E93Ca.js";import"./LoadingCell-CJX5iyhd.js";import"./ColumnConfigDialog-Bk603sCJ.js";import"./DraggableList-DPPyeJcQ.js";import"./search-Dq24XcYb.js";import"./Input-CyFa-sRf.js";import"./useControlled-Uo30Ht4a.js";import"./Button-BdllNL1h.js";import"./small-cross-COqMeQyn.js";import"./ActionButton-Bq5mCozF.js";import"./Checkbox-Dkxayd1k.js";import"./useValueChanged-D8drAKML.js";import"./CollapsiblePanel-C-zvQjZV.js";import"./MultiColumnSortDialog-DdFD_LY1.js";import"./MenuTrigger-BW8bySv0.js";import"./CompositeItem-yRGsM-I0.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./getDisabledMountTransitionStyles-BnreKSZO.js";import"./getPseudoElementBounds-aMC_66Nd.js";import"./chevron-down-DtSbmNQ9.js";import"./index-BVJ9nyHd.js";import"./error-C6gNYlkP.js";import"./BaseCbacBanner-DMvkn6aU.js";import"./makeExternalStore-9OgJXISf.js";import"./Tooltip-BdV_g6Rg.js";import"./PopoverPopup-CDUt_0V_.js";import"./debounce-Bj0CUW6Z.js";import"./useOsdkClient-BEOsOU0g.js";import"./tick-CdmQNoN2.js";import"./DropdownField-BwlReH7s.js";import"./isEqual-D4DZ3_5E.js";import"./withOsdkMetrics-D3LSYI9p.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

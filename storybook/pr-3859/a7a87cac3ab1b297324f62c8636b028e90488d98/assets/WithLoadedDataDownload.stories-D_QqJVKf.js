import{f as b,j as a,r as i}from"./iframe-C-P2XTps.js";import{O as u}from"./object-table-Bq9MDu7_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B2ciRt_1.js";import"./Table-DVwBGtjK.js";import"./index-TAkEmTOr.js";import"./Dialog-CXf6dGMs.js";import"./cross-C-FokI4v.js";import"./svgIconContainer-CrU3EDkF.js";import"./useBaseUiId-CWFhVJhL.js";import"./InternalBackdrop-DN8Fgs_M.js";import"./composite-BK1c30lA.js";import"./index-CpJX8S-W.js";import"./index-DBmKylag.js";import"./index-I0ozREYH.js";import"./useEventCallback-B_mhEv2A.js";import"./SkeletonBar-BYO6lwk8.js";import"./LoadingCell-SjPMbpcz.js";import"./ColumnConfigDialog-EIQNHS4y.js";import"./DraggableList-BEOqV1y4.js";import"./search-l1NECfxN.js";import"./Input-0Zox7t1W.js";import"./useControlled-DNAq-ux-.js";import"./isEqual-CgKCGaj5.js";import"./isObject-Oa6eWQo3.js";import"./Button-BZmN5Brq.js";import"./ActionButton-Csbt1rAg.js";import"./Checkbox-DAv4V2db.js";import"./useValueChanged-WBgfRasG.js";import"./CollapsiblePanel-CwGcW1pA.js";import"./MultiColumnSortDialog-DkFJZRiJ.js";import"./MenuTrigger-XSCB7Qf-.js";import"./CompositeItem-Ej9oQnQL.js";import"./ToolbarRootContext-1n5Nj85T.js";import"./getDisabledMountTransitionStyles-9ubOsA0f.js";import"./getPseudoElementBounds-eIHoREO7.js";import"./chevron-down-Dx0BgYzW.js";import"./index-DTSw3ggz.js";import"./error-ClI8SWaI.js";import"./BaseCbacBanner-BtJRxHFH.js";import"./makeExternalStore-D0f_pEt1.js";import"./Tooltip-DLrh6rvI.js";import"./PopoverPopup-C1mLTGSJ.js";import"./debounce-BYcEFv3c.js";import"./useOsdkClient-C-QBDUEZ.js";import"./tick-BLOKre96.js";import"./DropdownField-CjWAPAN4.js";import"./withOsdkMetrics-DehsSUGO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

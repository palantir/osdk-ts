import{f as b,j as a,r as i}from"./iframe-DXxQjXBv.js";import{O as u}from"./object-table-BW_Sl5wS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3x_8eTM.js";import"./Table-5Pkjf0xl.js";import"./index-DXdDs4lB.js";import"./Dialog-DyrAYHFW.js";import"./cross-DBGO2VVp.js";import"./svgIconContainer-Djvq0Ea-.js";import"./useBaseUiId-sMJwHuF9.js";import"./InternalBackdrop-1veRHWnT.js";import"./composite-DyOcb01D.js";import"./index-D2ThU2H1.js";import"./index-BACG9pJt.js";import"./index-DV-wQImC.js";import"./useEventCallback-ZORB5mtp.js";import"./SkeletonBar-CLPsLqkj.js";import"./LoadingCell-Cqa_kdVU.js";import"./ColumnConfigDialog-B0N3jfw-.js";import"./DraggableList-LqDJEkvM.js";import"./search-AXE8JxuE.js";import"./Input-D27Qregm.js";import"./useControlled-DX08P2U0.js";import"./Button-Ci_FRPTV.js";import"./small-cross-B64sAtfI.js";import"./ActionButton-CBpybzk5.js";import"./Checkbox-CZ7FQT-u.js";import"./useValueChanged-D4gbbrz9.js";import"./CollapsiblePanel-CaZbRFQ9.js";import"./MultiColumnSortDialog-yucVxOpt.js";import"./MenuTrigger-CbMwSs8E.js";import"./CompositeItem-DpkHDNf0.js";import"./ToolbarRootContext-CWTmo3ib.js";import"./getDisabledMountTransitionStyles-4PFD-HSx.js";import"./getPseudoElementBounds-BofrfX0E.js";import"./chevron-down-BbVf5MXz.js";import"./index-WfGPsqa3.js";import"./error-C3iIo7m3.js";import"./BaseCbacBanner-gwObvKD0.js";import"./makeExternalStore-B_fb5bX2.js";import"./Tooltip-Jw2VnCeH.js";import"./PopoverPopup-DPa0Gw29.js";import"./debounce-CLg2jDRW.js";import"./useOsdkClient-B50wCFRC.js";import"./tick-P1YE4zf9.js";import"./DropdownField-HqK3PI3z.js";import"./useDebouncedCallback-Det4gxbH.js";import"./withOsdkMetrics-DszGj25-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

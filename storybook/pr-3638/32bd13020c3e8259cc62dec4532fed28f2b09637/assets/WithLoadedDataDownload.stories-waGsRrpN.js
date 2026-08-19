import{f as b,j as a,r as i}from"./iframe-DMCinZdR.js";import{O as u}from"./object-table-CWBnrHhx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BCg2fv9s.js";import"./Table-LtgmsszG.js";import"./index-Cn1vMB8x.js";import"./Dialog-lkRAWS3Z.js";import"./cross-CcPjSvKf.js";import"./svgIconContainer-De7fNnjX.js";import"./useBaseUiId-BeT3oypJ.js";import"./InternalBackdrop-DdnNDztF.js";import"./composite-yv0I3xy5.js";import"./index-YxjRsNBV.js";import"./index-DvMnSwXX.js";import"./index-Db-Y2AMC.js";import"./useEventCallback-BeOJzBKk.js";import"./SkeletonBar-BkZPaYD6.js";import"./LoadingCell-CIeGigir.js";import"./ColumnConfigDialog-B3u-p7yM.js";import"./DraggableList-B3QVX3Cw.js";import"./search-CjEQMDkw.js";import"./Input-wY3__TYn.js";import"./useControlled-DU_OOF2s.js";import"./Button-DPfft23P.js";import"./small-cross-DvtylMEA.js";import"./ActionButton-CF7SnFNB.js";import"./Checkbox-B0X6lu94.js";import"./useValueChanged-BnW5wBJz.js";import"./CollapsiblePanel-BPN8nR8T.js";import"./MultiColumnSortDialog-Da8rV0Qy.js";import"./MenuTrigger-BWlRwIPv.js";import"./CompositeItem-zAhJ8rlm.js";import"./ToolbarRootContext-Bgke2_pO.js";import"./getDisabledMountTransitionStyles-DkCCt5VQ.js";import"./getPseudoElementBounds-Dwn15gm-.js";import"./chevron-down-Brw6_9zU.js";import"./index-GmGknXw_.js";import"./error-3Qx0C84K.js";import"./BaseCbacBanner-CBoCpMa-.js";import"./makeExternalStore-DypcUv4D.js";import"./Tooltip-CWCf5amX.js";import"./PopoverPopup-DMOv5d-q.js";import"./debounce-D0Ct84sS.js";import"./useOsdkClient-HbedtQt7.js";import"./tick-DVS2p6T6.js";import"./DropdownField-Cspf7eME.js";import"./isEqual-DPMSqT0P.js";import"./withOsdkMetrics-DZCo0Bwa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

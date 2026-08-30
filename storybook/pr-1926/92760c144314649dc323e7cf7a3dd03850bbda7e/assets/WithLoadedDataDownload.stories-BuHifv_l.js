import{f as b,j as a,r as i}from"./iframe-KleQ2Wf3.js";import{O as u}from"./object-table-Bx8oOL2G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-7Uf-e0eF.js";import"./Table-hcn36HGs.js";import"./index-BJGsi2ln.js";import"./Dialog-Dp-GkQmB.js";import"./cross-dN9-xF_6.js";import"./svgIconContainer-BRTcYuz-.js";import"./useBaseUiId-au1tBZKr.js";import"./InternalBackdrop-CxSD8Cp2.js";import"./composite-DXCTc0LD.js";import"./index-CqzN1gLv.js";import"./index-5raUfGTA.js";import"./index-5W9kt8-3.js";import"./useEventCallback-DCx7Asvu.js";import"./SkeletonBar-BP_ZKoCI.js";import"./LoadingCell-BXlsInkE.js";import"./ColumnConfigDialog-DmRYufux.js";import"./DraggableList-Cfdg10M-.js";import"./search-DGONQjtR.js";import"./Input-DYtYd9SI.js";import"./useControlled-C5WbbxG6.js";import"./Button-HfVvjBaX.js";import"./small-cross-DUBOsE9B.js";import"./ActionButton-CqPXhUsj.js";import"./Checkbox-bJToUmmm.js";import"./useValueChanged-BgChR_tQ.js";import"./CollapsiblePanel-knqe2lyk.js";import"./MultiColumnSortDialog-CiEpuWMX.js";import"./MenuTrigger-BoSDKcem.js";import"./CompositeItem-CQkoTI-y.js";import"./ToolbarRootContext-o5mBsyGt.js";import"./getDisabledMountTransitionStyles-BGkmtecQ.js";import"./getPseudoElementBounds-CHfh_GUi.js";import"./chevron-down-jigIVwbX.js";import"./index-C028rklK.js";import"./error-C4IozNy9.js";import"./BaseCbacBanner-BRyFvx0Z.js";import"./makeExternalStore-CdYrFgJd.js";import"./Tooltip-D9lRyGCh.js";import"./PopoverPopup-Bt84O_KM.js";import"./debounce-CQ4liA-9.js";import"./useOsdkClient-CRK30zOr.js";import"./tick-DywDZCoT.js";import"./DropdownField-gq5cNdSx.js";import"./isEqual-DZH5xjV7.js";import"./withOsdkMetrics-_1QqcoW6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

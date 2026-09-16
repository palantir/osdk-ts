import{f as b,j as a,r as i}from"./iframe-EpH4H8Ct.js";import{O as u}from"./object-table-DWYlyXh4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-AInD9Bcq.js";import"./Table-COuN_wlR.js";import"./index-6wkuS9kk.js";import"./Dialog-1NHwSkrj.js";import"./cross-Bw1kg8R1.js";import"./svgIconContainer-BEULmRQq.js";import"./useBaseUiId-B53jZkpD.js";import"./InternalBackdrop-BVHPaONx.js";import"./composite-CXo_dnRM.js";import"./index-Dy-Nc8BB.js";import"./index-5GEbdtwp.js";import"./index-BQgIKsZn.js";import"./useEventCallback-DNP1HUKE.js";import"./SkeletonBar-Cwoxu6yL.js";import"./LoadingCell-CfUzZulW.js";import"./ColumnConfigDialog-CyRYuEAz.js";import"./DraggableList-CXgZh0ko.js";import"./search-Bdehc4Bq.js";import"./Input-DNhi3I7C.js";import"./useControlled-D6NLbg_O.js";import"./Button-BXHz7yPF.js";import"./small-cross--Yq5_IWh.js";import"./ActionButton-BG7PpZze.js";import"./Checkbox-N8sASeun.js";import"./useValueChanged-CdM5uEF8.js";import"./CollapsiblePanel-lqnKFpJk.js";import"./MultiColumnSortDialog-DLqVf03q.js";import"./MenuTrigger-CX9dMlco.js";import"./CompositeItem-DzD_vpNX.js";import"./ToolbarRootContext-BhZagEjX.js";import"./getDisabledMountTransitionStyles-Vp1URACM.js";import"./getPseudoElementBounds-C0OS-1z6.js";import"./chevron-down-B3Hf5n4h.js";import"./index-Dva8VjAa.js";import"./error-CwB_EWnJ.js";import"./BaseCbacBanner-CPNKIQw_.js";import"./makeExternalStore-BOo8e2Do.js";import"./Tooltip-DZvrsB4L.js";import"./PopoverPopup-AU4um7RM.js";import"./debounce-PtscUFWK.js";import"./useOsdkClient-Df-lYPH1.js";import"./tick-BpAUUczH.js";import"./DropdownField-DQrZT-V6.js";import"./isEqual-DQIzKkQH.js";import"./withOsdkMetrics-Cj7SQvcU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

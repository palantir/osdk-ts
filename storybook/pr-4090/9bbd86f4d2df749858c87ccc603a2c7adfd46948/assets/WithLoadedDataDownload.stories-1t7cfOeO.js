import{f as b,j as a,r as i}from"./iframe-BcZul-5h.js";import{O as u}from"./object-table-Dzwk_2Gi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CmDzzbHA.js";import"./Table-B1bcSvHC.js";import"./index-DzJXuXA1.js";import"./Dialog-Dj7pNKUw.js";import"./cross-C_wTApPn.js";import"./svgIconContainer-RYnvKxQV.js";import"./useBaseUiId-BR4pV0Lr.js";import"./InternalBackdrop-C0gIi10e.js";import"./composite-C_4CRh4u.js";import"./index-CWco2ihj.js";import"./index-pZeQx-_G.js";import"./index-Dfw9WA6q.js";import"./useEventCallback-DFzPAd8H.js";import"./SkeletonBar-DggSgXIE.js";import"./LoadingCell-DCt4Pvwc.js";import"./ColumnConfigDialog-D_snSl5m.js";import"./DraggableList-B4ziAGpQ.js";import"./search-Bzu1qjP_.js";import"./Input--zoqJ2tF.js";import"./useControlled-eXBZEo_R.js";import"./Button-soVXPdsa.js";import"./small-cross-BBM4HGVx.js";import"./ActionButton-Kn6WAFbI.js";import"./Checkbox-CBlNrCa1.js";import"./useValueChanged-DndjiTPh.js";import"./CollapsiblePanel-CpZxtz3Z.js";import"./MultiColumnSortDialog-B01vzk6O.js";import"./MenuTrigger-DTrLq3FS.js";import"./CompositeItem-DOpNxc2s.js";import"./ToolbarRootContext-BozYkP2N.js";import"./getDisabledMountTransitionStyles-DGAUIi0f.js";import"./getPseudoElementBounds-BxdRzYrq.js";import"./chevron-down-BTve9A2e.js";import"./index-C_ypGm3c.js";import"./error-BtC0qV1A.js";import"./BaseCbacBanner-eu0_CWGy.js";import"./makeExternalStore-BaDKsdYc.js";import"./Tooltip-8yNzGMPy.js";import"./PopoverPopup-DLNnlymE.js";import"./debounce-DtvbDRTR.js";import"./useOsdkClient-tWgMlPel.js";import"./tick-D_V44cYu.js";import"./DropdownField-DSLZwGzV.js";import"./isEqual-CAB2zIeK.js";import"./withOsdkMetrics-C8vp2Jz9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BDrYxAnj.js";import{O as u}from"./object-table-BBe01rOp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BbEpp3I7.js";import"./Table-D-vzxeIM.js";import"./index-BPEebEts.js";import"./Dialog-DPBerO6L.js";import"./cross-DN7w6x3L.js";import"./svgIconContainer-Ds5xgQa8.js";import"./useBaseUiId-CAXuqLAY.js";import"./InternalBackdrop-DWYHvnmi.js";import"./composite-DYyfkGU2.js";import"./index-BrKxc1O3.js";import"./index-7qmIIDvp.js";import"./index-CGlFVnJg.js";import"./useEventCallback-dV43fwqZ.js";import"./SkeletonBar-3MDKkZoz.js";import"./LoadingCell-CwbuJPcu.js";import"./ColumnConfigDialog-BTONJoiK.js";import"./DraggableList-CmS4ByL1.js";import"./search-bZxTGR19.js";import"./Input-C01z3l8s.js";import"./useControlled-BxTCkN_B.js";import"./Button-BXNKdTW4.js";import"./small-cross-BCuonOce.js";import"./ActionButton-Dt_BEibG.js";import"./Checkbox-Gd7yqC4V.js";import"./useValueChanged-BIKs48bW.js";import"./CollapsiblePanel-CSDsM7aL.js";import"./MultiColumnSortDialog-qJwWzLXC.js";import"./MenuTrigger-CWq-RERI.js";import"./CompositeItem-Bmk8s39S.js";import"./ToolbarRootContext-GKsQXXvO.js";import"./getDisabledMountTransitionStyles-CpLEVLsZ.js";import"./getPseudoElementBounds-BKXXIJ8q.js";import"./chevron-down-DSLDVHXx.js";import"./index-5OHDQhQD.js";import"./error-Bic94l6Q.js";import"./BaseCbacBanner-DIZLSVF8.js";import"./makeExternalStore-BknbLg4s.js";import"./Tooltip-F1ZDXICZ.js";import"./PopoverPopup-Du5q3SlO.js";import"./debounce-BunXjI-p.js";import"./useOsdkClient-BlyxCpjB.js";import"./tick-BobOfkxj.js";import"./DropdownField-c9rafbuP.js";import"./isEqual-DhVMvS_4.js";import"./withOsdkMetrics-O05I0Pm6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Du3uM15W.js";import{O as u}from"./object-table-QcHHovjj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CklvEmIK.js";import"./Table-C0iNIutE.js";import"./index-Dy-Ae7RB.js";import"./Dialog-BC6a3Zrf.js";import"./cross-BWq8BmPL.js";import"./svgIconContainer-CLb4tBtk.js";import"./useBaseUiId-BWcyG7Ta.js";import"./InternalBackdrop-CXcRFscB.js";import"./composite-Cnhi7YUj.js";import"./index-BQnFFWmV.js";import"./index-DB_385io.js";import"./index-CwvyzZQ-.js";import"./useEventCallback-yZhMlxgT.js";import"./SkeletonBar-D8Wt8gtk.js";import"./LoadingCell-hwYG_z20.js";import"./ColumnConfigDialog-Ci4MbzhT.js";import"./DraggableList-eu3m2ctc.js";import"./Input-DYidzq6i.js";import"./useControlled-CAedJelb.js";import"./Button-C-guVMtj.js";import"./small-cross-CufBPfRi.js";import"./ActionButton-J1yxKUle.js";import"./Checkbox-GQzVHDUM.js";import"./minus-CHx7f04S.js";import"./useValueChanged-DuxxxZQB.js";import"./caret-down-sJOmqaWY.js";import"./CollapsiblePanel-BgmAtPsb.js";import"./MultiColumnSortDialog-fx3ztKua.js";import"./MenuTrigger-DqnBh5ts.js";import"./CompositeItem-sdkMkBWm.js";import"./ToolbarRootContext-D9ltIK0F.js";import"./getDisabledMountTransitionStyles-fmtNbB5U.js";import"./getPseudoElementBounds-Bn36j3X1.js";import"./chevron-down-DNZXBIAg.js";import"./index-Hw5Lk4kT.js";import"./error-BflolPu3.js";import"./BaseCbacBanner--nWvMsbx.js";import"./makeExternalStore-D3QNHW0n.js";import"./Tooltip-BFAbQqMK.js";import"./PopoverPopup-xMh4lLSp.js";import"./toNumber-Bsc7HPi9.js";import"./useOsdkClient-DSidVlSv.js";import"./DropdownField-Cgo7cZAE.js";import"./withOsdkMetrics-DvZnKl1V.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

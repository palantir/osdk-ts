import{f as b,j as a,r as i}from"./iframe-DuF9ULT7.js";import{O as u}from"./object-table-BfPXsznY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-kD_tsguj.js";import"./Table-Ck3oDQZz.js";import"./index-muXsy8in.js";import"./Dialog-C4PvVf4N.js";import"./cross-CWdW2uUC.js";import"./svgIconContainer-Cg0DvcJX.js";import"./useBaseUiId-toBz8Uh9.js";import"./InternalBackdrop-DAn5w1fs.js";import"./composite-B1SRd4gq.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./index-D5Uc12e6.js";import"./useEventCallback-CNUkj118.js";import"./SkeletonBar-CgHloKeI.js";import"./LoadingCell-D_nqtry4.js";import"./ColumnConfigDialog-B_SLMB2N.js";import"./DraggableList-Bi7JcdoK.js";import"./search-BijdxR6R.js";import"./Input-Cz82mbXb.js";import"./useControlled-DjU5snnM.js";import"./Button-BZjuNt0h.js";import"./small-cross-DUrm4kRJ.js";import"./ActionButton-CX87U3oR.js";import"./Checkbox-Dai2y2mJ.js";import"./useValueChanged-Cn14tmvW.js";import"./CollapsiblePanel-DBem6MQm.js";import"./MultiColumnSortDialog-D2TaUp4Q.js";import"./MenuTrigger-l9somBBq.js";import"./CompositeItem-lLhT8JrE.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./getDisabledMountTransitionStyles-BJaQXL8u.js";import"./getPseudoElementBounds-BUh7K_dy.js";import"./chevron-down-CaPJ8T2H.js";import"./index-B-a6xU5p.js";import"./error-BLlGlY0w.js";import"./BaseCbacBanner-BrhvEN2m.js";import"./makeExternalStore-BjN8YBiO.js";import"./Tooltip-BNXMXQEy.js";import"./PopoverPopup-mneHcQVw.js";import"./debounce-CrZBwGro.js";import"./useOsdkClient-BSXkMVIu.js";import"./tick-D563aBAq.js";import"./DropdownField-BF8fdmfG.js";import"./isEqual-Bfv2CuL1.js";import"./withOsdkMetrics-BCYo5O_x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

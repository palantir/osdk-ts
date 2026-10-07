import{f as b,j as a,r as i}from"./iframe-DaskLrq8.js";import{O as u}from"./object-table-MAm4yMsf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BVj_xxLy.js";import"./Table-BvP-To-m.js";import"./index-Bqih82xZ.js";import"./Dialog-CtpINbQM.js";import"./cross-B-0FObLb.js";import"./svgIconContainer-tkjo1pD1.js";import"./useBaseUiId-DMXF2oMu.js";import"./InternalBackdrop-B9JHXWHe.js";import"./composite-BYKbQoC1.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./index-D-OWq9M9.js";import"./useEventCallback-CByJ231d.js";import"./SkeletonBar-hMNf9COI.js";import"./LoadingCell-T_mZ2Fqp.js";import"./ColumnConfigDialog-DLMtz1B4.js";import"./DraggableList-BmtoqCPs.js";import"./search-25BjkPAP.js";import"./Input-DB2lb1xd.js";import"./useControlled-CYCM7Lap.js";import"./Button-BrqzKE8K.js";import"./small-cross-C_TPDXPW.js";import"./ActionButton-BtmJUWQ1.js";import"./Checkbox-BgbRBQ_v.js";import"./useValueChanged-C2EMO01l.js";import"./CollapsiblePanel-BAg1IJpg.js";import"./MultiColumnSortDialog-keYjcxBX.js";import"./MenuTrigger-CoiImOBe.js";import"./CompositeItem-BVBCC1HX.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./getDisabledMountTransitionStyles-Dofl4-A2.js";import"./getPseudoElementBounds-CAy3MVIr.js";import"./chevron-down-CjfhpjkO.js";import"./index-DmvVgxHl.js";import"./error-5sU13yE2.js";import"./BaseCbacBanner-DfyARB2D.js";import"./makeExternalStore-CIn7ze2w.js";import"./Tooltip-TPcB9Skk.js";import"./PopoverPopup-DJm9oZWc.js";import"./debounce-CTR7NOXB.js";import"./useOsdkClient-ijg_QbI1.js";import"./tick-BkVL6nis.js";import"./DropdownField-DABHoDU6.js";import"./isEqual-CvlwB9Oh.js";import"./withOsdkMetrics-CjFNfKow.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

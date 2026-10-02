import{f as b,j as a,r as i}from"./iframe-DpUFwGwm.js";import{O as u}from"./object-table-CSsf7wx7.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D7G3iNMY.js";import"./Table-nlH2SQUj.js";import"./index-BRNwf_dL.js";import"./Dialog-aU2zLBm5.js";import"./cross-BOdVaiDd.js";import"./svgIconContainer-DnMlbACY.js";import"./useBaseUiId-BCiTIIVN.js";import"./InternalBackdrop-CcB5ZdVo.js";import"./composite-Cj7Gyck6.js";import"./index-ySwYaDEc.js";import"./index-DauVYyRU.js";import"./index-1ybkaqeD.js";import"./useEventCallback-C_1b83KE.js";import"./SkeletonBar-B7RRaHio.js";import"./LoadingCell-B0fS22kl.js";import"./ColumnConfigDialog-DPX5_-xD.js";import"./DraggableList-C_PZjvkP.js";import"./search-BkAszfZ6.js";import"./Input-B7COcDHt.js";import"./useControlled-raZDZG7g.js";import"./Button-DfSDbPeQ.js";import"./small-cross-B-9K90Gm.js";import"./ActionButton-DopPp6r9.js";import"./Checkbox-Bz7CDvbc.js";import"./useValueChanged-BVjsLDJ4.js";import"./CollapsiblePanel-DV0xAGpE.js";import"./MultiColumnSortDialog-zSQJj82d.js";import"./MenuTrigger-DUfBpM0w.js";import"./CompositeItem-CN8uA6ij.js";import"./ToolbarRootContext-DKuVgI34.js";import"./getDisabledMountTransitionStyles-DXafZfY4.js";import"./getPseudoElementBounds-C6e9H8MY.js";import"./chevron-down-CYVMAiKh.js";import"./index-B-mDfD20.js";import"./error-B3ctmJqj.js";import"./BaseCbacBanner-Ck2b17wK.js";import"./makeExternalStore-Cx_BHKOC.js";import"./Tooltip-DYGDXGf_.js";import"./PopoverPopup-EnybrYm9.js";import"./debounce-DchhwRiM.js";import"./useOsdkClient-Dec5bd1s.js";import"./tick-B9gaIQRk.js";import"./DropdownField-DmDMqc8s.js";import"./isEqual-BLIZs3oM.js";import"./withOsdkMetrics-D7Wb3D4v.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

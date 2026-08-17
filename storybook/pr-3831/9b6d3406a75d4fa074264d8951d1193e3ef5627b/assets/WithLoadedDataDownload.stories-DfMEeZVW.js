import{f as b,j as a,r as i}from"./iframe-CP7QTMjD.js";import{O as u}from"./object-table-D9Dw5A1S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bd8suxmt.js";import"./Table-WYu1FoLA.js";import"./index-BPsbF1qe.js";import"./Dialog-CcSBw3cV.js";import"./cross-DFB4dF8m.js";import"./svgIconContainer-BrNHieP3.js";import"./useBaseUiId-BaO1Z6ca.js";import"./InternalBackdrop-Cing5ETY.js";import"./composite-CVUK9pNM.js";import"./index-CcGoeXSV.js";import"./index-DJ7K6xAB.js";import"./index-B8n6SXrn.js";import"./useEventCallback-DsWKuR0v.js";import"./SkeletonBar-D5qgVXpA.js";import"./LoadingCell-DGzNCCL0.js";import"./ColumnConfigDialog-I_9AraPf.js";import"./DraggableList-MRdSsgMG.js";import"./search-BhBPvxZt.js";import"./Input-DJXNsHex.js";import"./useControlled-qxdzJ-6o.js";import"./Button-COqGdDuO.js";import"./small-cross-BqZiuEiq.js";import"./ActionButton-DbYjNuD3.js";import"./Checkbox-NO0w5BLz.js";import"./useValueChanged-DQ3D-BRv.js";import"./CollapsiblePanel-bhxAfR0e.js";import"./MultiColumnSortDialog-DopPnQeE.js";import"./MenuTrigger-BdHpW3oz.js";import"./CompositeItem-CZgkbGHU.js";import"./ToolbarRootContext-DiyEBXMz.js";import"./getDisabledMountTransitionStyles-Cv6vIEs8.js";import"./getPseudoElementBounds-RlrWvf9k.js";import"./chevron-down-BXz7fXPz.js";import"./index-Dee7JgMQ.js";import"./error-CB1q8I3x.js";import"./BaseCbacBanner-CVuUMrb-.js";import"./makeExternalStore-Bl7e9I-a.js";import"./Tooltip-BoUewqjJ.js";import"./PopoverPopup-DA2udT_l.js";import"./debounce-DNDQd4GO.js";import"./useOsdkClient-Cme5jE9K.js";import"./tick-BDk4I-rW.js";import"./DropdownField-DBFC8z6r.js";import"./isEqual-8KxI1bXH.js";import"./withOsdkMetrics-BE1P-0Lv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

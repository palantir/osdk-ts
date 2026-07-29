import{f as b,j as a,r as i}from"./iframe-DO7xaOVa.js";import{O as u}from"./object-table-BMZSjn2w.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-tYEBtoa1.js";import"./Table-B1ywx-Y6.js";import"./index-B7ZoVnaP.js";import"./Dialog-Bytmi70C.js";import"./cross-C88ww4dZ.js";import"./svgIconContainer-BHZyR1wf.js";import"./useBaseUiId-B6qumW1k.js";import"./InternalBackdrop-BDXHjgns.js";import"./composite-G2BKpbjz.js";import"./index-CNeMCXvG.js";import"./index-CUTMnaj_.js";import"./index-CvU2RKnS.js";import"./useEventCallback-GrCIYgC6.js";import"./SkeletonBar-Lmgd1oM8.js";import"./LoadingCell-DMMLeEqX.js";import"./ColumnConfigDialog-Bjbu5Xs0.js";import"./DraggableList-CuFSG6dY.js";import"./search-C5KvEKD1.js";import"./Input-CJQStil5.js";import"./useControlled-B-xVn5Qq.js";import"./Button-CmWGTWu3.js";import"./small-cross-B9m9Mn_c.js";import"./ActionButton-V_3fgY3y.js";import"./Checkbox-TMw3uqDm.js";import"./minus-BNHd-nV1.js";import"./tick-D7zhS-G5.js";import"./useValueChanged-k_G7ufiT.js";import"./caret-down-BrJRKzS1.js";import"./CollapsiblePanel-Dl62pYVu.js";import"./MultiColumnSortDialog-LizoKM_m.js";import"./MenuTrigger-D779jGkt.js";import"./CompositeItem-BCacWVST.js";import"./ToolbarRootContext-CvCMQySo.js";import"./getDisabledMountTransitionStyles-C0JUYfii.js";import"./getPseudoElementBounds-Bg5NfpBZ.js";import"./chevron-down-CdGl7BQh.js";import"./index-93O_KIcJ.js";import"./error-BQ2Lysi9.js";import"./BaseCbacBanner-DjLVGGHQ.js";import"./makeExternalStore-DpllJH37.js";import"./Tooltip-y9WhDGj7.js";import"./PopoverPopup-tk8fV8nJ.js";import"./toNumber-B5x96DMZ.js";import"./useOsdkClient-BGZST9Rz.js";import"./DropdownField-Cg8-CFi-.js";import"./withOsdkMetrics-CzYVzdsc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

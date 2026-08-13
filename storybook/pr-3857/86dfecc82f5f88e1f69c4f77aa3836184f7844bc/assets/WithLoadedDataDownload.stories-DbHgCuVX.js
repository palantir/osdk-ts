import{f as b,j as a,r as i}from"./iframe-DY1GCbMw.js";import{O as u}from"./object-table-CciFgaiP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CBmLF2uv.js";import"./Table-Dow3q7z3.js";import"./index-D14LjQ6n.js";import"./Dialog-2wYgJqJO.js";import"./cross-CmkMCGAt.js";import"./svgIconContainer-BFVaOhpV.js";import"./useBaseUiId-DuGGt2wk.js";import"./InternalBackdrop-JB_AdRkb.js";import"./composite-BpnSt9TV.js";import"./index-w54taWD8.js";import"./index-DRgBoERL.js";import"./index-4S2sOMY0.js";import"./useEventCallback-qdgPO1dc.js";import"./SkeletonBar-BfAdSFd-.js";import"./LoadingCell-CsMIdMuG.js";import"./ColumnConfigDialog-CaoxwqHB.js";import"./DraggableList-CbiS0L-q.js";import"./search-DozuAt7g.js";import"./Input-BHRf24lx.js";import"./useControlled-DgmoUEMa.js";import"./Button-lZzhyPA5.js";import"./small-cross-B-E1H7Wk.js";import"./ActionButton-BgIpSx8W.js";import"./Checkbox-DO-ve-ai.js";import"./useValueChanged-ibk3K4Gh.js";import"./CollapsiblePanel-sgSmAf5J.js";import"./MultiColumnSortDialog-2d02ICXE.js";import"./MenuTrigger-B0Nk20ol.js";import"./CompositeItem-CyVQmu_E.js";import"./ToolbarRootContext-CKGq1FSG.js";import"./getDisabledMountTransitionStyles-CMWWTT10.js";import"./getPseudoElementBounds-PSTXVLkP.js";import"./chevron-down-DwvhxFZN.js";import"./index-Cw53nmwf.js";import"./error-B-msJLHi.js";import"./BaseCbacBanner-BflXDhPC.js";import"./makeExternalStore-CPaZopZ5.js";import"./Tooltip-DfeHQo_2.js";import"./PopoverPopup-KCoGRqZ6.js";import"./toNumber-DUjm83bJ.js";import"./useOsdkClient-BiAMLbqw.js";import"./tick-b9WUc7Jb.js";import"./DropdownField-r9c9LU4A.js";import"./withOsdkMetrics-C-yRlBMm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

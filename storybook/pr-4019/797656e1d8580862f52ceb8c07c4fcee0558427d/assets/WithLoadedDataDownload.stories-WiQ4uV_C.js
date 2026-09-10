import{f as b,j as a,r as i}from"./iframe-CI-n1SDT.js";import{O as u}from"./object-table-DRpU5_9A.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Mdgc8Ktj.js";import"./Table-Cvtx98HI.js";import"./index-DS4RSAQC.js";import"./Dialog-CpGVPRTu.js";import"./cross-CG9JNs7m.js";import"./svgIconContainer-C5J3XXoW.js";import"./useBaseUiId-D17iYZZP.js";import"./InternalBackdrop-CwiCBdb3.js";import"./composite-BKY77e-J.js";import"./index-BCo1buGM.js";import"./index-CgpiMQTM.js";import"./index-ap0UOzMs.js";import"./useEventCallback-DRfi-_TS.js";import"./SkeletonBar-ClCYHDwh.js";import"./LoadingCell-CZ1WtYGd.js";import"./ColumnConfigDialog-ChDOmYKl.js";import"./DraggableList-Dsm2hTH5.js";import"./search-BJLPlObb.js";import"./Input-CU7LnIit.js";import"./useControlled-DqjHOya_.js";import"./Button-BU0hCYOg.js";import"./small-cross-DHjfMPnD.js";import"./ActionButton-CEbPtw0Y.js";import"./Checkbox-B_-OJpAe.js";import"./useValueChanged-C_2Ifi7m.js";import"./CollapsiblePanel-ChN3dRbg.js";import"./MultiColumnSortDialog-Cbm_p0DI.js";import"./MenuTrigger-D4mel33g.js";import"./CompositeItem-OcKtL5Oh.js";import"./ToolbarRootContext-3jcFlcdQ.js";import"./getDisabledMountTransitionStyles-smLfI-jR.js";import"./getPseudoElementBounds-CG3xD5lD.js";import"./chevron-down-BMoNsHmj.js";import"./index-Bh2eKMSj.js";import"./error-BExaNGVy.js";import"./BaseCbacBanner-qIi9rFzM.js";import"./makeExternalStore-Dfr5mI6y.js";import"./Tooltip-c4HEDOZ7.js";import"./PopoverPopup-CVmvu6W-.js";import"./debounce-C6Db4ohX.js";import"./useOsdkClient-Cy_JiOUl.js";import"./tick-DU5k7Rwc.js";import"./DropdownField-CUeqsysl.js";import"./isEqual-DwJvLym-.js";import"./withOsdkMetrics-aN9WoVVm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

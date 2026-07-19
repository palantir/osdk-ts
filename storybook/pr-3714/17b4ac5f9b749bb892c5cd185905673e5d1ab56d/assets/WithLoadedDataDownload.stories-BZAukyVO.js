import{f as b,j as a,r as i}from"./iframe-BWi3HNRH.js";import{O as u}from"./object-table-qTExE_RQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D2GZnDpI.js";import"./Table-B98h5o3F.js";import"./index--rMqNL7Q.js";import"./Dialog-CWDCP5dP.js";import"./cross-DwoGy8LB.js";import"./svgIconContainer-cZVqqZMn.js";import"./useBaseUiId-P9QQG2vk.js";import"./InternalBackdrop-XNMUEOAs.js";import"./composite-Wj_n_5Bo.js";import"./index-3TFDWhUn.js";import"./index-DcadtDvp.js";import"./index-Dw6RfQtY.js";import"./useEventCallback-DVzJg7_G.js";import"./SkeletonBar-CGe74o2b.js";import"./LoadingCell-CNTapTAB.js";import"./ColumnConfigDialog-_-ubIWSC.js";import"./DraggableList-R9zB9PIZ.js";import"./search-AzEaYAcY.js";import"./Input-BUoU7JC-.js";import"./useControlled-D21_3aQd.js";import"./isEqual-DXSlJtwO.js";import"./isObject-iUeJoaDo.js";import"./Button-C8BF6svu.js";import"./ActionButton-5gu-_peF.js";import"./Checkbox-CZx8pxfk.js";import"./useValueChanged-sQLGV2jU.js";import"./CollapsiblePanel-at6dHEQX.js";import"./MultiColumnSortDialog-CcH45Lga.js";import"./MenuTrigger-B-IGIi24.js";import"./CompositeItem-BjtBCjU9.js";import"./ToolbarRootContext-2-ULyK5I.js";import"./getDisabledMountTransitionStyles-DnJz59Dy.js";import"./getPseudoElementBounds-CCXudOcw.js";import"./chevron-down-Bu9pl3xo.js";import"./index-BzoN-LXM.js";import"./error-DojtEV0y.js";import"./BaseCbacBanner-BDhYwVkb.js";import"./makeExternalStore-DyZMgppU.js";import"./Tooltip-DCnccSRA.js";import"./PopoverPopup-Dd3IySm7.js";import"./toNumber-CTUJiBkP.js";import"./useOsdkClient-CDVkmd86.js";import"./tick-C6W3KEry.js";import"./DropdownField-DEAxv17-.js";import"./withOsdkMetrics-Cux2wN2Y.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CWNCqF8m.js";import{O as u}from"./object-table-CmyQeVnC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CP42LvtG.js";import"./Table-B4WTdSgf.js";import"./index-C_BFGzEW.js";import"./Dialog-CaxPujHQ.js";import"./cross-Gf4Gi1Zs.js";import"./svgIconContainer-BD1yvJod.js";import"./useBaseUiId-Cbti5FZV.js";import"./InternalBackdrop-C7lR6q4Y.js";import"./composite-Bv2UjceH.js";import"./index-Q_B2Rqgi.js";import"./index-BtEMoLG0.js";import"./index-BZ2HMWSK.js";import"./useEventCallback-DBGM7t4z.js";import"./SkeletonBar-qv53td8s.js";import"./LoadingCell--0t_yWqm.js";import"./ColumnConfigDialog-XmKchhKd.js";import"./DraggableList-CZi0zryu.js";import"./search-D8ew1nZH.js";import"./Input-CnULVynl.js";import"./useControlled-COgqWOOu.js";import"./Button-DyTPsUeB.js";import"./small-cross-0qXddkOp.js";import"./ActionButton-CN25wp6X.js";import"./Checkbox-Cjz7OA4J.js";import"./useValueChanged-Bd1tAroA.js";import"./CollapsiblePanel-Djn_6tzS.js";import"./MultiColumnSortDialog-CpvYVBxd.js";import"./MenuTrigger-DxtWj2lZ.js";import"./CompositeItem-Bb-U7Uoq.js";import"./ToolbarRootContext-DH9Y5D6c.js";import"./getDisabledMountTransitionStyles-Jk0dBvhz.js";import"./getPseudoElementBounds-CGw_wpw2.js";import"./chevron-down-CKxmHC3q.js";import"./index-BVR21Q-U.js";import"./error-BFVZCDZ0.js";import"./BaseCbacBanner-DaEPWrNv.js";import"./makeExternalStore-CJVHwj3d.js";import"./Tooltip-BDpg5RtK.js";import"./PopoverPopup-D4_ZYeYA.js";import"./debounce-BZ-57v4W.js";import"./useOsdkClient-GAIR_yvP.js";import"./tick-DYdyuQqX.js";import"./DropdownField-DDTkuItE.js";import"./isEqual-CLdOfzOV.js";import"./withOsdkMetrics-C-RUZtQv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

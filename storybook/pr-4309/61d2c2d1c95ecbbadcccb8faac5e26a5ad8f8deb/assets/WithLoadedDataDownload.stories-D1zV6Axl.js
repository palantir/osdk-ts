import{f as b,j as a,r as i}from"./iframe-CHKcZgb7.js";import{O as u}from"./object-table-CyRHoSq9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ebqo0JEM.js";import"./Table-DpgWkMa-.js";import"./index-BACJcPnF.js";import"./Dialog-CScZ8Bvj.js";import"./cross-Dk2dXrK7.js";import"./svgIconContainer-DY2QJrYz.js";import"./useBaseUiId-Cxc3vcrN.js";import"./InternalBackdrop-CusfxTNT.js";import"./composite-B6ohSiOB.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./index-B7FvQMnW.js";import"./useEventCallback-5QUQz0lM.js";import"./SkeletonBar-BfLhsQBW.js";import"./LoadingCell-BztFPbfy.js";import"./ColumnConfigDialog-BKudSkg0.js";import"./DraggableList-C9WXx5Ua.js";import"./search-B4aplnsV.js";import"./Input-ByMels_v.js";import"./useControlled-aYGdNSsu.js";import"./Button-CiSWKai0.js";import"./small-cross-CG4ID_KO.js";import"./ActionButton-DTs1yjbe.js";import"./Checkbox-DowlVZ3I.js";import"./useValueChanged-CeGdvOdh.js";import"./CollapsiblePanel-CoovcH6q.js";import"./MultiColumnSortDialog-Bs9s_Iyt.js";import"./MenuTrigger-dpgwmopl.js";import"./CompositeItem-Brzkx-fO.js";import"./ToolbarRootContext-C-44hQT7.js";import"./getDisabledMountTransitionStyles-Dg77_XEZ.js";import"./getPseudoElementBounds-CDFDrqWX.js";import"./chevron-down-rruGkt0O.js";import"./index-BMxA9FcH.js";import"./error-3jD31VOr.js";import"./BaseCbacBanner-CrOdu8cS.js";import"./makeExternalStore-BWTgA4er.js";import"./Tooltip-D7qyJWee.js";import"./PopoverPopup-DZPcNR2_.js";import"./debounce-BI5dqIT5.js";import"./useOsdkClient-DiOlSmjl.js";import"./tick-Cbk0zspt.js";import"./DropdownField-JI6iE4-V.js";import"./isEqual-DmU6FREb.js";import"./withOsdkMetrics-CfcXJ1po.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

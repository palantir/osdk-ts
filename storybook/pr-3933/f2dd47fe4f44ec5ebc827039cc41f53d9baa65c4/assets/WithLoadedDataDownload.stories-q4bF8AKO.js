import{f as b,j as a,r as i}from"./iframe-DL4FbcwS.js";import{O as u}from"./object-table-DhigSl7G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-Y5E90C.js";import"./Table-Cs_iWV8n.js";import"./index-Br0G3foT.js";import"./Dialog-BFHfmQPP.js";import"./cross-BgWeKxEC.js";import"./svgIconContainer-CE-AmYzF.js";import"./useBaseUiId-CP7gZe2z.js";import"./InternalBackdrop-CN-xTacf.js";import"./composite-WIX2LHhX.js";import"./index-CDxRvv5g.js";import"./index-XqdSQUcL.js";import"./index-DLGuQieX.js";import"./useEventCallback-BEeBAO93.js";import"./SkeletonBar-CQVaDy0B.js";import"./LoadingCell-BlAiaYMr.js";import"./ColumnConfigDialog-C6cZo_LK.js";import"./DraggableList-CiiAn0FN.js";import"./search-DR1h9EWJ.js";import"./Input-CoqvOIT8.js";import"./useControlled-QO3Raoq-.js";import"./Button-B99bddLT.js";import"./small-cross-CUfUs31H.js";import"./ActionButton-CBHhv2Lw.js";import"./Checkbox-DExDIyfW.js";import"./useValueChanged-CXZmRiDQ.js";import"./CollapsiblePanel-Cm-pYAoG.js";import"./MultiColumnSortDialog-BkIL3f4O.js";import"./MenuTrigger-7-9CY8yx.js";import"./CompositeItem-BT24yxUg.js";import"./ToolbarRootContext-Dvyrl1Ns.js";import"./getDisabledMountTransitionStyles-BZoy_dEn.js";import"./getPseudoElementBounds-DbDICFV0.js";import"./chevron-down-CJf371D2.js";import"./index-1dYW8fLm.js";import"./error-CQAN26ZF.js";import"./BaseCbacBanner-DPX4y917.js";import"./makeExternalStore-CfOH3M3i.js";import"./Tooltip-BZG5pa3L.js";import"./PopoverPopup-go6UfqHP.js";import"./debounce-Ta3u6n_O.js";import"./useOsdkClient-C5Zu7SVp.js";import"./tick-Cy5aEDFq.js";import"./DropdownField-CxOSqgDd.js";import"./isEqual-B7FydaS0.js";import"./withOsdkMetrics-tOkw8TA4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

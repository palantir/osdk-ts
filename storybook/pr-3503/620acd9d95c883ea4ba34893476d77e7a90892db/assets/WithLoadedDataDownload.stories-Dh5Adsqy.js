import{f as b,j as a,r as i}from"./iframe-CA-Q_jU7.js";import{O as u}from"./object-table-SDTbaTZ5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BdCNlve6.js";import"./Table-CyFnxB4T.js";import"./index-VO2jRSn_.js";import"./Dialog-CY6PAgkR.js";import"./cross-oxpbK6hh.js";import"./svgIconContainer-B8j61YwK.js";import"./useBaseUiId-qVGoLdQZ.js";import"./InternalBackdrop-CiIWTXNw.js";import"./composite-CzBZ8Myw.js";import"./index-CG8L9I03.js";import"./index-ByR1nggb.js";import"./index-CBWlALiZ.js";import"./useEventCallback-Cl1catkJ.js";import"./SkeletonBar-DsB62RR2.js";import"./LoadingCell-D13Xgezv.js";import"./ColumnConfigDialog-CkSfsUos.js";import"./DraggableList-2iDCk19e.js";import"./search-mP0zrIjU.js";import"./Input-4IbICc_N.js";import"./useControlled-DbYf413A.js";import"./Button-Cl2geIeB.js";import"./small-cross-DetrI0iV.js";import"./ActionButton-CgqJMXMV.js";import"./Checkbox-Dqvp8Xky.js";import"./minus-CvxGmIuW.js";import"./tick-DGv6LZ0M.js";import"./useValueChanged-BQK9WQ7r.js";import"./caret-down-D979phhc.js";import"./CollapsiblePanel-B6ERrLDO.js";import"./MultiColumnSortDialog-iRzvcjuc.js";import"./MenuTrigger-CNZtVkig.js";import"./CompositeItem-omTeulrv.js";import"./ToolbarRootContext-B8fjPlVh.js";import"./getDisabledMountTransitionStyles-Y7VnOa3h.js";import"./getPseudoElementBounds-7eAKkBrW.js";import"./chevron-down-CYCHBchH.js";import"./index-BZnWLbDC.js";import"./error-C1cMouvI.js";import"./BaseCbacBanner-PjNltOCP.js";import"./makeExternalStore-CkIusA3Y.js";import"./Tooltip-47EZ7Ro3.js";import"./PopoverPopup-DsTHvv3B.js";import"./toNumber-BD-BDjFh.js";import"./useOsdkClient-GxQJUmNy.js";import"./DropdownField-BFgE_hFq.js";import"./withOsdkMetrics-BgzlNlWK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

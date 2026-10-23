import{f as b,j as a,r as i}from"./iframe-DH1LfSqj.js";import{O as u}from"./object-table-C4--OWMA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BtNGdpdU.js";import"./Table-DXNoMCtE.js";import"./index-BwVz3K80.js";import"./Dialog-m6U3BZ2P.js";import"./cross-CVAZ1iFx.js";import"./svgIconContainer-GysfdOnF.js";import"./useBaseUiId-CW3AoQkf.js";import"./InternalBackdrop-DD_xzXOG.js";import"./composite-DB-jEcsY.js";import"./index-Dfpbq9fn.js";import"./index-Dt70WsCn.js";import"./index-BQpuPn_O.js";import"./useEventCallback-B1T6-Dk0.js";import"./SkeletonBar-Blb2KjQc.js";import"./LoadingCell-DJ166qfC.js";import"./ColumnConfigDialog-Dppaw2Lr.js";import"./DraggableList-DfK_4q05.js";import"./search-Cf7xLzNe.js";import"./Input-BbVzkVzZ.js";import"./useControlled-DAJs0K9A.js";import"./Button-CC_D7kUc.js";import"./small-cross-AKv-8hHD.js";import"./ActionButton-DAhEk0oH.js";import"./Checkbox-CJ_ikFlF.js";import"./useValueChanged-D1k7g2Vp.js";import"./CollapsiblePanel-CGVC2bAM.js";import"./MultiColumnSortDialog-DqDhlwJe.js";import"./MenuTrigger-D2rZbEGn.js";import"./CompositeItem-ty0jR14S.js";import"./ToolbarRootContext-DNwYbqk6.js";import"./getDisabledMountTransitionStyles-Dwh5nb5R.js";import"./getPseudoElementBounds-DTVu78U6.js";import"./chevron-down-BcIj0xVN.js";import"./index-BAF1QDd0.js";import"./error-CvpqdC3I.js";import"./BaseCbacBanner-CARa9_yI.js";import"./makeExternalStore-fduFP-zO.js";import"./Tooltip-CZY4h-1t.js";import"./PopoverPopup-C1WEOJ_A.js";import"./debounce-B4GI_Apd.js";import"./useOsdkClient-DN4s-WbE.js";import"./tick-BIbnl7xY.js";import"./DropdownField-C9gy_Wgf.js";import"./isEqual-DdMqeQ25.js";import"./withOsdkMetrics-CkK0GNNa.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

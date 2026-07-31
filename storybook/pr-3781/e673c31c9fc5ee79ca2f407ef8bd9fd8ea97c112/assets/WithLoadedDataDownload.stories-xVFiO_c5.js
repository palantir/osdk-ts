import{f as b,j as a,r as i}from"./iframe-Ci-tzRKJ.js";import{O as u}from"./object-table-CITG45g_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DJal9EPS.js";import"./Table-CmQN9Y76.js";import"./index-CKLM9KrJ.js";import"./Dialog-KZkL2rM7.js";import"./cross--vCoyTfT.js";import"./svgIconContainer-DvpSMQMB.js";import"./useBaseUiId-Bzqf9i17.js";import"./InternalBackdrop-C-ihlysw.js";import"./composite-C4r_G6LN.js";import"./index-DeFOLRTd.js";import"./index-CaIqfwj2.js";import"./index-BlJyzssb.js";import"./useEventCallback-Bny-aaz_.js";import"./SkeletonBar-Bh_W7132.js";import"./LoadingCell-D6DwyYVw.js";import"./ColumnConfigDialog-B8vm10hl.js";import"./DraggableList-DIocPcNc.js";import"./search-UQXWsdYO.js";import"./Input-BtwCPw-3.js";import"./useControlled-Cao399YH.js";import"./isEqual-BCUYvjjC.js";import"./isObject-6IzxmPNy.js";import"./Button-589e5R23.js";import"./ActionButton-hVwQz-i4.js";import"./Checkbox-ClY58DUW.js";import"./useValueChanged-5vetb3Im.js";import"./CollapsiblePanel-C9SI1XAD.js";import"./MultiColumnSortDialog-B9hp6Ldk.js";import"./MenuTrigger-BDYJ_hBI.js";import"./CompositeItem-CTqslAWX.js";import"./ToolbarRootContext-BbdAu-5X.js";import"./getDisabledMountTransitionStyles-Dhb3HthS.js";import"./getPseudoElementBounds-DMBkpSSS.js";import"./chevron-down-BTzWyvSz.js";import"./index-D-ov5pJU.js";import"./error-lEY9aX5-.js";import"./BaseCbacBanner-DnCgjrWi.js";import"./makeExternalStore-C9b1LS5H.js";import"./Tooltip-DFR6z9eh.js";import"./PopoverPopup-BLnVT5Jl.js";import"./toNumber-BOpuPoJi.js";import"./useOsdkClient-3HA0Y5pZ.js";import"./tick-CChZAUzt.js";import"./DropdownField-Bj5kZNiR.js";import"./withOsdkMetrics-fuyb5ykd.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

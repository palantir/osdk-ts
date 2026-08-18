import{f as b,j as a,r as i}from"./iframe-YbZJ4Q2T.js";import{O as u}from"./object-table-BW3KB80g.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-nrcicwIZ.js";import"./Table-D2BU-uGD.js";import"./index-BbeJO0tu.js";import"./Dialog-BMPFF_lX.js";import"./cross-Chqx1Vmd.js";import"./svgIconContainer-CvzqHx8a.js";import"./useBaseUiId-DTGQIw9V.js";import"./InternalBackdrop-UwFwjs-I.js";import"./composite-D3JFLD7k.js";import"./index-CjgLq_Ze.js";import"./index-BArD5hnh.js";import"./index-DaB6Rdj2.js";import"./useEventCallback-Cu0cHPi1.js";import"./SkeletonBar-DIcbo8Ai.js";import"./LoadingCell-qy913ZRO.js";import"./ColumnConfigDialog-DrnL98R1.js";import"./DraggableList-DPV2iFvD.js";import"./search-c-d9DWXs.js";import"./Input-DuCwdPfX.js";import"./useControlled-DLIRtZT-.js";import"./Button-Drmtw-7h.js";import"./small-cross-BaOf2IHH.js";import"./ActionButton-D4JZZuM3.js";import"./Checkbox-BEvItd_I.js";import"./useValueChanged-BXsv3vOm.js";import"./CollapsiblePanel-CB2lFGLk.js";import"./MultiColumnSortDialog-JI3aZi8H.js";import"./MenuTrigger-DnswiPxP.js";import"./CompositeItem-DJS21xnC.js";import"./ToolbarRootContext-hKDDy8Tn.js";import"./getDisabledMountTransitionStyles-BtCYo8Vw.js";import"./getPseudoElementBounds-Jh0Tlk_E.js";import"./chevron-down-DV-3X39-.js";import"./index-Dj7Gzmji.js";import"./error-BpN2G5nD.js";import"./BaseCbacBanner-gQ71dViq.js";import"./makeExternalStore-D3Nkh70z.js";import"./Tooltip-Bxo3fb0L.js";import"./PopoverPopup-C8jr-6dr.js";import"./debounce-qGwGM8IN.js";import"./useOsdkClient-BJz82Q8V.js";import"./tick-yYczsGE5.js";import"./DropdownField-DjUqQXA4.js";import"./isEqual-B7FXvL0y.js";import"./withOsdkMetrics-DAKfNXNY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

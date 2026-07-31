import{f as b,j as a,r as i}from"./iframe-J2J3YjE0.js";import{O as u}from"./object-table-CM_J-_4H.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DSYd8WXZ.js";import"./Table-Cw2yfldV.js";import"./index-BE32fXoe.js";import"./Dialog-Cii-cuRI.js";import"./cross-BUvQ63LS.js";import"./svgIconContainer-DBFfWUAc.js";import"./useBaseUiId-B5sE9yG5.js";import"./InternalBackdrop-BtDoipoP.js";import"./composite-lU6DBoNY.js";import"./index-Cm0SXZ2J.js";import"./index-CIPMrj_t.js";import"./index-DMjr37OC.js";import"./useEventCallback-xXkmYxnE.js";import"./SkeletonBar-Bl4uTwbL.js";import"./LoadingCell-D9RGNs2z.js";import"./ColumnConfigDialog-DfqTinFZ.js";import"./DraggableList-CuF55wpC.js";import"./search-BPhUZmyj.js";import"./Input-Cf887hhU.js";import"./useControlled-DPJfrFUK.js";import"./isEqual-Cis8o_Aq.js";import"./isObject-DgpSn9uj.js";import"./Button-DUn4JLDk.js";import"./ActionButton-COpXEK9s.js";import"./Checkbox-D7BE7lQJ.js";import"./useValueChanged-DSXfrb5B.js";import"./CollapsiblePanel-q-0v4uOT.js";import"./MultiColumnSortDialog-BIGBffeM.js";import"./MenuTrigger-BDeWypFN.js";import"./CompositeItem-fqkCbF8k.js";import"./ToolbarRootContext-DjaLauMl.js";import"./getDisabledMountTransitionStyles-C3z6f6ys.js";import"./getPseudoElementBounds-DOHlHTJk.js";import"./chevron-down-BIUs-Nx1.js";import"./index-CpYQjE-4.js";import"./error-BkUEB81u.js";import"./BaseCbacBanner-ChZtpJcU.js";import"./makeExternalStore-DXZk6z9e.js";import"./Tooltip-CVoKdfvR.js";import"./PopoverPopup-DKjF0w-d.js";import"./toNumber-BNj2hc5a.js";import"./useOsdkClient-CymuhabP.js";import"./tick-C4OBoyql.js";import"./DropdownField-BD0qZeCh.js";import"./withOsdkMetrics-BiH7dj1l.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

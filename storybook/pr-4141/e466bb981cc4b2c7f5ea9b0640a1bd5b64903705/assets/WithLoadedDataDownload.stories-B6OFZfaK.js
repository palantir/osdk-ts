import{f as b,j as a,r as i}from"./iframe-70ZuGjkJ.js";import{O as u}from"./object-table-BBc3Fn8T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DK4xKHY4.js";import"./Table-aU-H_NwX.js";import"./index-CckhOj8-.js";import"./Dialog-Ct-6ZDgi.js";import"./cross-CO8zitM2.js";import"./svgIconContainer-CtTs4nyb.js";import"./useBaseUiId-CqgzcpTd.js";import"./InternalBackdrop-BAIsbWIF.js";import"./composite-E4mw46H8.js";import"./index-C6_lfWdp.js";import"./index-CDzhFE3P.js";import"./index-CPgNI8HV.js";import"./useEventCallback-Cl-1X7df.js";import"./SkeletonBar-t3va8Dsz.js";import"./LoadingCell-DR2MUXbF.js";import"./ColumnConfigDialog-B1vOObiT.js";import"./DraggableList-DZlKofNL.js";import"./search-_UcRnrjw.js";import"./Input-sBtVPl75.js";import"./useControlled-0e2XrUt8.js";import"./Button-D2KYgMT_.js";import"./small-cross-CYwlKW4r.js";import"./ActionButton-B4h22XNy.js";import"./Checkbox-C8sqlJMk.js";import"./useValueChanged-CQFhtmgn.js";import"./CollapsiblePanel-2ZNF-ZYn.js";import"./MultiColumnSortDialog-aAcEJHDq.js";import"./MenuTrigger-_GYM6HPo.js";import"./CompositeItem-A9SMjz1N.js";import"./ToolbarRootContext-DmAs8e4b.js";import"./getDisabledMountTransitionStyles-DjkGWHfc.js";import"./getPseudoElementBounds-CmYlGZ2P.js";import"./chevron-down-BPIjaHnC.js";import"./index-C1hIfcQ2.js";import"./error-Ho0rrjia.js";import"./BaseCbacBanner-ASzHDe0B.js";import"./makeExternalStore-Vi6b8A7J.js";import"./Tooltip-I-YOK7jy.js";import"./PopoverPopup-Cy9eVAix.js";import"./debounce-B50OUnXf.js";import"./useOsdkClient-D5Q8UXIy.js";import"./tick-eYRv4TLQ.js";import"./DropdownField-B1h3MVUP.js";import"./isEqual-Cp8PtEv6.js";import"./withOsdkMetrics-DyYS57kA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

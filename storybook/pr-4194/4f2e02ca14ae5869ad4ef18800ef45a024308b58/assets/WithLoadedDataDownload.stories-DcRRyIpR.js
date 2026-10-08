import{f as b,j as a,r as i}from"./iframe-CRfkLV31.js";import{O as u}from"./object-table-Dq0vyH8t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YWkr71E4.js";import"./Table-C7gaOaO6.js";import"./index-DFmae8Ml.js";import"./Dialog-BE9C1eNO.js";import"./cross-2MhXpbG_.js";import"./svgIconContainer-Cv_5fobV.js";import"./useBaseUiId-CtBQzgSV.js";import"./InternalBackdrop-Hd16GtHK.js";import"./composite-Caz7Fjnj.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./index-D4xobDeS.js";import"./useEventCallback-BWqA8sXr.js";import"./SkeletonBar-h9eX593x.js";import"./LoadingCell-B9H0SnSs.js";import"./ColumnConfigDialog-DBWSmJ3l.js";import"./DraggableList-CjVbtBqm.js";import"./search-DgbssBMa.js";import"./Input-C9MxuagH.js";import"./useControlled-B56Cy6tA.js";import"./Button-COPRfQ9y.js";import"./small-cross-Bp20qFfY.js";import"./ActionButton-DCGdEOGa.js";import"./Checkbox-DM9Tz5iE.js";import"./useValueChanged-ojMWA7Lu.js";import"./CollapsiblePanel-BpxJ4S1Z.js";import"./MultiColumnSortDialog-BXhBUuFE.js";import"./MenuTrigger-DFdYgIUQ.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./getDisabledMountTransitionStyles-DL_MWW6U.js";import"./getPseudoElementBounds-CXdwiOru.js";import"./chevron-down-CQ908lz2.js";import"./index-BTr8Rb7H.js";import"./error-Bjl4tfNj.js";import"./BaseCbacBanner-wzZeSJV7.js";import"./makeExternalStore-DD66B2VR.js";import"./Tooltip-C3E-sj79.js";import"./PopoverPopup-qLtR5Yx9.js";import"./debounce-D-aRhyl3.js";import"./useOsdkClient-BNC8fnuO.js";import"./tick-DaS6FevP.js";import"./DropdownField-IPwkGfmB.js";import"./isEqual-BQ5yqGMv.js";import"./withOsdkMetrics-BXaEjRyq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BYI6-aLw.js";import{O as u}from"./object-table-zEM50Veu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BtPj2gQg.js";import"./Table-CCnRPler.js";import"./index-DQ7c9deP.js";import"./Dialog-KvswP73d.js";import"./cross-DFx6KUE4.js";import"./svgIconContainer-BBpZUtxO.js";import"./useBaseUiId-1B5Tp9l6.js";import"./InternalBackdrop-B9c7BTIV.js";import"./composite-CifwDKrs.js";import"./index-jdHVExti.js";import"./index-DK8-M2ZQ.js";import"./index-Cukieq_M.js";import"./useEventCallback-Ck3YSB-4.js";import"./SkeletonBar-Dk1hIZHl.js";import"./LoadingCell-IfAFJP-m.js";import"./ColumnConfigDialog-DurdO-8J.js";import"./DraggableList-C0Fm2bWv.js";import"./search-CaXxmA8i.js";import"./Input-BkuGir8f.js";import"./useControlled-BZTNruXv.js";import"./isEqual-DD0yAfPL.js";import"./isObject-DVx9CejI.js";import"./Button-CRUJ4RF7.js";import"./ActionButton-7I4whYFr.js";import"./Checkbox-DjhQrfry.js";import"./useValueChanged-D9OSL-KB.js";import"./CollapsiblePanel-C4Y208nn.js";import"./MultiColumnSortDialog-B-Nm9AsS.js";import"./MenuTrigger-DZHsQamD.js";import"./CompositeItem-DfD4viOC.js";import"./ToolbarRootContext-D3speQHo.js";import"./getDisabledMountTransitionStyles-CWCq6Lcx.js";import"./getPseudoElementBounds-DC5DSIf6.js";import"./chevron-down-BDf7yWi1.js";import"./index-ClnbUonH.js";import"./error-DLiUuB2F.js";import"./BaseCbacBanner-CYen8Dov.js";import"./makeExternalStore-KpAAX1cn.js";import"./Tooltip-CvKrhMsi.js";import"./PopoverPopup-CwpMKFB5.js";import"./toNumber-dovyYQeg.js";import"./useOsdkClient-D-RzPK7q.js";import"./tick-C-01gZNd.js";import"./DropdownField-BnQEUnfj.js";import"./withOsdkMetrics-WrHGmE29.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

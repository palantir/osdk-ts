import{f as b,j as a,r as i}from"./iframe-CGyuUHxy.js";import{O as u}from"./object-table-CqzVwxGZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CHXR4TEM.js";import"./Table-D3_qtNfp.js";import"./index-BY9adCgo.js";import"./Dialog-CSowe9qH.js";import"./cross-IJIRpi8I.js";import"./svgIconContainer-BsIK3M0v.js";import"./useBaseUiId-CxRjJ2eA.js";import"./InternalBackdrop-D2QUgXtn.js";import"./composite-Ccbhb-G_.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./index-BeL2DRU1.js";import"./useEventCallback-D7IhiRBC.js";import"./SkeletonBar-DpG5K-jj.js";import"./LoadingCell-KJtsg1rt.js";import"./ColumnConfigDialog-BBfs4NJo.js";import"./DraggableList-BSQTvWPg.js";import"./search-lH3pU1gQ.js";import"./Input-C3-P_z4v.js";import"./useControlled-DMowJxn0.js";import"./Button-BCdalSJc.js";import"./small-cross-C5mq1gMO.js";import"./ActionButton-1oqP8PoB.js";import"./Checkbox-C1SgmmoO.js";import"./useValueChanged-BTu-LDDs.js";import"./CollapsiblePanel-BrxTnTCc.js";import"./MultiColumnSortDialog-D9g3JzPL.js";import"./MenuTrigger-C1mo3QbN.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./getDisabledMountTransitionStyles-BiBOKD-Z.js";import"./getPseudoElementBounds-Di2B7QRI.js";import"./chevron-down-DvkSXyV_.js";import"./index-GV80kSzg.js";import"./error-2nP38RK7.js";import"./BaseCbacBanner--HBtBBsc.js";import"./makeExternalStore-DIn4B4sN.js";import"./Tooltip-qASfieF8.js";import"./PopoverPopup-C8iqkpjZ.js";import"./debounce-qtcXepJn.js";import"./useOsdkClient-Dvl_qWbV.js";import"./tick-BgWIPs4c.js";import"./DropdownField-DV35Ur0Z.js";import"./isEqual-BidfQ1Lo.js";import"./withOsdkMetrics-BUGq6PJK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-VpGhx-PD.js";import{O as u}from"./object-table-DtjGPoWI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D0pvWWR7.js";import"./Table-CU9oVga6.js";import"./index-LQdXBZRW.js";import"./Dialog-nYyvgKL6.js";import"./cross-MJ5oEJZb.js";import"./svgIconContainer-Y-YHGSaq.js";import"./useBaseUiId-BlzsEQEx.js";import"./InternalBackdrop-D0H6ieal.js";import"./composite-BCiYB9bI.js";import"./index-DjNDFA8y.js";import"./index-CrALdyEf.js";import"./index-BRt_pviF.js";import"./useEventCallback-Cwtfp8Vj.js";import"./SkeletonBar-C0UAbzOh.js";import"./LoadingCell-Bl504SLX.js";import"./ColumnConfigDialog-BvfmhfdQ.js";import"./DraggableList-DJXpCMPM.js";import"./search-CJ0NEjvE.js";import"./Input-wrleGgmB.js";import"./useControlled-DladVhMY.js";import"./Button-CWji_dY_.js";import"./small-cross-DvVUPBrn.js";import"./ActionButton-CDHs2jv5.js";import"./Checkbox-D6QYz9ye.js";import"./useValueChanged-DRiZRE6q.js";import"./CollapsiblePanel-CLdlKCxT.js";import"./MultiColumnSortDialog-DrdLet6l.js";import"./MenuTrigger-DhjGzQy0.js";import"./CompositeItem-30_Ebn6h.js";import"./ToolbarRootContext-KZFvKfVC.js";import"./getDisabledMountTransitionStyles-Bq_uSDtW.js";import"./getPseudoElementBounds-Cjq7O4KT.js";import"./chevron-down-Cq5P_lFy.js";import"./index-DjF-cwug.js";import"./error-CQRU8cCe.js";import"./BaseCbacBanner-qxye8Lsm.js";import"./makeExternalStore-GDtn0QFv.js";import"./Tooltip-BggaXucL.js";import"./PopoverPopup-CupUKI_F.js";import"./debounce-CDUQzIGp.js";import"./useOsdkClient-uiJUUrNk.js";import"./tick-DQnVpV1f.js";import"./DropdownField-B1Pz7wqj.js";import"./isEqual-DCl6ekOf.js";import"./withOsdkMetrics-nBBrWVXt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

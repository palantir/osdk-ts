import{f as b,j as a,r as i}from"./iframe-BSWU-B_t.js";import{O as u}from"./object-table-CxuUhCym.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BP69itpM.js";import"./Table-ClxkV53c.js";import"./index-DCPm6e7t.js";import"./Dialog-CxpmYK6p.js";import"./cross-BqFGV5fX.js";import"./svgIconContainer-DYKXPmKq.js";import"./useBaseUiId-DgZLNkcV.js";import"./InternalBackdrop-CFryOhwR.js";import"./composite-xK3OdJJN.js";import"./index-BxbANLHm.js";import"./index-CSS1hzAc.js";import"./index-B78EWLQq.js";import"./useEventCallback-_URStdDY.js";import"./SkeletonBar-DeOC8U6S.js";import"./LoadingCell-NiJp7niC.js";import"./ColumnConfigDialog-o_2Fsjbg.js";import"./DraggableList-CUOL-aXY.js";import"./search-DC42LciC.js";import"./Input-C-SAhLrm.js";import"./useControlled-e9A-MeLW.js";import"./Button-C7DF1eS8.js";import"./small-cross-DvvR_Lxs.js";import"./ActionButton-b1R9gfoC.js";import"./Checkbox-NuF0zaYj.js";import"./useValueChanged-B_pJiHnJ.js";import"./CollapsiblePanel-BLNp64Gw.js";import"./MultiColumnSortDialog-DnK1WFUZ.js";import"./MenuTrigger-eG-ukvHv.js";import"./CompositeItem-BD3XvVOF.js";import"./ToolbarRootContext-CzwBSefm.js";import"./getDisabledMountTransitionStyles-q1CySqzv.js";import"./getPseudoElementBounds-BpvUEGkW.js";import"./chevron-down-DJwyIqCh.js";import"./index-BsLHq-Z8.js";import"./error-1J8Hl7Xk.js";import"./BaseCbacBanner-CgSQCKgx.js";import"./makeExternalStore-ChJ3m9QU.js";import"./Tooltip-C8w1cIBa.js";import"./PopoverPopup-UAd0OIAS.js";import"./toNumber-sSUlRf_y.js";import"./useOsdkClient-BncCvxjc.js";import"./tick-CwTnBEro.js";import"./DropdownField-DDTa8mDh.js";import"./withOsdkMetrics-B-cyLij9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

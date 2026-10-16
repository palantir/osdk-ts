import{f as b,j as a,r as i}from"./iframe-C1SMXjUe.js";import{O as u}from"./object-table-CEXa-Hzx.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-O4cQ6S71.js";import"./Table-Cwzldwoc.js";import"./index-DN_SN9-G.js";import"./Dialog-9T95jsWw.js";import"./cross-D7uSPFjO.js";import"./svgIconContainer-BDoLcvXV.js";import"./useBaseUiId-BuIqgK5v.js";import"./InternalBackdrop-CwUkjFDV.js";import"./composite-sNamXEmM.js";import"./index-08DpGPSx.js";import"./index-19ONWP9f.js";import"./index-Be0DvM55.js";import"./useEventCallback-BG06jL1K.js";import"./SkeletonBar-DxEb7MhI.js";import"./LoadingCell-DG3HryQj.js";import"./ColumnConfigDialog-C7A4Uoas.js";import"./DraggableList-BzjNz4op.js";import"./search-DnJjsxnU.js";import"./Input-57O56G_v.js";import"./useControlled-BZtQiYd3.js";import"./Button-Bfn1HbBL.js";import"./small-cross-dpYlCU3i.js";import"./ActionButton-CmH_f-Jn.js";import"./Checkbox-DjdiHWL7.js";import"./useValueChanged-CTxxu7jt.js";import"./CollapsiblePanel-DItfM1Rh.js";import"./MultiColumnSortDialog-CN_3BKmH.js";import"./MenuTrigger-BKFf40Pj.js";import"./CompositeItem-BJrPEqdr.js";import"./ToolbarRootContext-BEFeXo6R.js";import"./getDisabledMountTransitionStyles-B57QkLv0.js";import"./getPseudoElementBounds-DSbpx7o5.js";import"./chevron-down-BPj-14kw.js";import"./index-HIFRtJiy.js";import"./error-Ck-1b3_a.js";import"./BaseCbacBanner-D8XRx25T.js";import"./makeExternalStore-wdj16MKs.js";import"./Tooltip-CqhWgQKj.js";import"./PopoverPopup-DWuA0PEL.js";import"./debounce-BU3TwIzE.js";import"./useOsdkClient-DQjFnF1a.js";import"./tick-C1BZKfVK.js";import"./DropdownField-DRlqW65z.js";import"./isEqual-BKKmn0ha.js";import"./withOsdkMetrics-CARHbXxz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

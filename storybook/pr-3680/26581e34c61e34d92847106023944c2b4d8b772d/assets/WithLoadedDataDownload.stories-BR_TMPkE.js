import{f as b,j as a,r as i}from"./iframe-CTWtvW7G.js";import{O as u}from"./object-table-B_3mREKc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-1oxodiua.js";import"./Table-BdSkWfLG.js";import"./index-B5ZJn9Gm.js";import"./Dialog-BHpsFgur.js";import"./cross-DemFdpt3.js";import"./svgIconContainer-BmXJ4UZQ.js";import"./useBaseUiId-DaDRlDBy.js";import"./InternalBackdrop-Dsy70PHm.js";import"./composite-ChO4tO4T.js";import"./index-C7xMDZy7.js";import"./index-B-Gs1YNk.js";import"./index-BpiC_Az2.js";import"./useEventCallback-BUjhumMB.js";import"./SkeletonBar-2J5ZlZqG.js";import"./LoadingCell-BmFeLSi-.js";import"./ColumnConfigDialog-DaQ9CGwC.js";import"./DraggableList-dI-Uagza.js";import"./search-f_eDtzuq.js";import"./Input-Cyrr3EQP.js";import"./useControlled-Bb_4e2wz.js";import"./Button-CNLRkRTL.js";import"./small-cross-DGNbASsx.js";import"./ActionButton-CTmSX-Ar.js";import"./Checkbox-BoUG1HTj.js";import"./useValueChanged-BP2D4ODY.js";import"./CollapsiblePanel-BUNLf30L.js";import"./MultiColumnSortDialog-CgAFTARu.js";import"./MenuTrigger-CH7gRLYS.js";import"./CompositeItem-ByNmV234.js";import"./ToolbarRootContext-B4vVlVeR.js";import"./getDisabledMountTransitionStyles-memSlMK7.js";import"./getPseudoElementBounds-BgtJ_nId.js";import"./chevron-down-BEj-V-2_.js";import"./index-CFiZgKoS.js";import"./error-C-PnV0Ll.js";import"./BaseCbacBanner-B3MmGPxJ.js";import"./makeExternalStore-DSL-ADyx.js";import"./Tooltip-BJ2MNQOV.js";import"./PopoverPopup-BrAFaZYq.js";import"./toNumber-DuoDGiJo.js";import"./useOsdkClient-BiL_1Cwd.js";import"./tick-BugpwW7l.js";import"./DropdownField-CDHGj596.js";import"./withOsdkMetrics-B9XS-cmH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

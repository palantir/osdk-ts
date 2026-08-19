import{f as b,j as a,r as i}from"./iframe-DzLmQzfL.js";import{O as u}from"./object-table-BEYWSqeH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DYuv-bf-.js";import"./Table-BENlvreU.js";import"./index-CdQpjacm.js";import"./Dialog-BiDgKXsL.js";import"./cross-DfDMn0pr.js";import"./svgIconContainer-Jv28MIw9.js";import"./useBaseUiId-Bmp5LN4j.js";import"./InternalBackdrop-pKagafuB.js";import"./composite-Cez-p8GT.js";import"./index-D0Om1NOm.js";import"./index-ByLiAsET.js";import"./index-fUD05Gsl.js";import"./useEventCallback-B8lpys4D.js";import"./SkeletonBar-Bs8J-8ST.js";import"./LoadingCell-BNNKrPRM.js";import"./ColumnConfigDialog-KwDlSvr0.js";import"./DraggableList-BINn4pAx.js";import"./search-tY_g51mG.js";import"./Input-ea8HxTa0.js";import"./useControlled-AhpadjFe.js";import"./Button-DyUjkQv3.js";import"./small-cross-CfZYje-b.js";import"./ActionButton-CC-w0u8p.js";import"./Checkbox-CuTCRk_I.js";import"./useValueChanged-DS7g6QS1.js";import"./CollapsiblePanel-UEe2R4Qd.js";import"./MultiColumnSortDialog-Cp37JhTS.js";import"./MenuTrigger-eQ7_Xffg.js";import"./CompositeItem-BgbTo1rM.js";import"./ToolbarRootContext-BM7iC6VN.js";import"./getDisabledMountTransitionStyles-brOSu3I-.js";import"./getPseudoElementBounds-DqBxNzDr.js";import"./chevron-down-B52Hmy6V.js";import"./index-CdaZRfws.js";import"./error-BFLeOIbO.js";import"./BaseCbacBanner-DN_VBjDp.js";import"./makeExternalStore-Bw6HJp50.js";import"./Tooltip-CbYJzNWg.js";import"./PopoverPopup-B3ZeXY53.js";import"./debounce-CfJ7O41a.js";import"./useOsdkClient-DbRHoimk.js";import"./tick-qaJHrmvM.js";import"./DropdownField-CzUzhl01.js";import"./isEqual-1nX8sYVi.js";import"./withOsdkMetrics-lxs0PU1I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

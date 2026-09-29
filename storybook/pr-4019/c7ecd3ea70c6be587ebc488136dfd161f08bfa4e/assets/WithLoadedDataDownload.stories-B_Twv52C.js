import{f as b,j as a,r as i}from"./iframe-1Dw8hxFb.js";import{O as u}from"./object-table-BQSrfIgk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CV62D7uV.js";import"./Table-cECXhRXy.js";import"./index-BA__U3Gv.js";import"./Dialog-B_I-e6H5.js";import"./cross-D8760vWj.js";import"./svgIconContainer-D7jaIK1U.js";import"./useBaseUiId-D9Uc1gUI.js";import"./InternalBackdrop-DfOcQBOz.js";import"./composite-DMMpwO4Y.js";import"./index-Bk6hiZ0z.js";import"./index-FZsLUXa_.js";import"./index-CZwrVmPB.js";import"./useEventCallback-Ba_Pm_qQ.js";import"./SkeletonBar-JCt3RZbD.js";import"./LoadingCell-Ch8y5zgH.js";import"./ColumnConfigDialog-BCWRXHCN.js";import"./DraggableList-CqD_Wsql.js";import"./search-D_WMSsbB.js";import"./Input-DAIYzExG.js";import"./useControlled-BPQdQUzw.js";import"./Button-Dz_i3O8s.js";import"./small-cross-BTH7BlRY.js";import"./ActionButton-JzwOBgff.js";import"./Checkbox-DIYjSDeg.js";import"./useValueChanged-CY-MG59r.js";import"./CollapsiblePanel-BdgCVUfb.js";import"./MultiColumnSortDialog-DC_lUuFq.js";import"./MenuTrigger-CSrRdHFi.js";import"./CompositeItem-wJjKayF5.js";import"./ToolbarRootContext-DY2ntbcg.js";import"./getDisabledMountTransitionStyles-LDeu4Eg7.js";import"./getPseudoElementBounds-BR8haHch.js";import"./chevron-down-CctmHm9l.js";import"./index-C6j9YUgP.js";import"./error-CQRvTwte.js";import"./BaseCbacBanner-D1C4qKBB.js";import"./makeExternalStore-BxvWPf6c.js";import"./Tooltip-Cuzk6KX0.js";import"./PopoverPopup-UQJaLJOh.js";import"./debounce-aPhAAe4A.js";import"./useOsdkClient-B0vBm4Kq.js";import"./tick-DkycAfLr.js";import"./DropdownField-BQ7eO3O0.js";import"./isEqual-Cpx1W7t4.js";import"./withOsdkMetrics-DttttaWM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

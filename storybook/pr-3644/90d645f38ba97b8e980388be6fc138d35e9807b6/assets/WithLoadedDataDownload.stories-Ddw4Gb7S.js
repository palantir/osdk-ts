import{f as b,j as a,r as i}from"./iframe-Cf98Ygjx.js";import{O as u}from"./object-table-BE4ScZa3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGRkhuZN.js";import"./Table-bCdfGj8K.js";import"./index-C57_PxWD.js";import"./Dialog-C1DfGzzI.js";import"./cross-mzQtB7o4.js";import"./svgIconContainer-BrKn5b2n.js";import"./useBaseUiId-D80nceuW.js";import"./InternalBackdrop-Ci-Z1tQl.js";import"./composite-DvQhtj_T.js";import"./index-BX5iKx4l.js";import"./index-MubPeqKE.js";import"./index-DDcuG2Vu.js";import"./useEventCallback-C5btUZFK.js";import"./SkeletonBar-DBdtwvg_.js";import"./LoadingCell-CgRhMSdE.js";import"./ColumnConfigDialog-D8gmyMV7.js";import"./DraggableList-Dlud8IKQ.js";import"./search-Dsux-3Yf.js";import"./Input-CrmRjvgu.js";import"./useControlled-DM-C6ML_.js";import"./Button-CYF7X31R.js";import"./small-cross-ByrVnOpi.js";import"./ActionButton-Ei3gAu24.js";import"./Checkbox-DKysDqKr.js";import"./useValueChanged-BNQbpavl.js";import"./CollapsiblePanel-LYZJefVb.js";import"./MultiColumnSortDialog-D2IoFSZp.js";import"./MenuTrigger-6kgeQk_F.js";import"./CompositeItem-D3T_1VOe.js";import"./ToolbarRootContext-BRbv9aQv.js";import"./getDisabledMountTransitionStyles-BTyi3IkN.js";import"./getPseudoElementBounds-hyWipp0M.js";import"./chevron-down-I1Fk3xaX.js";import"./index-CqbQTdqb.js";import"./error-C4hBYiMW.js";import"./BaseCbacBanner-DkjXL8Zt.js";import"./makeExternalStore-BZ1D_0-9.js";import"./Tooltip-CAz1FoMc.js";import"./PopoverPopup-CxEVNg9q.js";import"./toNumber-BR0OLPsK.js";import"./useOsdkClient-BEA8LhAr.js";import"./tick-1I6fqCo9.js";import"./DropdownField-DLzs02D4.js";import"./withOsdkMetrics-DPosZT8S.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

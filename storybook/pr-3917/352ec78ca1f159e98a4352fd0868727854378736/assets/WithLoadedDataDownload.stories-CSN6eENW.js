import{f as b,j as a,r as i}from"./iframe-lVIo6mCc.js";import{O as u}from"./object-table-DXxQNff2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BPCknu7S.js";import"./Table-nSjaGULp.js";import"./index-sQKHJ0R4.js";import"./Dialog-BFgYJDCN.js";import"./cross-DDW7y3Rx.js";import"./svgIconContainer-KAJria2X.js";import"./useBaseUiId-Bb_Owoni.js";import"./InternalBackdrop-hjJtUdco.js";import"./composite-Dyu8jPHN.js";import"./index-BPLBY7PN.js";import"./index-KnI2DQbj.js";import"./index-Dxls_Rr8.js";import"./useEventCallback-B3tJ4PYp.js";import"./SkeletonBar-DSmQVQye.js";import"./LoadingCell-CQ4ITvhW.js";import"./ColumnConfigDialog-CHgO6Ibs.js";import"./DraggableList-jP9CGfbS.js";import"./search-5GVEDD9j.js";import"./Input-BC_GUukM.js";import"./useControlled-D2ATBKpk.js";import"./Button-HHhZVC20.js";import"./small-cross-DJ1ySZs1.js";import"./ActionButton-ClryqIds.js";import"./Checkbox-By8aDHHp.js";import"./useValueChanged-CA7KhCt6.js";import"./CollapsiblePanel-C8RDA-GN.js";import"./MultiColumnSortDialog-LsoG3i1d.js";import"./MenuTrigger-BPqfQFrm.js";import"./CompositeItem-KgTOqVUP.js";import"./ToolbarRootContext-BEDTSOO-.js";import"./getDisabledMountTransitionStyles-BeNJaj2_.js";import"./getPseudoElementBounds-ChYvstEB.js";import"./chevron-down-DQF1xsk8.js";import"./index-amUPlgmX.js";import"./error-CvWvuZvg.js";import"./BaseCbacBanner-8ONf2RQq.js";import"./makeExternalStore-D7Usbb1F.js";import"./Tooltip-9AFmCZ_D.js";import"./PopoverPopup-3MhqAYn3.js";import"./debounce-COYGEiqP.js";import"./useOsdkClient-di6Xqfxh.js";import"./tick-DzyNfBq0.js";import"./DropdownField-Bz3GxUH-.js";import"./isEqual-D4ajbd5M.js";import"./withOsdkMetrics-DSn6dU66.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

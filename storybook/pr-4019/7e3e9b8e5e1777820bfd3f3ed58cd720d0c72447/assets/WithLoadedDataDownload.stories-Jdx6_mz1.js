import{f as b,j as a,r as i}from"./iframe-lKHX2RT0.js";import{O as u}from"./object-table-Bc4WIn5Y.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CPQlIB48.js";import"./Table-CL_aIROu.js";import"./index-DN0L_sQz.js";import"./Dialog-CTKIyT5I.js";import"./cross-BS8Ys0sh.js";import"./svgIconContainer-CI8K89aC.js";import"./useBaseUiId-BNpyRqoY.js";import"./InternalBackdrop-CN7gDkpU.js";import"./composite-Cid_avm0.js";import"./index-C5DiV1o7.js";import"./index-nDWqsS2b.js";import"./index-CIthZ6_f.js";import"./useEventCallback-BiQpxw87.js";import"./SkeletonBar-CjbRBu-J.js";import"./LoadingCell-CqqZdURq.js";import"./ColumnConfigDialog-DxRJKGk2.js";import"./DraggableList-yPuiK1Qh.js";import"./search-DYMiyHIs.js";import"./Input-Bw27QJ9U.js";import"./useControlled-CuEFhIkH.js";import"./Button-BEKYhgY7.js";import"./small-cross-gLhT5iIM.js";import"./ActionButton-5BHbkKfJ.js";import"./Checkbox-DsSCYp1f.js";import"./useValueChanged-CgAPPxks.js";import"./CollapsiblePanel-C2fgakez.js";import"./MultiColumnSortDialog-BclQGH37.js";import"./MenuTrigger-Cz8IFqra.js";import"./CompositeItem-YCGN9OAN.js";import"./ToolbarRootContext-DHnu7bP1.js";import"./getDisabledMountTransitionStyles-BaPsLnpd.js";import"./getPseudoElementBounds-CtuiofEl.js";import"./chevron-down-5rT0_jwP.js";import"./index-mAvkRfFj.js";import"./error-Zaa9-6nd.js";import"./BaseCbacBanner-B1P_USXd.js";import"./makeExternalStore-BxeHtCAo.js";import"./Tooltip-CxNH616S.js";import"./PopoverPopup-VlygiTLm.js";import"./debounce-CjBjqfvI.js";import"./useOsdkClient-BttjugBK.js";import"./tick-DFRjlTY6.js";import"./DropdownField-dvCdI0vW.js";import"./isEqual-6_xjYyh7.js";import"./withOsdkMetrics-BcneEdmh.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

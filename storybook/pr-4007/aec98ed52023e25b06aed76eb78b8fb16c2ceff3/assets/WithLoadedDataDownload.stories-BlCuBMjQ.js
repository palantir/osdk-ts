import{f as b,j as a,r as i}from"./iframe-B-AKwe0U.js";import{O as u}from"./object-table-BNOEdiM_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-f3uNRD8c.js";import"./Table-CO94dN8E.js";import"./index-BTKqd_0M.js";import"./Dialog-ibdXxOvJ.js";import"./cross-DA2KL76X.js";import"./svgIconContainer-sFjpt_d1.js";import"./useBaseUiId-BzL2rBHV.js";import"./InternalBackdrop-D0ckCYHs.js";import"./composite-C2ZOTtj7.js";import"./index-DbIw_M6r.js";import"./index-DK2QIJxh.js";import"./index-D6DA4SgY.js";import"./useEventCallback-qJT1RIau.js";import"./SkeletonBar-B_0fbXLl.js";import"./LoadingCell-BuvDz8J8.js";import"./ColumnConfigDialog-DmCUXP7L.js";import"./DraggableList-DDl0_2vl.js";import"./search-BeqvshXG.js";import"./Input-C_it6lB9.js";import"./useControlled-DAZJskjr.js";import"./Button-DSXsoF7A.js";import"./small-cross-Cnf0y2Tr.js";import"./ActionButton-3WTL5l5D.js";import"./Checkbox-DR5PD6Rb.js";import"./useValueChanged-CwePdTgQ.js";import"./CollapsiblePanel-T50sNV5u.js";import"./MultiColumnSortDialog-BHvWd_sC.js";import"./MenuTrigger-CTvmiXZ1.js";import"./CompositeItem-BmFykBzh.js";import"./ToolbarRootContext-CAFwtwDJ.js";import"./getDisabledMountTransitionStyles-CziK-4zN.js";import"./getPseudoElementBounds-Byk01WJS.js";import"./chevron-down-CI9pzF65.js";import"./index-ZM1N2Vft.js";import"./error-C0T-x3vg.js";import"./BaseCbacBanner-BEkgwvfz.js";import"./makeExternalStore-CwQpDBtV.js";import"./Tooltip-BUiog_49.js";import"./PopoverPopup-CXdC5QUX.js";import"./debounce-CTxyeqac.js";import"./useOsdkClient-DOwl5ySm.js";import"./tick-BFHv-Vnu.js";import"./DropdownField-YeSQmSBB.js";import"./isEqual-B1KV-EfI.js";import"./withOsdkMetrics-DWcYXPst.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

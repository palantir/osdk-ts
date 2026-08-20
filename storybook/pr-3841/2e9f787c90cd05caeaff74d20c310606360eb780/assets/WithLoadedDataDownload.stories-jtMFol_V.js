import{f as b,j as a,r as i}from"./iframe-DHxsU2_I.js";import{O as u}from"./object-table-Wmcnqtqi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BR3ABpJE.js";import"./Table-CQZZcuKq.js";import"./index-vnjM7992.js";import"./Dialog-BlJuLB3G.js";import"./cross-RIzAoTK6.js";import"./svgIconContainer-B2plqKMw.js";import"./useBaseUiId-pTRtJO1U.js";import"./InternalBackdrop-DUaK7Jhb.js";import"./composite-6SoNaUP7.js";import"./index-CDRJBt8l.js";import"./index-BjXFS9V3.js";import"./index-C4c1CFQV.js";import"./useEventCallback-CqytFUcr.js";import"./SkeletonBar-Tdn8qzhi.js";import"./LoadingCell-BixbKxJ-.js";import"./ColumnConfigDialog-CkumhtfO.js";import"./DraggableList-BFqnGUBM.js";import"./search-Cyzg0Z92.js";import"./Input-CHAbdjgV.js";import"./useControlled-DDSoMtR7.js";import"./Button-DytbmDZO.js";import"./small-cross-Bagi3YzR.js";import"./ActionButton-Dwew71_H.js";import"./Checkbox-DPm7-wkJ.js";import"./useValueChanged-BI16DUVB.js";import"./CollapsiblePanel-DHckIMdd.js";import"./MultiColumnSortDialog-R7s0XjIw.js";import"./MenuTrigger-BxdhLVXv.js";import"./CompositeItem-B_q3XIVN.js";import"./ToolbarRootContext-Brnit9i4.js";import"./getDisabledMountTransitionStyles-uvRwRUIa.js";import"./getPseudoElementBounds-Eh1BWRFI.js";import"./chevron-down-zF0nXAC0.js";import"./index-COpwRMNV.js";import"./error-CPSw0Cte.js";import"./BaseCbacBanner-WtSiJJpE.js";import"./makeExternalStore-BfJvolns.js";import"./Tooltip-CJPtjYYA.js";import"./PopoverPopup-CEuqgSR5.js";import"./debounce-tNYRe4e5.js";import"./useOsdkClient-CORV7Qba.js";import"./tick-CquZwjil.js";import"./DropdownField-BRqSpCyG.js";import"./isEqual-DIqld6JC.js";import"./withOsdkMetrics-flaJFZYR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

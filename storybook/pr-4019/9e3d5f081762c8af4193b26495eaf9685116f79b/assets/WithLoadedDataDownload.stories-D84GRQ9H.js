import{f as b,j as a,r as i}from"./iframe-Djf7Pdxr.js";import{O as u}from"./object-table-DFZPT3wI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-bqmPmNVM.js";import"./Table-CUYanXua.js";import"./index-q-X2FPlx.js";import"./Dialog-CqoD48et.js";import"./cross-DFIWw1bP.js";import"./svgIconContainer-BOlRpQyp.js";import"./useBaseUiId-CFhAQZOZ.js";import"./InternalBackdrop-CkSj7F1A.js";import"./composite-IAQwOYh1.js";import"./index-Br-LNr6E.js";import"./index-B_8x8Udt.js";import"./index-LG6ddP-y.js";import"./useEventCallback-B4USqeZP.js";import"./SkeletonBar-Di0gRprg.js";import"./LoadingCell-nhC1WRnp.js";import"./ColumnConfigDialog-qIiF7Qmm.js";import"./DraggableList-B59aQ1_o.js";import"./search-Ddeiu8tt.js";import"./Input-BOeBxQZ8.js";import"./useControlled-DBGPJ9YV.js";import"./Button-DSU1CbLm.js";import"./small-cross-DLOt1VKh.js";import"./ActionButton-Deev-KTG.js";import"./Checkbox-CwEaVyEP.js";import"./useValueChanged-BePRkA2B.js";import"./CollapsiblePanel-CfVuO8FY.js";import"./MultiColumnSortDialog-DwWScOiH.js";import"./MenuTrigger-CRUWzkdL.js";import"./CompositeItem-CA-IJTMc.js";import"./ToolbarRootContext-DMoWDH_V.js";import"./getDisabledMountTransitionStyles-DC6748tP.js";import"./getPseudoElementBounds-CrTEc-vZ.js";import"./chevron-down-CuR5Ei1Z.js";import"./index-3wqM3UEs.js";import"./error-D2_XhANl.js";import"./BaseCbacBanner-5-cpvsaG.js";import"./makeExternalStore-D2eKyzGX.js";import"./Tooltip-B7UeItRk.js";import"./PopoverPopup-aCIXJynx.js";import"./debounce-Dwy6RrjG.js";import"./useOsdkClient-Crp_QmkC.js";import"./tick-CwOgbQYe.js";import"./DropdownField-BbRr8BI8.js";import"./isEqual-BXTqGgF_.js";import"./withOsdkMetrics-Bs-xSy0E.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

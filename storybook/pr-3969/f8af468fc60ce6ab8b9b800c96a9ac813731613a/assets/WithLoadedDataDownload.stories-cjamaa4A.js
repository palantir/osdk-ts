import{f as b,j as a,r as i}from"./iframe-BHUFYaIi.js";import{O as u}from"./object-table-BpSuzW6M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-XnuLqDXH.js";import"./Table-CYeOpkhw.js";import"./index-Cv4N1cyr.js";import"./Dialog-Cp13S4Si.js";import"./cross-BOaBzgsR.js";import"./svgIconContainer-BwQXc51L.js";import"./useBaseUiId-MuM6uWGO.js";import"./InternalBackdrop-DUSHaGPj.js";import"./composite-B11uKuMK.js";import"./index-BPIvu6CK.js";import"./index-pncntrbL.js";import"./index-BxDALGli.js";import"./useEventCallback-DlrRREsq.js";import"./SkeletonBar-ij_FTAsS.js";import"./LoadingCell-DptSXl9K.js";import"./ColumnConfigDialog-DjN3HRYd.js";import"./DraggableList-lLbeAFUA.js";import"./search-CLJDIGSY.js";import"./Input-DjWGIh_z.js";import"./useControlled-CDjv9IaU.js";import"./Button-BLcFnS6Y.js";import"./small-cross-D9b89U2o.js";import"./ActionButton-D74MdW_-.js";import"./Checkbox-DyL8kHLu.js";import"./useValueChanged-BY36D3U1.js";import"./CollapsiblePanel-DUF4My8r.js";import"./MultiColumnSortDialog-Tg8SCamW.js";import"./MenuTrigger-B54q71Ab.js";import"./CompositeItem-MMdNYb42.js";import"./ToolbarRootContext-BeFb59Mm.js";import"./getDisabledMountTransitionStyles-Cs7RsEkT.js";import"./getPseudoElementBounds-DtwWcLj3.js";import"./chevron-down-BXEOl8Ri.js";import"./index-CWLFPPbc.js";import"./error-V_uXrOkx.js";import"./BaseCbacBanner-4MO9OZQU.js";import"./makeExternalStore-DlAYw1no.js";import"./Tooltip-CjOEcU2b.js";import"./PopoverPopup-ktlHKRLg.js";import"./debounce-CcDJlsBH.js";import"./useOsdkClient-Dq42XRO4.js";import"./tick-BKcWfYV_.js";import"./DropdownField-6qZcqvj8.js";import"./isEqual-Bx2Ngtz_.js";import"./withOsdkMetrics-D-xlszSM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

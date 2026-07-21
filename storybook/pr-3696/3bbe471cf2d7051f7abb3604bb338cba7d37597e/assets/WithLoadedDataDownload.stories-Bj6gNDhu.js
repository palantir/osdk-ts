import{f as b,j as a,r as i}from"./iframe-1zlKUcSc.js";import{O as u}from"./object-table-0zGasvWZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTkLWgF6.js";import"./Table-qa_QPh6R.js";import"./index-DiPEpNnl.js";import"./Dialog-Dv1LegWm.js";import"./cross-BuIFoaJh.js";import"./svgIconContainer-C8IZLkS0.js";import"./useBaseUiId-6JzTpPfQ.js";import"./InternalBackdrop-DLdRs8Q_.js";import"./composite-DWazgZ7T.js";import"./index-HXc49RyK.js";import"./index-BcuLOOrQ.js";import"./index-YAqT93Eu.js";import"./useEventCallback-DogtZdFU.js";import"./SkeletonBar-BdjjM6wz.js";import"./LoadingCell-BwTv40Ii.js";import"./ColumnConfigDialog-Sq7J_f_J.js";import"./DraggableList-DkLb-DCG.js";import"./search-Dv_yGgK4.js";import"./Input-HecR9wga.js";import"./useControlled-FW3ZNM_t.js";import"./Button-CY55YNlH.js";import"./small-cross-ClgWOj27.js";import"./ActionButton-C1Q6FCZj.js";import"./Checkbox-B3qwtiI8.js";import"./useValueChanged-DiFtdmMU.js";import"./CollapsiblePanel-Du9x8fCY.js";import"./MultiColumnSortDialog-Dbs6a56B.js";import"./MenuTrigger-DePITIk0.js";import"./CompositeItem-D-oGgt8S.js";import"./ToolbarRootContext-CB0hAZMy.js";import"./getDisabledMountTransitionStyles-DsJe-dBa.js";import"./getPseudoElementBounds-DLWZSL_K.js";import"./chevron-down-Bey2Po21.js";import"./index-h_0uM_IG.js";import"./error-DfNGl4TZ.js";import"./BaseCbacBanner-DtgjtSCa.js";import"./makeExternalStore-BSSkPAFY.js";import"./Tooltip-CTaReriA.js";import"./PopoverPopup-D3-jGPJC.js";import"./toNumber-Cdp4tCLf.js";import"./useOsdkClient-tRRl3zj7.js";import"./tick-D7CXLxix.js";import"./DropdownField-BNqwN1Kc.js";import"./withOsdkMetrics-CJWuisvC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

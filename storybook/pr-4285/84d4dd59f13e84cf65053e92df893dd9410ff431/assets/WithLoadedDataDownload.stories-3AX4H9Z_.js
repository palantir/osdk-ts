import{f as b,j as a,r as i}from"./iframe-BJfHzdWS.js";import{O as u}from"./object-table-l7XN4Dbb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Be4hJibr.js";import"./Table-jF1s7PG6.js";import"./index-BSLvxwbk.js";import"./Dialog-1fpEI_I_.js";import"./cross-VeKqoNmu.js";import"./svgIconContainer-BhMqWeRt.js";import"./useBaseUiId-Xn3MqoRt.js";import"./InternalBackdrop-BzTHj0lc.js";import"./composite-CrQSucJ3.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./index-SmxUvTww.js";import"./useEventCallback-CZI3wJzb.js";import"./SkeletonBar-bDcSNPdy.js";import"./LoadingCell-BY5Z7yg9.js";import"./ColumnConfigDialog-C94jaurd.js";import"./DraggableList-BE1mk1LV.js";import"./search-BzsA8JvQ.js";import"./Input-D-4Pcd1I.js";import"./useControlled-wFQSRpl4.js";import"./Button-CRGaJZKK.js";import"./small-cross-Cz9VsZUQ.js";import"./ActionButton-oml20GK7.js";import"./Checkbox-CjRQW81g.js";import"./useValueChanged-CGAdYuDI.js";import"./CollapsiblePanel-D9aghLn1.js";import"./MultiColumnSortDialog-D6hD_uIF.js";import"./MenuTrigger-BxuUnaU_.js";import"./CompositeItem-BKpyjtDM.js";import"./ToolbarRootContext-C9Lowhby.js";import"./getDisabledMountTransitionStyles-COzoDZ6v.js";import"./getPseudoElementBounds-zMviCxRX.js";import"./chevron-down-DcDfg2mn.js";import"./index-N4ZXm_T-.js";import"./error-D3R8RgSf.js";import"./BaseCbacBanner-CmLJNbPo.js";import"./makeExternalStore-DIVL--_e.js";import"./Tooltip-C_0TZ3Gg.js";import"./PopoverPopup-CX838QZ3.js";import"./debounce-DdyhzCuY.js";import"./useOsdkClient-_bAI4gJ8.js";import"./tick-DV36iul2.js";import"./DropdownField-BpAH7R9v.js";import"./isEqual-Bsbd3Ppd.js";import"./withOsdkMetrics-DUXg2PFQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Dz1VB-Ug.js";import{O as u}from"./object-table-BaVt1PJE.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-cJTn69LB.js";import"./Table-CDep-vX1.js";import"./index-DpMaRJGq.js";import"./Dialog-BSe_V3kU.js";import"./cross-BHVqJpxe.js";import"./svgIconContainer-D2McpvpD.js";import"./useBaseUiId-DBeQxEGH.js";import"./InternalBackdrop-DFd25Tom.js";import"./composite-DFM5sFvF.js";import"./index-BrZlGDbg.js";import"./index-B09TTsrW.js";import"./index-CBxyclgJ.js";import"./useEventCallback-Co8DaEHE.js";import"./SkeletonBar-D5gnK4Nn.js";import"./LoadingCell-DTNteS0e.js";import"./ColumnConfigDialog-Du9Krsdc.js";import"./DraggableList-Bcfu7StV.js";import"./search-CkZGsmzb.js";import"./Input-BVvBS9l5.js";import"./useControlled-qV-s3roQ.js";import"./Button-CXoONGN_.js";import"./small-cross-ZF88MpRa.js";import"./ActionButton-BvfsH6QL.js";import"./Checkbox-C38CRGr-.js";import"./useValueChanged-C5v-AM3H.js";import"./CollapsiblePanel-DEVuWmUh.js";import"./MultiColumnSortDialog-DuAwsl_j.js";import"./MenuTrigger-BsxyDBhs.js";import"./CompositeItem-CtgUzBYo.js";import"./ToolbarRootContext-CfOvFLMo.js";import"./getDisabledMountTransitionStyles-DZer-X4G.js";import"./getPseudoElementBounds-CGtNbmZa.js";import"./chevron-down-MQzS0zY-.js";import"./index-CX5UJqJP.js";import"./error-DU1smNA0.js";import"./BaseCbacBanner-DDKG5AVP.js";import"./makeExternalStore-BALv-RXc.js";import"./Tooltip-CL5hRyRF.js";import"./PopoverPopup-DwNORN_q.js";import"./debounce-AC8pwCKA.js";import"./useOsdkClient-yUbLwWQs.js";import"./tick-DIC-WOhq.js";import"./DropdownField-C1qVSNaq.js";import"./isEqual-BXcx9b1w.js";import"./withOsdkMetrics-CSiTUGv5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

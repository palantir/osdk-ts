import{f as b,j as a,r as i}from"./iframe-Bu669Pxz.js";import{O as u}from"./object-table-DK52PO3J.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BsSow9E-.js";import"./index-DKHlcWi3.js";import"./Dialog-BwCvlknS.js";import"./cross-6sB-IXgJ.js";import"./svgIconContainer-zdH7oio0.js";import"./useBaseUiId-B-sZe3p-.js";import"./InternalBackdrop-DFCC9SF7.js";import"./composite-C8rBSBTd.js";import"./index-Qt20q_8J.js";import"./index-DtY732wl.js";import"./index-ZPPDUEEy.js";import"./useEventCallback-Dh0fuerp.js";import"./SkeletonBar-B6C4eUYl.js";import"./LoadingCell-CA52xOUo.js";import"./ColumnConfigDialog-BHyVuCmw.js";import"./DraggableList-CA70q-wM.js";import"./search-083fpx5Y.js";import"./Input-bVe5DU0v.js";import"./useControlled-DxXQTGIF.js";import"./Button-qSnmCYaa.js";import"./small-cross-B8RPZtO3.js";import"./ActionButton-D6nzOa4u.js";import"./Checkbox-BCCb0-f8.js";import"./useValueChanged-B3n0Qzyy.js";import"./CollapsiblePanel-D21pB3lg.js";import"./MultiColumnSortDialog-BP0oqUUy.js";import"./MenuTrigger-C6YgD8em.js";import"./CompositeItem-BEsWan-K.js";import"./ToolbarRootContext-BLCkh9_F.js";import"./getDisabledMountTransitionStyles-D16icKYZ.js";import"./getPseudoElementBounds-D1iyZfNX.js";import"./chevron-down-Cy5tfknz.js";import"./index-DEkRoDzJ.js";import"./error-BWta7cvF.js";import"./BaseCbacBanner-BlFOx_qQ.js";import"./makeExternalStore-BcdadG9D.js";import"./Tooltip-D205HYzH.js";import"./PopoverPopup-rL_9M6MP.js";import"./debounce-DACEF8BV.js";import"./useOsdkClient-DffLg-Qv.js";import"./tick-CYydrRhB.js";import"./DropdownField-DaafnRcr.js";import"./isEqual-BlD-tDfk.js";import"./withOsdkMetrics-DgxQm_Yv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

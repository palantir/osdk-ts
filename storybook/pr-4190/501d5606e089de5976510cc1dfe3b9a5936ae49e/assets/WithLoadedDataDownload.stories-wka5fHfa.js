import{f as b,j as a,r as i}from"./iframe-BaqisVl-.js";import{O as u}from"./object-table-N9TioOP6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BNi0jLvn.js";import"./Table-CmYmfT6c.js";import"./index-DsJxcxuD.js";import"./Dialog-EoiXNhL7.js";import"./cross-NcNTP23a.js";import"./svgIconContainer-TSbWa_lF.js";import"./useBaseUiId-CZNOvWOX.js";import"./InternalBackdrop-up968Klp.js";import"./composite-DaM8qI8D.js";import"./index-DVQ_HGj7.js";import"./index-Dku8OroJ.js";import"./index-A62OeQPQ.js";import"./useEventCallback-DY-p_fZ5.js";import"./SkeletonBar-fHefpQx1.js";import"./LoadingCell-CZn5d-3r.js";import"./ColumnConfigDialog-mI5vm6MR.js";import"./DraggableList-CT2mXdMy.js";import"./search-xoA6p7gs.js";import"./Input-CegZe646.js";import"./useControlled-CryTPf8E.js";import"./Button-BTfyWfru.js";import"./small-cross-BYjsDC9b.js";import"./ActionButton-Cn9rIuq9.js";import"./Checkbox-xYsvmbaU.js";import"./useValueChanged-CZOqhP_j.js";import"./CollapsiblePanel-D6lMZr7T.js";import"./MultiColumnSortDialog-q0IiDNWX.js";import"./MenuTrigger-Cu7J25is.js";import"./CompositeItem-oqc0csOw.js";import"./ToolbarRootContext-DvsCcilH.js";import"./getDisabledMountTransitionStyles-CHGeqOic.js";import"./getPseudoElementBounds-BGR3l_iX.js";import"./chevron-down-DUYAtgkB.js";import"./index-fm-M8VrQ.js";import"./error-USmwsDsu.js";import"./BaseCbacBanner-CUsDT1Gr.js";import"./makeExternalStore-DaHYiupK.js";import"./Tooltip-Cy4Rx_YN.js";import"./PopoverPopup-BpgX9bSu.js";import"./debounce-BYezYolD.js";import"./useOsdkClient-D7dXXw4f.js";import"./tick-Sp8vA4eE.js";import"./DropdownField-S_mE2t2D.js";import"./isEqual-eVn1E-7x.js";import"./withOsdkMetrics-CQLdSUZI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

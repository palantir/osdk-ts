import{f as b,j as a,r as i}from"./iframe-C_ysWNhq.js";import{O as u}from"./object-table-Onb8y1Nl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0JwDfT_.js";import"./Table-BeiJE8WB.js";import"./index-D8k-dqCc.js";import"./Dialog-DAZHzVkY.js";import"./cross-Cks-uTaq.js";import"./svgIconContainer-DPwpyqoW.js";import"./useBaseUiId-B8q5gmFn.js";import"./InternalBackdrop-DqvtyXTc.js";import"./composite-PAhMiX3w.js";import"./index-BT7QjpST.js";import"./index-1cFlDnPE.js";import"./index-1eqntDw1.js";import"./useEventCallback-DPd3byDr.js";import"./SkeletonBar-BFhlXhJF.js";import"./LoadingCell-2MeogVKx.js";import"./ColumnConfigDialog-S153LwhW.js";import"./DraggableList-CfIzFJ4k.js";import"./search-xeTrpNpN.js";import"./Input-BrUW9GIt.js";import"./useControlled-B4G6FObT.js";import"./Button-BKcb8JBm.js";import"./small-cross-Dk7JcshC.js";import"./ActionButton-B5_maKSp.js";import"./Checkbox-CBOMkCDn.js";import"./useValueChanged-piBol0Lc.js";import"./CollapsiblePanel-B8zrkzOu.js";import"./MultiColumnSortDialog-C4lE6AcH.js";import"./MenuTrigger-88GoxliD.js";import"./CompositeItem-DiTioOKz.js";import"./ToolbarRootContext-DfBDsER3.js";import"./getDisabledMountTransitionStyles-Dc1W8hh3.js";import"./getPseudoElementBounds-BMpXcTKf.js";import"./chevron-down-Cj8R-hIH.js";import"./index-Ck0sGKHu.js";import"./error-DcGiqau0.js";import"./BaseCbacBanner-OU5akw7o.js";import"./makeExternalStore-B5fwAHq7.js";import"./Tooltip-BehVKe_w.js";import"./PopoverPopup-CcARrEno.js";import"./debounce-CIEAz8C3.js";import"./useOsdkClient-BbU_1F98.js";import"./tick-CPHUZoWi.js";import"./DropdownField-DNkGYaLi.js";import"./isEqual-dzPNJu1I.js";import"./withOsdkMetrics-FlvAdwaB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BhaVgwJF.js";import{O as u}from"./object-table-DiW7p_QI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqVS_s6V.js";import"./Table-B1k4FsmT.js";import"./index-BDOsboJF.js";import"./Dialog-H8B49iIP.js";import"./cross-V5vChtTh.js";import"./svgIconContainer-DakBFGqu.js";import"./useBaseUiId-B92PsFWM.js";import"./InternalBackdrop-DpHzvy6t.js";import"./composite-Jl80SJua.js";import"./index-CdWjQmdV.js";import"./index-Cebglo5K.js";import"./index-Df3mUQeh.js";import"./useEventCallback-Dn3j0dYV.js";import"./SkeletonBar-lgQMBjwx.js";import"./LoadingCell-BZugiiuW.js";import"./ColumnConfigDialog-8IaAsnfe.js";import"./DraggableList-MSy0AsOL.js";import"./Input-AvHqkE0x.js";import"./useControlled-1bY20Uqz.js";import"./Button-CrvtM6Ii.js";import"./small-cross-CpbviC3G.js";import"./ActionButton-C64JpTFY.js";import"./Checkbox-CVGL6pox.js";import"./minus-DChzWoWb.js";import"./useValueChanged-CFfSnGFn.js";import"./caret-down-ulVhd9XZ.js";import"./CollapsiblePanel-C0hbQlI6.js";import"./MultiColumnSortDialog-CBEfkC1v.js";import"./MenuTrigger-t9G2SONU.js";import"./CompositeItem-HgTZsmh3.js";import"./ToolbarRootContext-CmBg7Gns.js";import"./getDisabledMountTransitionStyles-DuAiKipC.js";import"./getPseudoElementBounds-lwl1_POG.js";import"./chevron-down-DWlReEPz.js";import"./index-DZ1wXuHu.js";import"./error-CiNhj8KY.js";import"./BaseCbacBanner-CkQW8Gd9.js";import"./makeExternalStore-CHUl6C6O.js";import"./Tooltip-CaeN1XIx.js";import"./PopoverPopup-CQVRZxHb.js";import"./toNumber-Dm97kWV4.js";import"./useOsdkClient-C6dw0e9u.js";import"./DropdownField-BBd_JPfq.js";import"./withOsdkMetrics-B6RafAIK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

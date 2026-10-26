import{f as b,j as a,r as i}from"./iframe-DPxX1jR-.js";import{O as u}from"./object-table-6p4neQQt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl3woUlG.js";import"./Table-DQT7xoCm.js";import"./index-D6OGPiBG.js";import"./Dialog-DfzPTpFX.js";import"./cross-BO6SlDqo.js";import"./svgIconContainer-DQ5sgBjC.js";import"./useBaseUiId-BKCJofKJ.js";import"./InternalBackdrop-BDTL8dMK.js";import"./composite-BcAnYQh9.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./index-DSDqA_Ss.js";import"./useEventCallback-Bvjybx93.js";import"./SkeletonBar-BGjKDv0N.js";import"./LoadingCell-BPcqwqea.js";import"./ColumnConfigDialog-BMebv_uz.js";import"./DraggableList-BEhiYx7J.js";import"./search-B5aBIEi3.js";import"./Input-DFF83YG7.js";import"./useControlled-C7cllYbm.js";import"./Button-DQXd7O9l.js";import"./small-cross-BDDqqJMU.js";import"./ActionButton-1Q3tX4Fy.js";import"./Checkbox-DcG_vN9W.js";import"./useValueChanged-i5EMwMR_.js";import"./CollapsiblePanel-HGrFWplr.js";import"./MultiColumnSortDialog-F8EVd4m9.js";import"./MenuTrigger-CbBbJ5Lv.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./getDisabledMountTransitionStyles-DXbjzshq.js";import"./getPseudoElementBounds-CjxlBCdr.js";import"./chevron-down-DxRPC7K7.js";import"./index-CmhRQ5VM.js";import"./error-ChO0zkiL.js";import"./BaseCbacBanner-R2dfzvOz.js";import"./makeExternalStore-64rcfTGa.js";import"./Tooltip-BOGu4iQx.js";import"./PopoverPopup-BLHlUUDe.js";import"./debounce-DlKAS5ft.js";import"./useOsdkClient-BjyL2cyC.js";import"./tick-CTGvo1gM.js";import"./DropdownField-CpYwJ58e.js";import"./isEqual-CamMyuEt.js";import"./withOsdkMetrics-NcqisCon.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

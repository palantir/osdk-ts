import{f as b,j as a,r as i}from"./iframe-yE_ETOHr.js";import{O as u}from"./object-table-BjhZj-tz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-o6WvwBPl.js";import"./Table-B_nuRyzL.js";import"./index-D1aMrwQT.js";import"./Dialog-B1J12Dvj.js";import"./cross-BNS_XELI.js";import"./svgIconContainer-DmRPPlT8.js";import"./useBaseUiId-DRDeEW1q.js";import"./InternalBackdrop-B-FAyfTG.js";import"./composite-DwgnebsF.js";import"./index-D1PfGPZb.js";import"./index-xOQiG_tn.js";import"./index-BsSjW-k_.js";import"./useEventCallback-qSc14G5u.js";import"./SkeletonBar-RaH0ddqY.js";import"./LoadingCell-D8tQGlu0.js";import"./ColumnConfigDialog-DQj-JRN2.js";import"./DraggableList-DcunIk8q.js";import"./search-Dmjh9lBr.js";import"./Input-CCmIVrO8.js";import"./useControlled-DKJFXIxk.js";import"./isEqual-Dvhw8L28.js";import"./isObject-DIgVF9AU.js";import"./Button-k0rMWkk9.js";import"./ActionButton-rUgKZnwm.js";import"./Checkbox-CpqF5CUK.js";import"./useValueChanged-B7Z22nGK.js";import"./CollapsiblePanel-DopAfRD9.js";import"./MultiColumnSortDialog-w6hAw1Rf.js";import"./MenuTrigger-DmPE_jns.js";import"./CompositeItem-B15H_S00.js";import"./ToolbarRootContext-CIeM8gUf.js";import"./getDisabledMountTransitionStyles-CmWzICwb.js";import"./getPseudoElementBounds-Df6p-cDj.js";import"./chevron-down-CFTHRzae.js";import"./index-DFlEw2oQ.js";import"./error-DWwlREAa.js";import"./BaseCbacBanner-BmwoVVw8.js";import"./makeExternalStore-D8THS2fM.js";import"./Tooltip-C5N5ugXu.js";import"./PopoverPopup--km0kfjJ.js";import"./toNumber-CpigVrms.js";import"./useOsdkClient-CAzVrqZU.js";import"./tick-CmdWWdcU.js";import"./DropdownField-VyZsug_6.js";import"./withOsdkMetrics-DnRB_DeO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

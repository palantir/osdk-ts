import{f as b,j as a,r as i}from"./iframe-D3lsV3bM.js";import{O as u}from"./object-table-BOmVYPfn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0DSvxC2.js";import"./Table-DFux7SeR.js";import"./index-D11sJHPZ.js";import"./Dialog-D7B0p3tF.js";import"./cross-_tMTONVW.js";import"./svgIconContainer-DfM6sw_L.js";import"./useBaseUiId-6o6e03Dj.js";import"./InternalBackdrop-DWpv92EC.js";import"./composite-9R0QeF6F.js";import"./index-BLDv51Tl.js";import"./index-Dxb68UZ2.js";import"./index-DB3xED8F.js";import"./useEventCallback-DosG7uBT.js";import"./SkeletonBar-DfbOeTxN.js";import"./LoadingCell-BVrMoXeR.js";import"./ColumnConfigDialog-B5QpH_8k.js";import"./DraggableList-MiRMJAiS.js";import"./search-O4ijEoIs.js";import"./Input-CiqPSABQ.js";import"./useControlled-bq-ZFaDd.js";import"./Button-DakXe1NE.js";import"./small-cross-DsJLV_gX.js";import"./ActionButton-B7Qk2YJZ.js";import"./Checkbox-DjcmhqAX.js";import"./useValueChanged-DQOtE3bQ.js";import"./CollapsiblePanel-D933QPH8.js";import"./MultiColumnSortDialog-B3y84jTf.js";import"./MenuTrigger-C46HpHgT.js";import"./CompositeItem-DJyMopxi.js";import"./ToolbarRootContext-Bgqyz9vO.js";import"./getDisabledMountTransitionStyles-dC28mhVQ.js";import"./getPseudoElementBounds-B7WJxdIq.js";import"./chevron-down-1CFj8X53.js";import"./index-Cr0VJDXn.js";import"./error-XRO96CTm.js";import"./BaseCbacBanner-BMmEX_7W.js";import"./makeExternalStore-l2x05IWc.js";import"./Tooltip-CdBxAJkp.js";import"./PopoverPopup-HW4fQdCB.js";import"./debounce-DKdoEzLY.js";import"./useOsdkClient-CjCuVbH9.js";import"./tick-DjGBapZW.js";import"./DropdownField-BKtsIZHj.js";import"./isEqual-CRfm0_Mh.js";import"./withOsdkMetrics-CyI1jVrw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-8ifTlOPI.js";import{O as u}from"./object-table-ndrVNxgt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-qjA7iF_h.js";import"./Table-DYqI_6aW.js";import"./index-zP_CtKeM.js";import"./Dialog-Cf488IT9.js";import"./cross-CL785k1k.js";import"./svgIconContainer-D_TXE4Bb.js";import"./useBaseUiId-Cwh1jhj-.js";import"./InternalBackdrop-DcUvvNEJ.js";import"./composite-B4CIj8hm.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./index-pH-MRX5y.js";import"./useEventCallback-DNuPjnYr.js";import"./SkeletonBar-CAFjcspr.js";import"./LoadingCell-BFD54Tcr.js";import"./ColumnConfigDialog-DiJLTN8d.js";import"./DraggableList-B5V2tPlo.js";import"./search-cZtZgUJN.js";import"./Input-CMGBsI9h.js";import"./useControlled-CyFBz6dn.js";import"./Button-CkeTq1uo.js";import"./small-cross-B646WFen.js";import"./ActionButton-CxCutMvr.js";import"./Checkbox-Bgh6nR7u.js";import"./useValueChanged-TYhdJ9yM.js";import"./CollapsiblePanel-Dr80mgLX.js";import"./MultiColumnSortDialog-DTt_dWd5.js";import"./MenuTrigger-P1EkmwDH.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./getDisabledMountTransitionStyles-CisZNLPx.js";import"./getPseudoElementBounds-BktluGq2.js";import"./chevron-down-BBwBJyH3.js";import"./index-DPyB-hEV.js";import"./error-CEWX4lms.js";import"./BaseCbacBanner-hOsFxdZf.js";import"./makeExternalStore-BjHpzMBx.js";import"./Tooltip-D1NVsbbj.js";import"./PopoverPopup-DyGtJCKe.js";import"./debounce-BDQ7N1x4.js";import"./useOsdkClient-CfP7K8UM.js";import"./tick-FRfoFGPl.js";import"./DropdownField-Bmo9g9ce.js";import"./isEqual-tZEY_fLF.js";import"./withOsdkMetrics-C5cd7yWV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

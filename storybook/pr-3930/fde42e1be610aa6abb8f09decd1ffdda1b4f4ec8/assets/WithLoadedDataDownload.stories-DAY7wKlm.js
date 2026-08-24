import{f as b,j as a,r as i}from"./iframe-DOCCiOHb.js";import{O as u}from"./object-table-B0uLTA8o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEzHRj9g.js";import"./Table-J8qOn0Hc.js";import"./index-DFEU0Jwo.js";import"./Dialog-BhmkZryF.js";import"./cross-CovJ-Ed5.js";import"./svgIconContainer-YIAf9TsP.js";import"./useBaseUiId-CmMkAyyf.js";import"./InternalBackdrop-Q7qmqEtO.js";import"./composite-BMmhh7vl.js";import"./index-N99qDbDS.js";import"./index-Bzy6XCyL.js";import"./index-CXkfJFVw.js";import"./useEventCallback-BzaGM4MH.js";import"./SkeletonBar-BhSZuKxj.js";import"./LoadingCell-CdVpnYtm.js";import"./ColumnConfigDialog-BB4El2Oj.js";import"./DraggableList-C327NS2l.js";import"./search-jcgG9auT.js";import"./Input-DWi-pbfP.js";import"./useControlled-BoZB2Z05.js";import"./Button-hwj6n_zT.js";import"./small-cross-7N7OEMcX.js";import"./ActionButton-B_DrTRR5.js";import"./Checkbox-D7RN9NDz.js";import"./useValueChanged-CW1n9jex.js";import"./CollapsiblePanel-BwQQQfcz.js";import"./MultiColumnSortDialog-lHb0H5EV.js";import"./MenuTrigger-jNL57hY0.js";import"./CompositeItem-CJrNoZr7.js";import"./ToolbarRootContext-P0D27WeH.js";import"./getDisabledMountTransitionStyles-BrQ12pz7.js";import"./getPseudoElementBounds-C34O99e7.js";import"./chevron-down-mVjqXGxr.js";import"./index-B_3m-f6U.js";import"./error-i9ATQSBy.js";import"./BaseCbacBanner-B_wA-DIw.js";import"./makeExternalStore-BqzO6RPd.js";import"./Tooltip-CNQ2W6HW.js";import"./PopoverPopup-D-Z3Cy_4.js";import"./debounce-CFnyKU3r.js";import"./useOsdkClient-B5sy_4Oo.js";import"./tick-Dn82gyrG.js";import"./DropdownField-rPN4VZoE.js";import"./isEqual-CGrVjf68.js";import"./withOsdkMetrics-DDYX4AYy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

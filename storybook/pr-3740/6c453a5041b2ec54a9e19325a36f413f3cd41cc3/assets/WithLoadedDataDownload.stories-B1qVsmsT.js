import{f as b,j as a,r as i}from"./iframe-CguRgO1s.js";import{O as u}from"./object-table-DClobAc1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BMc7U262.js";import"./Table-DgqZG8yg.js";import"./index-BGS7gDUn.js";import"./Dialog-DrQCiZD0.js";import"./cross-Br0Qm67p.js";import"./svgIconContainer-CLJzNlfz.js";import"./useBaseUiId-B2RjeRps.js";import"./InternalBackdrop-ChJ2KDPv.js";import"./composite-qTi-RAR_.js";import"./index-3k5H_e2z.js";import"./index-But1OdyE.js";import"./index-1mXqmSC_.js";import"./useEventCallback-7pei6QN0.js";import"./SkeletonBar-C9mDcKw7.js";import"./LoadingCell-HaxX9Lad.js";import"./ColumnConfigDialog-Co2PlQSl.js";import"./DraggableList-Bc7B11ei.js";import"./search-DZWqHIsG.js";import"./Input-BbJ-H5cZ.js";import"./useControlled-QGl_Fogg.js";import"./isEqual-DqVS2OMf.js";import"./isObject-BjP6rnQ5.js";import"./Button-BCDQ8FRu.js";import"./ActionButton-DVUeIQz0.js";import"./Checkbox-FKkg598T.js";import"./useValueChanged-BO9nZTVD.js";import"./CollapsiblePanel-C6EUT82b.js";import"./MultiColumnSortDialog-BzaL0aG1.js";import"./MenuTrigger-DekF8dEA.js";import"./CompositeItem-BagBTlO9.js";import"./ToolbarRootContext-BBXfwh82.js";import"./getDisabledMountTransitionStyles-DbdTlOWc.js";import"./getPseudoElementBounds-BZT0R3By.js";import"./chevron-down-BjgaS9xF.js";import"./index-C2kWb54g.js";import"./error-CW261XEm.js";import"./BaseCbacBanner-N5zGLY-T.js";import"./makeExternalStore-DjzIXttj.js";import"./Tooltip-DOX5_Yd2.js";import"./PopoverPopup-Co_6gn5o.js";import"./toNumber-B6NZiykd.js";import"./useOsdkClient-WqhQ7smE.js";import"./tick-l18Y2t-t.js";import"./DropdownField-B1KO5SNX.js";import"./withOsdkMetrics-DNdkJlAo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

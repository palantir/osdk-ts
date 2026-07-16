import{f as b,j as a,r as i}from"./iframe-DCDT_GEC.js";import{O as u}from"./object-table-B2Xhh7-1.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bib2WHN0.js";import"./Table-Bjemn4ZK.js";import"./index-DQF2gROF.js";import"./Dialog-guj3eCbx.js";import"./cross-D0ezV9wV.js";import"./svgIconContainer-zVAc1HP4.js";import"./useBaseUiId-FuvCdJd6.js";import"./InternalBackdrop-DJEJs06X.js";import"./composite-DH_q14qD.js";import"./index-CU-EXkPD.js";import"./index-C5ieCprR.js";import"./index-aQ1y3zCB.js";import"./useEventCallback-mKCpe9Qm.js";import"./SkeletonBar-CIudgoih.js";import"./LoadingCell-2M1ewjmO.js";import"./ColumnConfigDialog-CEzZI6qq.js";import"./DraggableList-CRSSB-9r.js";import"./search-D9zbOR7d.js";import"./Input-D0Bf3WdC.js";import"./useControlled-CPbv6-hY.js";import"./isEqual-wbrjZ5Ox.js";import"./isObject-gOdt8umz.js";import"./Button-DYyYqqv7.js";import"./ActionButton-BJN6tWTh.js";import"./Checkbox-BwMea7Cw.js";import"./useValueChanged-0W_3mzOi.js";import"./CollapsiblePanel-C0i7ZzjL.js";import"./MultiColumnSortDialog-C2NPq1G-.js";import"./MenuTrigger-xaMQcA2q.js";import"./CompositeItem-EJcBvamT.js";import"./ToolbarRootContext-TK-ZGDXl.js";import"./getDisabledMountTransitionStyles-rz1DesUN.js";import"./getPseudoElementBounds-D7c7uIUb.js";import"./chevron-down-Dn1IJT36.js";import"./index-C_ovaKx1.js";import"./error-DzLrnjHD.js";import"./BaseCbacBanner-Du-LYEsQ.js";import"./makeExternalStore-5BoqGt7e.js";import"./Tooltip-B35DjJOj.js";import"./PopoverPopup-41BGVEmI.js";import"./toNumber-CzpC-362.js";import"./useOsdkClient-DnTwvX4l.js";import"./tick-DPj8j-FE.js";import"./DropdownField-DFiC8lgE.js";import"./withOsdkMetrics-DnKnMeSY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

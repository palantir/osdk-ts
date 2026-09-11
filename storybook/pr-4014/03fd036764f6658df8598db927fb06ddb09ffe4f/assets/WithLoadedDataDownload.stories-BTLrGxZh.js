import{f as b,j as a,r as i}from"./iframe-DkbM6O-Q.js";import{O as u}from"./object-table-DHmd2aR4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DC9LUrcb.js";import"./Table-KTs77iKt.js";import"./index-5Xb7iy_v.js";import"./Dialog-DnU-CTU3.js";import"./cross-Bgds_EJl.js";import"./svgIconContainer-aUCWMueJ.js";import"./useBaseUiId-CbWoUVda.js";import"./InternalBackdrop-BGmRqVwl.js";import"./composite-CSTh2sUL.js";import"./index-DjV9sMAb.js";import"./index-CS7XaPdo.js";import"./index-cjbVZ1ML.js";import"./useEventCallback-BJqIL9gZ.js";import"./SkeletonBar-CAFl9YhT.js";import"./LoadingCell-Chb-3Smu.js";import"./ColumnConfigDialog-CVUFHh0t.js";import"./DraggableList-bnAn5Ddq.js";import"./search-eJ_oBGNG.js";import"./Input-BHgKvDQ1.js";import"./useControlled-TBJYjn-n.js";import"./Button-DDqxd8Ee.js";import"./small-cross-Co1nXvMN.js";import"./ActionButton-BAEkA_vW.js";import"./Checkbox-l_dFvsqW.js";import"./useValueChanged-BhBtEc7p.js";import"./CollapsiblePanel-b-Y0NgWl.js";import"./MultiColumnSortDialog-B2szPAwL.js";import"./MenuTrigger-Dm2Kzt8A.js";import"./CompositeItem-CIMhmz-B.js";import"./ToolbarRootContext-B5sg7AjV.js";import"./getDisabledMountTransitionStyles-DAwwnn7h.js";import"./getPseudoElementBounds-qBUrNeQK.js";import"./chevron-down-DwM4wuWt.js";import"./index-Cp7hW4d_.js";import"./error-Dg6O-1zt.js";import"./BaseCbacBanner-D1AaGfyq.js";import"./makeExternalStore-B4N8C8OH.js";import"./Tooltip-BKA5GfZS.js";import"./PopoverPopup-CvoeuWpF.js";import"./debounce-D8PxudOE.js";import"./useOsdkClient-DwOlk4Zy.js";import"./tick-DWiyCXA2.js";import"./DropdownField-BWar8h-x.js";import"./isEqual-BzZXzLza.js";import"./withOsdkMetrics-BmIxPjSX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

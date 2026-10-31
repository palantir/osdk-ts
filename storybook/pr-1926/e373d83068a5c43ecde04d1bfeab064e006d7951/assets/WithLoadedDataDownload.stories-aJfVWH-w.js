import{f as b,j as a,r as i}from"./iframe-0Iz5vwcT.js";import{O as u}from"./object-table-DKWAT-Fj.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DPuYeI1F.js";import"./Table-DQnxVUz9.js";import"./index-CwqL2BSp.js";import"./Dialog-zoM-tL9f.js";import"./cross-zS2Wnz2V.js";import"./svgIconContainer--rVYZd1H.js";import"./useBaseUiId-BzcgVOgr.js";import"./InternalBackdrop-CIp9NUV4.js";import"./composite-N0Lz-u2v.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./index-BZki0KLB.js";import"./useEventCallback-OZngxyt9.js";import"./SkeletonBar-B5YslJhy.js";import"./LoadingCell-P7TCSaZN.js";import"./ColumnConfigDialog-4xk1CJcu.js";import"./DraggableList-DWCTZj5F.js";import"./search-C60pdPoy.js";import"./Input-CxV_aY0Y.js";import"./useControlled-BgJ32gqU.js";import"./Button-DmPkGrX2.js";import"./small-cross-CVGlFgTv.js";import"./ActionButton-C5FOmGzz.js";import"./Checkbox-DsJE1lPn.js";import"./useValueChanged-C8jXi1Db.js";import"./CollapsiblePanel-BCIeAMta.js";import"./MultiColumnSortDialog-DGCz0v4U.js";import"./MenuTrigger-DTlZrVLo.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./getDisabledMountTransitionStyles-Cx-ixMqU.js";import"./getPseudoElementBounds-BUv5HBAP.js";import"./chevron-down-BAJ5mZyN.js";import"./index-Cl9Abjho.js";import"./error-D9h6iLxx.js";import"./BaseCbacBanner-CQg0ZUIR.js";import"./makeExternalStore-CFnbMMz3.js";import"./Tooltip-BVWIJEtT.js";import"./PopoverPopup-CowTNg7A.js";import"./debounce-B18_zKUH.js";import"./useOsdkClient-BuNKTI6L.js";import"./tick-Jp1l8F3U.js";import"./DropdownField-DFrco9Qo.js";import"./isEqual-DzmNlRkK.js";import"./withOsdkMetrics-kzWOWE3o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

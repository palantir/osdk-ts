import{f as b,j as a,r as i}from"./iframe-CMhSXf7u.js";import{O as u}from"./object-table-Mp8InD2l.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Brrs_dmH.js";import"./Table-DklL9Zy6.js";import"./index-D-EqtuMO.js";import"./Dialog-CC0lOn9D.js";import"./cross-CDflrrvD.js";import"./svgIconContainer-BI44O8kK.js";import"./useBaseUiId-DJLmBw3m.js";import"./InternalBackdrop-DM7i7wCP.js";import"./composite-CZ_sbuO7.js";import"./index-e3-NUaQu.js";import"./index-7out07OT.js";import"./index-D1lmcvuc.js";import"./useEventCallback-hoIOXFa_.js";import"./SkeletonBar-BFMS0GW4.js";import"./LoadingCell-DCwYyJZu.js";import"./ColumnConfigDialog-bLJOU6Di.js";import"./DraggableList-CFiryhMG.js";import"./search-D9SDfmhX.js";import"./Input-BdM-mg3J.js";import"./useControlled-Yx4KOLdx.js";import"./isEqual-KbtjeMQV.js";import"./isObject-BuUXoseV.js";import"./Button-CYNxWIo5.js";import"./ActionButton-jy2VWN7r.js";import"./Checkbox-B4EJG7JE.js";import"./useValueChanged-BUNxdFiJ.js";import"./CollapsiblePanel-Dd1M5TG9.js";import"./MultiColumnSortDialog-CFOj4bAs.js";import"./MenuTrigger-CQRFhwW_.js";import"./CompositeItem-B3dhh8ia.js";import"./ToolbarRootContext-Dt3o3mOm.js";import"./getDisabledMountTransitionStyles-2Y8GdGAv.js";import"./getPseudoElementBounds-BmO4MZ3H.js";import"./chevron-down-UD5qoask.js";import"./index-DRucm0b5.js";import"./error-Cia9mwql.js";import"./BaseCbacBanner-bC-IYL-r.js";import"./makeExternalStore-CmWedr43.js";import"./Tooltip-OPdt0l6L.js";import"./PopoverPopup-BxsPUhZJ.js";import"./toNumber-Bv0An-Lw.js";import"./useOsdkClient-v7ltKG8Z.js";import"./tick-lvvqI-zN.js";import"./DropdownField-daOnZPEH.js";import"./withOsdkMetrics-C5gJ204R.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

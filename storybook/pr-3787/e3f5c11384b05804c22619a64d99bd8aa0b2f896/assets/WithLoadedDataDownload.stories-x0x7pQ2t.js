import{f as b,j as a,r as i}from"./iframe-BAKEq5ES.js";import{O as u}from"./object-table-Ddwo7DKX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-hQV8mcMW.js";import"./Table-DbimKmt7.js";import"./index-CeH782l-.js";import"./Dialog-Bpsn0GLy.js";import"./cross-Dt1bkvKA.js";import"./svgIconContainer-Dld9ETuT.js";import"./useBaseUiId-Brauy9uT.js";import"./InternalBackdrop-NRUCG-Md.js";import"./composite-O5N4yrKG.js";import"./index-DYnXO_K1.js";import"./index-PP-_CbbK.js";import"./index-BDWn8ZeD.js";import"./useEventCallback-BDdj97xr.js";import"./SkeletonBar-B00BTsTN.js";import"./LoadingCell-DnX7Bc7N.js";import"./ColumnConfigDialog-Dyp7TOc-.js";import"./DraggableList-D_5qh-dT.js";import"./search-DZax2fsM.js";import"./Input-BCff3WUP.js";import"./useControlled-C2UCFEFv.js";import"./isEqual-XRwfgd-m.js";import"./isObject-BZwXx0fx.js";import"./Button-BLWiXJyw.js";import"./ActionButton-3nDneS0_.js";import"./Checkbox-ooMD5k0t.js";import"./useValueChanged-BHOBEpWe.js";import"./CollapsiblePanel-DdLf54qL.js";import"./MultiColumnSortDialog-MvZfwoN0.js";import"./MenuTrigger-CICrC1Rd.js";import"./CompositeItem-B-aPUg7M.js";import"./ToolbarRootContext-yZJwFATi.js";import"./getDisabledMountTransitionStyles-BaT6iZCs.js";import"./getPseudoElementBounds-odxOPIS-.js";import"./chevron-down-DfHSBo5l.js";import"./index-Bqra-U7q.js";import"./error-BY45CvKu.js";import"./BaseCbacBanner-25jzrQhL.js";import"./makeExternalStore-DSwBTdjj.js";import"./Tooltip-bjnxpKvh.js";import"./PopoverPopup-DzJnb2E8.js";import"./toNumber-CtHLA5nh.js";import"./useOsdkClient-CAYIjkz_.js";import"./tick-CQsbinFG.js";import"./DropdownField-zarVigm0.js";import"./withOsdkMetrics-DsMB6nls.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

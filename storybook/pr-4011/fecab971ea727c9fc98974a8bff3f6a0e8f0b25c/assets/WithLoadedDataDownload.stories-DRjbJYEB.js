import{f as b,j as a,r as i}from"./iframe-Cbv5zznp.js";import{O as u}from"./object-table-Bn5bQJkg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DqfcifpH.js";import"./Table-BgFM93fE.js";import"./index-D2aFmDJC.js";import"./Dialog-BA607rzO.js";import"./cross-C8I2PI6u.js";import"./svgIconContainer-BWSQzhSR.js";import"./useBaseUiId-CbroaXAW.js";import"./InternalBackdrop-CUgFheWq.js";import"./composite-DJiR_4ty.js";import"./index-CCzNRBOI.js";import"./index-5hCgKDxn.js";import"./index-D_4oJywF.js";import"./useEventCallback-r3b2hAl0.js";import"./SkeletonBar-OKZ2wWwG.js";import"./LoadingCell-C89HmfYL.js";import"./ColumnConfigDialog-cf5LyL_h.js";import"./DraggableList-7LB8K7ON.js";import"./search-CH6DBRTT.js";import"./Input-DmJSS6xV.js";import"./useControlled-BoBGM7g4.js";import"./Button-Tfyx2Upy.js";import"./small-cross-OENn1soQ.js";import"./ActionButton-CRpLCn8e.js";import"./Checkbox-DrLDryFH.js";import"./useValueChanged-CRrnyi5j.js";import"./CollapsiblePanel-DUHKDOmV.js";import"./MultiColumnSortDialog-BNLYytTp.js";import"./MenuTrigger-DvQE4buu.js";import"./CompositeItem-CWAeob4t.js";import"./ToolbarRootContext-CLkLs3Pj.js";import"./getDisabledMountTransitionStyles-Drv_mS0M.js";import"./getPseudoElementBounds-CnQ2m5T7.js";import"./chevron-down-DHe7MR3-.js";import"./index-B-Z3zT8c.js";import"./error-DnP2O5g6.js";import"./BaseCbacBanner-DkzBhqtE.js";import"./makeExternalStore-BZhL-95P.js";import"./Tooltip-C20r3_Es.js";import"./PopoverPopup-DcG6I0rn.js";import"./debounce-Do5MJNfP.js";import"./useOsdkClient-CLoY1UKz.js";import"./tick-CdvKMWYt.js";import"./DropdownField-D-ungKoa.js";import"./isEqual-Bvhr1-hP.js";import"./withOsdkMetrics-ByXJuDkr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

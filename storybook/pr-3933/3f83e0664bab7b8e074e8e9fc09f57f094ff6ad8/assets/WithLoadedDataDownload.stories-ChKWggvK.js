import{f as b,j as a,r as i}from"./iframe-CwsgVFCh.js";import{O as u}from"./object-table-C338F0bO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CFSh68y9.js";import"./Table-DcT1TpTg.js";import"./index-5CttHDeo.js";import"./Dialog-Bt_1mYPz.js";import"./cross-BQFX_VX8.js";import"./svgIconContainer--s4psY3b.js";import"./useBaseUiId-D1XXa7jM.js";import"./InternalBackdrop-BYzrstKF.js";import"./composite-Db_ix37N.js";import"./index-a2I8F2uY.js";import"./index-D0vP1fQ0.js";import"./index-TPNwtvZJ.js";import"./useEventCallback-DyJVdp0X.js";import"./SkeletonBar-CinRKwk8.js";import"./LoadingCell-C68LxTQT.js";import"./ColumnConfigDialog-DzEv6HHg.js";import"./DraggableList-BCv3SQ5l.js";import"./search-DAKGrLou.js";import"./Input-B-wPEXqD.js";import"./useControlled-CqLyQtsI.js";import"./Button-BSlSVUqe.js";import"./small-cross-BDslcscW.js";import"./ActionButton-DkVTFO3n.js";import"./Checkbox-Dh8iT8_Q.js";import"./useValueChanged-D7ydevuv.js";import"./CollapsiblePanel-Cw7sZI2N.js";import"./MultiColumnSortDialog-CZjB73DR.js";import"./MenuTrigger-C5d97H-v.js";import"./CompositeItem-DIa4PUtj.js";import"./ToolbarRootContext-Dw0uD7co.js";import"./getDisabledMountTransitionStyles-C_NRg-Tj.js";import"./getPseudoElementBounds-DpaMjhZC.js";import"./chevron-down-BMdcdoDb.js";import"./index-qogJWmY0.js";import"./error-CmS0UiVl.js";import"./BaseCbacBanner-C-IUGGMI.js";import"./makeExternalStore-Dc3Ewax5.js";import"./Tooltip-XPKwMzcZ.js";import"./PopoverPopup-BIZlm-w6.js";import"./debounce-Chi5i-8k.js";import"./useOsdkClient-C7m-TFMr.js";import"./tick-Dx_dQdyQ.js";import"./DropdownField-FtqUvMk5.js";import"./isEqual-C5Sf6OVH.js";import"./withOsdkMetrics-aGd8eMoT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

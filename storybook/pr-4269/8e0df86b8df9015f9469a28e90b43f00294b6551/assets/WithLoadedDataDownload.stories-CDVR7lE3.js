import{f as b,j as a,r as i}from"./iframe-CSjrP8vI.js";import{O as u}from"./object-table-CT8zBU9b.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cx2hoj0m.js";import"./Table-Bz2vcI-y.js";import"./index-CqYglBD0.js";import"./Dialog-ebHFZ4K-.js";import"./cross-Ds3xYnVZ.js";import"./svgIconContainer-B7BQRztY.js";import"./useBaseUiId-DcgW2BGe.js";import"./InternalBackdrop-DRh1UujG.js";import"./composite-CAXBU4pD.js";import"./index-BedFYm95.js";import"./index-BN7bp0b2.js";import"./index-B4CwIOCa.js";import"./useEventCallback-CRfAaycK.js";import"./SkeletonBar-CUZm-PKw.js";import"./LoadingCell-CLME_5DX.js";import"./ColumnConfigDialog-CjkSAnDu.js";import"./DraggableList-DDDC3Ohe.js";import"./search-BM_j1Cww.js";import"./Input-DG23LIw2.js";import"./useControlled-W118GxB4.js";import"./Button-nWxTMLuc.js";import"./small-cross-B5v1tapE.js";import"./ActionButton-DYIYoWW6.js";import"./Checkbox-C9mjcyeE.js";import"./useValueChanged-Bqlwrqtn.js";import"./CollapsiblePanel-B6tadX4-.js";import"./MultiColumnSortDialog-DF0ODZMw.js";import"./MenuTrigger-BR3Xx0z3.js";import"./CompositeItem-C2wpcQLE.js";import"./ToolbarRootContext-Skd8opG_.js";import"./getDisabledMountTransitionStyles-Cc4xA-eS.js";import"./getPseudoElementBounds-D0jv3We1.js";import"./chevron-down-xJOpychc.js";import"./index-v62Ii5_v.js";import"./error-Du9W1yMi.js";import"./BaseCbacBanner-BzKHkrOU.js";import"./makeExternalStore-DptFAV08.js";import"./Tooltip-Cg04CKbW.js";import"./PopoverPopup-BsQv3X8u.js";import"./debounce-BFRee1ws.js";import"./useOsdkClient-DS20s_-p.js";import"./tick-BEtFRrY5.js";import"./DropdownField-DG8Fepg7.js";import"./isEqual-D0FZ_3QJ.js";import"./withOsdkMetrics-sMcDJBip.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

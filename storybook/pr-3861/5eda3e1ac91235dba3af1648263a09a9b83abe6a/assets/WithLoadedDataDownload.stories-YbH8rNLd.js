import{f as b,j as a,r as i}from"./iframe-DlDyg67T.js";import{O as u}from"./object-table-BiEHahF8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CxSoH6eo.js";import"./Table-BaN30LxX.js";import"./index-CgLJcHiG.js";import"./Dialog-DY0jltpC.js";import"./cross-BowQxoCZ.js";import"./svgIconContainer-QwkR6eZt.js";import"./useBaseUiId-wAPBNlUt.js";import"./InternalBackdrop-DMSb8auM.js";import"./composite-BaaVWHgq.js";import"./index-8yeQhVbN.js";import"./index-CY8S8b-r.js";import"./index-pO-hmUBS.js";import"./useEventCallback-DyZWpzNl.js";import"./SkeletonBar-CPHW6w0u.js";import"./LoadingCell-BLMAuk93.js";import"./ColumnConfigDialog-CEBUllzq.js";import"./DraggableList-DR0jkjtw.js";import"./search-Cte5LTFX.js";import"./Input-BoCdBbZ_.js";import"./useControlled-04OxKEAS.js";import"./Button-DRPtGoVj.js";import"./small-cross-Bh0kfntJ.js";import"./ActionButton-yq3aXX8T.js";import"./Checkbox-Bijx3aoH.js";import"./useValueChanged-DN_BaKA4.js";import"./CollapsiblePanel-C9sNLz9v.js";import"./MultiColumnSortDialog-SmI9cSzI.js";import"./MenuTrigger-YADL3Fsi.js";import"./CompositeItem-DzH1OEs5.js";import"./ToolbarRootContext-BTmFkUps.js";import"./getDisabledMountTransitionStyles-D3UrETGN.js";import"./getPseudoElementBounds-CAye7PYw.js";import"./chevron-down-CroTI_KF.js";import"./index-B3dgiPES.js";import"./error-D50Cem1g.js";import"./BaseCbacBanner-BUwna6kj.js";import"./makeExternalStore-CODki1eK.js";import"./Tooltip-DOZmAuSo.js";import"./PopoverPopup-D2k_Z-9o.js";import"./debounce-x_9bMniJ.js";import"./useOsdkClient-CjqVDGxb.js";import"./tick-BALaRZX2.js";import"./DropdownField-DMJY3b8d.js";import"./isEqual-Cc_ePZfr.js";import"./withOsdkMetrics-BQw0dFsV.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

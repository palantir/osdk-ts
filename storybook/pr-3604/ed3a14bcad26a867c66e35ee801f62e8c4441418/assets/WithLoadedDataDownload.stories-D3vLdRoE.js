import{f as b,j as a,r as i}from"./iframe-DG6cRYaM.js";import{O as u}from"./object-table-BhowxCFr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ClUSx8-4.js";import"./Table-B1sLZAEk.js";import"./index-C804Ldbo.js";import"./Dialog-DaQN500U.js";import"./cross-hkUnUAaY.js";import"./svgIconContainer-C2bwKny8.js";import"./useBaseUiId-CKjHcJfl.js";import"./InternalBackdrop-CRKDgsWT.js";import"./composite-DoPO_86w.js";import"./index-C5l-7pVR.js";import"./index-9K3AdnqX.js";import"./index-BVglTwq4.js";import"./useEventCallback-Bfet1UtT.js";import"./SkeletonBar-mo7Cj_HQ.js";import"./LoadingCell-DGiLXLnL.js";import"./ColumnConfigDialog-BV2wiZdX.js";import"./DraggableList-C7705Wf_.js";import"./search-DbgJzrKA.js";import"./Input-tm7ZpwZm.js";import"./useControlled-DqYaKqHA.js";import"./Button-CihwDe7p.js";import"./small-cross-2wapIK0_.js";import"./ActionButton-DfMnHwqL.js";import"./Checkbox-BXB5Zp_t.js";import"./minus-A8jz_bS4.js";import"./tick-BX6vVxM_.js";import"./useValueChanged-D-1BZjCe.js";import"./caret-down-BsjTuKVb.js";import"./CollapsiblePanel-Ds_LoglZ.js";import"./MultiColumnSortDialog-CeVn0vJr.js";import"./MenuTrigger-DFDSAhdO.js";import"./CompositeItem-BImjti7u.js";import"./ToolbarRootContext-DsCp619J.js";import"./getDisabledMountTransitionStyles-DGBj8-OI.js";import"./getPseudoElementBounds-VOn6kIki.js";import"./chevron-down-C0uqVz-l.js";import"./index-pcoRf41n.js";import"./error-vOwQsFJ7.js";import"./BaseCbacBanner-6y1GK5zF.js";import"./makeExternalStore-DBNQ8xM4.js";import"./Tooltip-yBGlR9Yd.js";import"./PopoverPopup-DlQgYJRN.js";import"./toNumber-CCVB5zkG.js";import"./useOsdkClient-COtQ5KrF.js";import"./DropdownField--zQdaX80.js";import"./withOsdkMetrics-Bux00-k2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

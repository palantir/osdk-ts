import{f as b,j as a,r as i}from"./iframe-DkpSGPRQ.js";import{O as u}from"./object-table-BXuV-Jq3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLqqYOdZ.js";import"./Table-7LDXJdsj.js";import"./index-BhGh3GfC.js";import"./Dialog-CBwLvDeY.js";import"./cross-NGS1eS1H.js";import"./svgIconContainer-BSSOnUka.js";import"./useBaseUiId-B9DlhAqD.js";import"./InternalBackdrop-HQEVKppz.js";import"./composite-DqvvbcbC.js";import"./index-By0beLJF.js";import"./index-xc_Rbfjf.js";import"./index-Cqfvo0Tw.js";import"./useEventCallback-NwnWSF1f.js";import"./SkeletonBar-Da3Ee8Zn.js";import"./LoadingCell-uVl0ez8L.js";import"./ColumnConfigDialog-LKAnRiEt.js";import"./DraggableList-s6C2UfMr.js";import"./search-C2LoXU-4.js";import"./Input-DwjA5vF5.js";import"./useControlled-X7oTCMhV.js";import"./Button-BNpYQl5H.js";import"./small-cross-PayX3FHk.js";import"./ActionButton-cgioEY_G.js";import"./Checkbox-DNRrAQCD.js";import"./useValueChanged-B7p--LLl.js";import"./CollapsiblePanel-CYWWt-NG.js";import"./MultiColumnSortDialog-CGF45VQz.js";import"./MenuTrigger-ByYl9PAV.js";import"./CompositeItem-BQ27p43g.js";import"./ToolbarRootContext-Du1GI0xL.js";import"./getDisabledMountTransitionStyles-BQp14p-F.js";import"./getPseudoElementBounds-Ccm21uZb.js";import"./chevron-down-CMLdZkkD.js";import"./index-Bh7ePidM.js";import"./error-DLwoWCBM.js";import"./BaseCbacBanner-B8ZODtm5.js";import"./makeExternalStore-DHc_mvHu.js";import"./Tooltip-4ca73xR8.js";import"./PopoverPopup-CTB0jgTS.js";import"./toNumber-YpdzN7Sy.js";import"./useOsdkClient-bds3HbXy.js";import"./tick-9Z7h2rmL.js";import"./DropdownField-CXFGEt8J.js";import"./withOsdkMetrics-slF_OeSc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

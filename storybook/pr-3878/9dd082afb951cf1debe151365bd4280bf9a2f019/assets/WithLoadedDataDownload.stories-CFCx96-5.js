import{f as b,j as a,r as i}from"./iframe-DOW2bXFs.js";import{O as u}from"./object-table-BNlthN64.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHuniwci.js";import"./Table-BXikgICs.js";import"./index-4oJsk_tB.js";import"./Dialog-CQdhf3N7.js";import"./cross-COlHBJoz.js";import"./svgIconContainer-CT_KO30M.js";import"./useBaseUiId-B_0mQGPv.js";import"./InternalBackdrop-lPwjztDu.js";import"./composite-CqPSq466.js";import"./index-Bn8LPSeX.js";import"./index-GSo9ng3g.js";import"./index-C6M1k-et.js";import"./useEventCallback-B3VaIBrg.js";import"./SkeletonBar-DxdJn7gH.js";import"./LoadingCell-DJ0lzlCl.js";import"./ColumnConfigDialog-C04281-e.js";import"./DraggableList-DStVGJZI.js";import"./search-BWbB-AxZ.js";import"./Input-CSOHEyA0.js";import"./useControlled-NJi6VJOf.js";import"./Button-DZdYaU0k.js";import"./small-cross-iF7SW867.js";import"./ActionButton-CM1odkW5.js";import"./Checkbox-08T_vGQ7.js";import"./useValueChanged-TiwULohc.js";import"./CollapsiblePanel-BALGGoSD.js";import"./MultiColumnSortDialog-BO8WXNUG.js";import"./MenuTrigger-DtqoUMjg.js";import"./CompositeItem-CPRbyJMO.js";import"./ToolbarRootContext-C3gCOQD7.js";import"./getDisabledMountTransitionStyles-D-1ZYwTn.js";import"./getPseudoElementBounds-BdV0GJWh.js";import"./chevron-down-CRcrwjTm.js";import"./index-DPfBrSuZ.js";import"./error-D3fDFL5e.js";import"./BaseCbacBanner-CBDVw-BP.js";import"./makeExternalStore-4Ndi4CXn.js";import"./Tooltip-M05NfHCp.js";import"./PopoverPopup-DgBZbaSS.js";import"./debounce-1fRjCSLx.js";import"./useOsdkClient-BERGKa3D.js";import"./tick-uSlpKgY-.js";import"./DropdownField-C9Cbl0hv.js";import"./isEqual-Dhn6_kDg.js";import"./withOsdkMetrics-XWnXG2iZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

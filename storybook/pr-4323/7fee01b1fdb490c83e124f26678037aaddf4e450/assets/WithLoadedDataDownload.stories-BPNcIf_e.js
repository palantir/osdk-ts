import{f as b,j as a,r as i}from"./iframe-CT0ueW5J.js";import{O as u}from"./object-table-CuIVWNvc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJAqHn_u.js";import"./Table-DNWrt4ow.js";import"./index-BnCCNHc8.js";import"./Dialog-D0qPzayg.js";import"./cross-Cyv96KiS.js";import"./svgIconContainer-IfNYosH4.js";import"./useBaseUiId-sdgRlT1f.js";import"./InternalBackdrop-IMT1pB90.js";import"./composite-DKQtJrfK.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./index-D9FtuD0I.js";import"./useEventCallback-CgkxQMVg.js";import"./SkeletonBar-BOkXS-5U.js";import"./LoadingCell-CNvEEV9y.js";import"./ColumnConfigDialog-DQ0S7ega.js";import"./DraggableList-CvAtHR4t.js";import"./search-LkIpH0hE.js";import"./Input-DATuNACb.js";import"./useControlled-FL95Cn3G.js";import"./Button-ICT0IjE_.js";import"./small-cross-B5bSG8T4.js";import"./ActionButton-DUhBWnTe.js";import"./Checkbox-apvi8FHa.js";import"./useValueChanged-BH-DNPTf.js";import"./CollapsiblePanel-C_pT0bYR.js";import"./MultiColumnSortDialog-Dumy50Un.js";import"./MenuTrigger-DBO5k-3Z.js";import"./CompositeItem-iZ_HyQEG.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./getDisabledMountTransitionStyles-C5eHg9LA.js";import"./getPseudoElementBounds-CX5xt4_X.js";import"./chevron-down-CY0HcTjS.js";import"./index-BLIQsvSb.js";import"./error-D7Pe4Z66.js";import"./BaseCbacBanner-CrHErys3.js";import"./makeExternalStore-DU28tiTB.js";import"./Tooltip-C8DWe441.js";import"./PopoverPopup-wk_1VcH9.js";import"./debounce-D8sdisyq.js";import"./useOsdkClient-DaWrwNax.js";import"./tick-DafMeIZ7.js";import"./DropdownField-BRVEW7-m.js";import"./isEqual-DAtG9i0o.js";import"./withOsdkMetrics-HMzwH_1Q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

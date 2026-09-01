import{f as b,j as a,r as i}from"./iframe-BE_0juHq.js";import{O as u}from"./object-table-ak3ru7OW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DGE0hYRw.js";import"./Table-Wr5ik1U4.js";import"./index-CZ-KL49G.js";import"./Dialog-DWHvidN5.js";import"./cross-CUPzUyHl.js";import"./svgIconContainer-DTm7GTT3.js";import"./useBaseUiId-CyOhG5WV.js";import"./InternalBackdrop-BS79ekQH.js";import"./composite-BMP3afRS.js";import"./index-YpmziLMg.js";import"./index-DPXYEgdz.js";import"./index-Coaj1lHt.js";import"./useEventCallback-uz51Y23w.js";import"./SkeletonBar-CTy64fAf.js";import"./LoadingCell-Z9AAzKS9.js";import"./ColumnConfigDialog-2qzHZsqu.js";import"./DraggableList-DTSHp1Ii.js";import"./search-BJgzsAei.js";import"./Input-eCN9724n.js";import"./useControlled-C0uJcmsm.js";import"./Button-DoRYjZBD.js";import"./small-cross-CZg5giIs.js";import"./ActionButton-BijjX4lr.js";import"./Checkbox-TSfcgPuk.js";import"./useValueChanged-Dso7iA8F.js";import"./CollapsiblePanel-SwrmgAr0.js";import"./MultiColumnSortDialog-DP8lPfib.js";import"./MenuTrigger-vvTXbVH5.js";import"./CompositeItem-CAbmT9yz.js";import"./ToolbarRootContext-Bo_aNGPT.js";import"./getDisabledMountTransitionStyles-DBPmoJix.js";import"./getPseudoElementBounds-DIHB9vsV.js";import"./chevron-down-Cem4vbB0.js";import"./index-CVu1gKpb.js";import"./error-BpU3JwpA.js";import"./BaseCbacBanner-DNS9oBIc.js";import"./makeExternalStore-nfAmPwlH.js";import"./Tooltip-Bs9C1rJp.js";import"./PopoverPopup-DlcEpqfX.js";import"./debounce-Crg_S_Lg.js";import"./useOsdkClient-C3FxVITg.js";import"./tick-FutLlINL.js";import"./DropdownField-Dhkja8wq.js";import"./isEqual-CMnP8-CM.js";import"./withOsdkMetrics-CLNWKIq7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

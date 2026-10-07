import{f as b,j as a,r as i}from"./iframe-YrpSpTvs.js";import{O as u}from"./object-table-t3OUf3ip.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DxNq55wa.js";import"./Table-DZ0iaFpj.js";import"./index-BrVf8lWl.js";import"./Dialog-DjLl79nO.js";import"./cross-B0Aawxg9.js";import"./svgIconContainer-BtBzrjkO.js";import"./useBaseUiId-nYNd-3tJ.js";import"./InternalBackdrop-B7DfYIYc.js";import"./composite-5Mv9D3-A.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./index-CsSm3NU5.js";import"./useEventCallback-BgeJ4XJ6.js";import"./SkeletonBar-CaULgTN_.js";import"./LoadingCell-nlkp1zok.js";import"./ColumnConfigDialog-BLNg6qZa.js";import"./DraggableList-Blumv0Fv.js";import"./search-B0P1cBIF.js";import"./Input-32CO0l-U.js";import"./useControlled-2o6j3dfP.js";import"./Button-CYGEL5Qg.js";import"./small-cross-BGabRNmn.js";import"./ActionButton-CHDejxq_.js";import"./Checkbox-DASKdpQc.js";import"./useValueChanged-BqrtuFIH.js";import"./CollapsiblePanel-sGxNkfQy.js";import"./MultiColumnSortDialog-Cld8H5W0.js";import"./MenuTrigger-Cb6vZPp0.js";import"./CompositeItem-B56fR4fH.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./getDisabledMountTransitionStyles-BnFsI7c-.js";import"./getPseudoElementBounds-Dw8pXuDb.js";import"./chevron-down-BfPcmD3R.js";import"./index-BS-m42I7.js";import"./error-DewscpxX.js";import"./BaseCbacBanner-msBh7mIJ.js";import"./makeExternalStore-C6NSSiHx.js";import"./Tooltip-DoIwzql8.js";import"./PopoverPopup-Bz5N51mo.js";import"./debounce-BaFZDc5z.js";import"./useOsdkClient-hs785eW6.js";import"./tick-B5LbKbnR.js";import"./DropdownField-BFTWMxkB.js";import"./isEqual-B8DwposS.js";import"./withOsdkMetrics-GBGU8c2D.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

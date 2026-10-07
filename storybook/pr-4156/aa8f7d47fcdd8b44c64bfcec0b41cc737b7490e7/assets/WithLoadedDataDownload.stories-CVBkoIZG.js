import{f as b,j as a,r as i}from"./iframe-CDX-NTfD.js";import{O as u}from"./object-table-_hz3q5Et.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CSvLju02.js";import"./Table-D5yx9evC.js";import"./index-D6xAz9PB.js";import"./Dialog-G0b2VcwQ.js";import"./cross-CUWzhEFb.js";import"./svgIconContainer-99TPvqBc.js";import"./useBaseUiId-CM3Yhx5P.js";import"./InternalBackdrop-DiaJjHCs.js";import"./composite-CpWLo2c3.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./index-B2Z1_nfV.js";import"./useEventCallback-Cd_Dk0li.js";import"./SkeletonBar-Dt_qbNYC.js";import"./LoadingCell-GRxU-9a2.js";import"./ColumnConfigDialog-Dnjip8-F.js";import"./DraggableList-Dj-x_Sxv.js";import"./search-DvrI77MS.js";import"./Input-Dz-cSGCu.js";import"./useControlled-CLUlXrHb.js";import"./Button-CscfG-hh.js";import"./small-cross-5qXULdiz.js";import"./ActionButton-bEISj8yJ.js";import"./Checkbox-De-raZKJ.js";import"./useValueChanged-CsNJxGB2.js";import"./CollapsiblePanel-OIYRVxIj.js";import"./MultiColumnSortDialog-DMiLKeyK.js";import"./MenuTrigger-CabmK2Fj.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./getDisabledMountTransitionStyles-DJOApo6o.js";import"./getPseudoElementBounds-Dfao8WFR.js";import"./chevron-down-r7sEOhf_.js";import"./index-DTEUSjqo.js";import"./error-BplB6VbP.js";import"./BaseCbacBanner-P7JgUlKM.js";import"./makeExternalStore-DXrOIATy.js";import"./Tooltip-BVBB5Hov.js";import"./PopoverPopup-BLtOX9gX.js";import"./debounce-D1B6swv0.js";import"./useOsdkClient-ZKN6ZGl4.js";import"./tick-BHhyW78u.js";import"./DropdownField-CQBpCIOv.js";import"./isEqual-BdXiBc78.js";import"./withOsdkMetrics-CUdmlJda.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

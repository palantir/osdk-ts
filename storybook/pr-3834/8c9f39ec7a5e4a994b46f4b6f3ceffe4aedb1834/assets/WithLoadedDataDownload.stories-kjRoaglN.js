import{f as b,j as a,r as i}from"./iframe-T8-5O5a7.js";import{O as u}from"./object-table-Cy8zQr_Q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BmpZImld.js";import"./Table-Cx3ow3Xr.js";import"./index-Bm1P3JuR.js";import"./Dialog-D2DawJKv.js";import"./cross-B2Ff3nzN.js";import"./svgIconContainer-DTQIUstT.js";import"./useBaseUiId-CGT1eYgE.js";import"./InternalBackdrop-CVQt1P3k.js";import"./composite-3G0XmPl8.js";import"./index-CTvYrdTG.js";import"./index-BqFbX9xD.js";import"./index-4D7iDRWN.js";import"./useEventCallback-DcrwhGVh.js";import"./SkeletonBar-aRGi46qm.js";import"./LoadingCell-BCWG_WSo.js";import"./ColumnConfigDialog-9oaVEdY0.js";import"./DraggableList-ClGw9imn.js";import"./search-gRWhsC7a.js";import"./Input-CrYGG830.js";import"./useControlled-DiVYHBT1.js";import"./isEqual-CYj9ZY_T.js";import"./isObject-D4EU1_k1.js";import"./Button-C--AVR5N.js";import"./ActionButton-CZuqOpJr.js";import"./Checkbox-q3zPQoox.js";import"./useValueChanged-B48ahuZx.js";import"./CollapsiblePanel-D6ekH2vN.js";import"./MultiColumnSortDialog-lIFw4Vg5.js";import"./MenuTrigger-Cn9_5pkM.js";import"./CompositeItem-CxOclKWd.js";import"./ToolbarRootContext-D4ao5sDu.js";import"./getDisabledMountTransitionStyles-B3GPhteV.js";import"./getPseudoElementBounds-CZWI-fTU.js";import"./chevron-down-CtzoxwNt.js";import"./index-CtKLFWsO.js";import"./error-C6IIEk7L.js";import"./BaseCbacBanner-D_gnVjwt.js";import"./makeExternalStore-V4YAFWjd.js";import"./Tooltip-Cq4Hmx15.js";import"./PopoverPopup-B5NaVdq-.js";import"./toNumber-BkQhAqa5.js";import"./useOsdkClient-DEG6jAJY.js";import"./tick-BhtMxWAI.js";import"./DropdownField-CXEt8CUB.js";import"./withOsdkMetrics-CswUt8H_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

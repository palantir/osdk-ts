import{f as b,j as a,r as i}from"./iframe-D-ZGqhox.js";import{O as u}from"./object-table-DjGi5wvU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHmHhg6q.js";import"./Table-SgKDRKfa.js";import"./index-DMbZcvzJ.js";import"./Dialog-DjOrzyf2.js";import"./cross-C-5SE6cr.js";import"./svgIconContainer-DynaZTrl.js";import"./useBaseUiId-UHE7cq6V.js";import"./InternalBackdrop-C63SxHNb.js";import"./composite-BwjOgotZ.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./index-DGIXwIHP.js";import"./useEventCallback-CBryEak9.js";import"./SkeletonBar-BP7hF3Zr.js";import"./LoadingCell-B8_ljK48.js";import"./ColumnConfigDialog-Wnv2YTUh.js";import"./DraggableList-Diafxmz7.js";import"./search-Df3zpGfV.js";import"./Input-Cb6mwwI7.js";import"./useControlled-DZViTlY6.js";import"./Button-BX_hSGAP.js";import"./small-cross-zLLYVOtd.js";import"./ActionButton-BTMY82P_.js";import"./Checkbox-Stmc3Nfw.js";import"./useValueChanged-B65vtIly.js";import"./CollapsiblePanel-DTrAe8QH.js";import"./MultiColumnSortDialog-dSGIxCbt.js";import"./MenuTrigger-D2cmTfVi.js";import"./CompositeItem-BUGdCkRP.js";import"./ToolbarRootContext-C0KaRFai.js";import"./getDisabledMountTransitionStyles-BrJtjLyN.js";import"./getPseudoElementBounds-Ds3bNVw-.js";import"./chevron-down-TA05iMki.js";import"./index-DtE8_iZZ.js";import"./error-I7Ps8uLh.js";import"./BaseCbacBanner-5SFPBYFJ.js";import"./makeExternalStore-BUNud_OP.js";import"./Tooltip-DsJKDnDl.js";import"./PopoverPopup-DmqcRuFP.js";import"./debounce-CEBh1i8u.js";import"./useOsdkClient-_IYUYQJJ.js";import"./tick-Cm9W0Mqj.js";import"./DropdownField-WB5QGntE.js";import"./isEqual-DYkX0s92.js";import"./withOsdkMetrics-CNUwJgZ9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

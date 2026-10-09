import{f as b,j as a,r as i}from"./iframe-DkUlyVAk.js";import{O as u}from"./object-table-wcCDtGcD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Do3rx7tx.js";import"./Table-BuAXuDdk.js";import"./index-BKCxouDT.js";import"./Dialog-t8PP7gAK.js";import"./cross-NxNK5LVM.js";import"./svgIconContainer-DXdte7hC.js";import"./useBaseUiId-Ct2lb7hy.js";import"./InternalBackdrop-JtvBqmbW.js";import"./composite-DFkzp6xD.js";import"./index-C2qK1saS.js";import"./index-D2D5ykmi.js";import"./index-BHWhvKcH.js";import"./useEventCallback-Bfg-1dtD.js";import"./SkeletonBar-DrTF8jwx.js";import"./LoadingCell-CzBDsbnw.js";import"./ColumnConfigDialog-DzLhLwGL.js";import"./DraggableList-Zj2AdCb7.js";import"./search-BtZqzqFW.js";import"./Input-DEfnyfO2.js";import"./useControlled-DQwmvUO6.js";import"./Button-YTCf-lQa.js";import"./small-cross-CBmGUiw6.js";import"./ActionButton-CGCXefcq.js";import"./Checkbox-D-KL8GQC.js";import"./useValueChanged-Bwz98CW8.js";import"./CollapsiblePanel-CWIE3b7e.js";import"./MultiColumnSortDialog-CelZgdCc.js";import"./MenuTrigger-D-7KzGK2.js";import"./CompositeItem-C6x4Plfg.js";import"./ToolbarRootContext-H2xpDF0U.js";import"./getDisabledMountTransitionStyles-D2mnHFL5.js";import"./getPseudoElementBounds-DgjJtdNO.js";import"./chevron-down-C8H-X29U.js";import"./index-2N4Mch0O.js";import"./error-Cxkq3yoq.js";import"./BaseCbacBanner-CvVoV4NY.js";import"./makeExternalStore-CrMBheh9.js";import"./Tooltip-BZdoNmX1.js";import"./PopoverPopup-CjNS0jhO.js";import"./debounce-BrUJ1qZS.js";import"./useOsdkClient-DcaeD6xA.js";import"./tick-xV8dN8GT.js";import"./DropdownField-Bqc5sgH5.js";import"./isEqual-uuZQYH9j.js";import"./withOsdkMetrics-_-mYkqh_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BO3JDeUy.js";import{O as u}from"./object-table-BZk0Lu8i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-urwU0B1K.js";import"./Table-Npo51Eyl.js";import"./index-CEHZ1Lmc.js";import"./Dialog-x_VYxJbx.js";import"./cross-B4B_Rmmg.js";import"./svgIconContainer-B2x3jtn9.js";import"./useBaseUiId-BhX3QU_S.js";import"./InternalBackdrop-B9xuZ3X4.js";import"./composite-DkSbjExr.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./index-C1W664_h.js";import"./useEventCallback-DsZGsUBH.js";import"./SkeletonBar-BIEi9a0x.js";import"./LoadingCell-DDYsuin1.js";import"./ColumnConfigDialog-DWj93LnE.js";import"./DraggableList-Dpi7zkEQ.js";import"./search-BTnE45Hm.js";import"./Input-aywzIDzd.js";import"./useControlled-CFrWaOQK.js";import"./Button-HsgZWy4d.js";import"./small-cross-D5iZfcsS.js";import"./ActionButton-CjOnURl7.js";import"./Checkbox-BxlWuqsA.js";import"./useValueChanged-D73ikQgq.js";import"./CollapsiblePanel-fn9uuRmZ.js";import"./MultiColumnSortDialog-C_nTOm41.js";import"./MenuTrigger-DD1ibjA3.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./getDisabledMountTransitionStyles-D2oz7XSg.js";import"./getPseudoElementBounds-C9NZ6w4c.js";import"./chevron-down-D8wRJ6gM.js";import"./index-_n59woxc.js";import"./error-COT9B3Hv.js";import"./BaseCbacBanner-CWSg8Ff3.js";import"./makeExternalStore-DdmSyb-E.js";import"./Tooltip-B6gO1E8K.js";import"./PopoverPopup-HQOEOoaE.js";import"./debounce-B2PKE0le.js";import"./useOsdkClient-B48UOwRR.js";import"./tick-tswKzLaH.js";import"./DropdownField-CB_lS8X1.js";import"./isEqual-DQBhCu8Z.js";import"./withOsdkMetrics-C6_wMEah.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BPD7a-d3.js";import{O as u}from"./object-table-D-tCC7x0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BMJg2fth.js";import"./Table-X6gXC-rQ.js";import"./index-DWlOJTtZ.js";import"./Dialog-zxTOVbxW.js";import"./cross-BQBN2sBj.js";import"./svgIconContainer-9WeLc1W4.js";import"./useBaseUiId-B7NeBfTl.js";import"./InternalBackdrop-BqFiGGtG.js";import"./composite-2r4XaYyI.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./index-Dc2JolBW.js";import"./useEventCallback-BLd4X65y.js";import"./SkeletonBar-DXu4hwWS.js";import"./LoadingCell-D1PldjSx.js";import"./ColumnConfigDialog-EzXdePxC.js";import"./DraggableList-Km3Db3w6.js";import"./search-DDY46Bsb.js";import"./Input-BsWtOrbL.js";import"./useControlled-DcoiTjSg.js";import"./Button-J8RQxXRy.js";import"./small-cross-DKMapFDw.js";import"./ActionButton-DQ15zJBD.js";import"./Checkbox-DKjVjgpk.js";import"./useValueChanged-CW-dzw8w.js";import"./CollapsiblePanel-DZA1hbiz.js";import"./MultiColumnSortDialog-DaToBdED.js";import"./MenuTrigger-C0rTEkZ4.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./getDisabledMountTransitionStyles-GoNHsGRT.js";import"./getPseudoElementBounds-wmkfIGoM.js";import"./chevron-down-TG9TSSoU.js";import"./index-BUYfos0b.js";import"./error-DxTVaEkU.js";import"./BaseCbacBanner-CCV7S7vH.js";import"./makeExternalStore-BXsO-6Dt.js";import"./Tooltip-y6dqO2XM.js";import"./PopoverPopup-DLgHHGX6.js";import"./debounce-D2ZCRJTn.js";import"./useOsdkClient-jf6lJmqS.js";import"./tick-0nx9bnwa.js";import"./DropdownField-Dpdo-uvo.js";import"./isEqual-DKT0xxpO.js";import"./withOsdkMetrics-zev-jqP5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

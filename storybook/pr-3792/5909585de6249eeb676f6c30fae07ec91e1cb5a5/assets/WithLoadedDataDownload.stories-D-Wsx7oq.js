import{f as b,j as a,r as i}from"./iframe-BW5KWTVf.js";import{O as u}from"./object-table-D_xScRXe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-wTJCuLa0.js";import"./Table-DVjVy5zQ.js";import"./index-DZuHGaZR.js";import"./Dialog-Bcgs7q0X.js";import"./cross-B9jHlUmC.js";import"./svgIconContainer-CGH_b5cs.js";import"./useBaseUiId-djKvr1Zf.js";import"./InternalBackdrop-rE9UXK7e.js";import"./composite-DMJpidK5.js";import"./index-CBnuzy09.js";import"./index-C9GjXNGu.js";import"./index-B3_s8STg.js";import"./useEventCallback-D3_8TWDL.js";import"./SkeletonBar-Dv8azkVh.js";import"./LoadingCell-CFK-23fD.js";import"./ColumnConfigDialog-908I2WCI.js";import"./DraggableList-DdS97684.js";import"./search-BxTonfjS.js";import"./Input-Cuj41dtm.js";import"./useControlled-Bd2lsHY1.js";import"./isEqual-CBzrqXli.js";import"./isObject-UDZU_4OQ.js";import"./Button-CRYDVXLK.js";import"./ActionButton-Buo_yQHB.js";import"./Checkbox-qKxs5cs6.js";import"./useValueChanged-WJiyss_6.js";import"./CollapsiblePanel-BdO59VuU.js";import"./MultiColumnSortDialog-3Z8xlHBg.js";import"./MenuTrigger-CPeUYOFK.js";import"./CompositeItem-BgohVmvL.js";import"./ToolbarRootContext-CiyKClQw.js";import"./getDisabledMountTransitionStyles-Bs-ypZSG.js";import"./getPseudoElementBounds-CJwidu3r.js";import"./chevron-down-cYHAHA60.js";import"./index-BnK0TffT.js";import"./error-BnZI7SXP.js";import"./BaseCbacBanner-2cZzxKzO.js";import"./makeExternalStore-DRWx7nce.js";import"./Tooltip-Ds6XRiL3.js";import"./PopoverPopup-0wn3_1oJ.js";import"./toNumber-BHuF1cBP.js";import"./useOsdkClient-DbcEbBVO.js";import"./tick-G9xbPlsl.js";import"./DropdownField-D4osHb18.js";import"./withOsdkMetrics-BeUX7xJv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DbF5D9-_.js";import{O as u}from"./object-table-DVEuUJFd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BcWZiWdb.js";import"./index-vNZRhGQ3.js";import"./Dialog-CV4MtVWY.js";import"./cross-DpsL6xSn.js";import"./svgIconContainer-CYL48BhS.js";import"./useBaseUiId-BYKXNZCL.js";import"./InternalBackdrop-DGeqkFMf.js";import"./composite-BvIaIlJz.js";import"./index-C3rOI0HH.js";import"./index-BdoDUFMf.js";import"./index-73Gf1Mr5.js";import"./useEventCallback-CLLwgXb6.js";import"./SkeletonBar-BEDIj7uz.js";import"./LoadingCell-C29DffAw.js";import"./ColumnConfigDialog-x1LHz0M0.js";import"./DraggableList-C85teXY8.js";import"./search-CsGznyHB.js";import"./Input-Cj8VgrV5.js";import"./useControlled-DBlDVYGv.js";import"./Button-faj9AFom.js";import"./small-cross-DnJ1Fm0h.js";import"./ActionButton-X-IJBCsa.js";import"./Checkbox-CHQmdSzP.js";import"./useValueChanged-gj8fTqzv.js";import"./CollapsiblePanel-TFeIMh9a.js";import"./MultiColumnSortDialog-C-IyEb0b.js";import"./MenuTrigger-C4O409te.js";import"./CompositeItem-DXcm1g9b.js";import"./ToolbarRootContext-t3iqgFfl.js";import"./getDisabledMountTransitionStyles-By6jdpM_.js";import"./getPseudoElementBounds-D4mZK0Ym.js";import"./chevron-down-BrDC1vMO.js";import"./index-DHKOapB1.js";import"./error-14LmHoiQ.js";import"./BaseCbacBanner-CiR9H6nC.js";import"./makeExternalStore-Ca1T37Md.js";import"./Tooltip-DmEH5uAl.js";import"./PopoverPopup-Dx29j46W.js";import"./toNumber-BPAoWZSk.js";import"./useOsdkClient-CrGzgnYp.js";import"./tick-B_wPkasy.js";import"./DropdownField-DRxMY5CB.js";import"./withOsdkMetrics-Fcwwb7tB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

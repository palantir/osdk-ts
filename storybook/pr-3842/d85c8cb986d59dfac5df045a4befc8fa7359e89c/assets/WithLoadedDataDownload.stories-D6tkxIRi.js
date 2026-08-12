import{f as b,j as a,r as i}from"./iframe-C1aZz4qh.js";import{O as u}from"./object-table-Da3ELJ35.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C57PRwQB.js";import"./Table-BwAq-AXt.js";import"./index-DndOh7uw.js";import"./Dialog-D0XUZvVd.js";import"./cross-qtsLbSBi.js";import"./svgIconContainer-B5UnyqeH.js";import"./useBaseUiId-DHP81qHW.js";import"./InternalBackdrop-8CzUigsn.js";import"./composite-CB1pt23S.js";import"./index-CSr6rIRF.js";import"./index-DwSUGGBW.js";import"./index-DhK7zook.js";import"./useEventCallback-u7Ubimgc.js";import"./SkeletonBar-DM3YtxCs.js";import"./LoadingCell-DfLkqqvz.js";import"./ColumnConfigDialog-iroc8zmb.js";import"./DraggableList-Dc-s-PBU.js";import"./search-yR82rB65.js";import"./Input-CkMB4S7R.js";import"./useControlled-CCEarqoz.js";import"./isEqual-CY_FtRlU.js";import"./isObject-Dd13mV1N.js";import"./Button-BgiX1sCn.js";import"./ActionButton-FEh_tB9Y.js";import"./Checkbox-Cb2TG0KZ.js";import"./useValueChanged-CIbB9b-p.js";import"./CollapsiblePanel-P01aIOd1.js";import"./MultiColumnSortDialog-DbWxPT_p.js";import"./MenuTrigger-BJS7IWlK.js";import"./CompositeItem-DLnehaEy.js";import"./ToolbarRootContext-BNN0c4jp.js";import"./getDisabledMountTransitionStyles-BmzXB9Ho.js";import"./getPseudoElementBounds-DuZUZl-y.js";import"./chevron-down-dh3VxrDb.js";import"./index-NP9LypFz.js";import"./error-BXuTAgqJ.js";import"./BaseCbacBanner-DpgVfwhv.js";import"./makeExternalStore-tkOquhkD.js";import"./Tooltip-CCcmI9_z.js";import"./PopoverPopup-DpukjGTT.js";import"./toNumber-DoftAu1J.js";import"./useOsdkClient-7X5NmjyA.js";import"./tick-RCuoZqaK.js";import"./DropdownField-jqAfXglE.js";import"./withOsdkMetrics-C0HDOzXR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

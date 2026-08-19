import{f as b,j as a,r as i}from"./iframe-CGqc1mNB.js";import{O as u}from"./object-table-CZvyIlfB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BJdpauA9.js";import"./Table-AaR6pvOa.js";import"./index-Dgk2zAqJ.js";import"./Dialog-CNejIhKL.js";import"./cross-XlQOrTFd.js";import"./svgIconContainer-CBRazqRm.js";import"./useBaseUiId-CLH5ZdSv.js";import"./InternalBackdrop-C-zUCy48.js";import"./composite-D6bWet8H.js";import"./index-Dp5yRYTx.js";import"./index-DbvXLa6Y.js";import"./index-D1snueEy.js";import"./useEventCallback-Dk3_50Ao.js";import"./SkeletonBar-Dq5kGonv.js";import"./LoadingCell---M2Y8x3.js";import"./ColumnConfigDialog-BvvF93p6.js";import"./DraggableList-BG62YbY1.js";import"./search-DpFh14Cw.js";import"./Input-BrLbJg7l.js";import"./useControlled-BVW9yO_V.js";import"./Button-BDmqxq31.js";import"./small-cross-thz1Z2sy.js";import"./ActionButton-ObfHG4WA.js";import"./Checkbox-Dh2IMSOE.js";import"./useValueChanged-fsujBZUg.js";import"./CollapsiblePanel-D2eiku1v.js";import"./MultiColumnSortDialog-9dILp4tw.js";import"./MenuTrigger-6n7-f6B8.js";import"./CompositeItem-CUyPJbYK.js";import"./ToolbarRootContext-BdKEdjkY.js";import"./getDisabledMountTransitionStyles-B1I7mcq2.js";import"./getPseudoElementBounds-DBuVCIci.js";import"./chevron-down-UapZ8jOT.js";import"./index-BtlPha85.js";import"./error-U35dGLvC.js";import"./BaseCbacBanner-l3IWoUW7.js";import"./makeExternalStore-B9NtbuNt.js";import"./Tooltip-DNiBwXUD.js";import"./PopoverPopup-Ds1pQBCB.js";import"./debounce-CaPbwKEN.js";import"./useOsdkClient-KrpErzls.js";import"./tick-CgkwFM7w.js";import"./DropdownField-Be4XT9or.js";import"./isEqual-1eZ0xhVS.js";import"./withOsdkMetrics-Ct9fR7z_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

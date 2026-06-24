import{f as b,j as a,r as i}from"./iframe-D5W2pBc5.js";import{O as u}from"./object-table-B_nCPmIg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C03qLVRK.js";import"./Table-atMY8VV7.js";import"./index-x281GiPa.js";import"./Dialog-BPWNl1aX.js";import"./cross-Bnq7XFIj.js";import"./svgIconContainer-BUckVbS-.js";import"./useBaseUiId-BC865lvb.js";import"./InternalBackdrop-DCRAUkGf.js";import"./composite-DudV4RlL.js";import"./index-DlZWaj5F.js";import"./index-DxwZMEhY.js";import"./index-BnONTiN3.js";import"./useEventCallback-DRr2Qih1.js";import"./SkeletonBar-BViISlSW.js";import"./LoadingCell-CZ9FwRSI.js";import"./ColumnConfigDialog-COX9F8oJ.js";import"./DraggableList-CB91LxbQ.js";import"./Input-Iun8yeL_.js";import"./useControlled-p9XyKTk5.js";import"./Button-BDJ-nsd9.js";import"./small-cross-BldKOlhU.js";import"./ActionButton-WxZZBmqq.js";import"./Checkbox-D1XRIUU0.js";import"./minus-DRltfjaR.js";import"./useValueChanged-CaAqXxFf.js";import"./caret-down-DtJyVmgU.js";import"./CollapsiblePanel-Blp-C1bh.js";import"./MultiColumnSortDialog-CvdSmLtl.js";import"./MenuTrigger-D0UWcC1N.js";import"./CompositeItem-Ip8fd80v.js";import"./ToolbarRootContext-Dq0g5AR3.js";import"./getDisabledMountTransitionStyles-3RjIha-w.js";import"./getPseudoElementBounds-BmZWMovb.js";import"./chevron-down-BIxUIl1s.js";import"./index-ssIasGVN.js";import"./error-BNRnot36.js";import"./BaseCbacBanner-DovY4I8V.js";import"./makeExternalStore-BLuy7qER.js";import"./Tooltip-6GBv9y-H.js";import"./PopoverPopup-fLfsASwy.js";import"./toNumber-DnUZBJFE.js";import"./useOsdkClient-BT03dxC1.js";import"./DropdownField-DuRAe0yE.js";import"./withOsdkMetrics-DZF9zv5W.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

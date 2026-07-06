import{f as b,j as a,r as i}from"./iframe-DcrGl_O-.js";import{O as u}from"./object-table-BPygjlIo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DkTM98UZ.js";import"./Table-BuVfs1yJ.js";import"./index-t22ZryHL.js";import"./Dialog-xJy6Q51_.js";import"./cross-BDte8GAy.js";import"./svgIconContainer-DI9nrV8O.js";import"./useBaseUiId-BG7q8PzN.js";import"./InternalBackdrop-DTt4LBxf.js";import"./composite-JNfYZaHn.js";import"./index-BHn6IxTA.js";import"./index-BdTuNC5G.js";import"./index-BDLEBAab.js";import"./useEventCallback-8yUNpzrQ.js";import"./SkeletonBar-BHRs2wAX.js";import"./LoadingCell-B73iNlTr.js";import"./ColumnConfigDialog-Ch25l1hj.js";import"./DraggableList-AtqFUOy2.js";import"./search-QKPSMOkR.js";import"./Input-C-1JAkdn.js";import"./useControlled-BKIeD5bs.js";import"./Button-pEYsBApl.js";import"./small-cross-axpRZrA0.js";import"./ActionButton-D4zs5Apg.js";import"./Checkbox-fjZKHdM5.js";import"./useValueChanged-Y4MnbHus.js";import"./CollapsiblePanel-Dekee5mX.js";import"./MultiColumnSortDialog-umLRVJog.js";import"./MenuTrigger-BUaPlHyD.js";import"./CompositeItem-DVchhf0Z.js";import"./ToolbarRootContext-DvnycJee.js";import"./getDisabledMountTransitionStyles-CSD0vjLr.js";import"./getPseudoElementBounds-CvooUYri.js";import"./chevron-down-BLKzex50.js";import"./index-B8JHvmpz.js";import"./error-B0Z2eL6G.js";import"./BaseCbacBanner-DQiY1kTr.js";import"./makeExternalStore-DBdL1D3Z.js";import"./Tooltip-BtoKMyJL.js";import"./PopoverPopup-zGD8vLfh.js";import"./toNumber-EL-CmTrj.js";import"./useOsdkClient-DAUtxSPg.js";import"./tick-DzPNCldO.js";import"./DropdownField-DkgaxOFL.js";import"./withOsdkMetrics-CB_-TdaD.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-tKy6APGZ.js";import{O as u}from"./object-table-CXOQ5-Bt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-TkRVYpGj.js";import"./Table-aVr-cm8e.js";import"./index-xL2dF_iL.js";import"./Dialog-_HKqoJi0.js";import"./cross-CZNxjxTb.js";import"./svgIconContainer-Fm0Itt8L.js";import"./useBaseUiId-D4LRJH62.js";import"./InternalBackdrop-JtePeB2n.js";import"./composite-CQXmhBC2.js";import"./index-tz8HT03m.js";import"./index-DPumkzsB.js";import"./index-BURy5Q0k.js";import"./useEventCallback-BPZsErWH.js";import"./SkeletonBar-DKA6QS3d.js";import"./LoadingCell-C4FlmSc0.js";import"./ColumnConfigDialog-1wLW7wAA.js";import"./DraggableList-DzkYxRiU.js";import"./search-D28QZpbg.js";import"./Input-CNh3fqAG.js";import"./useControlled-DKIul1JY.js";import"./Button-CO7TuWo7.js";import"./small-cross-B57Jo-iY.js";import"./ActionButton-CH2f-vaq.js";import"./Checkbox-i1pzXO7M.js";import"./useValueChanged-Btmb51LF.js";import"./CollapsiblePanel-BBg5V9Fw.js";import"./MultiColumnSortDialog-VCNdJIc8.js";import"./MenuTrigger-JZuFOHD6.js";import"./CompositeItem-CPH8rcqG.js";import"./ToolbarRootContext-BNp90vCd.js";import"./getDisabledMountTransitionStyles--YjRI_nH.js";import"./getPseudoElementBounds-oj5UDNKB.js";import"./chevron-down-Dz9066r5.js";import"./index-BY_Q76g3.js";import"./error-DeDVZ0qI.js";import"./BaseCbacBanner-Ce6XNrpU.js";import"./makeExternalStore-C4vMnOBy.js";import"./Tooltip-3YSWsEh-.js";import"./PopoverPopup-CzPcYQbn.js";import"./debounce-DlATweo8.js";import"./useOsdkClient-DffW2GNh.js";import"./tick-Hrp6Yd74.js";import"./DropdownField-CPXyhYMx.js";import"./isEqual-OqbIOAu3.js";import"./withOsdkMetrics-D45euEFz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

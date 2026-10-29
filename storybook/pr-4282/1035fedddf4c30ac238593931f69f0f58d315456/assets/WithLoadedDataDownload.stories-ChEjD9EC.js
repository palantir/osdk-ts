import{f as b,j as a,r as i}from"./iframe-C6LjohtU.js";import{O as u}from"./object-table-CcAg2w7E.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GD_-jSvs.js";import"./Table-ilCXauHI.js";import"./index-Dl2NjNEw.js";import"./Dialog-BM8D0ZJA.js";import"./cross-DaW6OMzU.js";import"./svgIconContainer-B8ItPc1M.js";import"./useBaseUiId-Cap-PPpy.js";import"./InternalBackdrop-BsVUWCWG.js";import"./composite-BaoR0w31.js";import"./index-cI1ynK4N.js";import"./index-CDYomSyo.js";import"./index-B-dD1TvL.js";import"./useEventCallback-DxZxqDUd.js";import"./SkeletonBar-BeY9dT73.js";import"./LoadingCell-yc4sPZge.js";import"./ColumnConfigDialog-Bn8NyW4v.js";import"./DraggableList-BN5t2BlI.js";import"./search-mbcTQJkq.js";import"./Input-B249MGbk.js";import"./useControlled-BmDrUstA.js";import"./Button-PZls5hRh.js";import"./small-cross-BaK91MRB.js";import"./ActionButton-DwbrhZUk.js";import"./Checkbox-qJo_K2uT.js";import"./useValueChanged-W2WuQ5wK.js";import"./CollapsiblePanel-Cs_KG3mc.js";import"./MultiColumnSortDialog-Ct-qU7bQ.js";import"./MenuTrigger-BC5AyEgm.js";import"./CompositeItem-DAAqOuWb.js";import"./ToolbarRootContext-DXm6j23Z.js";import"./getDisabledMountTransitionStyles-BwmyyjtU.js";import"./getPseudoElementBounds-BQ5agBtb.js";import"./chevron-down-7dkGHUAP.js";import"./index--rDorTVG.js";import"./error-DQ-bOeSn.js";import"./BaseCbacBanner-DXERYCjt.js";import"./makeExternalStore-BQYgEbL5.js";import"./Tooltip-D1h-JVHm.js";import"./PopoverPopup-B0rRAlr0.js";import"./debounce-DIQiziXj.js";import"./useOsdkClient-D02NaCPv.js";import"./tick-AtbomG7h.js";import"./DropdownField-CaiM83zQ.js";import"./isEqual-fgbXcHh_.js";import"./withOsdkMetrics-DmxFMu7G.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

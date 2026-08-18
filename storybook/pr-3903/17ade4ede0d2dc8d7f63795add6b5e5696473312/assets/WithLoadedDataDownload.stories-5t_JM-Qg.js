import{f as b,j as a,r as i}from"./iframe-Co4qWrtI.js";import{O as u}from"./object-table-BMTteqB4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CLLjQro7.js";import"./Table-BjVcsb4-.js";import"./index-DEzmk0WZ.js";import"./Dialog-CxRahfUX.js";import"./cross-SEs1k_Kd.js";import"./svgIconContainer-DaajecJ9.js";import"./useBaseUiId-BAgt3F1o.js";import"./InternalBackdrop-BwGu3z4c.js";import"./composite-DHfKBQ5i.js";import"./index-C2z4NjHs.js";import"./index-CqKJ3sPz.js";import"./index-C_-wbz46.js";import"./useEventCallback-OwSlM4ZE.js";import"./SkeletonBar-DfHQ4TSe.js";import"./LoadingCell-C1t0UbO6.js";import"./ColumnConfigDialog-5bij5Oc4.js";import"./DraggableList-WMBuZ8JT.js";import"./search-DLItUO9A.js";import"./Input-oSQlsB7a.js";import"./useControlled-BInZf-2P.js";import"./Button-sQ3dXKZH.js";import"./small-cross-iZ4ErZEa.js";import"./ActionButton-BLbkXCDW.js";import"./Checkbox-BaktbOjr.js";import"./useValueChanged-XMocqPgo.js";import"./CollapsiblePanel-DO0IOgEL.js";import"./MultiColumnSortDialog-tQ5ixUGv.js";import"./MenuTrigger-HYmZnr0U.js";import"./CompositeItem-DaLiwHmB.js";import"./ToolbarRootContext-DBPxppp8.js";import"./getDisabledMountTransitionStyles-BNu5cLid.js";import"./getPseudoElementBounds-DiLEPQDo.js";import"./chevron-down-CqSMzTaF.js";import"./index-C0XVZZRD.js";import"./error-DAul4oNM.js";import"./BaseCbacBanner-aSfqa7u8.js";import"./makeExternalStore-BVlyj7sn.js";import"./Tooltip-DQKyQxoY.js";import"./PopoverPopup-D4KihDvW.js";import"./debounce-DOmcCNrq.js";import"./useOsdkClient-gLFbYCUi.js";import"./tick-D00iMxE3.js";import"./DropdownField-D_sH1kdW.js";import"./isEqual-CNxbKZsb.js";import"./withOsdkMetrics-CtjXLxVF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

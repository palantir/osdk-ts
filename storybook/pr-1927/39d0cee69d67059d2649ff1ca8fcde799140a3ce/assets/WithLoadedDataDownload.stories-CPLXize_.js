import{f as b,j as a,r as i}from"./iframe-cBiyHty9.js";import{O as u}from"./object-table-DdxHR6gu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bv3meVH3.js";import"./Table-DOWOKbmv.js";import"./index-D9svWSdg.js";import"./Dialog-D1e3reXB.js";import"./cross-6ls1LaWh.js";import"./svgIconContainer-BYeKHHBz.js";import"./useBaseUiId-DvsuiOVy.js";import"./InternalBackdrop-CkoiXEVu.js";import"./composite-CzYA3ElD.js";import"./index-BjO7MMv7.js";import"./index-AEP3bJ8p.js";import"./index-irxThoCO.js";import"./useEventCallback-DpA9bV-i.js";import"./SkeletonBar-CFxnwFPu.js";import"./LoadingCell-tIQP5ayH.js";import"./ColumnConfigDialog-D4TY98FM.js";import"./DraggableList-3zVKSQ3j.js";import"./search-BHdPsWbB.js";import"./Input-CUOeqbmp.js";import"./useControlled-CK1iqSKb.js";import"./Button-BcVzWRXY.js";import"./small-cross-Cs_0F4xM.js";import"./ActionButton-CTzhl48y.js";import"./Checkbox-Bbew-0gB.js";import"./useValueChanged-BaN3_QZu.js";import"./CollapsiblePanel-B8M_JZTW.js";import"./MultiColumnSortDialog-BSE3jK1S.js";import"./MenuTrigger-BCGw1eRt.js";import"./CompositeItem-CVN4lZoj.js";import"./ToolbarRootContext-C7-4unHr.js";import"./getDisabledMountTransitionStyles-CI3RAlpb.js";import"./getPseudoElementBounds-CxFqqadz.js";import"./chevron-down-X8NW_OEl.js";import"./index-CBnbMMaT.js";import"./error-Ct0Hv0fs.js";import"./BaseCbacBanner-QnBtoc3l.js";import"./makeExternalStore-CGJamYgh.js";import"./Tooltip-CvHPMZe4.js";import"./PopoverPopup-CUtWkbQa.js";import"./debounce-B191BFcS.js";import"./useOsdkClient-BAx2SljP.js";import"./tick-VSl0kWDd.js";import"./DropdownField-DiamDw4J.js";import"./isEqual-CMnDPE7A.js";import"./withOsdkMetrics-CoTXzMQi.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

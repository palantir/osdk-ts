import{f as b,j as a,r as i}from"./iframe-DkOKI-zj.js";import{O as u}from"./object-table-Di8DTL1R.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BedFcYWj.js";import"./Table-DQhPss-2.js";import"./index-D48E-jGx.js";import"./Dialog-T66-hdi9.js";import"./cross-BAQJRB0k.js";import"./svgIconContainer-DdqlG__h.js";import"./useBaseUiId-hIsI1Ivz.js";import"./InternalBackdrop-PNkMbD5Q.js";import"./composite-D6LFofvV.js";import"./index-Cul3U-EW.js";import"./index-BzBoChRE.js";import"./index-l61FzHwI.js";import"./useEventCallback-Df5LXRIF.js";import"./SkeletonBar-Pcg0vYVl.js";import"./LoadingCell-ThFH2l6e.js";import"./ColumnConfigDialog-CBr_DJW6.js";import"./DraggableList-DR8UDqzR.js";import"./search-C0Wwv3jH.js";import"./Input-CkTh5rVe.js";import"./useControlled-B-VxAfVU.js";import"./Button-BECGNN6S.js";import"./small-cross-K0beemaL.js";import"./ActionButton-DpOgAirr.js";import"./Checkbox-DbkOBHsF.js";import"./useValueChanged-DVDHy3eE.js";import"./CollapsiblePanel-Bx0mz0GR.js";import"./MultiColumnSortDialog-DCHCGVHa.js";import"./MenuTrigger-CeucYaYG.js";import"./CompositeItem-B4iJlHXi.js";import"./ToolbarRootContext-CK3JrOY-.js";import"./getDisabledMountTransitionStyles-CXRfGTML.js";import"./getPseudoElementBounds-D8_q1n_o.js";import"./chevron-down-CL9C1vsy.js";import"./index-i7VgI47A.js";import"./error-CK17bhMI.js";import"./BaseCbacBanner-ByZyDHoK.js";import"./makeExternalStore-AOqR8Y_j.js";import"./Tooltip-COXqoDJj.js";import"./PopoverPopup-rIEBcJLw.js";import"./debounce-BAkRCUwV.js";import"./useOsdkClient-B8P8_Y82.js";import"./tick-B4YOxSUu.js";import"./DropdownField-C2YB8IHz.js";import"./isEqual-C3EiRbqw.js";import"./withOsdkMetrics-CQ-W79bx.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

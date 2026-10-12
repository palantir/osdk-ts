import{f as b,j as a,r as i}from"./iframe-DmE1XkBG.js";import{O as u}from"./object-table-BBDX0JK-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CXlVQXKb.js";import"./Table-3USI4T48.js";import"./index-kStVVneq.js";import"./Dialog-U7sno35Q.js";import"./cross-DJt4HA-N.js";import"./svgIconContainer-BYLHbmus.js";import"./useBaseUiId-BBFoTCwh.js";import"./InternalBackdrop-CiHjM1hr.js";import"./composite-Dj1kIl2K.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./index-BSV59ZpO.js";import"./useEventCallback-vgEMvYMu.js";import"./SkeletonBar-CEiG_Olh.js";import"./LoadingCell-DDr20pG6.js";import"./ColumnConfigDialog-Ce0P5zkg.js";import"./DraggableList-IbXSuFDv.js";import"./search-DLAneuKN.js";import"./Input-BwNWBTCC.js";import"./useControlled-Ceu9BId1.js";import"./Button-CjFhiXn4.js";import"./small-cross-CdTrWr6f.js";import"./ActionButton-D7gNEyrg.js";import"./Checkbox-BS40cc6q.js";import"./useValueChanged-CEMHgm4B.js";import"./CollapsiblePanel-F_JsFxPB.js";import"./MultiColumnSortDialog-DljV5krj.js";import"./MenuTrigger-_nCOMuwK.js";import"./CompositeItem-C3J_zDNM.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./getDisabledMountTransitionStyles-C0PIglyQ.js";import"./getPseudoElementBounds-BdUsSKfU.js";import"./chevron-down-Dg6DJkU-.js";import"./index-BVlwO6Du.js";import"./error-B3TY1Brr.js";import"./BaseCbacBanner-7AxfkGHq.js";import"./makeExternalStore-C84QYiDy.js";import"./Tooltip-Bn2W5oJX.js";import"./PopoverPopup-D4DXdieW.js";import"./debounce-DVfO0w3J.js";import"./useOsdkClient-COMtbyLT.js";import"./tick-BV927XEn.js";import"./DropdownField-DYMCaG07.js";import"./isEqual-WGLF_XWC.js";import"./withOsdkMetrics-DXKPSTbY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

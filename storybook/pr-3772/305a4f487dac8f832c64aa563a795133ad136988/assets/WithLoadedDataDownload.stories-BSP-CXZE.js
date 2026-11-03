import{f as b,j as a,r as i}from"./iframe-vcLMjbea.js";import{O as u}from"./object-table-BfvzlUao.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-RU1OdimD.js";import"./Table-CSY55iFj.js";import"./index-CG3KkM6y.js";import"./Dialog-Xcbat__-.js";import"./cross-D-EFak3i.js";import"./svgIconContainer-Gicaxf1s.js";import"./useBaseUiId-DnJ4weT2.js";import"./InternalBackdrop-HVYVXyCg.js";import"./composite-CT0DZWF7.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./index-NU5zO8vj.js";import"./useEventCallback-D6NEmK7_.js";import"./SkeletonBar-sPDIVMCS.js";import"./LoadingCell-CT123iLI.js";import"./ColumnConfigDialog-DZg6qXzG.js";import"./DraggableList-DZ2o5zTG.js";import"./search-3IXTuiXl.js";import"./Input-B07SGOjF.js";import"./useControlled-BXjUIo-l.js";import"./Button-DY9kTYfp.js";import"./small-cross-Bp4GK8nv.js";import"./ActionButton-BgFvfHoG.js";import"./Checkbox-BwhD0opN.js";import"./useValueChanged-Fi604hGA.js";import"./CollapsiblePanel-DiUY56Er.js";import"./MultiColumnSortDialog-o2Oosgua.js";import"./MenuTrigger-CNqmUXY3.js";import"./CompositeItem-BN5pExu_.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./getDisabledMountTransitionStyles-CMJs3FOY.js";import"./getPseudoElementBounds-CVVRvaQ5.js";import"./chevron-down-CCBKa1Fl.js";import"./index-DM0ijL_x.js";import"./error-CrN3ijuU.js";import"./BaseCbacBanner-CxJGL3mi.js";import"./makeExternalStore-SiSiEnyI.js";import"./Tooltip-bH_4JHn2.js";import"./PopoverPopup-Bma8tsO9.js";import"./debounce-N0qJ7Xu9.js";import"./useOsdkClient-DE3ZbsH3.js";import"./tick-DMkp_lOe.js";import"./DropdownField-DHSmAbjS.js";import"./isEqual-C1DaMkeA.js";import"./withOsdkMetrics-BcVOHfX1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

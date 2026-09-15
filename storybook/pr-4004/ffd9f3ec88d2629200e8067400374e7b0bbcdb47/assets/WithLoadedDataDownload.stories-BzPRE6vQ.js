import{f as b,j as a,r as i}from"./iframe-Ds1oJ6aB.js";import{O as u}from"./object-table-DxGk5C4S.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BuU6EXxB.js";import"./Table-B9BzzCYb.js";import"./index-DV-RsCBD.js";import"./Dialog-CtyGPeOn.js";import"./cross-GX9DzQOW.js";import"./svgIconContainer-DhoJ1wKf.js";import"./useBaseUiId-SveB9MiJ.js";import"./InternalBackdrop-dHXXhMSx.js";import"./composite-B685C7pj.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./index-DjBs4z29.js";import"./useEventCallback-BIuUY0VI.js";import"./SkeletonBar-CgiMkEwi.js";import"./LoadingCell-Cu7oZNVj.js";import"./ColumnConfigDialog-qhy8ZuqX.js";import"./DraggableList-CC_UvAAX.js";import"./search-C9RUzGD8.js";import"./Input-DCigff7H.js";import"./useControlled-Bb3j5PDR.js";import"./Button-DEZznyRx.js";import"./small-cross-OSqOWbbs.js";import"./ActionButton-y1-kR7HQ.js";import"./Checkbox-04oMgZo9.js";import"./useValueChanged-DiKNib74.js";import"./CollapsiblePanel-DJPu7lg7.js";import"./MultiColumnSortDialog-BLl7b0AQ.js";import"./MenuTrigger-SsRAk4WD.js";import"./CompositeItem-DRYBX4C7.js";import"./ToolbarRootContext-D5DhHef8.js";import"./getDisabledMountTransitionStyles-M6DMXfnH.js";import"./getPseudoElementBounds-BevdPYrx.js";import"./chevron-down-BTaheqba.js";import"./index-DBvZrrqp.js";import"./error-Cpa8ixp-.js";import"./BaseCbacBanner-D37f3xf5.js";import"./makeExternalStore-Bpmh1YoV.js";import"./Tooltip-CiCS2vte.js";import"./PopoverPopup-BW8M19fp.js";import"./debounce-CaEJ8DE5.js";import"./useOsdkClient-Dx_YLbK3.js";import"./tick-4HEv4TzV.js";import"./DropdownField--RBhVTBF.js";import"./isEqual-B6VYb55l.js";import"./withOsdkMetrics-BWv1tGJm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

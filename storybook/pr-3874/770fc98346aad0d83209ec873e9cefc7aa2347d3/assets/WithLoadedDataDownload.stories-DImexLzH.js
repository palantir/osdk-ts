import{f as b,j as a,r as i}from"./iframe-UkB5vgVG.js";import{O as u}from"./object-table--6JN6yLk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVf8llwS.js";import"./Table-CjCohFn6.js";import"./index-qp1j7wJC.js";import"./Dialog-CZ_x9J9x.js";import"./cross-BdVzNhJI.js";import"./svgIconContainer-DayxyL3r.js";import"./useBaseUiId-Dn0EoDTA.js";import"./InternalBackdrop-C7U9xWxA.js";import"./composite-BGwzEdrp.js";import"./index-Bi4xYXRw.js";import"./index-e4diuhxy.js";import"./index-DfHcWnOV.js";import"./useEventCallback-Ct4SjjN5.js";import"./SkeletonBar-jc8wsvoD.js";import"./LoadingCell-Drwaf3vU.js";import"./ColumnConfigDialog-DICfUWLH.js";import"./DraggableList-DezpGo4i.js";import"./search-CsKKjabz.js";import"./Input-CB29R5Tw.js";import"./useControlled-Clgvd4Wq.js";import"./Button-C-9R3Dge.js";import"./small-cross-BhTFlBDt.js";import"./ActionButton-gCoOaLsR.js";import"./Checkbox-D2_TGGsM.js";import"./useValueChanged-8upR9kV4.js";import"./CollapsiblePanel-OMF1Q75F.js";import"./MultiColumnSortDialog-COAhezi2.js";import"./MenuTrigger-qboTs4ql.js";import"./CompositeItem-UlYd9APp.js";import"./ToolbarRootContext-m-lFbgU6.js";import"./getDisabledMountTransitionStyles-B6fypB_z.js";import"./getPseudoElementBounds-BaPROP5U.js";import"./chevron-down-CKWbFOWn.js";import"./index-CLbtj4dS.js";import"./error-uoew32RU.js";import"./BaseCbacBanner-C9O888Wq.js";import"./makeExternalStore-B3cxenBa.js";import"./Tooltip-BGpYaoin.js";import"./PopoverPopup-CiCjFpg3.js";import"./debounce-OlKnPm4h.js";import"./useOsdkClient-CN5kE_kM.js";import"./tick-Blswzu6W.js";import"./DropdownField-8gcZzb7t.js";import"./isEqual-J8qJ1onM.js";import"./withOsdkMetrics-dDcxjbTR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

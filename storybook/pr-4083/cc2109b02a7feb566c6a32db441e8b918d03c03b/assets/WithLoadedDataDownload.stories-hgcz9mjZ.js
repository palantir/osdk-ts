import{f as b,j as a,r as i}from"./iframe-CK-e_P5n.js";import{O as u}from"./object-table-DhEk3d9R.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CdfmlsWT.js";import"./Table-BsqGsGlo.js";import"./index-D1NbsZsT.js";import"./Dialog-DGPTJcg5.js";import"./cross-DdB0B2DT.js";import"./svgIconContainer-CUe9azR3.js";import"./useBaseUiId-B6Thtd3O.js";import"./InternalBackdrop--jYqCsuV.js";import"./composite-CF-uZGHD.js";import"./index-BmOKXyuk.js";import"./index-BAl9UwQ_.js";import"./index-BI0nF061.js";import"./useEventCallback-DLi0pkHc.js";import"./SkeletonBar-CJ14_0Ym.js";import"./LoadingCell-C3R3Sh3u.js";import"./ColumnConfigDialog-CPUbQB7h.js";import"./DraggableList-CD7OhgBJ.js";import"./search-D8NL3mRl.js";import"./Input-DGmd96_F.js";import"./useControlled-flZbgJml.js";import"./Button-DnxkikPI.js";import"./small-cross-D6eJtQvT.js";import"./ActionButton-2BJhUFRZ.js";import"./Checkbox-CIXQ1R8k.js";import"./useValueChanged-DBUoKfVc.js";import"./CollapsiblePanel-Be9_urdY.js";import"./MultiColumnSortDialog-B4hxLfgp.js";import"./MenuTrigger-D5vobJQ0.js";import"./CompositeItem-BRNQwarA.js";import"./ToolbarRootContext-BzLZyYhL.js";import"./getDisabledMountTransitionStyles-GfO_uBTj.js";import"./getPseudoElementBounds-9YvIcjPC.js";import"./chevron-down-D3RJwgIP.js";import"./index--at66w-A.js";import"./error-BFAdc9Td.js";import"./BaseCbacBanner-D-KqGODx.js";import"./makeExternalStore-Bf6pa7D3.js";import"./Tooltip-RRrzeJA8.js";import"./PopoverPopup-DXgU2mtn.js";import"./debounce-CnX0V1iA.js";import"./useOsdkClient-TQnWVOaJ.js";import"./tick-BVNELgej.js";import"./DropdownField-BncLboR3.js";import"./isEqual-CZA0FnVD.js";import"./withOsdkMetrics-DFjAQMzo.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

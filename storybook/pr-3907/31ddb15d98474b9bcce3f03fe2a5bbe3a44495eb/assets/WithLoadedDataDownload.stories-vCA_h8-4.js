import{f as b,j as a,r as i}from"./iframe-CcTzUt4q.js";import{O as u}from"./object-table-B5mEs8na.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DTHvyKL2.js";import"./Table-DgQH63iU.js";import"./index-B0L2Pz3U.js";import"./Dialog-BmK-QCMj.js";import"./cross-CX9TEYNs.js";import"./svgIconContainer-DT2XOI7O.js";import"./useBaseUiId-vUFCbP4O.js";import"./InternalBackdrop-LwozvRjF.js";import"./composite-D9XK8W5R.js";import"./index-Dn8qQBZ_.js";import"./index-Bo_ehpsT.js";import"./index-BIFOh3O8.js";import"./useEventCallback-BngVQc52.js";import"./SkeletonBar-P8lEjqKk.js";import"./LoadingCell-DyEWtc2c.js";import"./ColumnConfigDialog-DSI5UCP3.js";import"./DraggableList-kbk4Kq4T.js";import"./search-BaEk66pJ.js";import"./Input-BbwwJ3kI.js";import"./useControlled-CXU26uEu.js";import"./Button-Bhonpuif.js";import"./small-cross-Bi6fImtG.js";import"./ActionButton-38fDduAv.js";import"./Checkbox-DcPzVpFb.js";import"./useValueChanged-DiIlb2iV.js";import"./CollapsiblePanel-DtiDyN9v.js";import"./MultiColumnSortDialog-DpkiqiMy.js";import"./MenuTrigger-vvc96eLU.js";import"./CompositeItem-MWEwicQS.js";import"./ToolbarRootContext-C074rZoJ.js";import"./getDisabledMountTransitionStyles-DXxCwzEL.js";import"./getPseudoElementBounds-oYato3fO.js";import"./chevron-down-C2VHnW9O.js";import"./index-CtpHKrCG.js";import"./error-Dj7Fc47o.js";import"./BaseCbacBanner-CDFaIa-9.js";import"./makeExternalStore-BHMTu4YC.js";import"./Tooltip-DuBTlYLb.js";import"./PopoverPopup-CofoEXd7.js";import"./debounce-yBMZLkBq.js";import"./useOsdkClient-zEDt1fx6.js";import"./tick-DyThwVFn.js";import"./DropdownField-JbUzQxvd.js";import"./isEqual-BITCjXxY.js";import"./withOsdkMetrics-5Ex0_go8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

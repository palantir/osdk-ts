import{f as b,j as a,r as i}from"./iframe-CCVL4Idp.js";import{O as u}from"./object-table-LApLy7sh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bfdvow4t.js";import"./Table-y5i6iDQ6.js";import"./index-CqRYjhYr.js";import"./Dialog-CsuSO74f.js";import"./cross-Bpaou5px.js";import"./svgIconContainer-DLYZviFk.js";import"./useBaseUiId-CNDNQCax.js";import"./InternalBackdrop-BOLrYZlT.js";import"./composite-8_zPWC08.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./index-D1XSNP8S.js";import"./useEventCallback-DNycK2kG.js";import"./SkeletonBar-BQkCbvbz.js";import"./LoadingCell-DKZD2fy5.js";import"./ColumnConfigDialog-BCU4b9nD.js";import"./DraggableList-BWmJYQFV.js";import"./search-C00pZ1Ly.js";import"./Input-Cn7fB1Ph.js";import"./useControlled-wuiuTdj_.js";import"./Button-DYSDt2wl.js";import"./small-cross-D_IDVYYi.js";import"./ActionButton-BoQK0oCg.js";import"./Checkbox-CTiOjQ-V.js";import"./useValueChanged-B0V7HCrV.js";import"./CollapsiblePanel-BdSR7VOY.js";import"./MultiColumnSortDialog-Bz146-0u.js";import"./MenuTrigger-BwcpBOF1.js";import"./CompositeItem-BVwr5vb2.js";import"./ToolbarRootContext-B9eib1V0.js";import"./getDisabledMountTransitionStyles-DsWKjHfV.js";import"./getPseudoElementBounds-B1H8xoBN.js";import"./chevron-down-Ve2FZYZx.js";import"./index-BsgThsOD.js";import"./error-DNOpGdYX.js";import"./BaseCbacBanner-y0OozxMj.js";import"./makeExternalStore-Bx0vFg8y.js";import"./Tooltip-155_4Sip.js";import"./PopoverPopup-ChuxaA1C.js";import"./debounce-DHu_JVgk.js";import"./useOsdkClient-C1izoF8E.js";import"./tick-BXHEK5fI.js";import"./DropdownField-B-zXvzEE.js";import"./isEqual-Do9DtU8-.js";import"./withOsdkMetrics-BTy9Ees1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DQCdqfg5.js";import{O as u}from"./object-table-D2fFBTXM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BnuMKywq.js";import"./Table-eSFOwLQi.js";import"./index-vgggs2zv.js";import"./Dialog-Be0MXF1L.js";import"./cross-BM5-gN2O.js";import"./svgIconContainer-DQ3vDY3d.js";import"./useBaseUiId-uJtwceXU.js";import"./InternalBackdrop-mKo4eMuU.js";import"./composite-CLQo-Wfa.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./index-DkmdKJbM.js";import"./useEventCallback-DI2LvAvB.js";import"./SkeletonBar-BMXSVux8.js";import"./LoadingCell-DAvwNT84.js";import"./ColumnConfigDialog-GU-s4XaF.js";import"./DraggableList-vr-wvdOw.js";import"./search-BVksAAy0.js";import"./Input-BTifrhUx.js";import"./useControlled-ChMbt_Fz.js";import"./Button-DNN3wzC1.js";import"./small-cross-B8kNhtpM.js";import"./ActionButton-8qbOBxU2.js";import"./Checkbox-DSNDjp2T.js";import"./useValueChanged-BB3_bFNq.js";import"./CollapsiblePanel-B0RAMB_a.js";import"./MultiColumnSortDialog-CXJqFtZO.js";import"./MenuTrigger-SW6vTO-P.js";import"./CompositeItem-BV9j03E3.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./getDisabledMountTransitionStyles-BryvnPSi.js";import"./getPseudoElementBounds-SCb5Bi3b.js";import"./chevron-down-s9at5FCB.js";import"./index-C7x5V-MA.js";import"./error-LGbg2EdJ.js";import"./BaseCbacBanner-CIJ1yjYq.js";import"./makeExternalStore-DhC3eF_c.js";import"./Tooltip-F2HH1cxW.js";import"./PopoverPopup-CvC35ehe.js";import"./debounce-DHf3w8rI.js";import"./useOsdkClient-DpwLfZR6.js";import"./tick-BNBx5Vf4.js";import"./DropdownField-NOLN6HRJ.js";import"./isEqual-oQJ7iNOI.js";import"./withOsdkMetrics-B1flG_2m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

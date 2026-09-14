import{f as b,j as a,r as i}from"./iframe-CQYW_eB-.js";import{O as u}from"./object-table-BDeFDNjl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9TT_d3h.js";import"./Table-OjBZFtWq.js";import"./index-T0VZSE-0.js";import"./Dialog-B1Us0h3J.js";import"./cross-4hmynEDT.js";import"./svgIconContainer-BqHGQtsP.js";import"./useBaseUiId-CLAYvn4B.js";import"./InternalBackdrop-C-z8SZHZ.js";import"./composite-BSIyIiZo.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./index-DhxqciGT.js";import"./useEventCallback-C3RBUCaT.js";import"./SkeletonBar-C0p74Cj2.js";import"./LoadingCell-CjFrSWuR.js";import"./ColumnConfigDialog-DvGyHFcN.js";import"./DraggableList-DJMs0ux8.js";import"./search-Dr6j30rS.js";import"./Input-BafxkRHB.js";import"./useControlled-Z2EDTbBt.js";import"./Button-CYh2Cp69.js";import"./small-cross-JF11sM_d.js";import"./ActionButton-C0r1BUIm.js";import"./Checkbox-C_bPdJMy.js";import"./useValueChanged-CM5Va8yd.js";import"./CollapsiblePanel-B0DUDYqS.js";import"./MultiColumnSortDialog-Ba3Y_NE5.js";import"./MenuTrigger-o1K9Wiz8.js";import"./CompositeItem-B2O_tBvb.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./getDisabledMountTransitionStyles-BIEIO7LI.js";import"./getPseudoElementBounds-B7H73yVG.js";import"./chevron-down-3SfwSm8L.js";import"./index-Cw-CpLvV.js";import"./error-Cu14UhDr.js";import"./BaseCbacBanner-5fZxMSPz.js";import"./makeExternalStore-3GXsIke7.js";import"./Tooltip-C-8DSvp1.js";import"./PopoverPopup-DiKMNXk7.js";import"./debounce-iahYFdXe.js";import"./useOsdkClient-CtP0GIsC.js";import"./tick-DZRxM9qV.js";import"./DropdownField-DVT_1-ko.js";import"./isEqual-CtXL3I7G.js";import"./withOsdkMetrics-jD7Q4XnW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

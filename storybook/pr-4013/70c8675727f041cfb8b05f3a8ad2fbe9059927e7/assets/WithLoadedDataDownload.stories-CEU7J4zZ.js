import{f as b,j as a,r as i}from"./iframe-CZqFYSvz.js";import{O as u}from"./object-table-DwMB5kVn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-W-9dgf5b.js";import"./Table-B3v6P-QS.js";import"./index-4I_FO6X-.js";import"./Dialog-ceRzZVUm.js";import"./cross-DwkOXENp.js";import"./svgIconContainer-B4GgTWLP.js";import"./useBaseUiId-D1DgvgDy.js";import"./InternalBackdrop-CqAf0JXm.js";import"./composite-DshpnDaY.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./index-DwIy-beY.js";import"./useEventCallback-C1QWqQSQ.js";import"./SkeletonBar-YNeerWRQ.js";import"./LoadingCell-J626_w_e.js";import"./ColumnConfigDialog-DhBY97p3.js";import"./DraggableList-DTGbsUyi.js";import"./search-DQIrKTJC.js";import"./Input-DFczC5qB.js";import"./useControlled-BEhUjoKU.js";import"./Button-DPWKZHun.js";import"./small-cross-DqYGaSrZ.js";import"./ActionButton-DwlulUX5.js";import"./Checkbox-CT4wGdV_.js";import"./useValueChanged-pQbly7Ct.js";import"./CollapsiblePanel-fJf7Arc3.js";import"./MultiColumnSortDialog-Daa1Ku64.js";import"./MenuTrigger-kTph8d-l.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./getDisabledMountTransitionStyles-BKCYmhLV.js";import"./getPseudoElementBounds-BXEncbQt.js";import"./chevron-down-DW5k5Yie.js";import"./index-CkQb-QUw.js";import"./error-B_2Afo6g.js";import"./BaseCbacBanner-MmXi3aHl.js";import"./makeExternalStore-BLCxm6Ol.js";import"./Tooltip-4cXVr-Gb.js";import"./PopoverPopup-NWTu8aE_.js";import"./debounce-iVB6b_Y1.js";import"./useOsdkClient-CH4uCo_W.js";import"./tick-CC6n50A4.js";import"./DropdownField-BI2c6Ebd.js";import"./isEqual-BAjQPonJ.js";import"./withOsdkMetrics-BHAZhm5k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BdttGBHS.js";import{O as u}from"./object-table-Y0-LmSTW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D52nztRO.js";import"./Table-7aW1jsV9.js";import"./index-fJrMVTua.js";import"./Dialog-CmQpnMcQ.js";import"./cross-B_ladZW0.js";import"./svgIconContainer-d3TxlLsS.js";import"./useBaseUiId-TpOnm0ph.js";import"./InternalBackdrop-BKguS2Kk.js";import"./composite-D2FhvqPV.js";import"./index-DUfIyUAM.js";import"./index-CGhVKo7Q.js";import"./index-_owIjaTD.js";import"./useEventCallback-4P5Ay0yC.js";import"./SkeletonBar-qQ9RfzOd.js";import"./LoadingCell-B-qtd_Ox.js";import"./ColumnConfigDialog-L2W4GnW_.js";import"./DraggableList-D7JjGds3.js";import"./search-SHaXv7OY.js";import"./Input-DYv89jnk.js";import"./useControlled-BCWd1xNc.js";import"./Button-DZ1LePF0.js";import"./small-cross-BJGr41n-.js";import"./ActionButton-Dmk_UwrT.js";import"./Checkbox-mVv099PS.js";import"./useValueChanged-D80KuDSO.js";import"./CollapsiblePanel-C84l9NlQ.js";import"./MultiColumnSortDialog-CKEvegV7.js";import"./MenuTrigger-Dzy_UVZ4.js";import"./CompositeItem-BUi6sRIo.js";import"./ToolbarRootContext-CKT8QuMl.js";import"./getDisabledMountTransitionStyles-B8ZFHD1C.js";import"./getPseudoElementBounds-CrUTQ61q.js";import"./chevron-down-CX5I5Ird.js";import"./index-RDL0QRGf.js";import"./error-CHI3XqLV.js";import"./BaseCbacBanner-CVMZJw73.js";import"./makeExternalStore-Ds9BSHVT.js";import"./Tooltip-Ca055HLw.js";import"./PopoverPopup-DwBF8-Mm.js";import"./debounce-Qe34k2W1.js";import"./useOsdkClient-Bl7ygr-X.js";import"./tick-BLwK45wE.js";import"./DropdownField-C8hF0Jpu.js";import"./isEqual-DVqjVJt3.js";import"./withOsdkMetrics-BQHwLSj1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

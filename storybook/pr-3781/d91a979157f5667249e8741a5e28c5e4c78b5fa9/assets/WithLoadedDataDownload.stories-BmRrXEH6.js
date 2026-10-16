import{f as b,j as a,r as i}from"./iframe-nHeyQ6G0.js";import{O as u}from"./object-table-CMySora2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CQHnyaJj.js";import"./Table-DAvHxFZU.js";import"./index-Cepl2Gdo.js";import"./Dialog-C40NzizH.js";import"./cross-BY7_vW_g.js";import"./svgIconContainer-CLZNV5by.js";import"./useBaseUiId-WP9Qsa8B.js";import"./InternalBackdrop-BhOu_nRs.js";import"./composite-BYQJTx_c.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./index-B4LSn0e3.js";import"./useEventCallback-DDta6l4G.js";import"./SkeletonBar-B4LZAubO.js";import"./LoadingCell-W_Pg7cSe.js";import"./ColumnConfigDialog-D8-9RbHL.js";import"./DraggableList-Cu7yXH0e.js";import"./search-nN6muyjH.js";import"./Input-LHo6mX7j.js";import"./useControlled-BEwPeN8G.js";import"./Button-OJtt4Wi3.js";import"./small-cross-D5y46BPP.js";import"./ActionButton-BdRYsIpx.js";import"./Checkbox-Cg3HXpCR.js";import"./useValueChanged-CTSv8K7w.js";import"./CollapsiblePanel-DGVjgwmu.js";import"./MultiColumnSortDialog-5tu2miBi.js";import"./MenuTrigger-Db3EXvDE.js";import"./CompositeItem-Y1Nghizw.js";import"./ToolbarRootContext-CrhI_j71.js";import"./getDisabledMountTransitionStyles-B3-icwrX.js";import"./getPseudoElementBounds-CFXLoVOU.js";import"./chevron-down-DWkmyfL1.js";import"./index-BzvZTbEJ.js";import"./error-qX2wkXkr.js";import"./BaseCbacBanner-DxR5PA9d.js";import"./makeExternalStore-COs31IKH.js";import"./Tooltip-ewszX06o.js";import"./PopoverPopup-3A5a03nx.js";import"./debounce-DpokpJG9.js";import"./useOsdkClient-DdGx6s8m.js";import"./tick-Baztb2JM.js";import"./DropdownField-B02tWq-y.js";import"./isEqual-CPFA_kRf.js";import"./withOsdkMetrics-CYsyTWZq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

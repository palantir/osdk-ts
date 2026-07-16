import{f as b,j as a,r as i}from"./iframe-D3AG5tAD.js";import{O as u}from"./object-table-DUXzajWZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B-YtZbVH.js";import"./Table-Bmr9ycFm.js";import"./index-CU_7NiMA.js";import"./Dialog-CFS2AN6n.js";import"./cross-fuBUoHYF.js";import"./svgIconContainer-CsB1NaGz.js";import"./useBaseUiId-CdoAVwix.js";import"./InternalBackdrop-D1Z_wY0G.js";import"./composite-DbU-tGJF.js";import"./index-BZVvyLb2.js";import"./index-CUoB2gGZ.js";import"./index-B9PERA1m.js";import"./useEventCallback-DuBmw-75.js";import"./SkeletonBar-C5hEoxWl.js";import"./LoadingCell-CIpNo44n.js";import"./ColumnConfigDialog-C1SThnDn.js";import"./DraggableList-DUpUNn2F.js";import"./search-MNCXehF6.js";import"./Input-B0piQqS7.js";import"./useControlled-B37jSgMz.js";import"./Button-DctYu487.js";import"./small-cross-DcYxamEv.js";import"./ActionButton-BY5Pkidu.js";import"./Checkbox-Bv_rVJKH.js";import"./useValueChanged-CRxT1g3E.js";import"./CollapsiblePanel-D417Lx8O.js";import"./MultiColumnSortDialog-CvL8aw82.js";import"./MenuTrigger-DSdQ2I7-.js";import"./CompositeItem-BU_R-6TT.js";import"./ToolbarRootContext-DzrhBWFL.js";import"./getDisabledMountTransitionStyles-BsfOYRsX.js";import"./getPseudoElementBounds-aoUbp4wE.js";import"./chevron-down-DHx9quO2.js";import"./index-CBd9Rybf.js";import"./error-vXB8Gt0N.js";import"./BaseCbacBanner-B15--1WY.js";import"./makeExternalStore-BF60C0Cg.js";import"./Tooltip-DRDCDO4w.js";import"./PopoverPopup-DpfHguaE.js";import"./toNumber-Dj1zZW26.js";import"./useOsdkClient-BtqUTCDX.js";import"./tick-ozHR_x3h.js";import"./DropdownField-1yhXyiew.js";import"./withOsdkMetrics-O49zzeg3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

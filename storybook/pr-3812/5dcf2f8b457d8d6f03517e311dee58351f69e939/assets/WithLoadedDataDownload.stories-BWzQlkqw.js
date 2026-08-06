import{f as b,j as a,r as i}from"./iframe-BfhfREBy.js";import{O as u}from"./object-table-BdEKKWyG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--XKw4bmx.js";import"./Table-DN6hBFu4.js";import"./index-DytRM3DZ.js";import"./Dialog-B0Iyhd92.js";import"./cross-BeF5Hfc8.js";import"./svgIconContainer-DBAOF07n.js";import"./useBaseUiId-BFH0KUQX.js";import"./InternalBackdrop-1__YM29z.js";import"./composite-_2f5sVOd.js";import"./index-ynePoQ8g.js";import"./index-Dr01-4SU.js";import"./index-Due1erN9.js";import"./useEventCallback-5TxWd5hj.js";import"./SkeletonBar-oAugGI6e.js";import"./LoadingCell-vJXMX0HJ.js";import"./ColumnConfigDialog-CoAejl9e.js";import"./DraggableList-BxysQdA1.js";import"./search-6CMwLJx5.js";import"./Input-E-9p2WY9.js";import"./useControlled-B4Njh2P6.js";import"./isEqual-B2hwdr13.js";import"./isObject-tY7pGC-G.js";import"./Button-DfmbIkJw.js";import"./ActionButton-z6kXkFRx.js";import"./Checkbox-D9ToZicP.js";import"./useValueChanged-D1bvJZ5p.js";import"./CollapsiblePanel-BfxFWlSw.js";import"./MultiColumnSortDialog-D60zZ5t3.js";import"./MenuTrigger-Dr4UXyqw.js";import"./CompositeItem-BAnZg7F8.js";import"./ToolbarRootContext-CzwlFaUf.js";import"./getDisabledMountTransitionStyles-KI8Efmvq.js";import"./getPseudoElementBounds-BKuKIZFt.js";import"./chevron-down-CxBM7YTA.js";import"./index-kesKYPJD.js";import"./error-CzQ0trJH.js";import"./BaseCbacBanner-L0MLNs4l.js";import"./makeExternalStore-BxS-AXBE.js";import"./Tooltip-zehB6lqO.js";import"./PopoverPopup-CaH83dTo.js";import"./toNumber-B_6qp_vj.js";import"./useOsdkClient-DJuT6gN4.js";import"./tick-DMyW0avk.js";import"./DropdownField-BVt6Qs1V.js";import"./withOsdkMetrics-D87XtM7j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

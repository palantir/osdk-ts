import{f as b,j as a,r as i}from"./iframe-CC2lhQhY.js";import{O as u}from"./object-table-Bk8sJe75.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BGEdKx02.js";import"./Table-Dyn7jCHO.js";import"./index-DxrvvjMw.js";import"./Dialog-CLh_XWkX.js";import"./cross-BobJNvWM.js";import"./svgIconContainer-CemqUq4J.js";import"./useBaseUiId-CxU7p3iL.js";import"./InternalBackdrop-CVxZg2o4.js";import"./composite-B5KpWypz.js";import"./index-B4bU-WIO.js";import"./index-G7k4NUeX.js";import"./index--6Hdbxki.js";import"./useEventCallback-B2k3oSuK.js";import"./SkeletonBar-BEjckKsG.js";import"./LoadingCell-A4598RHi.js";import"./ColumnConfigDialog-yMj5LoE_.js";import"./DraggableList-CjtZ2GfF.js";import"./search-D1VlmriO.js";import"./Input-BHBF2dwA.js";import"./useControlled-Sp81BiS-.js";import"./isEqual-i6EUZMbe.js";import"./isObject-BVuUAFQC.js";import"./Button-JlKjTSlm.js";import"./ActionButton-CQ0jgdFe.js";import"./Checkbox-Syfedny6.js";import"./useValueChanged-Cvc2Q3RS.js";import"./CollapsiblePanel-DQ1FJNF1.js";import"./MultiColumnSortDialog-DaExg-Du.js";import"./MenuTrigger-ClJV1NnD.js";import"./CompositeItem-CzQFGjti.js";import"./ToolbarRootContext-CvAXAcRN.js";import"./getDisabledMountTransitionStyles-BdLwLQ0g.js";import"./getPseudoElementBounds-xl3NSj_d.js";import"./chevron-down-CeE9KY4s.js";import"./index-BVqzMWPJ.js";import"./error-wpAeIqc3.js";import"./BaseCbacBanner-Cih_iG3k.js";import"./makeExternalStore-DBYDyAtT.js";import"./Tooltip-CVR67wXj.js";import"./PopoverPopup-DdPQi5RD.js";import"./toNumber-D5qJ0LSR.js";import"./useOsdkClient-BUCIn1CU.js";import"./tick-kTuzUJV2.js";import"./DropdownField-l2hEEO-i.js";import"./withOsdkMetrics-D7Ls77C5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

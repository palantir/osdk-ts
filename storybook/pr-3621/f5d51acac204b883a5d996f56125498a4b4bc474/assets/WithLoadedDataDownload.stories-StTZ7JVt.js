import{f as b,j as a,r as i}from"./iframe-BOrZOH79.js";import{O as u}from"./object-table-BKhTZ8XJ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-khfNwF8y.js";import"./Table-CLUMteGc.js";import"./index-OpS2NLnD.js";import"./Dialog-BB-ng3Qq.js";import"./cross-UxVdD4yY.js";import"./svgIconContainer-CMXfsOVq.js";import"./useBaseUiId-DAWJ6vhm.js";import"./InternalBackdrop-DQNwio4F.js";import"./composite-psPfsiUD.js";import"./index-5ZZLI3HR.js";import"./index-C2B3qSMb.js";import"./index-fME3zwc8.js";import"./useEventCallback-BI51UdZj.js";import"./SkeletonBar-BJ5XqHjN.js";import"./LoadingCell-DREhqEET.js";import"./ColumnConfigDialog-Rdh745a6.js";import"./DraggableList-DURk6dzo.js";import"./search-DmJUhD9Z.js";import"./Input-B1DTLM-E.js";import"./useControlled-DPZKFoRo.js";import"./Button-DSYtuHzp.js";import"./small-cross-B0d13u9J.js";import"./ActionButton-BrZwblLZ.js";import"./Checkbox-QBSAxKa0.js";import"./useValueChanged-C2qmLqNd.js";import"./CollapsiblePanel-D0qR1X5j.js";import"./MultiColumnSortDialog-HDdekzKY.js";import"./MenuTrigger-Dg8MzpQB.js";import"./CompositeItem-DvdL8HCm.js";import"./ToolbarRootContext-CHp8HRoD.js";import"./getDisabledMountTransitionStyles-CECLlZZy.js";import"./getPseudoElementBounds-Cs0_irxa.js";import"./chevron-down-CsRdFZuq.js";import"./index-DApebEpM.js";import"./error-DlL9jGSd.js";import"./BaseCbacBanner-nk2-d4Qo.js";import"./makeExternalStore-VMftzzJI.js";import"./Tooltip-0OMe_zhw.js";import"./PopoverPopup-Ch1r-QEU.js";import"./toNumber-DRgKHrQu.js";import"./useOsdkClient-BiL9lcV5.js";import"./tick-CTbRFotW.js";import"./DropdownField-Ddy0ZGQA.js";import"./withOsdkMetrics-DLG4JOdP.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

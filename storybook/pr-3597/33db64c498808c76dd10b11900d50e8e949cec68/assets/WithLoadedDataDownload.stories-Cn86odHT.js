import{f as b,j as a,r as i}from"./iframe-l9qVKk_h.js";import{O as u}from"./object-table-D2LNARXZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CeAAu9IW.js";import"./Table-H4QXpCZ_.js";import"./index-BHoGjpS3.js";import"./Dialog-DVJtrWnX.js";import"./cross-Ds51LG9m.js";import"./svgIconContainer-CAzybjiF.js";import"./useBaseUiId-CbnfRBmg.js";import"./InternalBackdrop-yHqL48nO.js";import"./composite-D-4XrB5f.js";import"./index-DpMQMu1P.js";import"./index-a_QuptCd.js";import"./index-c_0A-Zt8.js";import"./useEventCallback-vG85Phtq.js";import"./SkeletonBar-BmwSFW8Z.js";import"./LoadingCell-BWmfkwWm.js";import"./ColumnConfigDialog-BYhXg8Pd.js";import"./DraggableList-BpMddYsd.js";import"./search-nFffqI-8.js";import"./Input-BqbMFRQb.js";import"./useControlled-EjYXBnqg.js";import"./Button-BaDSsPLP.js";import"./small-cross-ColZtM_H.js";import"./ActionButton-DhzKfDPF.js";import"./Checkbox-BTH4-wD6.js";import"./minus-DYhHf52e.js";import"./tick-Dj7-0DA2.js";import"./useValueChanged-iXAGYuUJ.js";import"./caret-down-CvfF3tUW.js";import"./CollapsiblePanel-HdBzQ51A.js";import"./MultiColumnSortDialog-CGBleMtN.js";import"./MenuTrigger-Dz8uM8sy.js";import"./CompositeItem-B4j-arzc.js";import"./ToolbarRootContext-CzIYjHZF.js";import"./getDisabledMountTransitionStyles-B_OTSwUP.js";import"./getPseudoElementBounds-YDNd4Dqe.js";import"./chevron-down-Do-BqmH3.js";import"./index-CZkQaOL2.js";import"./error-DwWpVcA1.js";import"./BaseCbacBanner-DTUVOyXS.js";import"./makeExternalStore-B8M-W7eB.js";import"./Tooltip-LYCYn0z3.js";import"./PopoverPopup-CSx9mObT.js";import"./toNumber-BpW5uQen.js";import"./useOsdkClient-Db3JizoI.js";import"./DropdownField-UEnQaTvU.js";import"./withOsdkMetrics-Crh41W7X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

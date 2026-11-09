import{f as b,j as a,r as i}from"./iframe-D-NjJf8E.js";import{O as u}from"./object-table-CQvqHuFL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTOkYOfH.js";import"./Table-BKmBWaKK.js";import"./index-BfNG9SBg.js";import"./Dialog-BNUju2pG.js";import"./cross-CeDP8iYL.js";import"./svgIconContainer-CGGP5dln.js";import"./useBaseUiId-fJObIM_9.js";import"./InternalBackdrop-Dr_1KZ7A.js";import"./composite-CYVlE3X-.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./index-CQZ7ITuQ.js";import"./useEventCallback-SSXm1pp5.js";import"./SkeletonBar-Bx9ZEMx9.js";import"./LoadingCell-DsONRhQM.js";import"./ColumnConfigDialog-Di4_rnJ1.js";import"./DraggableList-CeyqnhqE.js";import"./search-CjsZbzMa.js";import"./Input-Djaz_ktk.js";import"./useControlled-D1sspD4r.js";import"./Button-B1_GO9AJ.js";import"./small-cross-Bxoh9LLX.js";import"./ActionButton-Ci63hB-4.js";import"./Checkbox-Blg81idJ.js";import"./useValueChanged-BPlDHc58.js";import"./CollapsiblePanel-B43m-kWy.js";import"./MultiColumnSortDialog-CUHPZh-T.js";import"./MenuTrigger-DMumYPhU.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./getDisabledMountTransitionStyles-9dZlZGXn.js";import"./getPseudoElementBounds-CjUxBsGr.js";import"./chevron-down-C-c1FjW5.js";import"./index-BgxA68V1.js";import"./error-BoBBM1re.js";import"./BaseCbacBanner-D8FF-_Kg.js";import"./makeExternalStore-BW52Pv17.js";import"./Tooltip-DvnHQmBq.js";import"./isObject-u4AYGR4g.js";import"./debounce-6S1krlRt.js";import"./useOsdkClient-UvBflAyV.js";import"./tick-C4vdjWJ1.js";import"./DropdownField-B0llccFH.js";import"./isEqual-DdLufpyz.js";import"./_baseIsEqual-CZ4xsHuR.js";import"./withOsdkMetrics-BLPi8trO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

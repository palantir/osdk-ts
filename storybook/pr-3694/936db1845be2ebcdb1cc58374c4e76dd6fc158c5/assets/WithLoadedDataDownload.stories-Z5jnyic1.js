import{f as b,j as a,r as i}from"./iframe-iKRdyAbr.js";import{O as u}from"./object-table-CfGh1g6p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVTmALjq.js";import"./Table-D1LJtnso.js";import"./index-C2n8TGAO.js";import"./Dialog-Bd2KyOqA.js";import"./cross-DZwGj8TX.js";import"./svgIconContainer-CNPfWT_A.js";import"./useBaseUiId-DuUa_hc_.js";import"./InternalBackdrop-CS2TIlww.js";import"./composite-BmLc-Elc.js";import"./index-CXUpj6H9.js";import"./index-D-6utWIs.js";import"./index-B2MphmoY.js";import"./useEventCallback-Bop8n_se.js";import"./SkeletonBar-tbmsUTDI.js";import"./LoadingCell-Wys7WsMp.js";import"./ColumnConfigDialog-zqK0A3PC.js";import"./DraggableList-CMfL2W5E.js";import"./search-WZ4NTqVw.js";import"./Input-CUl0DuD9.js";import"./useControlled-5vKOO904.js";import"./Button-D7T6F8Hw.js";import"./small-cross-UNY_pFrc.js";import"./ActionButton-FVBuQYCL.js";import"./Checkbox-CLcEG5uP.js";import"./useValueChanged-BaMuqykI.js";import"./CollapsiblePanel-C2WAmUkZ.js";import"./MultiColumnSortDialog-Apo19woa.js";import"./MenuTrigger-Cz4eEXNU.js";import"./CompositeItem-CaECQ_4V.js";import"./ToolbarRootContext-417TxmOR.js";import"./getDisabledMountTransitionStyles-COx5rIS6.js";import"./getPseudoElementBounds-s3ikR9Bn.js";import"./chevron-down-BDeoM4Nk.js";import"./index-BXqtYAVA.js";import"./error-DPjZwhx_.js";import"./BaseCbacBanner-BW5ldW3y.js";import"./makeExternalStore-BxufXohf.js";import"./Tooltip-Cz14GjKF.js";import"./PopoverPopup-BGteLk75.js";import"./toNumber-DmHnQL00.js";import"./useOsdkClient-CrxzjaDB.js";import"./tick-D0KwJzGW.js";import"./DropdownField-DQ3Jw2LG.js";import"./withOsdkMetrics-DDxC3Viq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

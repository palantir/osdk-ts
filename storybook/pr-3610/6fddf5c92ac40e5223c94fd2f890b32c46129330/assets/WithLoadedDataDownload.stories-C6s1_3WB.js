import{f as b,j as a,r as i}from"./iframe-BKZSR25P.js";import{O as u}from"./object-table-BAsiFqGa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-u_-78QZb.js";import"./Table-CYckjYZw.js";import"./index-CKD_841s.js";import"./Dialog-MhTsKWIW.js";import"./cross-CFIey-Yz.js";import"./svgIconContainer-DusdeQqA.js";import"./useBaseUiId-CJWX5oGV.js";import"./InternalBackdrop-Bwfhw-Z5.js";import"./composite-B0ttgqjc.js";import"./index-C1jxgw1d.js";import"./index-C6E5Sbqe.js";import"./index-DgZpRZ2A.js";import"./useEventCallback-DOF8yoPt.js";import"./SkeletonBar-DfjR0GuP.js";import"./LoadingCell-DP-Ji0aQ.js";import"./ColumnConfigDialog-3J71x8aU.js";import"./DraggableList-Dq5K9IPl.js";import"./search-Dl3F-NNz.js";import"./Input-CrgI8EjG.js";import"./useControlled-CHsZd_KW.js";import"./Button-C7oPWaoJ.js";import"./small-cross-CTLNwY5M.js";import"./ActionButton-icbw4IsC.js";import"./Checkbox-DVOdNkE3.js";import"./minus-pdeqdZ2k.js";import"./tick-iw1BloSB.js";import"./useValueChanged-UMUgeLwd.js";import"./caret-down-CGteFaqh.js";import"./CollapsiblePanel-ZHXzMR5u.js";import"./MultiColumnSortDialog-D0QaaxaL.js";import"./MenuTrigger-D91WEL79.js";import"./CompositeItem-DPHOJj1V.js";import"./ToolbarRootContext-BTGWSX4f.js";import"./getDisabledMountTransitionStyles-BtB2lXyk.js";import"./getPseudoElementBounds-COtbkiJg.js";import"./chevron-down-B6P62qST.js";import"./index-59_8WguB.js";import"./error-CYRaCWyI.js";import"./BaseCbacBanner-DqPtj4g7.js";import"./makeExternalStore-D-H3VwiL.js";import"./Tooltip-BUIkri6B.js";import"./PopoverPopup-B2OPOIFL.js";import"./toNumber-zSZJQ_xH.js";import"./useOsdkClient-D213QnnS.js";import"./DropdownField-DvHjSNqh.js";import"./withOsdkMetrics-DVMeuPzl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-U_ccsXOa.js";import{O as u}from"./object-table-C6K2P1RQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-65xl7bLJ.js";import"./Table-BOJeRv4C.js";import"./index-BOhpqcbq.js";import"./Dialog-CrJCnScq.js";import"./cross-Dx8cyWlu.js";import"./svgIconContainer-Bdip5v4Z.js";import"./useBaseUiId-CsjkwTP2.js";import"./InternalBackdrop-CzMDIOGh.js";import"./composite-jcTrqHdY.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./index-DZLzj8Gd.js";import"./useEventCallback-C1NlRVeF.js";import"./SkeletonBar-jdk0Bs2q.js";import"./LoadingCell-BnptFSiK.js";import"./ColumnConfigDialog-D9Yv-20N.js";import"./DraggableList-CRzWXSc_.js";import"./search-V9O-Ezy9.js";import"./Input-W79UZ-Qi.js";import"./useControlled-CXjwM6_M.js";import"./Button-6VeiZu2O.js";import"./small-cross-B3RKx4IS.js";import"./ActionButton-CTTQu7QA.js";import"./Checkbox-PiFtXeB5.js";import"./useValueChanged-C_srctpf.js";import"./CollapsiblePanel-DDwW0VQA.js";import"./MultiColumnSortDialog-DjLVYiiu.js";import"./MenuTrigger-BSlHd9Sm.js";import"./CompositeItem-6mTD-F3x.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./getDisabledMountTransitionStyles-BAfvW3aU.js";import"./getPseudoElementBounds-BvimzBGn.js";import"./chevron-down-B2jqRAv_.js";import"./index-BncXt_hB.js";import"./error-DWlA1yK3.js";import"./BaseCbacBanner-CGA1WM7M.js";import"./makeExternalStore-CBJBG8Ns.js";import"./Tooltip-BIBIqrVp.js";import"./PopoverPopup-B1HFntX8.js";import"./debounce-BKzmkk5O.js";import"./useOsdkClient-DMSQnpj7.js";import"./tick-y5pUQKDJ.js";import"./DropdownField-DkE0n-zM.js";import"./isEqual-DuIqjLXy.js";import"./withOsdkMetrics-DkeqZkcw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

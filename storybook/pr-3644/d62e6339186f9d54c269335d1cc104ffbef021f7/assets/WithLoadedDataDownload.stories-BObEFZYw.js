import{f as b,j as a,r as i}from"./iframe-DD-sY41C.js";import{O as u}from"./object-table-C7K2o4SA.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5__Lz23Y.js";import"./Table-BcOiEXYl.js";import"./index-DFpVWQaH.js";import"./Dialog-BMITpN0z.js";import"./cross-DfrTo7j3.js";import"./svgIconContainer-B-j9KSns.js";import"./useBaseUiId-DxfPKsWQ.js";import"./InternalBackdrop-BlEliq9h.js";import"./composite-CSdXqb3j.js";import"./index-BBeu3EMd.js";import"./index-C2FCvJks.js";import"./index-oPJpjnjV.js";import"./useEventCallback-BEgf_CBu.js";import"./SkeletonBar-tIbl-3Ul.js";import"./LoadingCell-BgqW9Ktg.js";import"./ColumnConfigDialog-B_sMM5ZC.js";import"./DraggableList-Bf6HRq3k.js";import"./search-C-wSGCX5.js";import"./Input-Cpv8q5Re.js";import"./useControlled-Dym6gTEg.js";import"./Button-C03k3Hmi.js";import"./small-cross-Yo-mXp8S.js";import"./ActionButton-D860R6q0.js";import"./Checkbox-w-XfhVkU.js";import"./useValueChanged-EpfPtF10.js";import"./CollapsiblePanel-BTi7Eniv.js";import"./MultiColumnSortDialog-Bn7IUqg2.js";import"./MenuTrigger-uTIebe-y.js";import"./CompositeItem-LcGaYN6G.js";import"./ToolbarRootContext-BA5CPKJH.js";import"./getDisabledMountTransitionStyles-BNe8KeBx.js";import"./getPseudoElementBounds-CnB_FRXW.js";import"./chevron-down-ybK0QuTX.js";import"./index-Bz6Dx7Fv.js";import"./error-IQA24bgf.js";import"./BaseCbacBanner-D01VwXXT.js";import"./makeExternalStore-BAzCglqy.js";import"./Tooltip-Dws1GkJb.js";import"./PopoverPopup-CsEeWVju.js";import"./toNumber-RWYBoIe2.js";import"./useOsdkClient-bat7vKyu.js";import"./tick-CJuhHJf9.js";import"./DropdownField-DWK2SiII.js";import"./withOsdkMetrics-hwQdk7mj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

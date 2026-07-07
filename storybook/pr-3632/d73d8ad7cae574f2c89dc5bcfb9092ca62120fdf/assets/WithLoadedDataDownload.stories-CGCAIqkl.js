import{f as b,j as a,r as i}from"./iframe-C9wefhiD.js";import{O as u}from"./object-table-DFqxhDsl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CdStPaCr.js";import"./Table-BM5fxa2m.js";import"./index-DYvyfpkP.js";import"./Dialog-BuTk1x_w.js";import"./cross-C_z7P1QJ.js";import"./svgIconContainer-CtjfKo_Y.js";import"./useBaseUiId-CquS-9BM.js";import"./InternalBackdrop-ChY80ITP.js";import"./composite-CWVo6FMX.js";import"./index-BLFQUimI.js";import"./index-DfrJEj7e.js";import"./index-DzUri8lp.js";import"./useEventCallback-CDScmR0t.js";import"./SkeletonBar-BlJFYMB_.js";import"./LoadingCell-PSHiWymO.js";import"./ColumnConfigDialog-iZMvoe52.js";import"./DraggableList-ukuudcUP.js";import"./search-BjM5NTG3.js";import"./Input-ZNHR_BPN.js";import"./useControlled-COGXDOr8.js";import"./Button-Bd-82nYV.js";import"./small-cross-BZZ8A8bI.js";import"./ActionButton-BUU3TPl3.js";import"./Checkbox-BoAY2emC.js";import"./useValueChanged-C7SFEu0t.js";import"./CollapsiblePanel-LVhEXGhC.js";import"./MultiColumnSortDialog-C1qo5PU3.js";import"./MenuTrigger-T6Ude9Ls.js";import"./CompositeItem-CiIi7DoF.js";import"./ToolbarRootContext-D9YlFow_.js";import"./getDisabledMountTransitionStyles-Dhv-NkkG.js";import"./getPseudoElementBounds-CHRkr-dC.js";import"./chevron-down-DfJ300jj.js";import"./index-CMD5w3qF.js";import"./error-C7D9Q9qf.js";import"./BaseCbacBanner-D3vuHJ_C.js";import"./makeExternalStore-7e75TOza.js";import"./Tooltip-BT1OUcfv.js";import"./PopoverPopup-BXFTPO4n.js";import"./toNumber-BohPF7dH.js";import"./useOsdkClient-Bq3hPv2W.js";import"./tick-CfcwN_br.js";import"./DropdownField-5nlYVfKU.js";import"./withOsdkMetrics-DowTPyMU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

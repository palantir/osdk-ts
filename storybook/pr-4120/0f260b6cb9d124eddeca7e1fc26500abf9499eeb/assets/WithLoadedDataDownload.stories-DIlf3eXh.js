import{f as b,j as a,r as i}from"./iframe-D_LKzUXQ.js";import{O as u}from"./object-table-BchkJ-Em.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-2fv74GlU.js";import"./Table-F3rcyGFs.js";import"./index-BPEb3ehC.js";import"./Dialog-WWjQgLVx.js";import"./cross-CCKxEsOh.js";import"./svgIconContainer-DG_1Q-tY.js";import"./useBaseUiId-BXLolyby.js";import"./InternalBackdrop-asWjbBnz.js";import"./composite-5BerH0eb.js";import"./index-DNSIml9_.js";import"./index-mwOrEPHi.js";import"./index-B3oHgBYy.js";import"./useEventCallback-D0iVUQFt.js";import"./SkeletonBar-BbsrKIs5.js";import"./LoadingCell-DEdSw60Z.js";import"./ColumnConfigDialog-C2H2qnB0.js";import"./DraggableList-DAeeociK.js";import"./search-C0zqzJLG.js";import"./Input-CHcldx9v.js";import"./useControlled-Dzikzr9a.js";import"./Button-o_hXJy7p.js";import"./small-cross-BDTx6akH.js";import"./ActionButton-ebUdVosY.js";import"./Checkbox-5X1ZQ4KX.js";import"./useValueChanged-BP5iuKzH.js";import"./CollapsiblePanel-C4EqNm8Y.js";import"./MultiColumnSortDialog-CQZVlwfk.js";import"./MenuTrigger-BpqOgltM.js";import"./CompositeItem-BWjfeaLs.js";import"./ToolbarRootContext-CaB66j5D.js";import"./getDisabledMountTransitionStyles-BjArrEX_.js";import"./getPseudoElementBounds-LjVBvCza.js";import"./chevron-down-Cbs_q2nL.js";import"./index-Ovo3sWxh.js";import"./error-CNMY2Oh1.js";import"./BaseCbacBanner-BbS5LMra.js";import"./makeExternalStore-WNQzhlnt.js";import"./Tooltip-D1QNS5SS.js";import"./PopoverPopup-DogzSAr-.js";import"./debounce-B6oiERcW.js";import"./useOsdkClient-CLGEaWRs.js";import"./tick-B_dnXVgZ.js";import"./DropdownField-NQ1Fw51O.js";import"./isEqual-CgRG_MjP.js";import"./withOsdkMetrics-CJQ6Lm1u.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

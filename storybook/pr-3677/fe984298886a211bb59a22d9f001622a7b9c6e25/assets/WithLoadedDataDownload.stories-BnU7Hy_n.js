import{f as b,j as a,r as i}from"./iframe-D1FLdJFX.js";import{O as u}from"./object-table-Cvl_Mj85.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D8UXNF6a.js";import"./Table-BwYhNSU8.js";import"./index-t-W09BCn.js";import"./Dialog-ChlETMN_.js";import"./cross-DZ07usEw.js";import"./svgIconContainer-C84izAoh.js";import"./useBaseUiId-WRlxQ5RD.js";import"./InternalBackdrop-C2uK2c1c.js";import"./composite-DEyfO-kV.js";import"./index-De2ew-R0.js";import"./index-BwOaDxKo.js";import"./index-BF4GkvSD.js";import"./useEventCallback-DcMpxiOw.js";import"./SkeletonBar-B6kF-Htr.js";import"./LoadingCell-OodQ1hbN.js";import"./ColumnConfigDialog-_1aqA_4a.js";import"./DraggableList-BeLzlZ5l.js";import"./search-iN6UBSCr.js";import"./Input-CYnkefsr.js";import"./useControlled-C4fzz8t5.js";import"./Button-DRVzF9x_.js";import"./small-cross-Cia-QwLh.js";import"./ActionButton-DOxk_dCh.js";import"./Checkbox-CgykbTr-.js";import"./useValueChanged-Be0BFxhW.js";import"./CollapsiblePanel-CTPaoIT9.js";import"./MultiColumnSortDialog-0XdzFvHq.js";import"./MenuTrigger-Ba8dCoE0.js";import"./CompositeItem-suCocTvA.js";import"./ToolbarRootContext-DkkCxU9d.js";import"./getDisabledMountTransitionStyles-Cb3exwMN.js";import"./getPseudoElementBounds-Cm1G6-ea.js";import"./chevron-down-INdNM1cB.js";import"./index-CB-QCOPk.js";import"./error-CKevXRTg.js";import"./BaseCbacBanner-CbYAcmAl.js";import"./makeExternalStore-D4U5VuHp.js";import"./Tooltip-D56YRQVe.js";import"./PopoverPopup-C5fMLfnY.js";import"./toNumber-BGI9RSSt.js";import"./useOsdkClient-B1UTrpdD.js";import"./tick-CPe3jKcL.js";import"./DropdownField-CTVSJb7D.js";import"./withOsdkMetrics-BH7KI_Qj.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-BKo2uFPD.js";import{O as u}from"./object-table--uvopYI4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bp44i-n6.js";import"./Table-DLy9dLth.js";import"./index-CVRtTsuh.js";import"./Dialog-3yLgbqDf.js";import"./cross-B7OXBUo9.js";import"./svgIconContainer-BGezaTTE.js";import"./useBaseUiId-CyDgzil7.js";import"./InternalBackdrop-CfKaRIjC.js";import"./composite-ohdRGAbz.js";import"./index-176BX6Gy.js";import"./index-CAT4j1UC.js";import"./index-DvhohFWf.js";import"./useEventCallback-8ELyeGQL.js";import"./SkeletonBar-CAm-5KM5.js";import"./LoadingCell-BYCKtADG.js";import"./ColumnConfigDialog-BywMoXrT.js";import"./DraggableList-ClhOvPyk.js";import"./search-DoqkvAor.js";import"./Input-D_-Ck7Be.js";import"./useControlled-B1uvXyTX.js";import"./isEqual-ChoRrggN.js";import"./isObject-CHJs29jC.js";import"./Button-DKTycR-o.js";import"./ActionButton-B8eBx3Sp.js";import"./Checkbox-CkxtCoz_.js";import"./useValueChanged-bDL04ho1.js";import"./CollapsiblePanel-CDZAOX5Q.js";import"./MultiColumnSortDialog-BaZVpRPw.js";import"./MenuTrigger-DlM1lBBm.js";import"./CompositeItem-BcVlMzq9.js";import"./ToolbarRootContext-TkHSZSpS.js";import"./getDisabledMountTransitionStyles-CCfkFHIn.js";import"./getPseudoElementBounds-GgjX_pOf.js";import"./chevron-down-CqPslCtx.js";import"./index-W5UCG72k.js";import"./error-BRu96KcQ.js";import"./BaseCbacBanner-CufzgaK8.js";import"./makeExternalStore-Q-JusHk-.js";import"./Tooltip-_T3k_9b7.js";import"./PopoverPopup-5BU63t1e.js";import"./toNumber-IXfGjFvS.js";import"./useOsdkClient-Dnb_DEz7.js";import"./tick-BeEvT60g.js";import"./DropdownField-ByzPjfZ2.js";import"./withOsdkMetrics-DBwDZ3nQ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

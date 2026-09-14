import{f as b,j as a,r as i}from"./iframe-CEbiJF3f.js";import{O as u}from"./object-table-l5DPuuw6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper--fKrMWtx.js";import"./Table-QdTH_HbG.js";import"./index-BRgb61-Z.js";import"./Dialog-B7q4XORi.js";import"./cross-Be87dRvq.js";import"./svgIconContainer-CApLlW_3.js";import"./useBaseUiId-BeYV2UYU.js";import"./InternalBackdrop-CWMLQJAd.js";import"./composite-u77iw9-s.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./index-CRAw0ImC.js";import"./useEventCallback-B1x1-FvS.js";import"./SkeletonBar-COyoJDUZ.js";import"./LoadingCell-D1do7JHy.js";import"./ColumnConfigDialog-CTF7Yu1b.js";import"./DraggableList-DBwRCP6S.js";import"./search-0rzEE67s.js";import"./Input-DqoIy3Li.js";import"./useControlled-B3SpxFFa.js";import"./Button-BrIf-_b8.js";import"./small-cross-D4xWb1jq.js";import"./ActionButton-CQIzGqaS.js";import"./Checkbox-ClLrXql_.js";import"./useValueChanged-CMcadSWU.js";import"./CollapsiblePanel-DhxijBYj.js";import"./MultiColumnSortDialog-BCMu3SVh.js";import"./MenuTrigger-D_puwtx9.js";import"./CompositeItem-D6m2hJvC.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./getDisabledMountTransitionStyles-C9wPoLZe.js";import"./getPseudoElementBounds-BE7nCALs.js";import"./chevron-down-SWbuBgt1.js";import"./index-DjIJ3azX.js";import"./error-q5QL61EF.js";import"./BaseCbacBanner-5dQqe5p_.js";import"./makeExternalStore-DY8wBZ1L.js";import"./Tooltip-pyeRzdyt.js";import"./PopoverPopup-BYAEm86P.js";import"./debounce-DedZNKWR.js";import"./useOsdkClient-YUQ2ZKSl.js";import"./tick-1Ij9OHtP.js";import"./DropdownField-DbwRCAUl.js";import"./isEqual-Fw1VuUqB.js";import"./withOsdkMetrics-C-j5mTrT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

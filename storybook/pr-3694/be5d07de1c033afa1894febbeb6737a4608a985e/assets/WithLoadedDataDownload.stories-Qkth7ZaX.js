import{f as b,j as a,r as i}from"./iframe-DsVuvwqd.js";import{O as u}from"./object-table-Bcihn5Ra.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHSAR2MW.js";import"./Table-QXPnYfc1.js";import"./index-BUqqlNCM.js";import"./Dialog-BEEgNgTr.js";import"./cross-r6u1wEvG.js";import"./svgIconContainer-RszyBwzo.js";import"./useBaseUiId-C9Lo_DER.js";import"./InternalBackdrop-F3eZ2FKc.js";import"./composite-DwH3i386.js";import"./index-BuXURnPF.js";import"./index-nR84ykS2.js";import"./index-kWesChf_.js";import"./useEventCallback-Dt1DGYOr.js";import"./SkeletonBar-CE7H6f_Z.js";import"./LoadingCell-7z7uIPgZ.js";import"./ColumnConfigDialog-eOpJIT15.js";import"./DraggableList-C__sTh9n.js";import"./search-Bg1IdvaZ.js";import"./Input-CPg1LhGG.js";import"./useControlled-FyZnIhZe.js";import"./Button-CsBAS9KM.js";import"./small-cross-Br3ROOyG.js";import"./ActionButton-fgLPnQM6.js";import"./Checkbox-CF9JhjmB.js";import"./useValueChanged-DpWldoeb.js";import"./CollapsiblePanel-dwtf37ie.js";import"./MultiColumnSortDialog-DPiZP6hN.js";import"./MenuTrigger-D-iZmwv5.js";import"./CompositeItem-CMLGtrcw.js";import"./ToolbarRootContext-Bok94z7p.js";import"./getDisabledMountTransitionStyles-sE8Zywdg.js";import"./getPseudoElementBounds-5yOxJKcN.js";import"./chevron-down-DlfDLF9f.js";import"./index-DWb1E976.js";import"./error-DgTcku-S.js";import"./BaseCbacBanner-C0BQY1g-.js";import"./makeExternalStore-UHZ7KJm2.js";import"./Tooltip-C2AY9ury.js";import"./PopoverPopup-T5LJB8ia.js";import"./toNumber-Cj83mQ15.js";import"./useOsdkClient-Dv49360v.js";import"./tick-DiL3CPWb.js";import"./DropdownField-1fiuRUgo.js";import"./withOsdkMetrics-BqQHJvun.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-5bssl6VS.js";import{O as u}from"./object-table-BbXBLAoq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BHXvjcwa.js";import"./Table-DuplKoEt.js";import"./index-B13HoCGw.js";import"./Dialog-Dagr4xYg.js";import"./cross-DxgHVtzX.js";import"./svgIconContainer-DrtwtWvp.js";import"./useBaseUiId-Dh4eINWl.js";import"./InternalBackdrop-gF6cp71q.js";import"./composite-Btg8TS6e.js";import"./index-BOy4EylD.js";import"./index-nZ8SppMu.js";import"./index-D6UnHnWh.js";import"./useEventCallback-D8RU-Nt1.js";import"./SkeletonBar-jq5pbuMG.js";import"./LoadingCell-BT9Hgziu.js";import"./ColumnConfigDialog-1HCkOSYn.js";import"./DraggableList-DOc9gEAb.js";import"./search-VkpzhyZf.js";import"./Input-Cn-NeA9g.js";import"./useControlled-DiYZsjSM.js";import"./Button-DlzEigHK.js";import"./small-cross-BP7K_1-R.js";import"./ActionButton-WlOudVkr.js";import"./Checkbox-c1OEAWMk.js";import"./useValueChanged-DhkyBG2M.js";import"./CollapsiblePanel-D0mcSh8k.js";import"./MultiColumnSortDialog-EOtasI8f.js";import"./MenuTrigger-B0zTqH6h.js";import"./CompositeItem-BARyggcS.js";import"./ToolbarRootContext-BS1iuPdd.js";import"./getDisabledMountTransitionStyles-BMdgnVVy.js";import"./getPseudoElementBounds-DhRDGSxS.js";import"./chevron-down-CFvJBTG-.js";import"./index-BLEwjvAg.js";import"./error-BGrVIj_t.js";import"./BaseCbacBanner-BnA-PWSg.js";import"./makeExternalStore-BheM4fhK.js";import"./Tooltip-8Z9hfeDS.js";import"./PopoverPopup-BeZaAXer.js";import"./debounce-BgFOafJA.js";import"./useOsdkClient-BTz6SXdT.js";import"./tick-CQ8SUApn.js";import"./DropdownField-BbRynaXk.js";import"./isEqual-leOPEBrs.js";import"./withOsdkMetrics-CZkoO3-I.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

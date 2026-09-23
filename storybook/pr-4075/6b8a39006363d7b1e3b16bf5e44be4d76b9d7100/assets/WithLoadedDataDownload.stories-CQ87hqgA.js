import{f as b,j as a,r as i}from"./iframe-34VatmEZ.js";import{O as u}from"./object-table-p59KuVgv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DV4gmwFB.js";import"./Table-D9uD0s7O.js";import"./index-BlAm73td.js";import"./Dialog-D1opey4t.js";import"./cross-DvtnLYbI.js";import"./svgIconContainer-_GM_NvIc.js";import"./useBaseUiId-DeI-Jtiv.js";import"./InternalBackdrop-CvK5FjjA.js";import"./composite-1B_4pEYH.js";import"./index-Fj7eg8Eu.js";import"./index-BTVWVA6f.js";import"./index-ADGNjetD.js";import"./useEventCallback-hRIxgR6L.js";import"./SkeletonBar-VDjUVVNd.js";import"./LoadingCell-nvl0Gc8h.js";import"./ColumnConfigDialog-Cq5xAnqD.js";import"./DraggableList-jT1qIjvE.js";import"./search-CVdCifPG.js";import"./Input-BKrVXT7B.js";import"./useControlled-DVccPDBX.js";import"./Button-DV1A9r6F.js";import"./small-cross-CZHtyfX7.js";import"./ActionButton-Czi1TMhc.js";import"./Checkbox-CTzLXv4K.js";import"./useValueChanged-DCa4_FQi.js";import"./CollapsiblePanel-D3pf9y50.js";import"./MultiColumnSortDialog-D1Tv8ymd.js";import"./MenuTrigger-B9hxhTmU.js";import"./CompositeItem-DOiHkRNL.js";import"./ToolbarRootContext-CiWe9x3z.js";import"./getDisabledMountTransitionStyles-DZUNER2j.js";import"./getPseudoElementBounds-IeKEehJb.js";import"./chevron-down-BtQO1pkc.js";import"./index-Dm8AHk8O.js";import"./error-C-NsPFd6.js";import"./BaseCbacBanner-CDA2PalL.js";import"./makeExternalStore-D4cd6CTa.js";import"./Tooltip-Ce33QJzg.js";import"./PopoverPopup-CSKaTK3m.js";import"./debounce-CrVZzVbG.js";import"./useOsdkClient-gxJLLGj5.js";import"./tick-DnmbfsGi.js";import"./DropdownField-BL1cfRQ0.js";import"./isEqual-CGwKoNOy.js";import"./withOsdkMetrics-XZ0oOnyA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

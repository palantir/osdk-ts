import{f as b,j as a,r as i}from"./iframe-Bd5lXcK-.js";import{O as u}from"./object-table-y1qKFBzn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B40_CvDk.js";import"./Table-d-6j00qQ.js";import"./index-BwIezaLT.js";import"./Dialog-B1xHBI4E.js";import"./cross-DhHLcr1o.js";import"./svgIconContainer-DkEYOti2.js";import"./useBaseUiId-iFREST2G.js";import"./InternalBackdrop-DjFCybqx.js";import"./composite-gHOL1u2z.js";import"./index-4lineNoM.js";import"./index-COBYsO2C.js";import"./index-Q-SR1YB0.js";import"./useEventCallback-n-0IMAB-.js";import"./SkeletonBar-DyebVkmE.js";import"./LoadingCell-s-qEXnK2.js";import"./ColumnConfigDialog-D4Vk6LmV.js";import"./DraggableList-RG389z7P.js";import"./search-V68UyHJf.js";import"./Input-BVbj5hXB.js";import"./useControlled-DwGxm4YP.js";import"./Button-BInWzPHC.js";import"./small-cross-4V5j9s-W.js";import"./ActionButton-DABcDupN.js";import"./Checkbox-CO8HtGdM.js";import"./useValueChanged-oQv84m4r.js";import"./CollapsiblePanel-XsCCajNn.js";import"./MultiColumnSortDialog-CsKGiSyM.js";import"./MenuTrigger-BIkqZ6Rh.js";import"./CompositeItem-9LzBwTqs.js";import"./ToolbarRootContext-D7PUXliD.js";import"./getDisabledMountTransitionStyles-CbLs9Lj7.js";import"./getPseudoElementBounds-DdoxIgod.js";import"./chevron-down-wTBIRPdb.js";import"./index-BlFnoMt0.js";import"./error-Bx7kxHM8.js";import"./BaseCbacBanner-D7foK6ul.js";import"./makeExternalStore-kFBYkqGe.js";import"./Tooltip-BB8a_4Kw.js";import"./PopoverPopup-CzvmD-Nt.js";import"./toNumber-B5ErJCg3.js";import"./useOsdkClient-DLAz9Wl_.js";import"./tick-TDAs7y5L.js";import"./DropdownField-BuORt-Ic.js";import"./withOsdkMetrics-BDY538Ko.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

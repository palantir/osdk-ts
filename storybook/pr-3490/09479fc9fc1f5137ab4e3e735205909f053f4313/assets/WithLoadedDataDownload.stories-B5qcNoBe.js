import{f as b,j as a,r as i}from"./iframe-Cwa4OV2p.js";import{O as u}from"./object-table-CGjW-2_C.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CCq-bIdu.js";import"./Table-BmlcWEaH.js";import"./index-BEvgsLyB.js";import"./Dialog-DpjDFxHi.js";import"./cross-Czbv8y8T.js";import"./svgIconContainer-Cu3N0QL9.js";import"./useBaseUiId-DMqO1SgA.js";import"./InternalBackdrop-B6EbKSnP.js";import"./composite-DeA0pGnE.js";import"./index-Cm6cItz_.js";import"./index-JfSSgdbO.js";import"./index-DogpvH-7.js";import"./useEventCallback-Di5mt5I_.js";import"./SkeletonBar-BojTcNhc.js";import"./LoadingCell-CyivX_g3.js";import"./ColumnConfigDialog-ApK-_Sth.js";import"./DraggableList-Cpk6wQFg.js";import"./Input-CjfPVenj.js";import"./useControlled-BN_Kaq39.js";import"./Button-BdFbfm_2.js";import"./small-cross-CxpayZPs.js";import"./ActionButton-CQCZBJcg.js";import"./Checkbox-Df0F4gWa.js";import"./minus-BrvIrOBK.js";import"./useValueChanged-C7l1TuUP.js";import"./caret-down-yLyBSF09.js";import"./CollapsiblePanel-rRxFI3e6.js";import"./MultiColumnSortDialog-BGKFDtdr.js";import"./MenuTrigger-PyfrbPop.js";import"./CompositeItem-BWKAEQuh.js";import"./ToolbarRootContext-7us1qpDr.js";import"./getDisabledMountTransitionStyles-Um9JXN9h.js";import"./getPseudoElementBounds-BUkRkEK7.js";import"./chevron-down-q-9Gl2Vu.js";import"./index-BrHN71JD.js";import"./error-fw63jDoE.js";import"./BaseCbacBanner-CMvOKmZl.js";import"./makeExternalStore-qJgrB_IM.js";import"./Tooltip-NM5W2Qyt.js";import"./PopoverPopup-CeBQLpJ0.js";import"./toNumber-C1zW-h46.js";import"./useOsdkClient-CGzimhkR.js";import"./DropdownField-9psEp3hz.js";import"./withOsdkMetrics-lyAfb3NY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

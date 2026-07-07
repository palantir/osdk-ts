import{f as b,j as a,r as i}from"./iframe-DgOZP_Cm.js";import{O as u}from"./object-table-CRNjvZaS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DjIc4MrC.js";import"./Table-D_6KfXXr.js";import"./index-BERzUTXk.js";import"./Dialog-CUddXQvV.js";import"./cross-DcWlG0ZM.js";import"./svgIconContainer-CuggTSBX.js";import"./useBaseUiId-BPFyUjqK.js";import"./InternalBackdrop-BGYYgaLJ.js";import"./composite-5D8VFPSs.js";import"./index-DvSYRibu.js";import"./index-Bq6paZvN.js";import"./index-CsBEGeAg.js";import"./useEventCallback-Bl2IGqsw.js";import"./SkeletonBar-E_6SFolC.js";import"./LoadingCell--bdbOZbj.js";import"./ColumnConfigDialog-BZx6PoYQ.js";import"./DraggableList-CtFMZdJB.js";import"./search-dZux87H-.js";import"./Input-ChTIrDkZ.js";import"./useControlled-CxK-j9x6.js";import"./Button-4HFyInoI.js";import"./small-cross-DpPsVYem.js";import"./ActionButton-BBcB5F0j.js";import"./Checkbox-CarDZmFj.js";import"./useValueChanged-D6TmlG2j.js";import"./CollapsiblePanel-CBMNDz3h.js";import"./MultiColumnSortDialog-CKCgtQAL.js";import"./MenuTrigger-8wRVo5BJ.js";import"./CompositeItem-CNZwoKOQ.js";import"./ToolbarRootContext-Dux0nsNS.js";import"./getDisabledMountTransitionStyles-Cjk8MlDy.js";import"./getPseudoElementBounds-Dg-Hwu-F.js";import"./chevron-down-Cts10Q8m.js";import"./index-DUN60dp8.js";import"./error-4FTnhPW6.js";import"./BaseCbacBanner-CXjSNB64.js";import"./makeExternalStore-C9IfhK9F.js";import"./Tooltip-DU-0Zhnw.js";import"./PopoverPopup-DxDoUAdK.js";import"./toNumber-nNoTH1nH.js";import"./useOsdkClient-vbmcxXCC.js";import"./tick-C2kvJxbo.js";import"./DropdownField-CHqdqsMq.js";import"./withOsdkMetrics-DuT7zG16.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

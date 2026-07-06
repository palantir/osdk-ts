import{f as b,j as a,r as i}from"./iframe-BBD6bIkP.js";import{O as u}from"./object-table-KyJmNTxr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DmRY_fIz.js";import"./Table-B2PPqS10.js";import"./index-zvr3wSif.js";import"./Dialog-Ca-ezjU2.js";import"./cross-CAbGq_ii.js";import"./svgIconContainer-B0U1dhGr.js";import"./useBaseUiId-CV9f4UcV.js";import"./InternalBackdrop-VV30i2fe.js";import"./composite-C1CC07n3.js";import"./index-D7MDcbvr.js";import"./index-CT9dnj7o.js";import"./index-CHkr6j26.js";import"./useEventCallback-kS3boXX6.js";import"./SkeletonBar-C6MPAFXs.js";import"./LoadingCell-BmMbbjl_.js";import"./ColumnConfigDialog-CzjcAr8O.js";import"./DraggableList-BjS2Nni4.js";import"./search-DrXL6KTp.js";import"./Input-CDFTBGX_.js";import"./useControlled-sz1tLZDG.js";import"./Button-CRkQd3Zo.js";import"./small-cross-DLE-CoMl.js";import"./ActionButton-B_y6ZBGx.js";import"./Checkbox-D3Cx23Qs.js";import"./useValueChanged-Bl0zILOm.js";import"./CollapsiblePanel-CpSxTzaa.js";import"./MultiColumnSortDialog-C5MZU-mZ.js";import"./MenuTrigger-L57rukAE.js";import"./CompositeItem-BSBnrNws.js";import"./ToolbarRootContext-DYiYc1pI.js";import"./getDisabledMountTransitionStyles-B-BMcVLv.js";import"./getPseudoElementBounds-BF-t2F8N.js";import"./chevron-down-COa_6JEf.js";import"./index-BKxxO53m.js";import"./error-D4sKUVrH.js";import"./BaseCbacBanner-CT4gemT-.js";import"./makeExternalStore-G3EdfFZw.js";import"./Tooltip-CsPoeVsb.js";import"./PopoverPopup-SK-0VeN9.js";import"./toNumber-COJYrtBw.js";import"./useOsdkClient-XNfrk1ch.js";import"./tick-CAocI1zf.js";import"./DropdownField-orAo1YNe.js";import"./withOsdkMetrics-BEG7gvuB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

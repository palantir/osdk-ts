import{f as b,j as a,r as i}from"./iframe-DUpgw0Vd.js";import{O as u}from"./object-table-B2JoYmxQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-4IfNc0vd.js";import"./Table-GwotrPE3.js";import"./index-CmRCXIqy.js";import"./Dialog-BBqstiIB.js";import"./cross-DetTaMvY.js";import"./svgIconContainer-DfmYtqq2.js";import"./useBaseUiId-CHJKWKze.js";import"./InternalBackdrop-DgasbHfg.js";import"./composite-BdvAgWju.js";import"./index-Dz8zX7ks.js";import"./index-BJYssAoC.js";import"./index-C-UCGtqY.js";import"./useEventCallback-Cpven4cZ.js";import"./SkeletonBar-Chb2Fo-g.js";import"./LoadingCell-D4gL1rjY.js";import"./ColumnConfigDialog-BlpBJKsU.js";import"./DraggableList-DKcSqo-7.js";import"./search-BkGzh2w4.js";import"./Input-ysEfgJNw.js";import"./useControlled-BGlyML6J.js";import"./Button-DE1qFbH-.js";import"./small-cross-Bgjyjwvh.js";import"./ActionButton-nwKC9UX8.js";import"./Checkbox-C1bYBrLQ.js";import"./useValueChanged-AIEksMRG.js";import"./CollapsiblePanel-AOAs2fER.js";import"./MultiColumnSortDialog-Cg9ioTk-.js";import"./MenuTrigger-CzsGUQRB.js";import"./CompositeItem-HjuNkhWe.js";import"./ToolbarRootContext-D_4yVG0k.js";import"./getDisabledMountTransitionStyles-opoMt3BW.js";import"./getPseudoElementBounds-Cx7PBgq9.js";import"./chevron-down-DDWFgZI5.js";import"./index-BfXKVP_t.js";import"./error-CKdaIVtA.js";import"./BaseCbacBanner-ffmrvrfa.js";import"./makeExternalStore-CExakVHU.js";import"./Tooltip-C8S_FqOh.js";import"./PopoverPopup-BHW5hsqz.js";import"./toNumber-DtC30hm9.js";import"./useOsdkClient-8mZgnNZG.js";import"./tick-BYvrlrhV.js";import"./DropdownField-ODfxjiyM.js";import"./withOsdkMetrics-CPnuI3vU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

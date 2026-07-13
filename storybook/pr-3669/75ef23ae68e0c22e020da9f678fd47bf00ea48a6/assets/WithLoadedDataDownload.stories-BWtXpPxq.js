import{f as b,j as a,r as i}from"./iframe-bDs-tfNC.js";import{O as u}from"./object-table-BmVFDcTf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xclCqiG3.js";import"./Table-DS0UiZ9f.js";import"./index-HWGdEnjl.js";import"./Dialog-D8_E-Xph.js";import"./cross-DhXu0fA-.js";import"./svgIconContainer-Ceoa031m.js";import"./useBaseUiId-BsW6v9Vr.js";import"./InternalBackdrop-B_zZhjag.js";import"./composite-J_sH6rAK.js";import"./index-DB45OZsZ.js";import"./index-DwGNv9ID.js";import"./index-hLziORN-.js";import"./useEventCallback-CUJaUeKH.js";import"./SkeletonBar-CUyf1qWr.js";import"./LoadingCell-t-9GgN8y.js";import"./ColumnConfigDialog-DnUa0pm1.js";import"./DraggableList-BG_nrFrl.js";import"./search-tKPO-gQM.js";import"./Input-D-JIo9_F.js";import"./useControlled-9yXOfdlI.js";import"./Button-V5Mt5VaF.js";import"./small-cross-BQkS_aNy.js";import"./ActionButton-Bwn4n_R8.js";import"./Checkbox-CG4zNUwK.js";import"./useValueChanged-CdBwwJx8.js";import"./CollapsiblePanel-CsNlkRMf.js";import"./MultiColumnSortDialog-DiFBpRah.js";import"./MenuTrigger-Cbz__XOL.js";import"./CompositeItem-DOuo9giL.js";import"./ToolbarRootContext-Cg1Bkc79.js";import"./getDisabledMountTransitionStyles-D_ygFnvB.js";import"./getPseudoElementBounds-DwlreRIY.js";import"./chevron-down-MLZfQEBO.js";import"./index-BkpUBsi6.js";import"./error-B04Yj6SO.js";import"./BaseCbacBanner-CZx2KRt_.js";import"./makeExternalStore-DCHiXpf2.js";import"./Tooltip-DK73Vw-E.js";import"./PopoverPopup-DQp7911t.js";import"./toNumber-QcYfZ08k.js";import"./useOsdkClient-CKQAfoqI.js";import"./tick-CQGFDkiR.js";import"./DropdownField-G7UW0SLi.js";import"./withOsdkMetrics-mbQEKI8d.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

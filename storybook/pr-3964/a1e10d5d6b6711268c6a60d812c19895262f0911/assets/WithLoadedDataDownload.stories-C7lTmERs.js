import{f as b,j as a,r as i}from"./iframe-BtTN4BQB.js";import{O as u}from"./object-table-Bvx4yqVd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C2hFUd6N.js";import"./Table-CoZReMex.js";import"./index-pxWT2dwl.js";import"./Dialog--QRamm7H.js";import"./cross-q76qzbb-.js";import"./svgIconContainer-Ck-gVtGn.js";import"./useBaseUiId-lIY47ohq.js";import"./InternalBackdrop-dYX83tvG.js";import"./composite-CdDRlQtM.js";import"./index-Cq-V6BRN.js";import"./index-CMayXVvR.js";import"./index-DOgMvsUP.js";import"./useEventCallback-BtkhBx2l.js";import"./SkeletonBar-BEHzB_kl.js";import"./LoadingCell-CAz1hfsM.js";import"./ColumnConfigDialog-BoZUi2Vu.js";import"./DraggableList-BNYdNfbR.js";import"./search-B3tYggTx.js";import"./Input-BP96gLBp.js";import"./useControlled-BY2aVBy7.js";import"./Button-BLq1-le0.js";import"./small-cross-C5ga7063.js";import"./ActionButton-CM0ktcvu.js";import"./Checkbox-B1ajB8tt.js";import"./useValueChanged-fmp-pLJF.js";import"./CollapsiblePanel-hvpVpf_T.js";import"./MultiColumnSortDialog-DQ99MgP8.js";import"./MenuTrigger-Diwu4kws.js";import"./CompositeItem-Dm5rFUvO.js";import"./ToolbarRootContext-BKy1ZUvI.js";import"./getDisabledMountTransitionStyles-CN6FaNLi.js";import"./getPseudoElementBounds-8uy80WiE.js";import"./chevron-down-BcmFYUSl.js";import"./index-9u2i6wOA.js";import"./error-eGAnK2yX.js";import"./BaseCbacBanner-eiRHuLLT.js";import"./makeExternalStore-Djs-AWxx.js";import"./Tooltip-H3WuRadb.js";import"./PopoverPopup-DWl2W-_4.js";import"./debounce-BHOQ-Rki.js";import"./useOsdkClient-DEjT27KS.js";import"./tick-DcJBbOnL.js";import"./DropdownField-BLdkGkAU.js";import"./isEqual-CIlWL9cG.js";import"./withOsdkMetrics-DMwNEK1o.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

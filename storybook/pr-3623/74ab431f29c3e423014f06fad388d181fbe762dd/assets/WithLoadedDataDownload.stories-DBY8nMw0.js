import{f as b,j as a,r as i}from"./iframe-BzmiqMlA.js";import{O as u}from"./object-table-Dt3bz_Pr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DWDBlvcC.js";import"./Table-BrHGJZ1Q.js";import"./index-awxBpamY.js";import"./Dialog-D1lazOKX.js";import"./cross-BaWVDSt7.js";import"./svgIconContainer-CRKkbXcr.js";import"./useBaseUiId-B5jv3z2Z.js";import"./InternalBackdrop-CchH6x0S.js";import"./composite--zb5EXZT.js";import"./index-DN6rquhH.js";import"./index-DS9dAQh3.js";import"./index-De5f_Vtl.js";import"./useEventCallback-BUCV92cf.js";import"./SkeletonBar-3pG9Qu1r.js";import"./LoadingCell-Tuh72paR.js";import"./ColumnConfigDialog-DUKLrnVF.js";import"./DraggableList-beMCGvrH.js";import"./search-CaDlj1cR.js";import"./Input-D8stKE34.js";import"./useControlled-jiltt0Oe.js";import"./Button-Bo5_QW4H.js";import"./small-cross-DHLqtVKq.js";import"./ActionButton-DIPVPCB_.js";import"./Checkbox-C0nT-z_k.js";import"./useValueChanged-B2L6ond-.js";import"./CollapsiblePanel-CZ6Ho1h-.js";import"./MultiColumnSortDialog-B_LkGz_w.js";import"./MenuTrigger-DYP0PUrh.js";import"./CompositeItem-DbR51llk.js";import"./ToolbarRootContext-BsgmrDDK.js";import"./getDisabledMountTransitionStyles-6yvLqwIR.js";import"./getPseudoElementBounds-DskGH7VY.js";import"./chevron-down-DfO2hlZp.js";import"./index-DKajfwmt.js";import"./error-3H7hzpsi.js";import"./BaseCbacBanner-Cs3yRMNF.js";import"./makeExternalStore-qzzx8i_j.js";import"./Tooltip-BazOuqd6.js";import"./PopoverPopup-CkJCEMUH.js";import"./toNumber-ChNz3iSq.js";import"./useOsdkClient-C1kqxV17.js";import"./tick-So6dEDVK.js";import"./DropdownField-CjrvuFTq.js";import"./withOsdkMetrics-C_7uNmr6.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

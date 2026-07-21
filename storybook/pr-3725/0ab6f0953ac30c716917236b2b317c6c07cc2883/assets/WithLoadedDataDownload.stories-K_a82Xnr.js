import{f as b,j as a,r as i}from"./iframe-BbjW9ru2.js";import{O as u}from"./object-table-BBsIVRju.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BBqenLAY.js";import"./Table--MLVRFDo.js";import"./index-D6yb_Az8.js";import"./Dialog-4AbL7KG2.js";import"./cross-Df-G8xzA.js";import"./svgIconContainer-B3OjmCik.js";import"./useBaseUiId-CvuxzwAh.js";import"./InternalBackdrop-tnvec0Tt.js";import"./composite-G5vT1uE0.js";import"./index-CTTYMewW.js";import"./index-1oGZAAbg.js";import"./index-TOKmGKHA.js";import"./useEventCallback-BW6gu2Rn.js";import"./SkeletonBar-BeihCZ-J.js";import"./LoadingCell-IO6iOam8.js";import"./ColumnConfigDialog-CBxVrw6D.js";import"./DraggableList-JHVSkCWp.js";import"./search-C-32WFYh.js";import"./Input-BI9XOSMU.js";import"./useControlled-CCGxAKe6.js";import"./isEqual-CsVc_e52.js";import"./isObject-gtwe7U2X.js";import"./Button-Cud-V5j3.js";import"./ActionButton-D9t5Cr9E.js";import"./Checkbox-xIoq5pKk.js";import"./useValueChanged-BzhPzziE.js";import"./CollapsiblePanel-CA3hBng5.js";import"./MultiColumnSortDialog-D5NM_5eD.js";import"./MenuTrigger-n1NUP6YF.js";import"./CompositeItem-Bb53XA62.js";import"./ToolbarRootContext-DpLajBJ1.js";import"./getDisabledMountTransitionStyles-COzVsMhX.js";import"./getPseudoElementBounds-DfQi2vam.js";import"./chevron-down-CO2xg-to.js";import"./index-CRtvo395.js";import"./error-Cp-Qt5xo.js";import"./BaseCbacBanner-BbNNP4O8.js";import"./makeExternalStore-Cj7p7gMA.js";import"./Tooltip-BD386Ujy.js";import"./PopoverPopup-bib0K7Tx.js";import"./toNumber-DyqaTaif.js";import"./useOsdkClient-DPOKUXDn.js";import"./tick-CiqjUs2a.js";import"./DropdownField-CKqGOUyd.js";import"./withOsdkMetrics-K7yNfEUf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

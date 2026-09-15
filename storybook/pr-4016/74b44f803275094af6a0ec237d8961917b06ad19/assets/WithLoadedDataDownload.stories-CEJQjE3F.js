import{f as b,j as a,r as i}from"./iframe-SCQrgHSr.js";import{O as u}from"./object-table-B617jB-3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ruFAjrX8.js";import"./Table-DkDB8z-y.js";import"./index-BUtIlNP3.js";import"./Dialog-CXnN9hQo.js";import"./cross-RzKZrUkh.js";import"./svgIconContainer-PYczuJwB.js";import"./useBaseUiId-BR-Fy_C2.js";import"./InternalBackdrop-CVssRVAp.js";import"./composite-Dt5lUk_W.js";import"./index--0Ld1SF2.js";import"./index-w54i75Ov.js";import"./index-CT5e1oGB.js";import"./useEventCallback-C4za5yjU.js";import"./SkeletonBar-DuD90zQc.js";import"./LoadingCell-DgbcSV4w.js";import"./ColumnConfigDialog-DypaZEDp.js";import"./DraggableList-Dug4fsy0.js";import"./search-Dm4EdHL9.js";import"./Input-CnPO-APv.js";import"./useControlled-Cz7FsEHc.js";import"./Button-CuEtz6jx.js";import"./small-cross-Bw4zLqUD.js";import"./ActionButton-Czv-I_yU.js";import"./Checkbox-b815pw-1.js";import"./useValueChanged-B1QwrseW.js";import"./CollapsiblePanel-DkamSJ2Z.js";import"./MultiColumnSortDialog-BZC_LUEx.js";import"./MenuTrigger-DZ_gD7BR.js";import"./CompositeItem-Co12UxPz.js";import"./ToolbarRootContext-BfCeEs7c.js";import"./getDisabledMountTransitionStyles-BTvGlHNw.js";import"./getPseudoElementBounds-BmOO-M7r.js";import"./chevron-down-CgTNl4cy.js";import"./index-ZLSkTGBP.js";import"./error-bDXyKJC8.js";import"./BaseCbacBanner-pRZs5Dex.js";import"./makeExternalStore-CUOtWXW6.js";import"./Tooltip-BR8Gpg6Y.js";import"./PopoverPopup-Be5JEcOd.js";import"./debounce-BzGmHbO5.js";import"./useOsdkClient-osmLaNC1.js";import"./tick-D-DSVTdq.js";import"./DropdownField-C7QjeZet.js";import"./isEqual-tncELNRj.js";import"./withOsdkMetrics-tKMMAYTA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

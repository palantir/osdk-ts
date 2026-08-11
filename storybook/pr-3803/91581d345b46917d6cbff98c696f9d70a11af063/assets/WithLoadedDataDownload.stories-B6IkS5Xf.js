import{f as b,j as a,r as i}from"./iframe-6a0axaYb.js";import{O as u}from"./object-table-ckLHDuUg.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C65r43dF.js";import"./Table-Bp_iz_Lh.js";import"./index-Bx8WIjbQ.js";import"./Dialog-Dniq6lMf.js";import"./cross-ui5GjUpZ.js";import"./svgIconContainer-CaPxp0ph.js";import"./useBaseUiId-Cbq5nu5V.js";import"./InternalBackdrop-CCRxD5z3.js";import"./composite-C5OCHPh0.js";import"./index-BGOIdxxc.js";import"./index-lSA6E12E.js";import"./index-BtvGHLm_.js";import"./useEventCallback-BxS3_eQ_.js";import"./SkeletonBar-DXlHutjQ.js";import"./LoadingCell-Cp2o2IIh.js";import"./ColumnConfigDialog-BBQhTIyV.js";import"./DraggableList-CW8x0iH2.js";import"./search-BNwfslCq.js";import"./Input-DMbXSCc_.js";import"./useControlled-CjqN0_NF.js";import"./isEqual-56Gbp1Vh.js";import"./isObject-B29iDIAZ.js";import"./Button-De2gQHI6.js";import"./ActionButton-DrWqQcrB.js";import"./Checkbox-akOJqxna.js";import"./useValueChanged-C0Arb9yb.js";import"./CollapsiblePanel-DMUD5QcD.js";import"./MultiColumnSortDialog-C19AmYzX.js";import"./MenuTrigger-DfEaML1p.js";import"./CompositeItem-QPaHlaAE.js";import"./ToolbarRootContext-3aAm6U4A.js";import"./getDisabledMountTransitionStyles-CQcYSoK0.js";import"./getPseudoElementBounds-EVwwh6hp.js";import"./chevron-down-ZwgymyQM.js";import"./index-BaPDJwEJ.js";import"./error-ZufoUxds.js";import"./BaseCbacBanner-CYPhAEd2.js";import"./makeExternalStore-BIiPaBhV.js";import"./Tooltip-DRQfkytf.js";import"./PopoverPopup-B1YhPEAq.js";import"./toNumber-SIC4RXNP.js";import"./useOsdkClient-BFFz0Pdr.js";import"./tick-ChlBO6Ol.js";import"./DropdownField-BTkkJQzG.js";import"./withOsdkMetrics-DDxseQIl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

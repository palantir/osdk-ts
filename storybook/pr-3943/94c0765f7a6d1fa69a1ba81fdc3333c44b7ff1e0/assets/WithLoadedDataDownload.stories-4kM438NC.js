import{f as b,j as a,r as i}from"./iframe-BdjRDCo-.js";import{O as u}from"./object-table-Dtcz12IT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BsLdtZok.js";import"./Table-Cx3axRXr.js";import"./index-47c2OpeK.js";import"./Dialog-DbIFtalD.js";import"./cross-B5GzLpqa.js";import"./svgIconContainer-CQO2iyCb.js";import"./useBaseUiId-D_XUMLa4.js";import"./InternalBackdrop-Wo6tyC9E.js";import"./composite-CKlKqtP8.js";import"./index-DauSPNF0.js";import"./index-C3FIy_al.js";import"./index-Dt84Iv_5.js";import"./useEventCallback-BMnGO4Fm.js";import"./SkeletonBar-B7Prl9lh.js";import"./LoadingCell-DacR6Cx9.js";import"./ColumnConfigDialog-Bup3DQUt.js";import"./DraggableList-akxDFxxW.js";import"./search-C7zMm79O.js";import"./Input-CxfR2yqt.js";import"./useControlled-B8Jz7rQz.js";import"./Button-BL8FosPK.js";import"./small-cross-Hk9lslT7.js";import"./ActionButton-BOzqWsgN.js";import"./Checkbox-DHdCg2eB.js";import"./useValueChanged-BxuwKHYK.js";import"./CollapsiblePanel-DsNgy45u.js";import"./MultiColumnSortDialog-CRXODrkC.js";import"./MenuTrigger-CegzCc63.js";import"./CompositeItem-C9-QWuFp.js";import"./ToolbarRootContext-B-UKwdIZ.js";import"./getDisabledMountTransitionStyles-DqVTgWbQ.js";import"./getPseudoElementBounds-D7e_8qLy.js";import"./chevron-down-CZ95xNZC.js";import"./index-DczRP-BI.js";import"./error-B9XMEbgf.js";import"./BaseCbacBanner-BVWMsn2z.js";import"./makeExternalStore-BzujWOSe.js";import"./Tooltip-BA98EOIH.js";import"./PopoverPopup-BQ8qOJ-A.js";import"./debounce-CDYkNytK.js";import"./useOsdkClient-G0DtmmXL.js";import"./tick-hmoZ_aS5.js";import"./DropdownField-J2qWCChs.js";import"./isEqual-BCmlNN5k.js";import"./withOsdkMetrics-Cd9aI-bB.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

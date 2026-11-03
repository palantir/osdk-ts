import{f as b,j as a,r as i}from"./iframe-9A7AV9Cy.js";import{O as u}from"./object-table-CPJv4BYW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CK_ZcGGF.js";import"./Table-B59cxmyO.js";import"./index-Bkgk7vsR.js";import"./Dialog-Bl9zekAE.js";import"./cross-B7t6TzDw.js";import"./svgIconContainer-CR0pIEyo.js";import"./useBaseUiId-q7QIFNkg.js";import"./InternalBackdrop-CQ3SkFUe.js";import"./composite-CEEJ0vWU.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./index--u-sCo5n.js";import"./useEventCallback-DNZWa-fZ.js";import"./SkeletonBar-TosXJUxL.js";import"./LoadingCell-Dumj3M5j.js";import"./ColumnConfigDialog-CBjPf0Hz.js";import"./DraggableList-C57KPCMS.js";import"./search-BWRhS2Qj.js";import"./Input-CCxEn7sH.js";import"./useControlled-DIFFKw6v.js";import"./Button-CKepLiXu.js";import"./small-cross-1ULwRpx5.js";import"./ActionButton-1V5zer9B.js";import"./Checkbox-CnzsJ8SG.js";import"./useValueChanged-kZaWbmaa.js";import"./CollapsiblePanel-CKt0R28j.js";import"./MultiColumnSortDialog-00THcpjd.js";import"./MenuTrigger-BtqQkzdC.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./getDisabledMountTransitionStyles-_YA1Iepr.js";import"./getPseudoElementBounds-Bq0sNDj9.js";import"./chevron-down-Bi1tvw_Y.js";import"./index-CzE6ZkZ0.js";import"./error-C8bHM7uj.js";import"./BaseCbacBanner-BsVniqSH.js";import"./makeExternalStore-UebcDacP.js";import"./Tooltip-Dfs7CnEh.js";import"./PopoverPopup-hsESB4RR.js";import"./debounce-ADxFBf6q.js";import"./useOsdkClient-C7At4pV9.js";import"./tick-DlLbsS5l.js";import"./DropdownField-CNaJiffx.js";import"./isEqual-DKebV1YP.js";import"./withOsdkMetrics-B5obnKQC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

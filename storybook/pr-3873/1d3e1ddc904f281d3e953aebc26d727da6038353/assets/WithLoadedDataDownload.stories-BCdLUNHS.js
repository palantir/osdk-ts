import{f as b,j as a,r as i}from"./iframe-ClFIQ8KG.js";import{O as u}from"./object-table-CIZ5wxZ_.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D-QzYjnt.js";import"./Table-DF1MSg5O.js";import"./index-CIPksERX.js";import"./Dialog-yohvHLrw.js";import"./cross-CzpL54rX.js";import"./svgIconContainer-BSoQXT4y.js";import"./useBaseUiId-CGYdOYHy.js";import"./InternalBackdrop-BYN0uwLY.js";import"./composite-CYuFvp7L.js";import"./index-D6fn_S1P.js";import"./index-CcH0wkbM.js";import"./index-C0bHrIL5.js";import"./useEventCallback-2FGON6Li.js";import"./SkeletonBar-BAxUsBjZ.js";import"./LoadingCell-CEEtcSs1.js";import"./ColumnConfigDialog-CNRH47Jy.js";import"./DraggableList-DpIRvCOG.js";import"./search-D9qR5ESv.js";import"./Input-DZLAYudG.js";import"./useControlled-DqI9i7cj.js";import"./Button-BMUicVal.js";import"./small-cross-CHjwGZnC.js";import"./ActionButton-DgvUkhlE.js";import"./Checkbox-DBPzyNV6.js";import"./useValueChanged-BfGI94ie.js";import"./CollapsiblePanel-BTYlq_dL.js";import"./MultiColumnSortDialog-O0VEBzdK.js";import"./MenuTrigger-Biet3JvN.js";import"./CompositeItem-Gl89whZy.js";import"./ToolbarRootContext-BD2PZEZ6.js";import"./getDisabledMountTransitionStyles-BON87G2B.js";import"./getPseudoElementBounds-CQu9cawX.js";import"./chevron-down-DJiIS0J4.js";import"./index-CRZWfRoV.js";import"./error-CA8gNZpF.js";import"./BaseCbacBanner-BQ99i8Jn.js";import"./makeExternalStore-CxxiTsbi.js";import"./Tooltip-C64qdZ5m.js";import"./PopoverPopup-BRxfVKHt.js";import"./debounce-CMubfxww.js";import"./useOsdkClient-De0OgZae.js";import"./tick-CveYwUx1.js";import"./DropdownField-O8-KkkYD.js";import"./isEqual-DsEEZELG.js";import"./withOsdkMetrics-of3GBGS8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

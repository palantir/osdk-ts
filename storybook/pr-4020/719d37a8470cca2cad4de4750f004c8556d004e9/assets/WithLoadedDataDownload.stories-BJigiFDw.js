import{f as b,j as a,r as i}from"./iframe-B0400XAV.js";import{O as u}from"./object-table-BZ5Kdgrh.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bn7pmSUb.js";import"./Table-BALaECP2.js";import"./index-DZ4vxiLW.js";import"./Dialog-SWkd_Wiv.js";import"./cross-DQqnupWk.js";import"./svgIconContainer-JRfXSFeh.js";import"./useBaseUiId-B9k80gJ8.js";import"./InternalBackdrop-DmO0kWzU.js";import"./composite-BH1fXSiW.js";import"./index-C_9Kpq7B.js";import"./index-2o5KGJI0.js";import"./index-Ej3jcQKp.js";import"./useEventCallback-JQnAZWI3.js";import"./SkeletonBar-DJor0eXp.js";import"./LoadingCell-BOFJCCyC.js";import"./ColumnConfigDialog-d3dN9wSL.js";import"./DraggableList-B_mWzcV5.js";import"./search-BeppLusu.js";import"./Input-BRGSYo1e.js";import"./useControlled-DjWHSFCM.js";import"./Button-YA4JYpq1.js";import"./small-cross-ESv-X2fK.js";import"./ActionButton-BrvBwGrb.js";import"./Checkbox-CJMelRTO.js";import"./useValueChanged-BsB5HN0-.js";import"./CollapsiblePanel-B3Zzdgcc.js";import"./MultiColumnSortDialog-BN_ENW3e.js";import"./MenuTrigger-CKvR1G5L.js";import"./CompositeItem-CoJRCpBo.js";import"./ToolbarRootContext--iPu1vj7.js";import"./getDisabledMountTransitionStyles-CGuB9paQ.js";import"./getPseudoElementBounds-DLMLBgRr.js";import"./chevron-down-CEDiPbvm.js";import"./index-C8DuxpD6.js";import"./error-BZwgl63S.js";import"./BaseCbacBanner-BeF2ijdW.js";import"./makeExternalStore-B2IR-Z_q.js";import"./Tooltip-0d-ScaQ8.js";import"./PopoverPopup-1szLhiqM.js";import"./debounce-D1VOMgMZ.js";import"./useOsdkClient-J40VcFnd.js";import"./tick-DHoO3CIv.js";import"./DropdownField-CdBamLDl.js";import"./isEqual-CdJIThGs.js";import"./withOsdkMetrics-CZrqSehW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

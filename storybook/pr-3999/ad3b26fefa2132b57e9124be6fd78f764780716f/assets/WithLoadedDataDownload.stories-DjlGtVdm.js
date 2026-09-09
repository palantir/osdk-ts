import{f as b,j as a,r as i}from"./iframe-DsCzZXCk.js";import{O as u}from"./object-table-Bi3gkbRH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CXwWoCmC.js";import"./Table-DzAMBcZK.js";import"./index-Ci1-NLXL.js";import"./Dialog-WY8kOd8I.js";import"./cross-nUvl9WFP.js";import"./svgIconContainer-D37GNyYn.js";import"./useBaseUiId-3kQUveob.js";import"./InternalBackdrop-CwQed051.js";import"./composite-DHYMAbDg.js";import"./index-CdAzhd0H.js";import"./index-z1UHak1d.js";import"./index-x55rnuch.js";import"./useEventCallback-BCVvlhOQ.js";import"./SkeletonBar-vf1a1dAS.js";import"./LoadingCell-DrcEWbQQ.js";import"./ColumnConfigDialog-Bthqd0BS.js";import"./DraggableList-Ktye02ex.js";import"./search-Bol42X7R.js";import"./Input-B3Vnu-1d.js";import"./useControlled-DUHKt09G.js";import"./Button-BddFDihs.js";import"./small-cross-CTvq5HsT.js";import"./ActionButton-DD385ZrQ.js";import"./Checkbox-GmGZJnCk.js";import"./useValueChanged-B2VG6ome.js";import"./CollapsiblePanel-xaQ9gFVs.js";import"./MultiColumnSortDialog-CFfB5Mvl.js";import"./MenuTrigger-C6DHAWRk.js";import"./CompositeItem-D3-VN1Pw.js";import"./ToolbarRootContext-CrYLTP3H.js";import"./getDisabledMountTransitionStyles-hsS0T9Gj.js";import"./getPseudoElementBounds-PBZ-34d2.js";import"./chevron-down-Bpd_KI7a.js";import"./index-ClGHa1nk.js";import"./error-BfS-h5nJ.js";import"./BaseCbacBanner-CT9ucVkZ.js";import"./makeExternalStore-BJqmp2PE.js";import"./Tooltip-Vr2SVT2r.js";import"./PopoverPopup-C1a_kqTV.js";import"./debounce-D7PdVnfF.js";import"./useOsdkClient-DNGLR9mN.js";import"./tick-G-bMGJF4.js";import"./DropdownField-CoaNucHE.js";import"./isEqual-B2uZlYTn.js";import"./withOsdkMetrics-rktOS5NE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

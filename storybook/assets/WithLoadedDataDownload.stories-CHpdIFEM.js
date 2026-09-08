import{f as b,j as a,r as i}from"./iframe-DSHto0DU.js";import{O as u}from"./object-table-BgkvCuPO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CxqmXKu3.js";import"./index-DgEgOLFM.js";import"./Dialog-BOyyWGLK.js";import"./cross-FFwPOx1g.js";import"./svgIconContainer-D1SJmbot.js";import"./useBaseUiId-C-ni1EUd.js";import"./InternalBackdrop-BPZt_MJA.js";import"./composite-CGWcZn8w.js";import"./index-Dsj4AUeZ.js";import"./index-Da1D6qV_.js";import"./index-Cg05C7Um.js";import"./useEventCallback-DGorVKay.js";import"./SkeletonBar-_7teksHk.js";import"./LoadingCell-BD0XwVrT.js";import"./ColumnConfigDialog-BbW8nF82.js";import"./DraggableList-CZBWI52s.js";import"./search-BdBx2XvV.js";import"./Input-KYVV9ro4.js";import"./useControlled-vcfVgJyd.js";import"./Button-3LMPugrf.js";import"./small-cross-CDGKQKRZ.js";import"./ActionButton-D1Tmn4nA.js";import"./Checkbox-C0KMOFgH.js";import"./useValueChanged-P73U_JNR.js";import"./CollapsiblePanel-Br5gvUV_.js";import"./MultiColumnSortDialog-p6K-8FgF.js";import"./MenuTrigger-DWjUhq_w.js";import"./CompositeItem-vxVvcXOU.js";import"./ToolbarRootContext-CSFHIoxQ.js";import"./getDisabledMountTransitionStyles-CN3s_Czu.js";import"./getPseudoElementBounds-C1cvZaeh.js";import"./chevron-down-DEDDGssX.js";import"./index-D1lPazbO.js";import"./error-DjYRJjuj.js";import"./BaseCbacBanner-BU4VlrQ_.js";import"./makeExternalStore--ixwTB0S.js";import"./Tooltip-B6O1k0wv.js";import"./PopoverPopup-mckkiFEE.js";import"./debounce-CbpWBqbr.js";import"./useOsdkClient-SmfWaa1T.js";import"./tick-IfmUtKPy.js";import"./DropdownField-Cf3uBb5H.js";import"./isEqual-COTunjEM.js";import"./withOsdkMetrics-BVxbOnBr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

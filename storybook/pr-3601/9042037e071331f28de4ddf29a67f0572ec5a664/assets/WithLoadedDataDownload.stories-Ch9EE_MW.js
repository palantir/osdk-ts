import{f as b,j as a,r as i}from"./iframe-D88ys8_5.js";import{O as u}from"./object-table-fHMv59VG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BSuWjTQ8.js";import"./Table-Cp_y5IqX.js";import"./index-D2iS1gbC.js";import"./Dialog-DxzTKsKC.js";import"./cross-32ksmMI9.js";import"./svgIconContainer-CKMXSgTs.js";import"./useBaseUiId-5ahtmozG.js";import"./InternalBackdrop-BBguK_Gq.js";import"./composite-DyBPRih-.js";import"./index-Cd6eL8Zb.js";import"./index-E2eDRUfi.js";import"./index-DVlbCx9o.js";import"./useRole-BFnkeE3G.js";import"./useEventCallback-Sz5_KXJR.js";import"./SkeletonBar-CAw2fvkk.js";import"./LoadingCell-C8nt4WOz.js";import"./ColumnConfigDialog-CES9OfyM.js";import"./DraggableList-B589NTDE.js";import"./Input-ACvvhHDx.js";import"./useControlled-rkZFEJs-.js";import"./Button-tUp13dwH.js";import"./small-cross-FyZq1WIK.js";import"./ActionButton-qbq-BvAq.js";import"./Checkbox-C94EjZ_3.js";import"./minus-CKn_IV6c.js";import"./useValueChanged-BSGBG8FV.js";import"./FieldItemContext-d1r-WGYt.js";import"./caret-down-g9xom6Am.js";import"./CollapsiblePanel-CtbThwuX.js";import"./MultiColumnSortDialog-DHQ7WpqI.js";import"./MenuTrigger-NGM11S8U.js";import"./useCompositeListItem-DhWFIbt1.js";import"./ToolbarRootContext-BaucZlF2.js";import"./getDisabledMountTransitionStyles-Bd0QG0WE.js";import"./safePolygon-BleuNYCX.js";import"./getPseudoElementBounds-gAqFwjdn.js";import"./CompositeItem-D0sipvbn.js";import"./chevron-down-BoHAKoOS.js";import"./index-Da7I0-cb.js";import"./error-CnpSY9pC.js";import"./BaseCbacBanner-qM_hbMRJ.js";import"./makeExternalStore-hwPEEK2S.js";import"./Tooltip-BWFeCgy6.js";import"./PopoverPopup-BJ7gvj56.js";import"./toNumber-K4OerYjz.js";import"./useOsdkClient-Dg07jMYD.js";import"./Combobox-B8-v-GCg.js";import"./DropdownField-Bcqc29wS.js";import"./useOsdkObjects-RkDVy66i.js";import"./withOsdkMetrics-B5xH0POT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ge={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const je=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,je as __namedExportsOrder,ge as default};

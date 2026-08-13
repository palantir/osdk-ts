import{f as b,j as a,r as i}from"./iframe-CrdYfz1j.js";import{O as u}from"./object-table-DHo6Bu71.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKATmCzL.js";import"./Table-Bp75n4mb.js";import"./index-DGf5UtC0.js";import"./Dialog-BNP-wm6l.js";import"./cross-CNNELhu-.js";import"./svgIconContainer-Tyi6-qoG.js";import"./useBaseUiId-dMQXpX2_.js";import"./InternalBackdrop-MxxDFkud.js";import"./composite-BQeUw1C5.js";import"./index-Bo5TPIYo.js";import"./index-2NC_6Tgs.js";import"./index-BV-m61ut.js";import"./useEventCallback-xVgMH8jq.js";import"./SkeletonBar-ByE7-9ZL.js";import"./LoadingCell-CInqLWbH.js";import"./ColumnConfigDialog-lcdEo0kN.js";import"./DraggableList-EsseXW8w.js";import"./search-CKLyWx-O.js";import"./Input-D68UoCnN.js";import"./useControlled-B-uObzoi.js";import"./Button-CchJ5cyG.js";import"./small-cross-CPhowe_e.js";import"./ActionButton-C2hPv--S.js";import"./Checkbox-CnESWY0h.js";import"./useValueChanged-C-ltvQdt.js";import"./CollapsiblePanel-DuQ0C_fv.js";import"./MultiColumnSortDialog-Cg_igUeZ.js";import"./MenuTrigger-BzQkxt2t.js";import"./CompositeItem-BBlnE76H.js";import"./ToolbarRootContext-C55ZrIvq.js";import"./getDisabledMountTransitionStyles-C4cYowrJ.js";import"./getPseudoElementBounds-BsSFA3pP.js";import"./chevron-down-BTPbSLrU.js";import"./index-CNhI-fgu.js";import"./error-d1zfkTvI.js";import"./BaseCbacBanner-DAQsf-Py.js";import"./makeExternalStore-BxvGt8fM.js";import"./Tooltip-B9Y-ls9x.js";import"./PopoverPopup-Cn_7Vy-e.js";import"./toNumber-BoMSplVD.js";import"./useOsdkClient-BFBvlRT_.js";import"./tick-CQsTpN7q.js";import"./DropdownField-D51Dua_3.js";import"./withOsdkMetrics-DAT7SN5n.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

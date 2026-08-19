import{f as b,j as a,r as i}from"./iframe-Wmfq-VZM.js";import{O as u}from"./object-table-DuFaRQDQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Du2S85FQ.js";import"./Table-gAslYiRN.js";import"./index-CS0Yy-a9.js";import"./Dialog-CMr0H3Ms.js";import"./cross-DVOMc_IS.js";import"./svgIconContainer-Dr38566j.js";import"./useBaseUiId-BxqdO-OV.js";import"./InternalBackdrop-Dt5EJaJf.js";import"./composite-D8Nselg9.js";import"./index-BACLQbWX.js";import"./index-Cyb_urLR.js";import"./index-CkgQRnS-.js";import"./useEventCallback-CFjZA5qB.js";import"./SkeletonBar-Dwj78qcB.js";import"./LoadingCell-tVyhyGyF.js";import"./ColumnConfigDialog-C-2FyhzQ.js";import"./DraggableList-4Q6sDfeT.js";import"./search-DztiYnhe.js";import"./Input-64OaWLA3.js";import"./useControlled-DYwC9uvx.js";import"./Button-KnZtOZhW.js";import"./small-cross-D2I3HjLn.js";import"./ActionButton-Cw-6679X.js";import"./Checkbox-BtVHm2N0.js";import"./useValueChanged-Dm27a27U.js";import"./CollapsiblePanel-Czhz75oi.js";import"./MultiColumnSortDialog-CAr0PnYK.js";import"./MenuTrigger-BYwMSIdZ.js";import"./CompositeItem-DfjKuZSp.js";import"./ToolbarRootContext-DDVqMWIS.js";import"./getDisabledMountTransitionStyles-DUfcCrkU.js";import"./getPseudoElementBounds-IxJEcHej.js";import"./chevron-down-BMFuph0I.js";import"./index-BXiERbEc.js";import"./error-DX3SW9eg.js";import"./BaseCbacBanner-ByUAxktr.js";import"./makeExternalStore-DELeA3LK.js";import"./Tooltip-CGPj4Dbd.js";import"./PopoverPopup-DK71CzjP.js";import"./debounce-DwY3sqQK.js";import"./useOsdkClient-CNJuRTO6.js";import"./tick-CWFk4NDt.js";import"./DropdownField-DrVsqmrK.js";import"./isEqual-BBQhxmN8.js";import"./withOsdkMetrics-Csx3CAie.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

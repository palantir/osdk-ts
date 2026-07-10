import{f as b,j as a,r as i}from"./iframe-DvAHs_rK.js";import{O as u}from"./object-table-D1hONy3a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cxypp6NC.js";import"./Table-B105BuXd.js";import"./index-BNrAxUQu.js";import"./Dialog-DkJK_BX0.js";import"./cross-D-wVv7sP.js";import"./svgIconContainer-_lD2_6yh.js";import"./useBaseUiId-C8LpUgdp.js";import"./InternalBackdrop-DRKGoIto.js";import"./composite-obrHYeEl.js";import"./index-BStcrrnt.js";import"./index-Beg4FSvD.js";import"./index-CWEXOfzd.js";import"./useEventCallback-D1feD4mF.js";import"./SkeletonBar-DHXUsL8M.js";import"./LoadingCell-BUu2Aqco.js";import"./ColumnConfigDialog-OdtS8Kia.js";import"./DraggableList-CDheprCt.js";import"./search-C7QeuW8f.js";import"./Input-Bn1PVFyp.js";import"./useControlled-DkXAwXE4.js";import"./Button-Dpk0BmRN.js";import"./small-cross-CRkTRXZe.js";import"./ActionButton-B4pIiey-.js";import"./Checkbox-Dy0mNCQd.js";import"./useValueChanged-BSvHUJSp.js";import"./CollapsiblePanel-BHdJ5erx.js";import"./MultiColumnSortDialog-BYmjINSb.js";import"./MenuTrigger-5qotg0o8.js";import"./CompositeItem-DX3MatO1.js";import"./ToolbarRootContext-QUpobhM8.js";import"./getDisabledMountTransitionStyles-BGGJzaWw.js";import"./getPseudoElementBounds-BJxsTHXv.js";import"./chevron-down-CF2-IqN0.js";import"./index-CcI9RKAo.js";import"./error-BypgT7Ly.js";import"./BaseCbacBanner-CeJwR4kp.js";import"./makeExternalStore-CtSpQ8cF.js";import"./Tooltip-Dag7KUcm.js";import"./PopoverPopup-Bi8M9EWf.js";import"./toNumber-bXab-IHs.js";import"./useOsdkClient-CM8QbUtQ.js";import"./tick-CA5OH1ZX.js";import"./DropdownField-_fKfs5he.js";import"./withOsdkMetrics-uQpOCGzU.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

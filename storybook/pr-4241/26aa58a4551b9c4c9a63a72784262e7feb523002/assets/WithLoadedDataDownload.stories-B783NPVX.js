import{f as b,j as a,r as i}from"./iframe-DSFURlDA.js";import{O as u}from"./object-table-UUemqtA3.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B1VAjeN0.js";import"./Table-D-44ggYt.js";import"./index-n2cVRLUV.js";import"./Dialog-CH-s4w18.js";import"./cross-BfC9nIFZ.js";import"./svgIconContainer-DdvBD_9a.js";import"./useBaseUiId-CPQbMaU1.js";import"./InternalBackdrop-i93WBNhG.js";import"./composite-zLymdlB4.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./index-1g8QVa9w.js";import"./useEventCallback-D-jfKQ1Z.js";import"./SkeletonBar-BAkRYcYG.js";import"./LoadingCell-BD5eCvTL.js";import"./ColumnConfigDialog-wvEfUZ8D.js";import"./DraggableList-CM0711ve.js";import"./search-BUp5dxQj.js";import"./Input-TT4Euawv.js";import"./useControlled-C2QQWcpQ.js";import"./Button-B9oX6qDj.js";import"./small-cross-1OkFxGzR.js";import"./ActionButton-63CS6rUE.js";import"./Checkbox-DrDolBYQ.js";import"./useValueChanged-CboUDFgk.js";import"./CollapsiblePanel-7-q3gSlS.js";import"./MultiColumnSortDialog-Dm-0rn5u.js";import"./MenuTrigger-idfC3K8M.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./getDisabledMountTransitionStyles-C6-Suj3S.js";import"./getPseudoElementBounds-B4-845mD.js";import"./chevron-down-DT3G6LtT.js";import"./index-ojfPVnys.js";import"./error-DUIlp0md.js";import"./BaseCbacBanner-Bomlyg8i.js";import"./makeExternalStore-DipsHuCX.js";import"./Tooltip-D-FrCqJr.js";import"./PopoverPopup-BM6OifUC.js";import"./debounce-BCr80lUe.js";import"./useOsdkClient-B7Ec3XZP.js";import"./tick-Bd1kaq1w.js";import"./DropdownField-Ewv0QYli.js";import"./isEqual-DjH9X7M3.js";import"./withOsdkMetrics-CcZF-o22.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

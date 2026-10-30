import{f as b,j as a,r as i}from"./iframe-Hh4e2kUx.js";import{O as u}from"./object-table-Cr8llyem.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-TOQk18-t.js";import"./Table-BUFKXz0A.js";import"./index-FPZnvji7.js";import"./Dialog-CPtTTYRM.js";import"./cross-B1QiScfw.js";import"./svgIconContainer-Cz0JOvaj.js";import"./useBaseUiId-DjrC8msS.js";import"./InternalBackdrop-BRLz5Oo7.js";import"./composite-Cp4pW4Qp.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./index-BAn8m4dN.js";import"./useEventCallback-CgA-LA5D.js";import"./SkeletonBar-h8EAA6dT.js";import"./LoadingCell-MOjf46qh.js";import"./ColumnConfigDialog-D6vayJw6.js";import"./DraggableList-BK-MGJqw.js";import"./search-BdChkyLR.js";import"./Input-C0NV1hD9.js";import"./useControlled-DdhVK8TG.js";import"./Button-BeEw7oZA.js";import"./small-cross-BOMG33o5.js";import"./ActionButton-DBkLaJxS.js";import"./Checkbox-DhHh2I-I.js";import"./useValueChanged-DfM3tkSL.js";import"./CollapsiblePanel-CURvjbvA.js";import"./MultiColumnSortDialog-Cuh5KK1Y.js";import"./MenuTrigger-BI89sJPI.js";import"./CompositeItem-Cklqv3Ob.js";import"./ToolbarRootContext-C2gF6pit.js";import"./getDisabledMountTransitionStyles-CyyQe50a.js";import"./getPseudoElementBounds--QWVPd6g.js";import"./chevron-down-CYKjDF1m.js";import"./index-DrBWrzmN.js";import"./error-B0H5FIAQ.js";import"./BaseCbacBanner-bFzQlkvZ.js";import"./makeExternalStore-CPyLrlbT.js";import"./Tooltip-JRfON3Mb.js";import"./PopoverPopup-B5EBdm0I.js";import"./debounce-byZt61cr.js";import"./useOsdkClient-CewGTPBJ.js";import"./tick-DsV0GkZM.js";import"./DropdownField-DwXJ1LzE.js";import"./isEqual-5VleYkEv.js";import"./withOsdkMetrics-Da4KZg1t.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CQcaQGvw.js";import{O as u}from"./object-table-DpmmZmB6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Bpr-Zbmh.js";import"./Table-CS63qZ4Y.js";import"./index-DEOxmfRe.js";import"./Dialog-D-oFZX2x.js";import"./cross-KHNb9CvK.js";import"./svgIconContainer-BlwZok7B.js";import"./useBaseUiId-VAYeRdVB.js";import"./InternalBackdrop-Dk9Ect_q.js";import"./composite-CIfh6Bad.js";import"./index-B-ZM_tXu.js";import"./index-B9xnj9RD.js";import"./index-Cybk3Ne2.js";import"./useEventCallback-CArEIpoN.js";import"./SkeletonBar-DwEmvlQd.js";import"./LoadingCell-w0AlfgOa.js";import"./ColumnConfigDialog-BwA-ArwO.js";import"./DraggableList-DcjcrWwB.js";import"./search-D2m2i9E6.js";import"./Input-9-R4IQfH.js";import"./useControlled-67ajb_bK.js";import"./Button-8-6PGj6n.js";import"./small-cross-CdN_p7Hi.js";import"./ActionButton-DflWWN5i.js";import"./Checkbox-CVnS3BL9.js";import"./useValueChanged-DbtSKH0N.js";import"./CollapsiblePanel-DYXFBbIc.js";import"./MultiColumnSortDialog-DyV5ZdCf.js";import"./MenuTrigger-BgDkquvz.js";import"./CompositeItem-C3IvhL6b.js";import"./ToolbarRootContext-BXhcIhdf.js";import"./getDisabledMountTransitionStyles-DWvIpLbT.js";import"./getPseudoElementBounds-CIy0YkKg.js";import"./chevron-down-B_FXfQYl.js";import"./index-BEjLsBGv.js";import"./error-CUpk6v7r.js";import"./BaseCbacBanner-DqU4exPy.js";import"./makeExternalStore-Ms4Ce4yr.js";import"./Tooltip-D_Sh4Nii.js";import"./PopoverPopup-G1jUpOgq.js";import"./debounce-DSy6HMAr.js";import"./useOsdkClient-BuGTS-D_.js";import"./tick-CvubQLo2.js";import"./DropdownField-Cvh6eOlG.js";import"./isEqual-B1uid1yF.js";import"./withOsdkMetrics-gr6PUNKA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

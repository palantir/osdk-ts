import{f as b,j as a,r as i}from"./iframe-BJHh5Vyz.js";import{O as u}from"./object-table-BFTqu4WB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BEOBDvBb.js";import"./Table-D77tsv7z.js";import"./index-C19RBoJu.js";import"./Dialog-LkqoZs6q.js";import"./cross-BcEML_Ki.js";import"./svgIconContainer-Oo_WGWgj.js";import"./useBaseUiId-eHvFwl9q.js";import"./InternalBackdrop-BqbazbcZ.js";import"./composite-CQHPO_Bw.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./index-BcNome8U.js";import"./useEventCallback-SQylOg7X.js";import"./SkeletonBar-CpykcO5g.js";import"./LoadingCell-N8DCjfL3.js";import"./ColumnConfigDialog-B2i8eMF1.js";import"./DraggableList-BVbG2XdD.js";import"./search-CygATN7t.js";import"./Input-DhkgM9Ni.js";import"./useControlled-DRblTyuY.js";import"./Button-XY8oXyEd.js";import"./small-cross-BcJCT5oZ.js";import"./ActionButton-UaUebUqN.js";import"./Checkbox-D6YisCtG.js";import"./useValueChanged-CIPyPD3s.js";import"./CollapsiblePanel-CGqwtuWj.js";import"./MultiColumnSortDialog-C1LikW-A.js";import"./MenuTrigger-Bfj3uIwZ.js";import"./CompositeItem-6AqsuMkJ.js";import"./ToolbarRootContext-CNIddhOS.js";import"./getDisabledMountTransitionStyles-D3dYUIEg.js";import"./getPseudoElementBounds-CT0X_ePj.js";import"./chevron-down-g5IBPJxD.js";import"./index-DB7oCP_Q.js";import"./error-D2VhnADa.js";import"./BaseCbacBanner-D-J85zOv.js";import"./makeExternalStore-nf7wa3ij.js";import"./Tooltip-BJV71zjW.js";import"./PopoverPopup-fac766Lw.js";import"./debounce-Gc9yJQdi.js";import"./useOsdkClient-BZwIY2z4.js";import"./tick-CjnLz9Ic.js";import"./DropdownField-DEchhT8v.js";import"./isEqual-D_7g9xzJ.js";import"./withOsdkMetrics-DZ9Y5lOn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

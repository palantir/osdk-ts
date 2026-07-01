import{f as b,j as a,r as i}from"./iframe-BjWdl7eN.js";import{O as u}from"./object-table-CokJXgDU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xIUqxmHY.js";import"./Table-cQ32uaL3.js";import"./index-DeR5W6NB.js";import"./Dialog-CGB8NEf-.js";import"./cross-B_OmxRPA.js";import"./svgIconContainer-BHzzOhuq.js";import"./useBaseUiId-yyPww2M4.js";import"./InternalBackdrop-C9EHNMb8.js";import"./composite-C_W_sT2N.js";import"./index-CU5u0Gsl.js";import"./index-UXopW9Hw.js";import"./index-D01QZJx1.js";import"./useEventCallback-_TD7Kv-c.js";import"./SkeletonBar-C-5sAa3J.js";import"./LoadingCell-D6cIBWxo.js";import"./ColumnConfigDialog-CLAlXkRx.js";import"./DraggableList-Duv3sTHu.js";import"./search-BEKwaNvj.js";import"./Input-xLHFo-Z8.js";import"./useControlled-CdWaWuZJ.js";import"./Button-CRMOn3ry.js";import"./small-cross-o6IGy9oA.js";import"./ActionButton-2TlumMos.js";import"./Checkbox-BSpoklJb.js";import"./minus-B6sR6Gj2.js";import"./tick-BhPVmm4E.js";import"./useValueChanged-E861r8R4.js";import"./caret-down-BGVbt0Mc.js";import"./CollapsiblePanel-DXhV6DpU.js";import"./MultiColumnSortDialog-BFO1eqb4.js";import"./MenuTrigger-DRQFuXxY.js";import"./CompositeItem-CIthROPJ.js";import"./ToolbarRootContext-klef80m0.js";import"./getDisabledMountTransitionStyles-BYcyJd8z.js";import"./getPseudoElementBounds-DJIxT154.js";import"./chevron-down-I-1bnp1I.js";import"./index-z-MdZvSO.js";import"./error-DZFuvltD.js";import"./BaseCbacBanner-Bz4FQHPM.js";import"./makeExternalStore-Cn7sRJ4k.js";import"./Tooltip-WKKnF80N.js";import"./PopoverPopup-C47-kIcb.js";import"./toNumber-C75hVpsM.js";import"./useOsdkClient-hK-AwCQa.js";import"./DropdownField-CDzZaxtd.js";import"./withOsdkMetrics-BLUOmapG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

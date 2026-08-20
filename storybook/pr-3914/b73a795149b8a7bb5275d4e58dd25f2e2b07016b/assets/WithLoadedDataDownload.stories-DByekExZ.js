import{f as b,j as a,r as i}from"./iframe-CMBFeC_L.js";import{O as u}from"./object-table-BUY3brHZ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CS36ADie.js";import"./Table-CGDvEYnD.js";import"./index-D4Y_w0hd.js";import"./Dialog-COkRt85q.js";import"./cross-yG9BF8uH.js";import"./svgIconContainer-DJxkQhhX.js";import"./useBaseUiId-WiYHgttz.js";import"./InternalBackdrop-BSspU4KM.js";import"./composite-W5TWwyjD.js";import"./index-CZe2rHSJ.js";import"./index-CEtYmfNL.js";import"./index-CsQ1yXKY.js";import"./useEventCallback-mcaXVd9k.js";import"./SkeletonBar-8R5SFS8K.js";import"./LoadingCell-BsQRNZqG.js";import"./ColumnConfigDialog-CC3smv9j.js";import"./DraggableList-BZN9CPnY.js";import"./search-CdxSaiZT.js";import"./Input-BxRwyONo.js";import"./useControlled-BjH4SKxs.js";import"./Button-fIVGb80W.js";import"./small-cross-DOBW2WIw.js";import"./ActionButton-C4KQbB77.js";import"./Checkbox-XJwBKcJ6.js";import"./useValueChanged-DYwNaaDF.js";import"./CollapsiblePanel-BDxpXloE.js";import"./MultiColumnSortDialog-BY_WXlLR.js";import"./MenuTrigger-C1xsKVzb.js";import"./CompositeItem-DRB9ulRp.js";import"./ToolbarRootContext-CR2_3FrA.js";import"./getDisabledMountTransitionStyles-C061pxT3.js";import"./getPseudoElementBounds-xuSSDKLP.js";import"./chevron-down-B4P3-pPo.js";import"./index-BS3ExYik.js";import"./error-7AoAvQSe.js";import"./BaseCbacBanner-IssKwBT6.js";import"./makeExternalStore-BHl7EDPd.js";import"./Tooltip-Dq-jKqWq.js";import"./PopoverPopup-F1SSAjsx.js";import"./debounce-C8KBFwLC.js";import"./useOsdkClient-CxHjcBum.js";import"./tick-o8QJ8OhB.js";import"./DropdownField-DeC5UXjq.js";import"./isEqual-DoqdJuwX.js";import"./withOsdkMetrics-Bwu4txGZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-V6i4bT8x.js";import{O as u}from"./object-table-DSTeRHQQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CmldX7sB.js";import"./Table-DPaC2Tbc.js";import"./index-Beds6yTA.js";import"./Dialog-B5AOQW4O.js";import"./cross-DDT71ccu.js";import"./svgIconContainer-aK674JUy.js";import"./useBaseUiId-Bj0YWIgW.js";import"./InternalBackdrop-bOabf4C7.js";import"./composite-CKYi_Tru.js";import"./index-CveQVLJL.js";import"./index-BWb5Ixk2.js";import"./index-BZYQi9Q4.js";import"./useEventCallback-BAcjBYrK.js";import"./SkeletonBar-CfjteiFP.js";import"./LoadingCell-uc1WABoi.js";import"./ColumnConfigDialog-DDOcNaun.js";import"./DraggableList-d1YhO3nK.js";import"./Input-Cx-yIF6Y.js";import"./useControlled-BlAInmFY.js";import"./Button-D0ll5qNd.js";import"./small-cross-DqRFfbcB.js";import"./ActionButton-xJtwLp5g.js";import"./Checkbox-boR1D0w0.js";import"./minus-BKBavqvO.js";import"./useValueChanged-BBefqv6y.js";import"./caret-down-BLZQ3si5.js";import"./CollapsiblePanel-De4_09r-.js";import"./MultiColumnSortDialog-iI8yez0p.js";import"./MenuTrigger-zJfeJRop.js";import"./CompositeItem-CABo2SFk.js";import"./ToolbarRootContext-KVPUKj7I.js";import"./getDisabledMountTransitionStyles-CIi_AY6w.js";import"./getPseudoElementBounds-By8xw9mt.js";import"./chevron-down-CclV5GtX.js";import"./index-BAspgGrR.js";import"./error-i_as8ABS.js";import"./BaseCbacBanner-CzSOd2jX.js";import"./makeExternalStore-DESvwURl.js";import"./Tooltip-rS_DcyFx.js";import"./PopoverPopup-CIk9VAJ9.js";import"./toNumber-COMGl6p4.js";import"./useOsdkClient-DoXoOyKj.js";import"./DropdownField-DvvdBB5M.js";import"./withOsdkMetrics-DgdhCmRn.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

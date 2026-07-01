import{f as b,j as a,r as i}from"./iframe-BZiD4dB8.js";import{O as u}from"./object-table-apGjJxQt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DR7LWHEJ.js";import"./Table-BGrBK0LP.js";import"./index-CRMEJFID.js";import"./Dialog-jiHNFcJc.js";import"./cross-CaoaPxqf.js";import"./svgIconContainer--TZqu1uj.js";import"./useBaseUiId-BxRNlOB2.js";import"./InternalBackdrop-C4L7n-3z.js";import"./composite-C9S8ZKEE.js";import"./index-CMNXWmqT.js";import"./index-DW3PGEUA.js";import"./index-SHqajPDw.js";import"./useEventCallback-Be01qCFF.js";import"./SkeletonBar-BgsyoHBV.js";import"./LoadingCell-BzBCtOuE.js";import"./ColumnConfigDialog-Bdb_pD7a.js";import"./DraggableList-D8EPxT49.js";import"./search-CLnJLT11.js";import"./Input-duFg7CPv.js";import"./useControlled-DEDmQHxU.js";import"./Button-CROPbfSK.js";import"./small-cross-BMAH22f8.js";import"./ActionButton-8IgzWD4y.js";import"./Checkbox-DBk2XKjP.js";import"./minus-BBgQxbOW.js";import"./tick-CNyN2IxQ.js";import"./useValueChanged-BVcPkk5K.js";import"./caret-down-DETKlPEv.js";import"./CollapsiblePanel-glwC9Nzh.js";import"./MultiColumnSortDialog-D5PigFhU.js";import"./MenuTrigger-DiMkXrOG.js";import"./CompositeItem-DUVari45.js";import"./ToolbarRootContext-B11PSfpo.js";import"./getDisabledMountTransitionStyles-CuHCOVlX.js";import"./getPseudoElementBounds-BTy4GSr-.js";import"./chevron-down-vgV-93jB.js";import"./index-DCMkWzvN.js";import"./error-CDNBuFLS.js";import"./BaseCbacBanner-CZO5rCtQ.js";import"./makeExternalStore-BN0_OllU.js";import"./Tooltip-CLtZZOFq.js";import"./PopoverPopup-a3oxtfS2.js";import"./toNumber-BBAYN7I4.js";import"./useOsdkClient-B0kN0hUK.js";import"./DropdownField-CQ92nZHG.js";import"./withOsdkMetrics-BMAbK5si.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

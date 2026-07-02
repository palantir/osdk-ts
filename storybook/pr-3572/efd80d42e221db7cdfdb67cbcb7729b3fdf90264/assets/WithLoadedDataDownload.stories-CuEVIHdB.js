import{f as b,j as a,r as i}from"./iframe-BMWLVu1B.js";import{O as u}from"./object-table-i9WgEze4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CD98YvT3.js";import"./Table-BFOswdeX.js";import"./index-C_CSLeaI.js";import"./Dialog-DeFB76Vj.js";import"./cross-p8R5_cfS.js";import"./svgIconContainer-ChJGYcue.js";import"./useBaseUiId-rgc-9xpG.js";import"./InternalBackdrop-DItb8lzc.js";import"./composite-DYUx8nh9.js";import"./index-4cLeK3Jc.js";import"./index-AHIlm2Fz.js";import"./index-BRyr8IxN.js";import"./useEventCallback-DCHEtQGe.js";import"./SkeletonBar-CCGVdtwF.js";import"./LoadingCell-Bsxd82cy.js";import"./ColumnConfigDialog-Buxs6f2Q.js";import"./DraggableList-qAQW-i3j.js";import"./search-DgKFphhq.js";import"./Input-EoHvS4g1.js";import"./useControlled-Bfojft4Y.js";import"./Button-Bk--HmG4.js";import"./small-cross-DZPDKuqE.js";import"./ActionButton-BiA-j-C5.js";import"./Checkbox-B58GmySO.js";import"./minus-BI_eIHcn.js";import"./tick-Dfrbbqt6.js";import"./useValueChanged-s5kHSGX3.js";import"./caret-down-DI3xHQly.js";import"./CollapsiblePanel-QxNjDlEm.js";import"./MultiColumnSortDialog-Dp6jmXwG.js";import"./MenuTrigger-BNh8e055.js";import"./CompositeItem-XO12oXBx.js";import"./ToolbarRootContext-DfTMi3Dg.js";import"./getDisabledMountTransitionStyles-DO9tsb_K.js";import"./getPseudoElementBounds-DPs4iUYT.js";import"./chevron-down-CmjTA-FB.js";import"./index-pGHJ9wYX.js";import"./error-CLqxyRzW.js";import"./BaseCbacBanner-D8l3dUrd.js";import"./makeExternalStore-D9Kx5fbz.js";import"./Tooltip-a-gM-vdW.js";import"./PopoverPopup-BYr72FP1.js";import"./toNumber-BPNbPaP1.js";import"./useOsdkClient-BRug10vB.js";import"./DropdownField-aayoHhfJ.js";import"./withOsdkMetrics-CM4amC2X.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

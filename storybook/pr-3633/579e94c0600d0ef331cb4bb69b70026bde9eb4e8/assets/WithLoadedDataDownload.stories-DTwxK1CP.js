import{f as b,j as a,r as i}from"./iframe-BpPL3N54.js";import{O as u}from"./object-table-iVWdo1ow.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D1PYXbeJ.js";import"./Table-BGWajjmT.js";import"./index-Kd2NNqIR.js";import"./Dialog-CXk74w95.js";import"./cross-BJ0QdvuH.js";import"./svgIconContainer-9Pzm5qjd.js";import"./useBaseUiId-C9DsREXo.js";import"./InternalBackdrop-CGQF71it.js";import"./composite-en2PO2eu.js";import"./index-DheQatUS.js";import"./index-C-mPw1Ld.js";import"./index-BCFd2eZP.js";import"./useEventCallback-YXlLtF38.js";import"./SkeletonBar-AIIT-VJx.js";import"./LoadingCell-BSfa4ms0.js";import"./ColumnConfigDialog-CmZwNc3e.js";import"./DraggableList-BYNatC0V.js";import"./search-DqtKkGvQ.js";import"./Input-Cpw5RQEM.js";import"./useControlled-CpFf2mto.js";import"./Button-BoeqI3JJ.js";import"./small-cross-CWqf0vmG.js";import"./ActionButton-X872u3sL.js";import"./Checkbox-D-nf0isV.js";import"./useValueChanged-2iE6mcfQ.js";import"./CollapsiblePanel-yQgnYHEM.js";import"./MultiColumnSortDialog-GOdF4rVZ.js";import"./MenuTrigger-y-B4TUjB.js";import"./CompositeItem-DEp2UQ0X.js";import"./ToolbarRootContext-G90fG1r6.js";import"./getDisabledMountTransitionStyles-C9NNeY-9.js";import"./getPseudoElementBounds-Cxream8Q.js";import"./chevron-down-DkOfUPuv.js";import"./index-CRd_jlZZ.js";import"./error-Czkn31BN.js";import"./BaseCbacBanner-CXnMpnuS.js";import"./makeExternalStore-Co0apv13.js";import"./Tooltip-O6aoWgZl.js";import"./PopoverPopup-BQAUvugs.js";import"./toNumber-DupMMiwu.js";import"./useOsdkClient-BmpwDX8b.js";import"./tick-hfn2aVEQ.js";import"./DropdownField-l0x_cRse.js";import"./withOsdkMetrics-CZtxKDXJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

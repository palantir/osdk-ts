import{f as b,j as a,r as i}from"./iframe-Cs9ADBvD.js";import{O as u}from"./object-table-H6JcWgCU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fp8RqZsU.js";import"./Table-BKFpuQsD.js";import"./index-BZvVFqB_.js";import"./Dialog-B1V0ui7B.js";import"./cross-DxeY-V2I.js";import"./svgIconContainer-CS8ujTgu.js";import"./useBaseUiId-fO_qfTxo.js";import"./InternalBackdrop-C9GU9k0q.js";import"./composite-DRqzyhfc.js";import"./index-CwiHwblg.js";import"./index-Dg3zvo-k.js";import"./index-DCGeh5GT.js";import"./useEventCallback-CGxD9o8a.js";import"./SkeletonBar-Bjjg8hBy.js";import"./LoadingCell-9Wdjicij.js";import"./ColumnConfigDialog-CPGznege.js";import"./DraggableList-Dl7klTpS.js";import"./Input-DscsSbrZ.js";import"./useControlled-CN6pV-iU.js";import"./Button-DqsJRI1g.js";import"./small-cross-UiC5TZK8.js";import"./ActionButton-BHnK1Vze.js";import"./Checkbox-fXA1fE3p.js";import"./minus-DnAtc9J2.js";import"./useValueChanged-CwG9TEjL.js";import"./caret-down-D83imvGl.js";import"./CollapsiblePanel-DadihUuK.js";import"./MultiColumnSortDialog-Co3laFNN.js";import"./MenuTrigger-sja-2Ev6.js";import"./CompositeItem-BQPjEBfp.js";import"./ToolbarRootContext-tZHFCkP2.js";import"./getDisabledMountTransitionStyles-DV_4krVB.js";import"./getPseudoElementBounds-BcoGSqP1.js";import"./chevron-down-DvUAHv_E.js";import"./index-DsLecxgw.js";import"./error-BWgFwG0e.js";import"./BaseCbacBanner-Bfs7O1Cc.js";import"./makeExternalStore-DqH_udeO.js";import"./Tooltip-93E9zDaF.js";import"./PopoverPopup-Jc1gR3rn.js";import"./toNumber-fnt1pQNJ.js";import"./useOsdkClient-C3_dyGaV.js";import"./DropdownField-BmWrs2my.js";import"./withOsdkMetrics-B8hZUnEJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

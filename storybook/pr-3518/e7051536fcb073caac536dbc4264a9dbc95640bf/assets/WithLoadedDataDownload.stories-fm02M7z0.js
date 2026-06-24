import{f as b,j as a,r as i}from"./iframe-Tmq9KCpc.js";import{O as u}from"./object-table-DxW95kv5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DLGqi4dC.js";import"./Table-DNleXS7x.js";import"./index-B3-Jf5q4.js";import"./Dialog-BTGYUxcF.js";import"./cross-CyyHn5eQ.js";import"./svgIconContainer-SeCgGy2c.js";import"./useBaseUiId-CDHglk1S.js";import"./InternalBackdrop-DHXyDPGP.js";import"./composite-z6wOCmoj.js";import"./index-B0MERIRr.js";import"./index-DdZtAD9D.js";import"./index-B-0SceBz.js";import"./useEventCallback-B2xheCCA.js";import"./SkeletonBar-D5Y79bQT.js";import"./LoadingCell-C0IV3LmC.js";import"./ColumnConfigDialog-Dx2dqRbl.js";import"./DraggableList-tiEMfeAq.js";import"./Input-CJHQs4S-.js";import"./useControlled-D-cUaZGk.js";import"./Button-Can0oDI1.js";import"./small-cross-DuQBNiUS.js";import"./ActionButton-zom743tW.js";import"./Checkbox-geBsgGrq.js";import"./minus-mJpqaYf6.js";import"./useValueChanged-4_kIh2Qy.js";import"./caret-down-Bj1kxY5N.js";import"./CollapsiblePanel-ldyFyryG.js";import"./MultiColumnSortDialog-Cnu7c22c.js";import"./MenuTrigger-DGPqeCRx.js";import"./CompositeItem-Njv-UL0-.js";import"./ToolbarRootContext-CO46LevS.js";import"./getDisabledMountTransitionStyles-34a-rU3g.js";import"./getPseudoElementBounds-BbXVzXA0.js";import"./chevron-down-CtrzDWNG.js";import"./index-CSeUdJKV.js";import"./error-BYw7g7-I.js";import"./BaseCbacBanner-B4hDckkf.js";import"./makeExternalStore-RjVLrk3T.js";import"./Tooltip-2aZ4GuI9.js";import"./PopoverPopup-BtxdP9wx.js";import"./toNumber-DO1vsYv5.js";import"./useOsdkClient-HhfOBtyn.js";import"./DropdownField-DvPpNAiC.js";import"./withOsdkMetrics-BIxYACPr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

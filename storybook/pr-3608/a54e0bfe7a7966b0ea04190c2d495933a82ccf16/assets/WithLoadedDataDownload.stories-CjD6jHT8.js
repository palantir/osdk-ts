import{f as b,j as a,r as i}from"./iframe-z3kgqSwP.js";import{O as u}from"./object-table-CNC9gfSG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BxD95gn8.js";import"./Table-H6ixnkGp.js";import"./index-BFzEGCFR.js";import"./Dialog-C43gzUf6.js";import"./cross-CNRI10qM.js";import"./svgIconContainer-vxXaLN1R.js";import"./useBaseUiId-CC2KGGKF.js";import"./InternalBackdrop-CKhjFOXn.js";import"./composite-urFBwUYd.js";import"./index-dfy9RQgR.js";import"./index-FCWlAxUt.js";import"./index-CrvaJ4KL.js";import"./useEventCallback-69yfmcsN.js";import"./SkeletonBar-CL6uzwaq.js";import"./LoadingCell-BkzNxYsJ.js";import"./ColumnConfigDialog-D5VXG4O2.js";import"./DraggableList-BSWo3yPa.js";import"./search-DlCI_3ne.js";import"./Input-Drp1-O2N.js";import"./useControlled-DFFBLt9g.js";import"./Button-D4IOHvu3.js";import"./small-cross-Bl4VrcoI.js";import"./ActionButton-Csq3-tVg.js";import"./Checkbox-DsnTDe0T.js";import"./minus-CO0ZddGe.js";import"./tick-B3MjVo2F.js";import"./useValueChanged-D5GVFMGN.js";import"./caret-down-ByWoL30O.js";import"./CollapsiblePanel-CS7hGN9c.js";import"./MultiColumnSortDialog-BaRtzNys.js";import"./MenuTrigger-Ps_r7LqP.js";import"./CompositeItem-DtH80mGV.js";import"./ToolbarRootContext-dk23u97p.js";import"./getDisabledMountTransitionStyles-BNPY0Tt-.js";import"./getPseudoElementBounds-DppQ_N1z.js";import"./chevron-down-Cx-xxyBK.js";import"./index-BfosxuAq.js";import"./error-BLsVnIXb.js";import"./BaseCbacBanner-BakFBbhU.js";import"./makeExternalStore-CM3DLK4v.js";import"./Tooltip-BYE41ph8.js";import"./PopoverPopup-Cu1Yfa_D.js";import"./toNumber-DSUxr4FR.js";import"./useOsdkClient-D2suex8d.js";import"./DropdownField-MdWKCCRC.js";import"./withOsdkMetrics-D9bXlcbM.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-D0hYQ0ZS.js";import{O as u}from"./object-table-DLX2MzIu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CA2FQp3d.js";import"./Table-DMz3Y6NY.js";import"./index-DmARC5st.js";import"./Dialog-Bl5C-BqW.js";import"./cross-DGfZ9I8q.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./useBaseUiId-XRgD1fAc.js";import"./InternalBackdrop-SIBrBcO2.js";import"./composite-DkKFn4B2.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./index-BbLGiomW.js";import"./useEventCallback-QgwS4DGJ.js";import"./SkeletonBar-C6N4_KPV.js";import"./LoadingCell-Cy3ZG3Ul.js";import"./ColumnConfigDialog-Rnk5vxEV.js";import"./DraggableList-TmF7-AcL.js";import"./search-DXnEIY7b.js";import"./Input-DppPciYW.js";import"./useControlled-DFsigNjS.js";import"./Button-BBjgpomd.js";import"./small-cross-BxDAgcxl.js";import"./ActionButton-DpwsppbT.js";import"./Checkbox-DHbPmO1b.js";import"./useValueChanged-C5EsCsdO.js";import"./CollapsiblePanel-BJaUHEEv.js";import"./MultiColumnSortDialog-Cl36xL0F.js";import"./MenuTrigger-bO1EcLGj.js";import"./CompositeItem-BfeA3NJO.js";import"./ToolbarRootContext-B3P_Il02.js";import"./getDisabledMountTransitionStyles-CI56VyjH.js";import"./getPseudoElementBounds-DLUmkYq-.js";import"./chevron-down-DpAIzyvb.js";import"./index-CwuOLTmH.js";import"./error-DZHrzjAe.js";import"./BaseCbacBanner-Cu3SBgXf.js";import"./makeExternalStore-BcCQ6g4O.js";import"./Tooltip-CRcQ9riQ.js";import"./isObject-BfICCCNa.js";import"./debounce-Dai0imdk.js";import"./useOsdkClient-Dhz58JN-.js";import"./tick-CAmkKM-G.js";import"./DropdownField-DDHVxYRR.js";import"./isEqual-ouCKJr-f.js";import"./_baseIsEqual-B00E2ztM.js";import"./withOsdkMetrics-Dqap3OIg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

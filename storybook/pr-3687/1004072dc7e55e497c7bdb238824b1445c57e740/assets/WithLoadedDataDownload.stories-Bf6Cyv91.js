import{f as b,j as a,r as i}from"./iframe-BLN3c0ny.js";import{O as u}from"./object-table-BRQiEtNc.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-YNn4sAzm.js";import"./Table-BqBpAO8B.js";import"./index-C2W4mW7k.js";import"./Dialog-D1zYTuGJ.js";import"./cross-BI_OHT9E.js";import"./svgIconContainer-BdZesHFS.js";import"./useBaseUiId-CXuD1HYt.js";import"./InternalBackdrop-Dy3--uK1.js";import"./composite-Nm1NmS0N.js";import"./index-DbM9L159.js";import"./index-BeAUbI1J.js";import"./index-iWYhYSYV.js";import"./useEventCallback-BS-UwOoJ.js";import"./SkeletonBar-tcUQ8Ewk.js";import"./LoadingCell-DMki7SqR.js";import"./ColumnConfigDialog-DSDZHNtL.js";import"./DraggableList-C0sv1MFz.js";import"./search-BLsF3Nkl.js";import"./Input-CApTyOle.js";import"./useControlled-DHQ1gK1Z.js";import"./Button-Cg8SRRwY.js";import"./small-cross-NKa0ncfv.js";import"./ActionButton-DVBx-J9R.js";import"./Checkbox-DXPAj_mn.js";import"./useValueChanged-CI08ean9.js";import"./CollapsiblePanel-CiBqDfSD.js";import"./MultiColumnSortDialog-CGfxAi10.js";import"./MenuTrigger-BtbO1Shb.js";import"./CompositeItem-DwO22Lb_.js";import"./ToolbarRootContext-BUImLfjc.js";import"./getDisabledMountTransitionStyles-Dd7VVNVU.js";import"./getPseudoElementBounds-ciSWEQDm.js";import"./chevron-down-CuzDNcNa.js";import"./index-BRP9fXLP.js";import"./error-B6PTXWnS.js";import"./BaseCbacBanner-B9Cq4apT.js";import"./makeExternalStore-CIYI4EDM.js";import"./Tooltip-DPeaRUh3.js";import"./PopoverPopup-D7-vXjkP.js";import"./toNumber-DNMr4FP3.js";import"./useOsdkClient-da_YBg30.js";import"./tick-dIj8THiq.js";import"./DropdownField-BhW6h_q5.js";import"./withOsdkMetrics-DkRRLrbq.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

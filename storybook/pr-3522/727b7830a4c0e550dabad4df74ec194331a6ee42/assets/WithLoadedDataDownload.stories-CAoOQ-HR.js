import{f as b,j as a,r as i}from"./iframe-UO4Ybkw7.js";import{O as u}from"./object-table-minTE95q.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DiJvXCUK.js";import"./Table-gYp1cA-1.js";import"./index-Bb5mjG_a.js";import"./Dialog-C-c-Vb1c.js";import"./cross-BCTqA8Jr.js";import"./svgIconContainer-B_raw7t4.js";import"./useBaseUiId-_4TB_TLw.js";import"./InternalBackdrop-DG29521T.js";import"./composite-KS3-JNxL.js";import"./index-Bvhr_DAd.js";import"./index-DKFo-HpT.js";import"./index-B19JNjQG.js";import"./useEventCallback-Dz-HZ3Np.js";import"./SkeletonBar-D1yGdgp-.js";import"./LoadingCell-PTR6RfRl.js";import"./ColumnConfigDialog-CHhX8KWW.js";import"./DraggableList-C87Ym9zT.js";import"./search-B4rNT_0W.js";import"./Input-CEw-t_4F.js";import"./useControlled-CR06vBJn.js";import"./Button-kE2g4U-0.js";import"./small-cross--7lRPtID.js";import"./ActionButton-Coi3xlzQ.js";import"./Checkbox-DJ051bR9.js";import"./minus-XZ5ilPR8.js";import"./tick-CSlRno-u.js";import"./useValueChanged-C4Lv8Guw.js";import"./caret-down-OLSMawvw.js";import"./CollapsiblePanel-DVelCP_y.js";import"./MultiColumnSortDialog-BfZ9mNyk.js";import"./MenuTrigger-CcN81Rk4.js";import"./CompositeItem-61FeIbyL.js";import"./ToolbarRootContext-bbK7gci1.js";import"./getDisabledMountTransitionStyles-BckiRFDN.js";import"./getPseudoElementBounds-3Q_UrLvs.js";import"./chevron-down-CEdjdYlD.js";import"./index-CVIKVHhv.js";import"./error-D7LxK_a3.js";import"./BaseCbacBanner-CXzzZjUT.js";import"./makeExternalStore-BJTOYz4i.js";import"./Tooltip-z611wQhe.js";import"./PopoverPopup-B1ErmwQo.js";import"./toNumber-CfFeyvd2.js";import"./useOsdkClient-DNydPMdf.js";import"./DropdownField-NqVwCBgu.js";import"./withOsdkMetrics-pAjbcXOm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

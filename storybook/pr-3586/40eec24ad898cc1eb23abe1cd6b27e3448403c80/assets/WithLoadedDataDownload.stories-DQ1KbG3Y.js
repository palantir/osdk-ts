import{f as b,j as a,r as i}from"./iframe-DZZHFJmw.js";import{O as u}from"./object-table-BkjRexJF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJceTJ8d.js";import"./Table-BAYVWW9f.js";import"./index-VITHv6a3.js";import"./Dialog-BgNxXvy0.js";import"./cross-4GtN4qRa.js";import"./svgIconContainer-TzyOOZKZ.js";import"./useBaseUiId-C69MfeSb.js";import"./InternalBackdrop-B6ZavwqF.js";import"./composite-CljN3DGi.js";import"./index-BfnbsDzj.js";import"./index-5noR99D-.js";import"./index-BHPoMziH.js";import"./useEventCallback-q9omur47.js";import"./SkeletonBar-BmAdGYUM.js";import"./LoadingCell-BkwUV2Zo.js";import"./ColumnConfigDialog-O3QnNEyr.js";import"./DraggableList-DvpZ4ylf.js";import"./search-DL3c18ql.js";import"./Input-BJPxEvRk.js";import"./useControlled-G_Xvx-vc.js";import"./Button-D3DZb9qu.js";import"./small-cross-C7BJRpjG.js";import"./ActionButton-B9Z1gBfw.js";import"./Checkbox-sM_K8pru.js";import"./minus-CT8TcW8v.js";import"./tick-DPCWaP02.js";import"./useValueChanged-CbVIBtOR.js";import"./caret-down-D_MiTw9X.js";import"./CollapsiblePanel-Bo-md_Z5.js";import"./MultiColumnSortDialog-BPeh5vpF.js";import"./MenuTrigger-D5C0x9fI.js";import"./CompositeItem-BmlizI67.js";import"./ToolbarRootContext-ChGde8zf.js";import"./getDisabledMountTransitionStyles-DYRZ940R.js";import"./getPseudoElementBounds-DYh-oxP2.js";import"./chevron-down-BpvjPXmx.js";import"./index-DWUp4-rj.js";import"./error-90e_qXyW.js";import"./BaseCbacBanner-CRMJUSux.js";import"./makeExternalStore-BZQNpYye.js";import"./Tooltip-DkrH2ebZ.js";import"./PopoverPopup-Cltg3aYX.js";import"./toNumber-3zy__6vg.js";import"./useOsdkClient-Cl80hZ4I.js";import"./DropdownField-B9KQ3Ew_.js";import"./withOsdkMetrics-Dh6FTXUA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

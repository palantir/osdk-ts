import{f as b,j as a,r as i}from"./iframe-fPd3ZPuu.js";import{O as u}from"./object-table-ByrUn8V0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-5yag0Mtu.js";import"./Table-BTmPibXg.js";import"./index-CSsrsxtE.js";import"./Dialog-BSKGoiBY.js";import"./cross-BySQGXOf.js";import"./svgIconContainer-DNWpTeVC.js";import"./useBaseUiId-DLwhWcM7.js";import"./InternalBackdrop-Cy7MthF0.js";import"./composite-DajFV86i.js";import"./index-Dg0pnNJ_.js";import"./index-DBW89Y8Z.js";import"./index-CsCd7sOo.js";import"./useEventCallback-BDjGOR6K.js";import"./SkeletonBar-C610b2ss.js";import"./LoadingCell-CwjFQGgO.js";import"./ColumnConfigDialog-_JFGyW4v.js";import"./DraggableList-CTQ4_FsO.js";import"./search-B6gvipFg.js";import"./Input-bozW2I1f.js";import"./useControlled-BKaFuND4.js";import"./Button-DDSU9lrV.js";import"./small-cross-EQe1gJrY.js";import"./ActionButton-BmF_C6fu.js";import"./Checkbox-BNLPY2CZ.js";import"./useValueChanged-DH4xKUOc.js";import"./CollapsiblePanel-yt68W6lG.js";import"./MultiColumnSortDialog-YKeGMpu2.js";import"./MenuTrigger-DOiNbG2l.js";import"./CompositeItem-VGwfDYt4.js";import"./ToolbarRootContext-h03d-5AE.js";import"./getDisabledMountTransitionStyles-BJUneu6c.js";import"./getPseudoElementBounds-cr565Bjz.js";import"./chevron-down-8zAyFdFU.js";import"./index-DqcMwp2a.js";import"./error-BlTYrgdb.js";import"./BaseCbacBanner-B-9G54Sz.js";import"./makeExternalStore-eN0OdWna.js";import"./Tooltip-CWQ46O-I.js";import"./PopoverPopup-DAGwIV0e.js";import"./toNumber-Dyn7Drqq.js";import"./useOsdkClient-Deels94Z.js";import"./tick-ctMAdIJV.js";import"./DropdownField-DyR2KDZR.js";import"./withOsdkMetrics-DPWNWq30.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

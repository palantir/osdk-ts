import{f as b,j as a,r as i}from"./iframe-D0SoGzlw.js";import{O as u}from"./object-table-CWdPpm-w.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZb8OqUn.js";import"./Table-DTFwxP1Z.js";import"./index-NIcpiCuB.js";import"./Dialog-CUiiEYW7.js";import"./cross-B7-LJPHp.js";import"./svgIconContainer-DtLLs9FE.js";import"./useBaseUiId-0iVEX2QT.js";import"./InternalBackdrop-XOeF0jZ0.js";import"./composite-CiiEyupo.js";import"./index-Dokg2UqZ.js";import"./index--L61Dm0x.js";import"./index-DWvOPFpb.js";import"./useEventCallback-DjixT7t_.js";import"./SkeletonBar-wMpRaxcX.js";import"./LoadingCell-BDx765CK.js";import"./ColumnConfigDialog-DnqosaFW.js";import"./DraggableList-D15gStUs.js";import"./search-bfQtBKKt.js";import"./Input-Bn3p-c3n.js";import"./useControlled-Bi-kOtn8.js";import"./Button-6j7tEnHD.js";import"./small-cross-BgRvRrt5.js";import"./ActionButton-BhK-S006.js";import"./Checkbox-B7a0uavd.js";import"./minus-DvLGBYZX.js";import"./tick-D_QyMkmN.js";import"./useValueChanged-B63CMQDQ.js";import"./caret-down-DFDSgNRy.js";import"./CollapsiblePanel-CSagtLWS.js";import"./MultiColumnSortDialog-6sR8BZaW.js";import"./MenuTrigger-CUlueeaV.js";import"./CompositeItem-MAxqLPAf.js";import"./ToolbarRootContext-Xkrq5RfV.js";import"./getDisabledMountTransitionStyles-Bc5E5XVH.js";import"./getPseudoElementBounds-Cn12-CzF.js";import"./chevron-down-CAk4Pwea.js";import"./index-D8ICdijG.js";import"./error-CceLIcCi.js";import"./BaseCbacBanner-DAxaT8mK.js";import"./makeExternalStore-T88Wdozc.js";import"./Tooltip-Dgly_8KV.js";import"./PopoverPopup-BJxU45Dg.js";import"./toNumber-CG_mRwlH.js";import"./useOsdkClient-BFsEmlPp.js";import"./DropdownField-9VzvYka8.js";import"./withOsdkMetrics-DNsUUKzg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

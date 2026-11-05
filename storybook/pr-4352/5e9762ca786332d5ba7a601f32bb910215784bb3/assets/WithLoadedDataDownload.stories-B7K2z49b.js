import{f as b,j as a,r as i}from"./iframe-B7iXMeep.js";import{O as u}from"./object-table-B9UZXCXn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZFSoYNL.js";import"./Table-Pt4boUVr.js";import"./index-B9IPxHLp.js";import"./Dialog-BKfzE-yo.js";import"./cross-DxJs6dla.js";import"./svgIconContainer-6zXBkUlH.js";import"./useBaseUiId-D1eq_nvb.js";import"./InternalBackdrop-dELTuav9.js";import"./composite-vYr7iKxA.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./index-C7X42qv-.js";import"./useEventCallback-lGcIidgf.js";import"./SkeletonBar-DM6oPXtG.js";import"./LoadingCell-BO8IZx3f.js";import"./ColumnConfigDialog-Syoe0F7T.js";import"./DraggableList-dU0OXsyp.js";import"./search-CC1z-TYa.js";import"./Input-CXcN1OqN.js";import"./useControlled-BhUv2c2y.js";import"./Button-Cs7xUkhF.js";import"./small-cross-DuRTpqsB.js";import"./ActionButton-BT5QM3LR.js";import"./Checkbox-BMFNKKb2.js";import"./useValueChanged-Ca_viAtG.js";import"./CollapsiblePanel-meNR4Xwz.js";import"./MultiColumnSortDialog-D862tvOA.js";import"./MenuTrigger-HqcNVrC9.js";import"./CompositeItem-B2vumib4.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./getDisabledMountTransitionStyles-CJVOz_Wf.js";import"./getPseudoElementBounds-3y1P965l.js";import"./chevron-down-S3M-k2gy.js";import"./index-igxynrzH.js";import"./error-BqkMjiz6.js";import"./BaseCbacBanner-DNqGS3n1.js";import"./makeExternalStore-myfZT6Ru.js";import"./Tooltip-SwHBo8I_.js";import"./isObject-C8naLxpN.js";import"./debounce-BhHOqNYV.js";import"./useOsdkClient-B0C9p8qN.js";import"./tick-Ddmq0CLi.js";import"./DropdownField-oRa3_E0o.js";import"./isEqual-BvYKqMbJ.js";import"./_baseIsEqual-D0ACkd8L.js";import"./withOsdkMetrics-Be4NSs13.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

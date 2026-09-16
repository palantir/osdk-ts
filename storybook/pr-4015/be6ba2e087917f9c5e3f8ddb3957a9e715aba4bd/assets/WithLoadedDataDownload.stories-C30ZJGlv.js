import{f as b,j as a,r as i}from"./iframe-BEJEJisA.js";import{O as u}from"./object-table-jm4sFZ3T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTiopNJo.js";import"./Table-CUdKx4h7.js";import"./index-1N58UMzJ.js";import"./Dialog-BV1lMZPE.js";import"./cross-BjrVNHd5.js";import"./svgIconContainer-DsO6erGI.js";import"./useBaseUiId-Ew8LxSgO.js";import"./InternalBackdrop-DL9JbYUF.js";import"./composite-KwTbpSJb.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./index-B8J0Ow83.js";import"./useEventCallback-iVAQTX4_.js";import"./SkeletonBar-BhyVfmzi.js";import"./LoadingCell-mpz5oyrA.js";import"./ColumnConfigDialog-CmuQ8xtx.js";import"./DraggableList-ZC8q1xoS.js";import"./search-CrTCcvos.js";import"./Input-Dc1pIxfK.js";import"./useControlled-FA-c2Sau.js";import"./Button-BNegRBwl.js";import"./small-cross-DdmfQPNc.js";import"./ActionButton-2ogOV1x4.js";import"./Checkbox-DcD-s01f.js";import"./useValueChanged-acF7yMok.js";import"./CollapsiblePanel-DoZ_BIG5.js";import"./MultiColumnSortDialog-Qjze1ita.js";import"./MenuTrigger-f6q_Afz4.js";import"./CompositeItem-B4OpLzis.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./getDisabledMountTransitionStyles-DfEIWT8z.js";import"./getPseudoElementBounds-BcQdcw-B.js";import"./chevron-down-USDozdCe.js";import"./index-BgY1n9at.js";import"./error-C4eZ36G4.js";import"./BaseCbacBanner-EAHHvgHQ.js";import"./makeExternalStore-DJsapvxx.js";import"./Tooltip-BgKnrnJ_.js";import"./PopoverPopup-Dj8W7Cn3.js";import"./debounce-r6XyHjgC.js";import"./useOsdkClient-Bpe-a7b_.js";import"./tick-BPxV61Pe.js";import"./DropdownField-ED9pk3ub.js";import"./isEqual-D8fQwqRZ.js";import"./withOsdkMetrics-Cs8owx7q.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,we as __namedExportsOrder,ye as default};

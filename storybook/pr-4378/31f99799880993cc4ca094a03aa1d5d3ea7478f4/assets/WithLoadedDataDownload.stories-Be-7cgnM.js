import{f as b,j as a,r as i}from"./iframe-C-VQV1kk.js";import{O as u}from"./object-table-CxH1WG92.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DAFvkMcS.js";import"./Table-BxJIg6as.js";import"./index-Br3mcMRO.js";import"./Dialog-BcS09eX8.js";import"./cross-B26OHCdD.js";import"./svgIconContainer-CJnwzucZ.js";import"./useBaseUiId-CDIBpZbW.js";import"./InternalBackdrop-CrKl0Qys.js";import"./composite-GjU-j0CL.js";import"./index-BAOIGUAP.js";import"./index-DPEqsBnM.js";import"./index-C81NLsPb.js";import"./useEventCallback-CrzZq1A8.js";import"./SkeletonBar-BkJDoVVR.js";import"./LoadingCell-DidOQItD.js";import"./ColumnConfigDialog-DQEeQvz7.js";import"./DraggableList-qga-VF-f.js";import"./search-D0wtlqkl.js";import"./Input-C1vD7nT2.js";import"./useControlled-BadNojnw.js";import"./Button-BLvWajsq.js";import"./small-cross-DQKRtPL4.js";import"./ActionButton-BbdrlCMk.js";import"./Checkbox-1Rigo1b4.js";import"./useValueChanged-CTLWVytN.js";import"./CollapsiblePanel-DF08KEFn.js";import"./MultiColumnSortDialog-W8LwXs3d.js";import"./MenuTrigger-E2JdOber.js";import"./CompositeItem-CceR4qkm.js";import"./ToolbarRootContext-m881A_zR.js";import"./getDisabledMountTransitionStyles-lRegSDO5.js";import"./getPseudoElementBounds-CaioDmeF.js";import"./chevron-down-CPUFW1cF.js";import"./index-BFFBOJxl.js";import"./error-5dXKQyhU.js";import"./BaseCbacBanner-C1hA4dbq.js";import"./makeExternalStore-BIjV_Sjd.js";import"./Tooltip-yfSghmxo.js";import"./isObject-IGANmsxM.js";import"./debounce-BgKrWPP2.js";import"./useOsdkClient-fG21vCjJ.js";import"./tick-CGn7jNwS.js";import"./DropdownField-Gr8cO_hh.js";import"./isEqual-D3Uy-qVH.js";import"./_baseIsEqual-ApqE7jKt.js";import"./withOsdkMetrics-c7bdsNh3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

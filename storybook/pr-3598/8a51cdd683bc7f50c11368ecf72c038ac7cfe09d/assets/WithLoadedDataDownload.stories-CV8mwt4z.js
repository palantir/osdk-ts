import{f as b,j as a,r as i}from"./iframe-Cxvam0C5.js";import{O as u}from"./object-table-DoacJMIq.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cg7_K448.js";import"./Table-Bb2nxMVL.js";import"./index-C2gRybHp.js";import"./Dialog-CCFFFLru.js";import"./cross-D_Gwc5hO.js";import"./svgIconContainer-D3zv1LcV.js";import"./useBaseUiId-Cjlu4K-G.js";import"./InternalBackdrop-DZHbzqcK.js";import"./composite-ByR5A3kp.js";import"./index-BgBRz9_h.js";import"./index-BmpxsyXZ.js";import"./index-D_71ddDA.js";import"./useEventCallback-BwePvl8o.js";import"./SkeletonBar-djl9UANY.js";import"./LoadingCell-BPSXRyPM.js";import"./ColumnConfigDialog-CS_5fJHx.js";import"./DraggableList-KDx7QYLo.js";import"./search-jdB6_71l.js";import"./Input-pSgyxzxr.js";import"./useControlled-BxPCKOxM.js";import"./Button-DzaMyFaf.js";import"./small-cross-Cibcdu2r.js";import"./ActionButton-OrS1_0wO.js";import"./Checkbox-DQYUW8CW.js";import"./minus-CKWGH5R7.js";import"./tick-Dg11Y2uZ.js";import"./useValueChanged-Dc1EaNRz.js";import"./caret-down-CuyuJZMH.js";import"./CollapsiblePanel-Bnu8XCqV.js";import"./MultiColumnSortDialog-DxCSnqvM.js";import"./MenuTrigger-CgqZUaYM.js";import"./CompositeItem-CibJohdN.js";import"./ToolbarRootContext-Cgqy4FZi.js";import"./getDisabledMountTransitionStyles-QFNix51w.js";import"./getPseudoElementBounds-Dhq_xigk.js";import"./chevron-down-CKaY6Jum.js";import"./index-DosNoob4.js";import"./error-W3xJRcOo.js";import"./BaseCbacBanner-Dm17axAK.js";import"./makeExternalStore-IfU_uMXx.js";import"./Tooltip-DQWxI82v.js";import"./PopoverPopup-9QiI1qN4.js";import"./toNumber-Cb9dCvPq.js";import"./useOsdkClient-D8hoZj5W.js";import"./DropdownField-DlRTsDZI.js";import"./withOsdkMetrics-D7_Oig26.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

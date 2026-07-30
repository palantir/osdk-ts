import{f as b,j as a,r as i}from"./iframe-Dt0Ahp7v.js";import{O as u}from"./object-table-C7lON5md.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Csxsg529.js";import"./Table-CEI-Num5.js";import"./index-DKNyxDiu.js";import"./Dialog-Dtjx5p-C.js";import"./cross-DRzxKD9P.js";import"./svgIconContainer-CB7_PxJy.js";import"./useBaseUiId-CdwE49_c.js";import"./InternalBackdrop-DXzVZsqm.js";import"./composite-RqLHFCRB.js";import"./index-DgQ3UFA5.js";import"./index-BrDzKhkc.js";import"./index-raFJTOQN.js";import"./useEventCallback-wrrEUMLU.js";import"./SkeletonBar-l9KRBROl.js";import"./LoadingCell-CO5NOT5a.js";import"./ColumnConfigDialog-BGZCh411.js";import"./DraggableList-Bz08LFBa.js";import"./search-CMt_GG0Z.js";import"./Input-BG_Aon1B.js";import"./useControlled-LVr7DFLg.js";import"./isEqual-BxFB4iwO.js";import"./isObject-CDU1KAZx.js";import"./Button-Du4-mwXs.js";import"./ActionButton-Cv8Q47bY.js";import"./Checkbox-Ssgs7t0h.js";import"./useValueChanged-B0uXxmiT.js";import"./CollapsiblePanel-DBgJLNcW.js";import"./MultiColumnSortDialog-CDU5j975.js";import"./MenuTrigger-CmkyV0y8.js";import"./CompositeItem-pKV5GE2B.js";import"./ToolbarRootContext-BdRkmkbo.js";import"./getDisabledMountTransitionStyles-CPh35wbM.js";import"./getPseudoElementBounds-BorjMQgh.js";import"./chevron-down-DNCAQpBE.js";import"./index-wINFjYfg.js";import"./error-DG09RTcC.js";import"./BaseCbacBanner-BbbOdFTy.js";import"./makeExternalStore-BYkIgxdy.js";import"./Tooltip-D9Gho6OQ.js";import"./PopoverPopup-qJvh0xU8.js";import"./toNumber-ju4VPkOz.js";import"./useOsdkClient-BB1GGDEB.js";import"./tick-2io-CBPy.js";import"./DropdownField-wOiC2tMo.js";import"./withOsdkMetrics-8vUC6id2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

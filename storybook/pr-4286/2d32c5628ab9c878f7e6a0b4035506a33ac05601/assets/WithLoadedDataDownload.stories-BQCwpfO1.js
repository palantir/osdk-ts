import{f as b,j as a,r as i}from"./iframe-KThmj19P.js";import{O as u}from"./object-table-jytBJMWC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw3n3hSQ.js";import"./Table-D8GgoVcl.js";import"./index-8dp596C-.js";import"./Dialog-Dzi6uxVP.js";import"./cross-DgJrOo32.js";import"./svgIconContainer-BadPSwg5.js";import"./useBaseUiId-CO0UXqZj.js";import"./InternalBackdrop-ChJvd0mJ.js";import"./composite-DhtQTRu3.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./index-BDhUGLnw.js";import"./useEventCallback-BfVLO6-q.js";import"./SkeletonBar-B9s5jXE0.js";import"./LoadingCell-B3jp8Y5c.js";import"./ColumnConfigDialog-Oge2l_eU.js";import"./DraggableList-vCl6DQV2.js";import"./search-WKJE02Vc.js";import"./Input-DjgUB-Rn.js";import"./useControlled-Cit5AGWi.js";import"./Button-C5g5AH7h.js";import"./small-cross-BaTPq9PI.js";import"./ActionButton-D6GsiQH8.js";import"./Checkbox-5PSmCHau.js";import"./useValueChanged-BTUlUlPU.js";import"./CollapsiblePanel-BCle4Obe.js";import"./MultiColumnSortDialog-xMkOKsWL.js";import"./MenuTrigger-BVEdcOp-.js";import"./CompositeItem-B-b-pN3u.js";import"./ToolbarRootContext-BtS_uykU.js";import"./getDisabledMountTransitionStyles-B3VVxFZG.js";import"./getPseudoElementBounds-BrM6yGow.js";import"./chevron-down-C1Y2Cd7i.js";import"./index-BzpGTle2.js";import"./error-BU9XZpJG.js";import"./BaseCbacBanner-kwcHIsZg.js";import"./makeExternalStore-BCV4KITu.js";import"./Tooltip-DQdCr4CI.js";import"./PopoverPopup-C7b8KTlQ.js";import"./debounce-CRIHmV_F.js";import"./useOsdkClient-CNuNhGD2.js";import"./tick-B1qLCmei.js";import"./DropdownField-eYleBuTJ.js";import"./isEqual-DoyI84Cq.js";import"./withOsdkMetrics-hz19pnqZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

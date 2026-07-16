import{f as b,j as a,r as i}from"./iframe-DsOkoFr5.js";import{O as u}from"./object-table-DGQO2njT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DDrF1arX.js";import"./Table-QN4-4rfk.js";import"./index-DOsDpS7O.js";import"./Dialog-BIVqxqlX.js";import"./cross-CzTMhPQH.js";import"./svgIconContainer-CkZLof82.js";import"./useBaseUiId-BE5v2SQN.js";import"./InternalBackdrop-UujSzfYa.js";import"./composite-Dlz3RSxv.js";import"./index-BVf5_tEx.js";import"./index-INnzLx9r.js";import"./index-BxwFaPKy.js";import"./useEventCallback-B4eWyJkU.js";import"./SkeletonBar-DEHq6d8l.js";import"./LoadingCell-CLD_iXK3.js";import"./ColumnConfigDialog-Cf-TsQ1X.js";import"./DraggableList-X-LyVwxG.js";import"./search-DPhlC-LZ.js";import"./Input-CCC1W81Y.js";import"./useControlled-BkLrjPfa.js";import"./Button-Cd51dD9e.js";import"./small-cross-D9OSEBRO.js";import"./ActionButton-BGuLCs2C.js";import"./Checkbox-DFUyRqCh.js";import"./useValueChanged-mrRr6V_9.js";import"./CollapsiblePanel-BfXVRRzN.js";import"./MultiColumnSortDialog-Dacl2QsP.js";import"./MenuTrigger-Bu6UUxOR.js";import"./CompositeItem-DrB_SG8W.js";import"./ToolbarRootContext-CmI7MhD0.js";import"./getDisabledMountTransitionStyles-C3txD8gj.js";import"./getPseudoElementBounds-DSONGU5M.js";import"./chevron-down-dLcXnj71.js";import"./index-7T-2Bfvx.js";import"./error-DPCGqoet.js";import"./BaseCbacBanner-BS9jdnse.js";import"./makeExternalStore-C3CfdmAs.js";import"./Tooltip-CcNHa6m1.js";import"./PopoverPopup-CkhiRoSh.js";import"./toNumber-05hFypft.js";import"./useOsdkClient-DHwQxHlH.js";import"./tick-C4_eiIe9.js";import"./DropdownField-Zj60x6fj.js";import"./withOsdkMetrics-6xBHFVw9.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

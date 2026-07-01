import{f as b,j as a,r as i}from"./iframe-824MDbsX.js";import{O as u}from"./object-table-C2iJRdsl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B9fU7vfH.js";import"./Table-B17Kaf_B.js";import"./index-BvtG0yoH.js";import"./Dialog-CX9vBlwc.js";import"./cross-BvhJRl2q.js";import"./svgIconContainer-C0aQNaWj.js";import"./useBaseUiId-B7fC6zLH.js";import"./InternalBackdrop-wfCpdRwr.js";import"./composite-DlZedyd-.js";import"./index-CNlaO6D3.js";import"./index-s8tyOI8h.js";import"./index-BtM2nKX3.js";import"./useEventCallback-CKMDz2cN.js";import"./SkeletonBar-CWbJpR9P.js";import"./LoadingCell-Dkp2lt5X.js";import"./ColumnConfigDialog-QGLNI3vq.js";import"./DraggableList-1YDOv-LT.js";import"./search-DQehjN2R.js";import"./Input-B71CK3bD.js";import"./useControlled-CqytqVhE.js";import"./Button-BgArZGHK.js";import"./small-cross-CT0wMCSB.js";import"./ActionButton-BQASYBrp.js";import"./Checkbox-DR845Tha.js";import"./minus-CklVROHx.js";import"./tick-B_ttueYJ.js";import"./useValueChanged-DEYTclBc.js";import"./caret-down-DHJ32lcM.js";import"./CollapsiblePanel-JubEHFKQ.js";import"./MultiColumnSortDialog-CutLJbjq.js";import"./MenuTrigger-hbopTXbM.js";import"./CompositeItem-Cl5D5ixC.js";import"./ToolbarRootContext-Cw_8-e2d.js";import"./getDisabledMountTransitionStyles-BH9yTp9J.js";import"./getPseudoElementBounds-DvZMAOyT.js";import"./chevron-down-CQa1ZH9Z.js";import"./index-CwTH1dCS.js";import"./error-Djg1igBh.js";import"./BaseCbacBanner-eBxc4bqB.js";import"./makeExternalStore-CnAxKKCp.js";import"./Tooltip-43G3TeZc.js";import"./PopoverPopup-BgSbMZKV.js";import"./toNumber-CIFgP7m3.js";import"./useOsdkClient-HVepMAzu.js";import"./DropdownField-XA2TJgdI.js";import"./withOsdkMetrics-D4774-Fy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

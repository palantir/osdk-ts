import{f as b,j as a,r as i}from"./iframe-BAukKYpt.js";import{O as u}from"./object-table-Bz41jIPC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DEP8ArnM.js";import"./Table-CJmUtLBk.js";import"./index-BpChn7s-.js";import"./Dialog-BTx8w-FR.js";import"./cross-Wt5P4vcF.js";import"./svgIconContainer-Cdktco_5.js";import"./useBaseUiId-RhabLNAA.js";import"./InternalBackdrop-o22B5KIj.js";import"./composite-D8lj-V4B.js";import"./index-1wXDZdG-.js";import"./index-BpvJbmcH.js";import"./index-C0qPs7j2.js";import"./useEventCallback-DUEkXs09.js";import"./SkeletonBar-CvbMyIey.js";import"./LoadingCell-uoMeCHhb.js";import"./ColumnConfigDialog-BXKMMM3W.js";import"./DraggableList-DdhGXVEF.js";import"./Input-DJoA583-.js";import"./useControlled-ThDL_X9N.js";import"./Button-CPPNdecC.js";import"./small-cross-BW9tO6Bs.js";import"./ActionButton-B6RmjO27.js";import"./Checkbox-BU6Ro2Gi.js";import"./minus-mKlcJW5w.js";import"./useValueChanged-rBMJmxdF.js";import"./caret-down-B0rccozb.js";import"./CollapsiblePanel-BOmUW2eo.js";import"./MultiColumnSortDialog-vP4CQcMg.js";import"./MenuTrigger-BiECvH1L.js";import"./CompositeItem-BQ57aeFJ.js";import"./ToolbarRootContext-C1ndUy9w.js";import"./getDisabledMountTransitionStyles-CKDaAImU.js";import"./getPseudoElementBounds-0CZHolYG.js";import"./chevron-down-u5jwuTcd.js";import"./index-Bc23yeam.js";import"./error-DdebbK9k.js";import"./BaseCbacBanner-b8jHKhwY.js";import"./makeExternalStore-DO-Jcp6U.js";import"./Tooltip-By-fKxMI.js";import"./PopoverPopup-SZX_-Nex.js";import"./toNumber-C23jTECR.js";import"./useOsdkClient-Xt_UoppG.js";import"./DropdownField-CWRZhojM.js";import"./withOsdkMetrics-z4L-EvAK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

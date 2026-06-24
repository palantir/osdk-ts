import{f as b,j as a,r as i}from"./iframe-BHH5oXms.js";import{O as u}from"./object-table-CvR5XZst.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DGrJYIf3.js";import"./index-BgJAfSkc.js";import"./Dialog-4pm4iTaX.js";import"./cross-lNa8ctLW.js";import"./svgIconContainer-kKNfJCP_.js";import"./useBaseUiId-CwkBF8oJ.js";import"./InternalBackdrop-CLBB5K0l.js";import"./composite-BUMme9kZ.js";import"./index-Cvr7cDOz.js";import"./index-BkZzOscd.js";import"./index-DwYKenYO.js";import"./useEventCallback-iDaO5RcB.js";import"./SkeletonBar-M0w4a5Xx.js";import"./LoadingCell-hoLqcBKN.js";import"./ColumnConfigDialog-bPXeQiYr.js";import"./DraggableList-C_GH0i0v.js";import"./Input-DlioPdaF.js";import"./useControlled-pi1OAFb_.js";import"./Button-DVfRPTAL.js";import"./small-cross-B6sURQke.js";import"./ActionButton-CrxAmnE9.js";import"./Checkbox-DaTbAazU.js";import"./minus-BEmAJnAQ.js";import"./useValueChanged-D2lDmKpa.js";import"./caret-down-kfvae0pM.js";import"./CollapsiblePanel-Df-A87vf.js";import"./MultiColumnSortDialog-66xur8hN.js";import"./MenuTrigger-CWyXodKM.js";import"./CompositeItem-D9UxTgf0.js";import"./ToolbarRootContext-CBOnoqze.js";import"./getDisabledMountTransitionStyles-BMJogpxe.js";import"./getPseudoElementBounds-Bmc-d5Mv.js";import"./chevron-down-ByEocyUL.js";import"./index-DsvQTTq0.js";import"./error-B2M42nQ_.js";import"./BaseCbacBanner-CKqER_f_.js";import"./makeExternalStore-C-WEuJ6v.js";import"./Tooltip-Df1EIg5h.js";import"./PopoverPopup-BB6qHe44.js";import"./toNumber-f36Qym6k.js";import"./useOsdkClient-BJChez03.js";import"./DropdownField-ReX8NgL3.js";import"./withOsdkMetrics-DOxXHKa4.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

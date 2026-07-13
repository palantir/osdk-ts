import{f as b,j as a,r as i}from"./iframe-3qSeowKt.js";import{O as u}from"./object-table-D9ughJ7i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ntUbbqbv.js";import"./Table-BKeQQkG2.js";import"./index-CvXzK1Ze.js";import"./Dialog-D8WLZeaY.js";import"./cross-BD2jsSpc.js";import"./svgIconContainer-DrkH_pK4.js";import"./useBaseUiId-DZexMm2d.js";import"./InternalBackdrop-DNwiKCfV.js";import"./composite-BtTVONXM.js";import"./index-DmWAq4WA.js";import"./index-CMYYXOi8.js";import"./index-BUvWXhf-.js";import"./useEventCallback-CALcAkTo.js";import"./SkeletonBar-VlmCn84E.js";import"./LoadingCell-CQFFpKcM.js";import"./ColumnConfigDialog-Jt-V6rnO.js";import"./DraggableList-B9iwudVv.js";import"./search-C55SF0Ui.js";import"./Input-Cba3EN-v.js";import"./useControlled-DJ0m2Fyu.js";import"./Button-CuYgFcjq.js";import"./small-cross-DeSc8_EJ.js";import"./ActionButton-BhZyamBg.js";import"./Checkbox-DXTpQ86q.js";import"./useValueChanged-DEJUvr7G.js";import"./CollapsiblePanel-Dn823A2X.js";import"./MultiColumnSortDialog-CgquaHIk.js";import"./MenuTrigger-DminSTNN.js";import"./CompositeItem-Fy8Xf1qx.js";import"./ToolbarRootContext-BbwFvlAX.js";import"./getDisabledMountTransitionStyles-Tjd9ZiaB.js";import"./getPseudoElementBounds-DyHUQiHW.js";import"./chevron-down-BwQXiMfc.js";import"./index-FvABRkCD.js";import"./error-DVqayGTz.js";import"./BaseCbacBanner-DCHfBZ85.js";import"./makeExternalStore-3JH7QD64.js";import"./Tooltip-BLm90XoF.js";import"./PopoverPopup-BPpZger3.js";import"./toNumber-CDFmJYIX.js";import"./useOsdkClient-Be92vCY9.js";import"./tick-BwDasbf6.js";import"./DropdownField-zTdv33kn.js";import"./withOsdkMetrics-EfSZ0pPz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

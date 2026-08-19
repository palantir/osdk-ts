import{f as b,j as a,r as i}from"./iframe-DRuc0GBP.js";import{O as u}from"./object-table-DmGO0Vxo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CRRYqW21.js";import"./Table-BR8CCk-8.js";import"./index-Df25XFZb.js";import"./Dialog-BC4bcRh6.js";import"./cross-C3j-rtHx.js";import"./svgIconContainer-8epjwYsu.js";import"./useBaseUiId-DbcBxDLS.js";import"./InternalBackdrop-i581aqEB.js";import"./composite-DCht-HgF.js";import"./index-DpJFda_e.js";import"./index-BalUdg1Y.js";import"./index-YiEFMxhB.js";import"./useEventCallback-Ds2xBSpC.js";import"./SkeletonBar-B8N_Ahmp.js";import"./LoadingCell-Bftk-ZRu.js";import"./ColumnConfigDialog-B521fVb-.js";import"./DraggableList-DgLUOU_-.js";import"./search-De5zerSm.js";import"./Input-qFxyrE0p.js";import"./useControlled-DhQ1jfam.js";import"./Button-DNV5pzPO.js";import"./small-cross-pAWOo5vD.js";import"./ActionButton-C0tEvPDb.js";import"./Checkbox-CR8ot2aQ.js";import"./useValueChanged-TdIj53uF.js";import"./CollapsiblePanel-DEy_naSL.js";import"./MultiColumnSortDialog-BhpT7X1D.js";import"./MenuTrigger-BBa-7LXr.js";import"./CompositeItem-BC6rjLhn.js";import"./ToolbarRootContext-DMBrxqfV.js";import"./getDisabledMountTransitionStyles-CFsGZL01.js";import"./getPseudoElementBounds-DPZ3DPV5.js";import"./chevron-down-Bj7gjeyM.js";import"./index-BUJ8RC2M.js";import"./error-CajMr2N5.js";import"./BaseCbacBanner-DGZigbUp.js";import"./makeExternalStore-DzVXPn5S.js";import"./Tooltip-Bbl8mehV.js";import"./PopoverPopup-_gjSlE1P.js";import"./debounce-OZctj2Y3.js";import"./useOsdkClient-ZsKxr3Nm.js";import"./tick-BX4z4qIP.js";import"./DropdownField-DyPgZ25Y.js";import"./isEqual-B9eMVgOn.js";import"./withOsdkMetrics-BIITkI-U.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-D1OesapM.js";import{O as u}from"./object-table-BaWM8RD6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CWyFRo_B.js";import"./Table-BW_Pl1mb.js";import"./index-DMtCjLJY.js";import"./Dialog-CYTfIcx6.js";import"./cross-feoG7Ztk.js";import"./svgIconContainer-DXytnXt-.js";import"./useBaseUiId-kB4ggmLy.js";import"./InternalBackdrop-CYdFXR70.js";import"./composite-vHTE3Mr2.js";import"./index-Duv15EQw.js";import"./index-iLiemBjV.js";import"./index-C8Su04u8.js";import"./useEventCallback-2a2Izdjn.js";import"./SkeletonBar-3VbWmyu6.js";import"./LoadingCell-BnwtoBA7.js";import"./ColumnConfigDialog-B1oW35rJ.js";import"./DraggableList-BANago59.js";import"./search-BDr6JmbH.js";import"./Input-D9xER9fc.js";import"./useControlled-8kjH-NtT.js";import"./Button-CSxxyQxV.js";import"./small-cross-8YnFw4Gn.js";import"./ActionButton-BGGJkZUK.js";import"./Checkbox-DeHPN0NX.js";import"./minus-D6vzs1_J.js";import"./tick-DVC0a0EC.js";import"./useValueChanged-CDpYfx-I.js";import"./caret-down-BdwUfNpl.js";import"./CollapsiblePanel-1ZcOrG5F.js";import"./MultiColumnSortDialog-D186DMo3.js";import"./MenuTrigger-46a9wUgq.js";import"./CompositeItem-c0SeRm0i.js";import"./ToolbarRootContext-K7kL1Y4Z.js";import"./getDisabledMountTransitionStyles-DnY5N2AM.js";import"./getPseudoElementBounds-CBWmDnAi.js";import"./chevron-down-rIZQARrO.js";import"./index-Ck-dowE7.js";import"./error-BGk2V_gx.js";import"./BaseCbacBanner-abXmKDnF.js";import"./makeExternalStore-C7V9DMZC.js";import"./Tooltip-_dvMbNte.js";import"./PopoverPopup-CMVbsORE.js";import"./toNumber-BlRyUMU9.js";import"./useOsdkClient-Bzqt_ecX.js";import"./DropdownField-BTE9uSUn.js";import"./withOsdkMetrics-BIdW4CAc.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

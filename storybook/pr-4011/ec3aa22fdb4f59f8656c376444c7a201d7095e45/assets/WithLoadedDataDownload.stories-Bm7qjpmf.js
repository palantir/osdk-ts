import{f as b,j as a,r as i}from"./iframe-DdU1btI5.js";import{O as u}from"./object-table-D44as4zk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CJIdcoC_.js";import"./Table-B5RIyH7v.js";import"./index-Bjdg2prT.js";import"./Dialog-BehTEpFP.js";import"./cross-DezMrsVo.js";import"./svgIconContainer-CevOR6cS.js";import"./useBaseUiId-BlXBlP0f.js";import"./InternalBackdrop-Btm-Z_2t.js";import"./composite-DKrCSbZ1.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./index-BG8iFfop.js";import"./useEventCallback-CG7YyhyL.js";import"./SkeletonBar-BcdtXClT.js";import"./LoadingCell-D0aLZKOH.js";import"./ColumnConfigDialog-DWdFLUlW.js";import"./DraggableList-C0JVloPf.js";import"./search-DFTmIh4d.js";import"./Input-DBMe1jVC.js";import"./useControlled-BwHcuxO_.js";import"./Button-DOSUJ3M5.js";import"./small-cross-Qx7h4_xT.js";import"./ActionButton-WG4ypQCg.js";import"./Checkbox-BsmxXmhs.js";import"./useValueChanged-CZIiffVu.js";import"./CollapsiblePanel-DJJzQ09o.js";import"./MultiColumnSortDialog-mzJ0a9dw.js";import"./MenuTrigger-D6zsRA52.js";import"./CompositeItem-Dd62h_6-.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./getDisabledMountTransitionStyles-BV0-CpFZ.js";import"./getPseudoElementBounds-DvL2rk6a.js";import"./chevron-down-BBg4HQxv.js";import"./index-I-zAiBXy.js";import"./error-NWRP_Q29.js";import"./BaseCbacBanner-B54bFTJG.js";import"./makeExternalStore-BXvxNDLv.js";import"./Tooltip-DNChs3yX.js";import"./PopoverPopup-DiH0uZZ4.js";import"./debounce-DZDPioJF.js";import"./useOsdkClient-DAa6LI-X.js";import"./tick-DBSn5IWS.js";import"./DropdownField-Fpq8W5FQ.js";import"./isEqual-Cy9j0AGB.js";import"./withOsdkMetrics--yltK86k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Ccapaqae.js";import{O as u}from"./object-table-Dz76OuRn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B0fDxzOV.js";import"./Table-D6loqJR_.js";import"./index-CAc_fcE_.js";import"./Dialog-OboDm5XO.js";import"./cross-DVe-hkuB.js";import"./svgIconContainer-usxw3tZ0.js";import"./useBaseUiId-BD8gqrlU.js";import"./InternalBackdrop-BN-hTzRo.js";import"./composite-D5uZkbga.js";import"./index-DJ_c_Zcf.js";import"./index-Bb7LrozI.js";import"./index-C-nQHSmy.js";import"./useEventCallback-B8B0zh1F.js";import"./SkeletonBar-CxVZ2dgM.js";import"./LoadingCell-B0rni8W2.js";import"./ColumnConfigDialog-BIUweG0f.js";import"./DraggableList-D0wc-qLT.js";import"./search-gfBqCBGK.js";import"./Input-Cmwk-bsi.js";import"./useControlled-OeZ6f7Nb.js";import"./Button-YLU6pcy0.js";import"./small-cross-BCCk6ZGS.js";import"./ActionButton-BU9tJHwz.js";import"./Checkbox-DC6mo_fZ.js";import"./useValueChanged-fMEzhjAD.js";import"./CollapsiblePanel-BRx4L-gI.js";import"./MultiColumnSortDialog-B_yL99Yt.js";import"./MenuTrigger-CdarDH0K.js";import"./CompositeItem-BQ56iutS.js";import"./ToolbarRootContext-h1fk3wwB.js";import"./getDisabledMountTransitionStyles-CX7DWXGm.js";import"./getPseudoElementBounds-3hF2b042.js";import"./chevron-down-NuPa8cs3.js";import"./index-BmU3DUw1.js";import"./error-rF1GSzue.js";import"./BaseCbacBanner-59JQ6rwc.js";import"./makeExternalStore-g6LhMIcg.js";import"./Tooltip-OyMbgjjf.js";import"./PopoverPopup-Bdu2GGRB.js";import"./debounce-DqeA49PZ.js";import"./useOsdkClient-BB4EEIlx.js";import"./tick-B2UO1Zse.js";import"./DropdownField-BincnoLP.js";import"./isEqual-DSfnir-p.js";import"./withOsdkMetrics-Clo6yw-m.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

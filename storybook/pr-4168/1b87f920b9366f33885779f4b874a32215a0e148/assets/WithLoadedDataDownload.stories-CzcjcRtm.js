import{f as b,j as a,r as i}from"./iframe-BfqPDKql.js";import{O as u}from"./object-table-DjxNL_6f.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CjR-GsqS.js";import"./Table-DY99F2ck.js";import"./index-3BLY6arO.js";import"./Dialog-DefyZ3S9.js";import"./cross-C4uG_0m-.js";import"./svgIconContainer-Bvpn0iJ8.js";import"./useBaseUiId-C-9mkB40.js";import"./InternalBackdrop-DUtosfX7.js";import"./composite-C5EU-6hJ.js";import"./index-CCUvb36V.js";import"./index-CdNizhnG.js";import"./index-BH2TTPUz.js";import"./useEventCallback-G3g3fg30.js";import"./SkeletonBar-B4bFxsHY.js";import"./LoadingCell-CnzaETsA.js";import"./ColumnConfigDialog-RB_j43Yp.js";import"./DraggableList-B3A3MYkb.js";import"./search-DVeWM__c.js";import"./Input-BwQuq_Q1.js";import"./useControlled-1Az1d9DS.js";import"./Button-jRfE62iM.js";import"./small-cross-DljuEPYZ.js";import"./ActionButton-C_6ndFXd.js";import"./Checkbox-CB13yCdv.js";import"./useValueChanged-BQjqUDLK.js";import"./CollapsiblePanel-B2Uq3N6C.js";import"./MultiColumnSortDialog-CAMtj-Rk.js";import"./MenuTrigger-D31LluJF.js";import"./CompositeItem-DBfMuqlH.js";import"./ToolbarRootContext-DxevvPzB.js";import"./getDisabledMountTransitionStyles-CValGxLT.js";import"./getPseudoElementBounds-CVMAeFzS.js";import"./chevron-down-CONoZixg.js";import"./index-Cg3apMKp.js";import"./error-BqCEo41c.js";import"./BaseCbacBanner-CO2Q_1Sj.js";import"./makeExternalStore-D6RKhZ7b.js";import"./Tooltip-D9E02NM2.js";import"./PopoverPopup-DJ-rXVm_.js";import"./debounce-CI_OgJjm.js";import"./useOsdkClient-5BRGAn8B.js";import"./tick-C-umiLKj.js";import"./DropdownField--_A00rJM.js";import"./isEqual-Da2lfOp4.js";import"./withOsdkMetrics-B6N8SPwA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

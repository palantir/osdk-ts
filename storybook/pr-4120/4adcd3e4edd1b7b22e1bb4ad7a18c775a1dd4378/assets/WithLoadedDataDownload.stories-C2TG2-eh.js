import{f as b,j as a,r as i}from"./iframe-BiMzIlPJ.js";import{O as u}from"./object-table-CCv-_1_a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-dV0TeC0E.js";import"./Table-C1EvDWHO.js";import"./index-Dl3SZpx3.js";import"./Dialog-CUY8EJE8.js";import"./cross-BJNvpKNm.js";import"./svgIconContainer-CxWabZX-.js";import"./useBaseUiId-W_-oecTL.js";import"./InternalBackdrop-DhhF01_H.js";import"./composite-NMWOeRk3.js";import"./index-BipBLK98.js";import"./index-e-n3pUpE.js";import"./index-BOxfm3do.js";import"./useEventCallback-BZOG7Hba.js";import"./SkeletonBar-GDzcd7dh.js";import"./LoadingCell-Yb7MOHBb.js";import"./ColumnConfigDialog-BFHt28b8.js";import"./DraggableList-BzHFuVjE.js";import"./search-BuVLYo6z.js";import"./Input-Cn6g7mcN.js";import"./useControlled-545e9KB7.js";import"./Button-CQ2rKaZE.js";import"./small-cross-CcTfhdj4.js";import"./ActionButton-DphoRnh0.js";import"./Checkbox-BUA4g2ik.js";import"./useValueChanged-BmyiQTkB.js";import"./CollapsiblePanel-vr5w6FoC.js";import"./MultiColumnSortDialog-guC005qZ.js";import"./MenuTrigger-CoiXwjez.js";import"./CompositeItem-DZTQE9oi.js";import"./ToolbarRootContext-DLbFMlLJ.js";import"./getDisabledMountTransitionStyles-Co21QCNW.js";import"./getPseudoElementBounds-C_80eEsV.js";import"./chevron-down-Dj5P_Z4N.js";import"./index-Du_9BUOk.js";import"./error-BvyeXfc5.js";import"./BaseCbacBanner-BpqxrdVV.js";import"./makeExternalStore-C_oT62wU.js";import"./Tooltip-DCHj2uG-.js";import"./PopoverPopup-BAf_TSo2.js";import"./debounce-BQsIlRkA.js";import"./useOsdkClient-Il2EhGQ7.js";import"./tick-Dv1m_Fkz.js";import"./DropdownField-CfGoTJuL.js";import"./isEqual-CScgGPRW.js";import"./withOsdkMetrics-D6MPIy_f.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DW6PMPsi.js";import{O as u}from"./object-table-CuzsmF62.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BlWs9PqI.js";import"./Table-BByxpaH0.js";import"./index-D66c38lk.js";import"./Dialog-Me0GuI6a.js";import"./cross-DYQhBJHJ.js";import"./svgIconContainer-DIp-XZwm.js";import"./useBaseUiId-Ddck3Zgv.js";import"./InternalBackdrop-X_yjMxAR.js";import"./composite-n7_MOsSq.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./index-CNbWk23J.js";import"./useEventCallback-BUhR7Jsv.js";import"./SkeletonBar-Crz7mTXk.js";import"./LoadingCell-CgDvg7J2.js";import"./ColumnConfigDialog-CXFK6dt3.js";import"./DraggableList-BxMk7E0p.js";import"./search-C1KQWKmH.js";import"./Input-CpyRhfdw.js";import"./useControlled-DHdXh0yp.js";import"./Button-B-NFgFRe.js";import"./small-cross-DYlbnTj3.js";import"./ActionButton-DAhZ0C2F.js";import"./Checkbox-DA8koocQ.js";import"./useValueChanged-Cw-uGmYM.js";import"./CollapsiblePanel-DhvG3pSs.js";import"./MultiColumnSortDialog-CjC7-HbZ.js";import"./MenuTrigger-BbUKjLJu.js";import"./CompositeItem-Cs1O47Aq.js";import"./ToolbarRootContext-097dpJrh.js";import"./getDisabledMountTransitionStyles-BvAhgIN_.js";import"./getPseudoElementBounds-CkD-GcmM.js";import"./chevron-down-DJEtRyIF.js";import"./index-cpYh8GYP.js";import"./error-DYDpYg5Z.js";import"./BaseCbacBanner-CVurcWY3.js";import"./makeExternalStore-D3FsvLmH.js";import"./Tooltip-D6WhT4El.js";import"./PopoverPopup-jZqoMExH.js";import"./debounce-DNGh4uNI.js";import"./useOsdkClient-DKTAeEoU.js";import"./tick-Dfo8VcHX.js";import"./DropdownField-BD6s7Nxw.js";import"./isEqual-rVE2ttD2.js";import"./withOsdkMetrics-M_tvK9si.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

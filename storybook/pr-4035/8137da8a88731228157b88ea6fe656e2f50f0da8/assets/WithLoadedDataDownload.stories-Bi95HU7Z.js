import{f as b,j as a,r as i}from"./iframe-xdaTYGRj.js";import{O as u}from"./object-table-CXau66t4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DZUDwwCn.js";import"./Table-DQJKa7S1.js";import"./index-BdPDvpnl.js";import"./Dialog-Dusk4zGf.js";import"./cross-CSoA2ZQa.js";import"./svgIconContainer-exvQzp4T.js";import"./useBaseUiId-CxUh_Q__.js";import"./InternalBackdrop-POEzz6gH.js";import"./composite-BBMq-zQx.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./index-BvtF8lSO.js";import"./useEventCallback-BzvhssYV.js";import"./SkeletonBar-B8t_W87W.js";import"./LoadingCell-C1DmdKaJ.js";import"./ColumnConfigDialog-OpKrZQ53.js";import"./DraggableList-ZBGvnIzB.js";import"./search-Ba1wUlyN.js";import"./Input-CVYxdw6a.js";import"./useControlled-BvC-sVWY.js";import"./Button-DhIcXnSN.js";import"./small-cross-BW9BpdHj.js";import"./ActionButton-asvmdyUj.js";import"./Checkbox-BcViMRef.js";import"./useValueChanged-Ch5z-mkh.js";import"./CollapsiblePanel-ClYrkXoI.js";import"./MultiColumnSortDialog-DhoBGIBc.js";import"./MenuTrigger-C_lNo9IA.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./getDisabledMountTransitionStyles-B16LXGKh.js";import"./getPseudoElementBounds-Dy-Bisec.js";import"./chevron-down-aagd7exO.js";import"./index-CUVjcwyy.js";import"./error-CApwHpph.js";import"./BaseCbacBanner-CceQ-h3H.js";import"./makeExternalStore-DYC4j6Cy.js";import"./Tooltip-CW0n3yWY.js";import"./PopoverPopup-BKjDaV96.js";import"./debounce-DBf5uZYv.js";import"./useOsdkClient-CrpVNgyy.js";import"./tick-C88F2OoG.js";import"./DropdownField-C6ZSBKPJ.js";import"./isEqual-DJka3NIw.js";import"./withOsdkMetrics-D5YFfTwH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

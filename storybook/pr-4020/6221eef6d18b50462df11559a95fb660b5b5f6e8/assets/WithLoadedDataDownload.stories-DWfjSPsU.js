import{f as b,j as a,r as i}from"./iframe-CdsRGRZD.js";import{O as u}from"./object-table-CeOE5Mdz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CGHORiIs.js";import"./Table-C_N_Eckt.js";import"./index-Fk1WgWoL.js";import"./Dialog-DuuLYCJ_.js";import"./cross-DAi95Y0X.js";import"./svgIconContainer-Cxkf-wd_.js";import"./useBaseUiId-DiEHO-EU.js";import"./InternalBackdrop-c4kOEo_j.js";import"./composite-DyS-Ch2i.js";import"./index-BbC0pNoY.js";import"./index-Pe1K3mB3.js";import"./index-CfhQ_HhS.js";import"./useEventCallback-DbOnN22T.js";import"./SkeletonBar-Dldmu3tt.js";import"./LoadingCell-COUXzJd2.js";import"./ColumnConfigDialog-CBifeMKK.js";import"./DraggableList-DhJLvr1S.js";import"./search-B-mt-Fpc.js";import"./Input-BrPBFCOf.js";import"./useControlled-CXpC8eD9.js";import"./Button-CMyVgQSr.js";import"./small-cross-DD2bSDX4.js";import"./ActionButton-B-ECTkAX.js";import"./Checkbox-9ZfJtWE0.js";import"./useValueChanged-hFU-JeNn.js";import"./CollapsiblePanel-BCipB-WW.js";import"./MultiColumnSortDialog-CpORbkLb.js";import"./MenuTrigger-BFayFRUa.js";import"./CompositeItem-CNBfRrGp.js";import"./ToolbarRootContext-DYboyT6t.js";import"./getDisabledMountTransitionStyles-DXjYuHQ4.js";import"./getPseudoElementBounds-Cg-geDk4.js";import"./chevron-down-C7u5o2RL.js";import"./index-C2Mhw8zH.js";import"./error-D2kK2TGa.js";import"./BaseCbacBanner-PXIb0wXt.js";import"./makeExternalStore-8ZflOwQq.js";import"./Tooltip-CHHDt5TJ.js";import"./PopoverPopup-CExD3oNB.js";import"./debounce-C26q8tZz.js";import"./useOsdkClient-B3rsIMmP.js";import"./tick-slqArv83.js";import"./DropdownField-C2AO5vc6.js";import"./isEqual-B5I4IGDV.js";import"./withOsdkMetrics-DzKI7pdO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

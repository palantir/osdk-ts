import{f as b,j as a,r as i}from"./iframe-BrPzj4JS.js";import{O as u}from"./object-table-D-tXuRGI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs48bxEq.js";import"./Table-Des2dqW8.js";import"./index-KRJwl6lJ.js";import"./Dialog-l3yQuk3n.js";import"./cross-BTKNx0tq.js";import"./svgIconContainer-Dpfdk41P.js";import"./useBaseUiId-C1IVEUu0.js";import"./InternalBackdrop-tN6qROS8.js";import"./composite-c1IVu92X.js";import"./index-CnJmd38Y.js";import"./index-Bd7k9Zqu.js";import"./index-C4o_Wtik.js";import"./useEventCallback-BiiJkovA.js";import"./SkeletonBar-CDOqISR0.js";import"./LoadingCell-DNl1AQse.js";import"./ColumnConfigDialog-atUfa3hO.js";import"./DraggableList-DQ0bymxX.js";import"./search-C96msPus.js";import"./Input-Bq7aAMSS.js";import"./useControlled-81B9KEVs.js";import"./Button-CG6gF7Jm.js";import"./small-cross-DE1FAV0m.js";import"./ActionButton-Bu4etPS3.js";import"./Checkbox-CDYuSOg2.js";import"./useValueChanged-BZ11tiTL.js";import"./CollapsiblePanel-Btn3Un6F.js";import"./MultiColumnSortDialog-Cs2tXU2t.js";import"./MenuTrigger-CF-nDXfz.js";import"./CompositeItem-BHoTN6nd.js";import"./ToolbarRootContext-B9kw_RNO.js";import"./getDisabledMountTransitionStyles-CtDZ2CZ5.js";import"./getPseudoElementBounds-BChkVo7v.js";import"./chevron-down-Cg8-4eUy.js";import"./index-DQ5gmqne.js";import"./error-C68wTVTT.js";import"./BaseCbacBanner-DzKNMe1H.js";import"./makeExternalStore-BoSV2dxm.js";import"./Tooltip-Bzba47c8.js";import"./PopoverPopup-Bn8KVduJ.js";import"./toNumber-Bf-7vlIM.js";import"./useOsdkClient-DN4Y6ynv.js";import"./tick-CqydA0sl.js";import"./DropdownField-Dz7_Wt_N.js";import"./withOsdkMetrics-Ym8zEuUE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

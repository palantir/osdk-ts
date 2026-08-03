import{f as b,j as a,r as i}from"./iframe-NH2TPfrt.js";import{O as u}from"./object-table-BK__0nSS.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DnfD210b.js";import"./Table-CuUO-8wd.js";import"./index-Dq4weQoF.js";import"./Dialog-BJy3217O.js";import"./cross-24tcUSkS.js";import"./svgIconContainer-BUKRs426.js";import"./useBaseUiId-4nRGSpr1.js";import"./InternalBackdrop-CyExLgCb.js";import"./composite-C2uwlMq3.js";import"./index-UEOUqQcW.js";import"./index-Cj-ZNFWv.js";import"./index-DK-HFNdc.js";import"./useEventCallback-BAyGh-mM.js";import"./SkeletonBar-D5-VroV9.js";import"./LoadingCell-Cd_w0Tes.js";import"./ColumnConfigDialog-DQUyct1S.js";import"./DraggableList-Bf5ssxLW.js";import"./search-3tww_Y-8.js";import"./Input-A00tbVb5.js";import"./useControlled-BF8AHFxI.js";import"./isEqual-0xRPSbep.js";import"./isObject-sRh_S4J1.js";import"./Button-BHf--f-c.js";import"./ActionButton-CaZsvwmy.js";import"./Checkbox-BsgnUcK_.js";import"./useValueChanged-Bu7iX5lg.js";import"./CollapsiblePanel-B45AwlAl.js";import"./MultiColumnSortDialog-NEhtrgyd.js";import"./MenuTrigger-1I8zp5W3.js";import"./CompositeItem-CVj27Z6H.js";import"./ToolbarRootContext-Pl3qLOs4.js";import"./getDisabledMountTransitionStyles-DxJl6O0G.js";import"./getPseudoElementBounds-gWx4w7cR.js";import"./chevron-down-BOaz_Rvj.js";import"./index-Ciy6Wj_i.js";import"./error-B94IGPmw.js";import"./BaseCbacBanner-BxJG3-8s.js";import"./makeExternalStore-CwBhR2PL.js";import"./Tooltip-DOM36q_X.js";import"./PopoverPopup-CONheFa9.js";import"./toNumber-Bw3pxWk0.js";import"./useOsdkClient-CH4mFKyg.js";import"./tick-Dzh3Ithd.js";import"./DropdownField-DEpsAiDX.js";import"./withOsdkMetrics-DL-MS1V5.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

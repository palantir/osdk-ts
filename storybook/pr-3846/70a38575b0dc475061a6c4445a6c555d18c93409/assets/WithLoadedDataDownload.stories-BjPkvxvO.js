import{f as b,j as a,r as i}from"./iframe-gVAmUTQg.js";import{O as u}from"./object-table-D9jtfPUd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-3Sf5Feu3.js";import"./Table-Bn8VFvlv.js";import"./index-BeeoVX-q.js";import"./Dialog-BPW7Fnqp.js";import"./cross-jlTg3KlE.js";import"./svgIconContainer-B4Z8Cc9p.js";import"./useBaseUiId-CHWfe0kM.js";import"./InternalBackdrop-MQIEsE87.js";import"./composite-DuUe5pNY.js";import"./index-J26Dm_pE.js";import"./index-G-6YzhfM.js";import"./index-ZTHZOD5S.js";import"./useEventCallback-BGxuyWEQ.js";import"./SkeletonBar-Dr7WQbwR.js";import"./LoadingCell-DXD9SzMl.js";import"./ColumnConfigDialog-BsHyb-5Z.js";import"./DraggableList-CAsDI2FA.js";import"./search-BaBEiFT5.js";import"./Input-BkbQvjPR.js";import"./useControlled-CdRGPDPf.js";import"./isEqual-UcadrFyw.js";import"./isObject-BiW_nSk5.js";import"./Button-Dr-T1AFV.js";import"./ActionButton-CqliKloO.js";import"./Checkbox-D2PC0jxt.js";import"./useValueChanged-ByAqqMPO.js";import"./CollapsiblePanel-wCqvJGO2.js";import"./MultiColumnSortDialog-BN0XCeIQ.js";import"./MenuTrigger-CKbR4gwr.js";import"./CompositeItem-ieCqGqC2.js";import"./ToolbarRootContext-ByYznoe0.js";import"./getDisabledMountTransitionStyles-BQxyBjfI.js";import"./getPseudoElementBounds-Bv56xCKO.js";import"./chevron-down-C1g0o6pf.js";import"./index-CR2aVeKh.js";import"./error-tp1IHQ0n.js";import"./BaseCbacBanner-ATQ7faMG.js";import"./makeExternalStore-DdyFijLM.js";import"./Tooltip-BPUhfpna.js";import"./PopoverPopup-CaEv5Luc.js";import"./toNumber-kAKe2Owq.js";import"./useOsdkClient-CD_W310F.js";import"./tick-5ftwsX0l.js";import"./DropdownField-DzuaA_EY.js";import"./withOsdkMetrics-F5cMDIFA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

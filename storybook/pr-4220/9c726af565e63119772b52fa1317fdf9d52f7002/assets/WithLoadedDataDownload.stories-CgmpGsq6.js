import{f as b,j as a,r as i}from"./iframe-C35uGTor.js";import{O as u}from"./object-table-BMvG9R9k.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-F3EFc52l.js";import"./Table-SEATd5pV.js";import"./index-Dc24XYXq.js";import"./Dialog-Dq6arkge.js";import"./cross-C0_UaP8E.js";import"./svgIconContainer-BAWtvYDY.js";import"./useBaseUiId-D-k3osuz.js";import"./InternalBackdrop-Bs1cpNOT.js";import"./composite-C_6udYfh.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./index-Ca4jpz09.js";import"./useEventCallback-Cf-0ooWK.js";import"./SkeletonBar-CPo4uDcQ.js";import"./LoadingCell-Cnax0wEX.js";import"./ColumnConfigDialog-BP1UEYm7.js";import"./DraggableList-Dr_uKQUn.js";import"./search-Omk4RfaQ.js";import"./Input-CtTyrSxh.js";import"./useControlled-jxUnEnFw.js";import"./Button-BAtng8PD.js";import"./small-cross-93J9MDZj.js";import"./ActionButton-DHb-zf9N.js";import"./Checkbox-v-LG2738.js";import"./useValueChanged-Cx6EL_oM.js";import"./CollapsiblePanel-sHrc_PW6.js";import"./MultiColumnSortDialog-vnZWR3AB.js";import"./MenuTrigger-9YjlyO6G.js";import"./CompositeItem-Cst7sX19.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./getDisabledMountTransitionStyles-Cd_D1FIL.js";import"./getPseudoElementBounds-BSTYbltd.js";import"./chevron-down-CyTbMtgy.js";import"./index-CQ0b7fbb.js";import"./error-BP_tygeo.js";import"./BaseCbacBanner-CN7_0G8f.js";import"./makeExternalStore-ROa8cnCZ.js";import"./Tooltip-cI_3eo19.js";import"./PopoverPopup-BOg0baOJ.js";import"./debounce-Csr1B-r9.js";import"./useOsdkClient-DCbEGB5n.js";import"./tick-CP39Td_J.js";import"./DropdownField-DItTqqK3.js";import"./isEqual-BmCMSC_D.js";import"./withOsdkMetrics-BEBYlr-F.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

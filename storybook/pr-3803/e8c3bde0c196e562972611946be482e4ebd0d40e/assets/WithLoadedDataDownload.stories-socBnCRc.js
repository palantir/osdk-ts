import{f as b,j as a,r as i}from"./iframe-B4bpzrvR.js";import{O as u}from"./object-table-BVvsWR2G.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ygR31QqW.js";import"./Table-CjzDjeDQ.js";import"./index-BsbymTi9.js";import"./Dialog-ChKLN39C.js";import"./cross-n7An2nll.js";import"./svgIconContainer-_zfJv1vm.js";import"./useBaseUiId-DQnro2m8.js";import"./InternalBackdrop-kI4blW8q.js";import"./composite-CWXRwiuA.js";import"./index-sIpWfZRY.js";import"./index-BCiKLWSQ.js";import"./index-OGlUltzw.js";import"./useEventCallback-Qs8lz6jg.js";import"./SkeletonBar-96pcsO9R.js";import"./LoadingCell-B0dGcpUe.js";import"./ColumnConfigDialog-i8-Tjv7R.js";import"./DraggableList-BSdUre9g.js";import"./search-Cyz40xHr.js";import"./Input-ruAaTYrP.js";import"./useControlled-c3mF7Crf.js";import"./isEqual-FyxATBS-.js";import"./isObject-B3oaV668.js";import"./Button-CsATp9gq.js";import"./ActionButton-BZfgIiZS.js";import"./Checkbox-3BCsJkkb.js";import"./useValueChanged-B4Q2Bujm.js";import"./CollapsiblePanel-GhnpHLbS.js";import"./MultiColumnSortDialog-SWAflGub.js";import"./MenuTrigger-Db98uiN-.js";import"./CompositeItem-CBqdXCF4.js";import"./ToolbarRootContext-BdeRPzt2.js";import"./getDisabledMountTransitionStyles-BnPQ5JOv.js";import"./getPseudoElementBounds-BXLfPEf2.js";import"./chevron-down-BzusAapG.js";import"./index-CurRzgfb.js";import"./error-CD3Qxrj1.js";import"./BaseCbacBanner-B3ZHEXJ1.js";import"./makeExternalStore-qWLMmryU.js";import"./Tooltip-CFElPJb6.js";import"./PopoverPopup-C7HXd2s5.js";import"./toNumber-CmfNCgBV.js";import"./useOsdkClient-DshaS5p6.js";import"./tick-BPDBLuOM.js";import"./DropdownField-DLROjcIJ.js";import"./withOsdkMetrics-srCrwIqC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

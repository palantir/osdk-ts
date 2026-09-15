import{f as b,j as a,r as i}from"./iframe-nH92Qb6I.js";import{O as u}from"./object-table-Cn307sAw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DVpIcuXN.js";import"./Table-CsP27jwx.js";import"./index-wUFT2bRw.js";import"./Dialog-BNhXnAKa.js";import"./cross-HApDVAUs.js";import"./svgIconContainer-CCtPkDCx.js";import"./useBaseUiId-Dbvfrb6U.js";import"./InternalBackdrop-CHH-xVa7.js";import"./composite-B2ptXcYf.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./index-CPIitDS-.js";import"./useEventCallback-Pw8NUu2g.js";import"./SkeletonBar-Bynzqc4g.js";import"./LoadingCell-BARv7fv5.js";import"./ColumnConfigDialog-B96lYMgM.js";import"./DraggableList-MQ6bmFCg.js";import"./search-D5Opa-iA.js";import"./Input-DzMyb8hK.js";import"./useControlled-B8icxwdl.js";import"./Button-w7xoCEq9.js";import"./small-cross-BSOPXnkj.js";import"./ActionButton-DoSazfb4.js";import"./Checkbox-DaAcI3Qo.js";import"./useValueChanged-DlL26KZ1.js";import"./CollapsiblePanel-CapZ9VU7.js";import"./MultiColumnSortDialog-BWMO_1Qm.js";import"./MenuTrigger-DO3ORZXC.js";import"./CompositeItem-BF333Zgu.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./getDisabledMountTransitionStyles-BhkjVSc5.js";import"./getPseudoElementBounds-fd5QWVwB.js";import"./chevron-down-CBmuqb-m.js";import"./index-DgFSfdtE.js";import"./error-BXUm0BgQ.js";import"./BaseCbacBanner-t3zs4vsg.js";import"./makeExternalStore-CLbnsWAa.js";import"./Tooltip-DSvaFKNo.js";import"./PopoverPopup-Cu27jEST.js";import"./debounce-By_2G3GA.js";import"./useOsdkClient-CgXm7UOo.js";import"./tick-oJtSbIPn.js";import"./DropdownField-n4Cp-XVI.js";import"./isEqual-DJbuM-Nd.js";import"./withOsdkMetrics-Cz8MJ3YO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

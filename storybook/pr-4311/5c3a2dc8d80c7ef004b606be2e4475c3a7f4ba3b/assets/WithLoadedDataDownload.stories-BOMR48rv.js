import{f as b,j as a,r as i}from"./iframe-Biji2bf1.js";import{O as u}from"./object-table-DUZsbd2A.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BnQD_pUs.js";import"./Table-CpIpVsLD.js";import"./index-DfdB1ttn.js";import"./Dialog-B73FG_lW.js";import"./cross-DgO8Y3SG.js";import"./svgIconContainer-CtuHzH_7.js";import"./useBaseUiId-D8agI47X.js";import"./InternalBackdrop-Cur7vZgT.js";import"./composite-DTVuKyBl.js";import"./index-BcRJjTzj.js";import"./index-BBv7G2Gz.js";import"./index-DuyzOau4.js";import"./useEventCallback-BuGz6aEK.js";import"./SkeletonBar-prYHuNvB.js";import"./LoadingCell-BMxleUkf.js";import"./ColumnConfigDialog-BrIv1Rnf.js";import"./DraggableList-CNguQZ2s.js";import"./search-CLwp4qIO.js";import"./Input-Ka8u0CD4.js";import"./useControlled-CvQogkf4.js";import"./Button-B3fK-m0j.js";import"./small-cross-BJ_whcm4.js";import"./ActionButton-D5GVqQ0r.js";import"./Checkbox-Bil92OSh.js";import"./useValueChanged-CgmTK9yE.js";import"./CollapsiblePanel-Q8df4Rvk.js";import"./MultiColumnSortDialog-exGQm7Ht.js";import"./MenuTrigger-DSyx9jXw.js";import"./CompositeItem-D3laoAWw.js";import"./ToolbarRootContext-8ykIWAUV.js";import"./getDisabledMountTransitionStyles-uiKLVkrc.js";import"./getPseudoElementBounds-CuRI4A7q.js";import"./chevron-down-xdyo5QmP.js";import"./index-CwIIM57l.js";import"./error-AacONtzC.js";import"./BaseCbacBanner-BSXqmrpj.js";import"./makeExternalStore-Wt3R0a85.js";import"./Tooltip-Gl-FzrVH.js";import"./PopoverPopup-BgQoU5Ch.js";import"./debounce-CMsRCK9t.js";import"./useOsdkClient-iyUYhFeG.js";import"./tick-B0yPEej0.js";import"./DropdownField-BMpZFA_1.js";import"./isEqual-CbbNTxgy.js";import"./withOsdkMetrics-BRBNDhHT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

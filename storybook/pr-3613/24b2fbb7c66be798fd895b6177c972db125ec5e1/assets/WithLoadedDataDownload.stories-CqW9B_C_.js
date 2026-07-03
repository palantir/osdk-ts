import{f as b,j as a,r as i}from"./iframe-CEhhBbNK.js";import{O as u}from"./object-table-D_12vcUt.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DB8ZhJc4.js";import"./Table-D0yWT9_d.js";import"./index-CHpswpiI.js";import"./Dialog-CRz5T-Er.js";import"./cross-DS2WplKF.js";import"./svgIconContainer-Dth0NKYa.js";import"./useBaseUiId-C8npskZc.js";import"./InternalBackdrop-CzrCeVN2.js";import"./composite-BNINo6Vx.js";import"./index-DyEw3VpL.js";import"./index-DJrOghPE.js";import"./index-ChsBobv4.js";import"./useEventCallback-CnghszoD.js";import"./SkeletonBar-fyTk0NE4.js";import"./LoadingCell-BtK0Ef9c.js";import"./ColumnConfigDialog-DU6e2uqV.js";import"./DraggableList-PL6W4ovw.js";import"./search-bAuDLLvk.js";import"./Input-Dpft6TUY.js";import"./useControlled-CKhigy8T.js";import"./Button-nh4VLvQJ.js";import"./small-cross-DjFNtWP5.js";import"./ActionButton-B0GCmywk.js";import"./Checkbox-B6Fzw6kt.js";import"./minus-YoEhkVMm.js";import"./tick-3sDOEa3a.js";import"./useValueChanged-Zz0zCBQp.js";import"./caret-down-BNKBe6TQ.js";import"./CollapsiblePanel-akVfJX9x.js";import"./MultiColumnSortDialog-Ds0fokYF.js";import"./MenuTrigger-C7MOeRQn.js";import"./CompositeItem-IHqXqKgR.js";import"./ToolbarRootContext--C8cIVEC.js";import"./getDisabledMountTransitionStyles-AXseg_tg.js";import"./getPseudoElementBounds-DR2LxPWu.js";import"./chevron-down-ChyVfUwq.js";import"./index-ChoFX5rI.js";import"./error-kHe-qRwn.js";import"./BaseCbacBanner-DfHd5S0f.js";import"./makeExternalStore-BVjELZXI.js";import"./Tooltip-B4ED1hIa.js";import"./PopoverPopup-VOv-406c.js";import"./toNumber-tyLdKr4P.js";import"./useOsdkClient-DkTA_2hH.js";import"./DropdownField-DozIH8b_.js";import"./withOsdkMetrics-B02PfkNJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

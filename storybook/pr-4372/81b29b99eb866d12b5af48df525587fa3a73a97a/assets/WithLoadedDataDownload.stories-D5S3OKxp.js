import{f as b,j as a,r as i}from"./iframe-FZKVnNVk.js";import{O as u}from"./object-table-loXsL1bM.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-3dwBIJCj.js";import"./Table-hKbrjj3q.js";import"./index-Dde_nhTq.js";import"./Dialog-nns0O2qZ.js";import"./cross-Dm4ybRp6.js";import"./svgIconContainer-XHaqdbDx.js";import"./useBaseUiId-CHWJmPEK.js";import"./InternalBackdrop-BqJGJ_zZ.js";import"./composite-pRARdUSn.js";import"./index-CF9ImBhb.js";import"./index-DcCADMqh.js";import"./index-CkeIfmFs.js";import"./useEventCallback-zjPLn5wF.js";import"./SkeletonBar-BGliQaQA.js";import"./LoadingCell-93UchtYC.js";import"./ColumnConfigDialog-Cu8cIVL2.js";import"./DraggableList-BGvhm88l.js";import"./search-UOw594pj.js";import"./Input-CZghJbmx.js";import"./useControlled-z91UpuYz.js";import"./Button-CYIzntRV.js";import"./small-cross-NJGDyAQR.js";import"./ActionButton-CdreXPwS.js";import"./Checkbox-BXapXcMI.js";import"./useValueChanged-C5VkOvOI.js";import"./CollapsiblePanel-CmKPWPla.js";import"./MultiColumnSortDialog-BvfowQRQ.js";import"./MenuTrigger-Cq7tkS0o.js";import"./CompositeItem-DwzK3_pD.js";import"./ToolbarRootContext-DURRKwiG.js";import"./getDisabledMountTransitionStyles-LA4j7wgS.js";import"./getPseudoElementBounds-DzPv2Lpp.js";import"./chevron-down-D0c3SzT7.js";import"./index-CO1rso4Q.js";import"./error-ClLL5bQm.js";import"./BaseCbacBanner-DnKk2Fz0.js";import"./makeExternalStore-BWIKD2My.js";import"./Tooltip-CNa5ZfhK.js";import"./isObject-DSmxuai9.js";import"./debounce-BBy5KbHR.js";import"./useOsdkClient-DZXuGuSk.js";import"./tick-BfEHlf8d.js";import"./DropdownField-D0HrafpY.js";import"./isEqual-CFjxyXGr.js";import"./_baseIsEqual-CEa3UOU3.js";import"./withOsdkMetrics-BeTzvhLK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

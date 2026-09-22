import{f as b,j as a,r as i}from"./iframe-NBWgt9Kz.js";import{O as u}from"./object-table-C3ybEDQQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-dD2tealv.js";import"./Table-BWGAnIn8.js";import"./index-CvVwqIuN.js";import"./Dialog-DjV469Rf.js";import"./cross-DT-CTOSO.js";import"./svgIconContainer-ClcvIiJ_.js";import"./useBaseUiId-CQ82DsVx.js";import"./InternalBackdrop-C_OBf41a.js";import"./composite-fJ5Lq9kI.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./index-4CUL2nMU.js";import"./useEventCallback-C2WEzDGK.js";import"./SkeletonBar-CSguwWtT.js";import"./LoadingCell-BOqjOmxe.js";import"./ColumnConfigDialog-DlaGziiJ.js";import"./DraggableList-DkXeeuCx.js";import"./search-DE3aPm_j.js";import"./Input-CslBGOUO.js";import"./useControlled-CzU7BR2U.js";import"./Button-BFGOLVaf.js";import"./small-cross-DNAO4fiY.js";import"./ActionButton-CoxL5yHI.js";import"./Checkbox-J2H29pF_.js";import"./useValueChanged-dmynfG-H.js";import"./CollapsiblePanel-UmPQakJ4.js";import"./MultiColumnSortDialog-DsVf9VY-.js";import"./MenuTrigger-CHK6t9Th.js";import"./CompositeItem-C9UmmHfT.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./getDisabledMountTransitionStyles-CFAUpb7c.js";import"./getPseudoElementBounds-Ce9dJaFF.js";import"./chevron-down-BQb3Bdcv.js";import"./index-Cog39q-i.js";import"./error-EEVYrIXI.js";import"./BaseCbacBanner-C-7olJ7B.js";import"./makeExternalStore-Db1JM_b8.js";import"./Tooltip-DcFVb-7H.js";import"./PopoverPopup-C6XCNR8l.js";import"./debounce-Daxc9dxM.js";import"./useOsdkClient-4hMfsXGF.js";import"./tick-DEzFYdsE.js";import"./DropdownField-r_qJh2io.js";import"./isEqual-XEm0HNXL.js";import"./withOsdkMetrics-P_2UpnBY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

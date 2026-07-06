import{f as b,j as a,r as i}from"./iframe-D1qwZgrw.js";import{O as u}from"./object-table-D0hox-oF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-y71pt7P7.js";import"./Table-UYujo_Sf.js";import"./index-B6BwVqaI.js";import"./Dialog-sNSiTlss.js";import"./cross-Cz-1Spna.js";import"./svgIconContainer-CXKKVeo3.js";import"./useBaseUiId-Dh6u135s.js";import"./InternalBackdrop-BGOrrUbE.js";import"./composite-BUDXSI_3.js";import"./index-Bbh0zUEq.js";import"./index-DMJ0QAck.js";import"./index-QADEbUop.js";import"./useEventCallback-BR2J7ELN.js";import"./SkeletonBar-ruJJlEAH.js";import"./LoadingCell-Bb4cWk_F.js";import"./ColumnConfigDialog-FgKXhOqx.js";import"./DraggableList-B7jGt7CK.js";import"./search-CbairpPD.js";import"./Input-C2dAsZUY.js";import"./useControlled-BpII9gYo.js";import"./Button-CAzs_x2n.js";import"./small-cross-sDP0XHk2.js";import"./ActionButton-CvsCYBkd.js";import"./Checkbox-BmhgzyjT.js";import"./useValueChanged-BtAOSrmu.js";import"./CollapsiblePanel-CRqKPIyw.js";import"./MultiColumnSortDialog-apJb0oHD.js";import"./MenuTrigger-Br0RfErh.js";import"./CompositeItem-C3OZXOGS.js";import"./ToolbarRootContext-CHgd-qRk.js";import"./getDisabledMountTransitionStyles-C34W7gIX.js";import"./getPseudoElementBounds-BwYoezgR.js";import"./chevron-down-ZKWIVMTe.js";import"./index-RkfjgeCt.js";import"./error-DdZD0Hny.js";import"./BaseCbacBanner-Bm3yTNM3.js";import"./makeExternalStore-BtFhiYDK.js";import"./Tooltip-DOrL1WrC.js";import"./PopoverPopup-F-BojOSx.js";import"./toNumber-6d-A7ZlC.js";import"./useOsdkClient-DUEpAKBi.js";import"./tick-DIX0hX5s.js";import"./DropdownField-DsCDsQyp.js";import"./withOsdkMetrics-DXqXSfKv.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

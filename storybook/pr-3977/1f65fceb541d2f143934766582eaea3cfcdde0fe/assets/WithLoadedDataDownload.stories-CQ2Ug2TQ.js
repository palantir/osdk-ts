import{f as b,j as a,r as i}from"./iframe-B9NaG1GB.js";import{O as u}from"./object-table-CFjdwvCD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-udZSqlM2.js";import"./Table-sD7nNFbd.js";import"./index-yUq6Iven.js";import"./Dialog-Dh198Xyv.js";import"./cross-BaJlm1ee.js";import"./svgIconContainer-Ch9sOYGG.js";import"./useBaseUiId-DgxXXPsW.js";import"./InternalBackdrop-C2K99UQF.js";import"./composite-B_1l4wbr.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./index-C7m4ZQHb.js";import"./useEventCallback-C-nAfNT0.js";import"./SkeletonBar-B3WZD8B_.js";import"./LoadingCell-BBqhAMOp.js";import"./ColumnConfigDialog-BlX-RA7F.js";import"./DraggableList-Dl23X7WD.js";import"./search-C7EjfmAX.js";import"./Input-BjAUxC1s.js";import"./useControlled-CxdGo8Ww.js";import"./Button-D3MlS94Q.js";import"./small-cross-DoygMeI4.js";import"./ActionButton-D6kiLQVM.js";import"./Checkbox-D3SSwq1g.js";import"./useValueChanged-C_9cZZ-H.js";import"./CollapsiblePanel-CwGD0sZF.js";import"./MultiColumnSortDialog-BFYe3cLr.js";import"./MenuTrigger-yzH0xIvu.js";import"./CompositeItem-D9-3_2mb.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./getDisabledMountTransitionStyles-B67W8wHq.js";import"./getPseudoElementBounds-EQT2lv3A.js";import"./chevron-down-CsyXd9Xe.js";import"./index-bgsc7zUx.js";import"./error-BcUNHOKh.js";import"./BaseCbacBanner-WR0woElR.js";import"./makeExternalStore-Ct-9sVSe.js";import"./Tooltip-DuqyUHxp.js";import"./PopoverPopup-BR9ZiCCw.js";import"./debounce-CI4bJKTw.js";import"./useOsdkClient-B2RCpAbM.js";import"./tick-CPo9xZcx.js";import"./DropdownField-DqeXn4qa.js";import"./isEqual-prfPAvtl.js";import"./withOsdkMetrics-1M7RvxJT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

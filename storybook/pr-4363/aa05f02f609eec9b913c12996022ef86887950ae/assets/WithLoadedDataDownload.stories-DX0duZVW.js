import{f as b,j as a,r as i}from"./iframe-DOoViGQC.js";import{O as u}from"./object-table-fsv2meK0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D6M-lWMp.js";import"./Table-XlWncKwC.js";import"./index-x4gpFwBp.js";import"./Dialog-BUVOhGz-.js";import"./cross-BAqH0G--.js";import"./svgIconContainer-DDehFQ37.js";import"./useBaseUiId-CEA0ov3F.js";import"./InternalBackdrop-Cvfzz2Gg.js";import"./composite-DG_OLYDF.js";import"./index-uZqGKRzq.js";import"./index-C5WAn5Dx.js";import"./index-oSIBYKmR.js";import"./useEventCallback-2cQhO8Od.js";import"./SkeletonBar-yxb5jjnx.js";import"./LoadingCell-B8vGHO6K.js";import"./ColumnConfigDialog-DOx981jG.js";import"./DraggableList-uTc7RtXZ.js";import"./search-BtSuJQ9M.js";import"./Input-Bq0XAGaR.js";import"./useControlled-DyFvS3eo.js";import"./Button-DnpTR9kP.js";import"./small-cross-CkiB4kAk.js";import"./ActionButton-CT-L5CB7.js";import"./Checkbox-Dk0n7HNT.js";import"./useValueChanged-sHXiC0u3.js";import"./CollapsiblePanel--B4cqlmx.js";import"./MultiColumnSortDialog-C3caRr3a.js";import"./MenuTrigger-DB0T_UbP.js";import"./CompositeItem-C-YvkCMY.js";import"./ToolbarRootContext-BICNcApQ.js";import"./getDisabledMountTransitionStyles-FChDzxHp.js";import"./getPseudoElementBounds-CCgIuocG.js";import"./chevron-down-BssNm1rB.js";import"./index-v0gYgaE5.js";import"./error-CMiAPzhy.js";import"./BaseCbacBanner-Bxst7se4.js";import"./makeExternalStore-_9NPeB4S.js";import"./Tooltip-Ct-G7N11.js";import"./isObject-B3qfbi9s.js";import"./debounce-DshVKYBV.js";import"./useOsdkClient-BvJQMhJJ.js";import"./tick-BcBfo_Ik.js";import"./DropdownField-CW8S6woh.js";import"./isEqual-D0Vlcsqm.js";import"./_baseIsEqual-BXzcdte9.js";import"./withOsdkMetrics-DkYGNx1N.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

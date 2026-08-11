import{f as b,j as a,r as i}from"./iframe-QSknsibA.js";import{O as u}from"./object-table-DLsBAGD5.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3LrgdxU.js";import"./Table-BsAnMen_.js";import"./index-B_OK08DX.js";import"./Dialog-B_zFcXLg.js";import"./cross-mnCq1uQ2.js";import"./svgIconContainer-De7GUSo3.js";import"./useBaseUiId-56xqlUOA.js";import"./InternalBackdrop-DLNy9f8e.js";import"./composite-rTqajcpw.js";import"./index-Cf49gatU.js";import"./index-DchscfH7.js";import"./index-CsRUh4p0.js";import"./useEventCallback-BNFo9jqT.js";import"./SkeletonBar-U8s5a4eZ.js";import"./LoadingCell-CFl1Ne9K.js";import"./ColumnConfigDialog-DToErAYq.js";import"./DraggableList-BduB1LxV.js";import"./search-D5SBe6yO.js";import"./Input-DSWKb0xV.js";import"./useControlled-DGsWq6rv.js";import"./isEqual-DOlanfjM.js";import"./isObject-KrdndNs4.js";import"./Button-Bl3RvClX.js";import"./ActionButton-CK5g_2j-.js";import"./Checkbox-ByXXs2vR.js";import"./useValueChanged-Cc7DEmXa.js";import"./CollapsiblePanel-D10wD81P.js";import"./MultiColumnSortDialog-BWQjojtp.js";import"./MenuTrigger-madZLcXv.js";import"./CompositeItem-DQqMAMfP.js";import"./ToolbarRootContext-D15HbZ6L.js";import"./getDisabledMountTransitionStyles-DLDAhr3d.js";import"./getPseudoElementBounds-CO-qv3XB.js";import"./chevron-down-CmOKY8Hu.js";import"./index-DRj4Fndf.js";import"./error-C_PHjA_A.js";import"./BaseCbacBanner-B7GtJmuI.js";import"./makeExternalStore-ClhVK885.js";import"./Tooltip-C03NNvk7.js";import"./PopoverPopup-DR9rKf_2.js";import"./toNumber-D_d6GRXM.js";import"./useOsdkClient-CDT1l2-s.js";import"./tick-CXORmvZn.js";import"./DropdownField-aW2MkhBu.js";import"./withOsdkMetrics-CLccy0f7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-DP3WXvf2.js";import{O as u}from"./object-table-CmVY_AZz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BrwfpXMJ.js";import"./Table-BZMJkkfP.js";import"./index-tWkBFRv4.js";import"./Dialog-Bn0xrUiW.js";import"./cross-D7VOxDSd.js";import"./svgIconContainer-D5YO1S9t.js";import"./useBaseUiId-BOLy-sbk.js";import"./InternalBackdrop-kfOS6-6n.js";import"./composite-Bs_HXNR1.js";import"./index-4F4S8ihM.js";import"./index-dP7GtPgB.js";import"./index-D0i847yp.js";import"./useEventCallback-4WPVou47.js";import"./SkeletonBar-CQxkz69G.js";import"./LoadingCell-gmzsNyZZ.js";import"./ColumnConfigDialog-0wgW781K.js";import"./DraggableList-B5-sdrQx.js";import"./search-COU45aDA.js";import"./Input-C7i9bi6Y.js";import"./useControlled-DXyaPIDf.js";import"./isEqual-CxjDM9uY.js";import"./isObject-PPvT23lN.js";import"./Button-BlADiT-L.js";import"./ActionButton-CMlhPEAt.js";import"./Checkbox-BwX4PU9M.js";import"./useValueChanged-DQRuCOWP.js";import"./CollapsiblePanel-CPiAZkOy.js";import"./MultiColumnSortDialog-BQR6klSA.js";import"./MenuTrigger-B7KN4Klu.js";import"./CompositeItem-CAMOw487.js";import"./ToolbarRootContext-DomAOERZ.js";import"./getDisabledMountTransitionStyles-WVqhRiar.js";import"./getPseudoElementBounds-DyIib3FW.js";import"./chevron-down-DveMJf_3.js";import"./index-D_FYBlgp.js";import"./error-DEAaKdsx.js";import"./BaseCbacBanner-DHuOvfxS.js";import"./makeExternalStore-DqGepTDF.js";import"./Tooltip-CeGAKU6r.js";import"./PopoverPopup-BbWQWTj8.js";import"./toNumber-DgM7wa7_.js";import"./useOsdkClient-DHaYNoSF.js";import"./tick-CedZqE1V.js";import"./DropdownField-DLcwvT9B.js";import"./withOsdkMetrics-D03opsaL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

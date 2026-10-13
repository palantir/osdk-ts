import{f as b,j as a,r as i}from"./iframe-DyxaUq2K.js";import{O as u}from"./object-table-Cab-U-nF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-RXXcFWVp.js";import"./Table-CVgNjPUz.js";import"./index-04K8kL6p.js";import"./Dialog-C_c6hTP2.js";import"./cross-DlOxrMTv.js";import"./svgIconContainer-Dx_A2X3i.js";import"./useBaseUiId-B2pmxP6_.js";import"./InternalBackdrop-BBHbL8SK.js";import"./composite-DNSc_3T9.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./index-DKo2aq1I.js";import"./useEventCallback-D4ZMCqPC.js";import"./SkeletonBar-Bqj4hPxh.js";import"./LoadingCell-CM1lsDQT.js";import"./ColumnConfigDialog-DtG0KRgU.js";import"./DraggableList-BxvnMcL6.js";import"./search-Dqp-f9oD.js";import"./Input-Ci8-51zi.js";import"./useControlled--GslnpxD.js";import"./Button-BJP0lB5I.js";import"./small-cross-DdubBf-L.js";import"./ActionButton-Dzu9roh2.js";import"./Checkbox-KnYOSa4F.js";import"./useValueChanged-vKl7h4vt.js";import"./CollapsiblePanel-BQrErOfm.js";import"./MultiColumnSortDialog-nacG3IFt.js";import"./MenuTrigger-BxwW9Xk8.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./getDisabledMountTransitionStyles-CKsY1twY.js";import"./getPseudoElementBounds-BmT1xLZA.js";import"./chevron-down-DiWP7BJ0.js";import"./index-CRzwoc2n.js";import"./error-BkdYgUyU.js";import"./BaseCbacBanner-BIlh-9tP.js";import"./makeExternalStore-DcK2tIHU.js";import"./Tooltip--dIkHBOm.js";import"./PopoverPopup-DXEKH04o.js";import"./debounce-Dhv4Wot5.js";import"./useOsdkClient-NthVmhh7.js";import"./tick-BSn6tzcY.js";import"./DropdownField-7FFksTTF.js";import"./isEqual-DqocYguF.js";import"./withOsdkMetrics-ac55KtkN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

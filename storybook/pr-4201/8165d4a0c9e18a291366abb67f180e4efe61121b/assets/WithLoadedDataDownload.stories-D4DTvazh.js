import{f as b,j as a,r as i}from"./iframe-BpL6s-zg.js";import{O as u}from"./object-table-CeM1EyR8.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-uTT7htns.js";import"./Table-CPLk5KIo.js";import"./index-6LlZ2BiN.js";import"./Dialog-BnqqV4Xt.js";import"./cross-B7Srqs_a.js";import"./svgIconContainer-9i-2F4mS.js";import"./useBaseUiId-1PhUK91a.js";import"./InternalBackdrop-D528jJZb.js";import"./composite-CCy_hQsH.js";import"./index-BQedclYz.js";import"./index-D0tUKd5l.js";import"./index-DZewdgmc.js";import"./useEventCallback-ByzE1gWY.js";import"./SkeletonBar-CxTajJtW.js";import"./LoadingCell-tgtZraSR.js";import"./ColumnConfigDialog-CnTCoQBV.js";import"./DraggableList-Dj9KUGrg.js";import"./search-RLZBnffN.js";import"./Input-CLHBBGaB.js";import"./useControlled-CkduZeJ8.js";import"./Button-D6y5uRFv.js";import"./small-cross-DGh8lQQj.js";import"./ActionButton-B-kPuu4e.js";import"./Checkbox-7-uF9yyr.js";import"./useValueChanged-DcvOcb0S.js";import"./CollapsiblePanel-BjVwkesV.js";import"./MultiColumnSortDialog-COTOGiLX.js";import"./MenuTrigger-2wNjABP5.js";import"./CompositeItem-Dr9l_3tm.js";import"./ToolbarRootContext-DExmINYo.js";import"./getDisabledMountTransitionStyles-BUZvxxVE.js";import"./getPseudoElementBounds-dW4anVUY.js";import"./chevron-down-CE2IRiE6.js";import"./index-DW6U2psz.js";import"./error-DthClOU-.js";import"./BaseCbacBanner-Bu34vBfd.js";import"./makeExternalStore-CYzPQh_a.js";import"./Tooltip-NF3ObYaS.js";import"./PopoverPopup-CfyCkjev.js";import"./debounce-h76tYODF.js";import"./useOsdkClient-Dn3QR38F.js";import"./tick-D39791G3.js";import"./DropdownField-Cg0VCTB8.js";import"./isEqual-UMI_cY1O.js";import"./withOsdkMetrics-BI3kiEc3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

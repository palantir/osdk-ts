import{f as b,j as a,r as i}from"./iframe-D_l2u6_6.js";import{O as u}from"./object-table-D1XKD5VY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DpjmzVUp.js";import"./Table-fHmfLZAd.js";import"./index-Dh9XtuqD.js";import"./Dialog-ddbwFZ6h.js";import"./cross-gGpYcHa9.js";import"./svgIconContainer-5I5uI1yB.js";import"./useBaseUiId-CXCcQdyU.js";import"./InternalBackdrop-D_4E-Rxz.js";import"./composite-BhVnd5Ck.js";import"./index-DfO4jocZ.js";import"./index-CiyIlioJ.js";import"./index-DfCuXz0x.js";import"./useEventCallback-BgdlLsMa.js";import"./SkeletonBar-DlE-3K9g.js";import"./LoadingCell-C6vkENzn.js";import"./ColumnConfigDialog-D-SC4cU5.js";import"./DraggableList-DSDUX4s7.js";import"./search-CpZeqKUE.js";import"./Input-C-nLgfsl.js";import"./useControlled-BDw-HKbZ.js";import"./Button-CKuTj87a.js";import"./small-cross-C9PjvE4A.js";import"./ActionButton-BXiWW4vN.js";import"./Checkbox-DLVgl3J5.js";import"./useValueChanged-BH7Mlnbx.js";import"./CollapsiblePanel-C_xwzt2e.js";import"./MultiColumnSortDialog-DwXONmuL.js";import"./MenuTrigger-BPfbcpen.js";import"./CompositeItem-iF4WWV8_.js";import"./ToolbarRootContext-C1XZ50ky.js";import"./getDisabledMountTransitionStyles-x-mkt6n1.js";import"./getPseudoElementBounds-dXr3viq6.js";import"./chevron-down-CrG8bbfA.js";import"./index-DidMIQP-.js";import"./error-BMvuJzzL.js";import"./BaseCbacBanner-B6SfVemQ.js";import"./makeExternalStore-BcUYV5GH.js";import"./Tooltip-CT3gDVtv.js";import"./PopoverPopup-CJl6zO3k.js";import"./debounce-CDPBmaYV.js";import"./useOsdkClient-Tzqd6rMR.js";import"./tick-CrfOW8ie.js";import"./DropdownField-BXaP58OO.js";import"./isEqual-CsFmxKDR.js";import"./withOsdkMetrics-BJ3LCUHt.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

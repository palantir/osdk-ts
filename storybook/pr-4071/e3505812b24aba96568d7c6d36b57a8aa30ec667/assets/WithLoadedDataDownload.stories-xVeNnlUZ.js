import{f as b,j as a,r as i}from"./iframe-bnALbjvc.js";import{O as u}from"./object-table-CQYVfyLk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C8kaRY2F.js";import"./Table-Bhrr6uXR.js";import"./index-CaRZXRvk.js";import"./Dialog-Col9GGkI.js";import"./cross-CGbNp8lf.js";import"./svgIconContainer-C-SVSCUi.js";import"./useBaseUiId-BxyyYmda.js";import"./InternalBackdrop-C-wwUbvn.js";import"./composite-BdnAwbZ3.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./index-DkcY6kTj.js";import"./useEventCallback-Bgla3un0.js";import"./SkeletonBar-DhafuJvs.js";import"./LoadingCell-B11eB6OI.js";import"./ColumnConfigDialog-Ql0F-LNV.js";import"./DraggableList-DZ59yIIW.js";import"./search-L4rGQlW3.js";import"./Input-sTQZo4x7.js";import"./useControlled-3Q0JUJSo.js";import"./Button-pyIzwVHB.js";import"./small-cross-W4QDLHth.js";import"./ActionButton-CGQnu47F.js";import"./Checkbox-SdKK2Wna.js";import"./useValueChanged-rj55CR90.js";import"./CollapsiblePanel-hHq3Rqpy.js";import"./MultiColumnSortDialog-3sn1qAPg.js";import"./MenuTrigger-D8rKTw1N.js";import"./CompositeItem-DQIpyI6o.js";import"./ToolbarRootContext-mleznJTR.js";import"./getDisabledMountTransitionStyles-CtfsBi68.js";import"./getPseudoElementBounds-CHB398KY.js";import"./chevron-down-CZKe5U1j.js";import"./index-DB9OublQ.js";import"./error-CRPXFfUM.js";import"./BaseCbacBanner-DM4ay7t9.js";import"./makeExternalStore-ICpfmLMh.js";import"./Tooltip-CkyT8l5h.js";import"./PopoverPopup-DUjg4Y47.js";import"./debounce-DN86280o.js";import"./useOsdkClient--44cx8Bj.js";import"./tick-a6w4X9hv.js";import"./DropdownField-FqvN8MA0.js";import"./isEqual-hXRpbEuH.js";import"./withOsdkMetrics-BbTXPZXR.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Cz66haSq.js";import{O as u}from"./object-table-DgHEroMX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-xhSAljX0.js";import"./Table-CX8QpB3V.js";import"./index-BUXfO4Ju.js";import"./Dialog-BrdTDQh1.js";import"./cross-D9OamDgN.js";import"./svgIconContainer-DHL3SwmU.js";import"./useBaseUiId--zYyuape.js";import"./InternalBackdrop-Cy2hO_QK.js";import"./composite-BA9faNy6.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./index-CP2YAN8J.js";import"./useEventCallback-CBZ6ta6R.js";import"./SkeletonBar-n0_YCfbh.js";import"./LoadingCell-DHeCnijo.js";import"./ColumnConfigDialog-CV9-HJ4X.js";import"./DraggableList-DJBRcK0Q.js";import"./search-ARM4tErG.js";import"./Input-Bxz-Dd7O.js";import"./useControlled-C9QmB7A0.js";import"./Button-C0vlEOkp.js";import"./small-cross-BvAVeELv.js";import"./ActionButton-JYX3c3SK.js";import"./Checkbox-DO5ZYVN7.js";import"./useValueChanged-CFnHS4Ph.js";import"./CollapsiblePanel-CDnOBlfI.js";import"./MultiColumnSortDialog-P-1eLcJI.js";import"./MenuTrigger-wVH_z4yX.js";import"./CompositeItem-hCCScXH4.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./getDisabledMountTransitionStyles-Df62lxLU.js";import"./getPseudoElementBounds-KBPA7oty.js";import"./chevron-down-e8LYC-cq.js";import"./index-CWknVfE8.js";import"./error-CctugoDe.js";import"./BaseCbacBanner-Dbe55bim.js";import"./makeExternalStore-CSjj7q-A.js";import"./Tooltip-Cpc6auoa.js";import"./PopoverPopup-lHWxOezE.js";import"./debounce-BQlWP471.js";import"./useOsdkClient-DPYsXDsF.js";import"./tick-DHfOLs3o.js";import"./DropdownField-B7Jif8UN.js";import"./isEqual-DMMPSwJg.js";import"./withOsdkMetrics-BKDPrjKN.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

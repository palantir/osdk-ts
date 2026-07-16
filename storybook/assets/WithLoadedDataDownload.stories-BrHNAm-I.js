import{f as b,j as a,r as i}from"./iframe-BQPlFWHf.js";import{O as u}from"./object-table-lZkyV_-X.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DNedVn-Y.js";import"./index-q205pHOG.js";import"./Dialog-c5XKbVF6.js";import"./cross-CzVegF0f.js";import"./svgIconContainer-C8-_okQk.js";import"./useBaseUiId-B6CsCbrP.js";import"./InternalBackdrop-BgBZxQnV.js";import"./composite-Bh217ciX.js";import"./index-BJiQNw2h.js";import"./index-Bf3E0QSU.js";import"./index-B06KdYpP.js";import"./useEventCallback-CMrEVMEF.js";import"./SkeletonBar-8BY3_iO7.js";import"./LoadingCell-eAurrrzR.js";import"./ColumnConfigDialog-DQoWlXLI.js";import"./DraggableList-B8kZkZ2X.js";import"./search-CmCSH6Ky.js";import"./Input-BYYNMGrr.js";import"./useControlled-Toaf_epN.js";import"./Button-CahJ-_1S.js";import"./small-cross-kob9zygc.js";import"./ActionButton-w5y5CIXF.js";import"./Checkbox-CsxAtNPf.js";import"./useValueChanged-CTnIFsRg.js";import"./CollapsiblePanel-DgZPRH29.js";import"./MultiColumnSortDialog-ClSPMFl5.js";import"./MenuTrigger-CY0LCiFy.js";import"./CompositeItem-B2CdhW51.js";import"./ToolbarRootContext-8zXqIDZv.js";import"./getDisabledMountTransitionStyles-51JWq0iJ.js";import"./getPseudoElementBounds-BirlCRzq.js";import"./chevron-down-DWmbLMj4.js";import"./index-D2UDFObS.js";import"./error-x00FgWmb.js";import"./BaseCbacBanner-B0r6yv7-.js";import"./makeExternalStore-B5zsuPMy.js";import"./Tooltip-CdsYZoaD.js";import"./PopoverPopup-RR_vBbeW.js";import"./toNumber-DNK9cMtG.js";import"./useOsdkClient-71lZU9pF.js";import"./tick-D1lbzAWB.js";import"./DropdownField-BZZTfyWb.js";import"./withOsdkMetrics-Dm-G2q20.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

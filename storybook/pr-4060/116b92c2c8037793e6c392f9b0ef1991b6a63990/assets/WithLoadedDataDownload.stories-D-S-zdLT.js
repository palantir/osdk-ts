import{f as b,j as a,r as i}from"./iframe-rrq8MZm7.js";import{O as u}from"./object-table-BmLGW4nF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-g_e3lUw3.js";import"./Table-ykH1l2J2.js";import"./index-DgF7SkuQ.js";import"./Dialog-DYdOiXPb.js";import"./cross-Dx39xAnI.js";import"./svgIconContainer-DzRNCFzx.js";import"./useBaseUiId-Ck0oWSaP.js";import"./InternalBackdrop-wSSvokvJ.js";import"./composite-Dz23lKV_.js";import"./index-CSl6GKyJ.js";import"./index-CxWs-nPq.js";import"./index-BHKoX9xi.js";import"./useEventCallback-BHSzBPQv.js";import"./SkeletonBar-DbqU4wRS.js";import"./LoadingCell-BaeHdVOg.js";import"./ColumnConfigDialog-Cul644FJ.js";import"./DraggableList-DltL4lih.js";import"./search-HS8jOdU9.js";import"./Input-DomtRdeE.js";import"./useControlled-CFE1onYy.js";import"./Button-CR0VLtCt.js";import"./small-cross-Db8ph2CD.js";import"./ActionButton-CGA8JUAJ.js";import"./Checkbox-DhFF_qGg.js";import"./useValueChanged-ClOYFuvx.js";import"./CollapsiblePanel-Rs1qW30d.js";import"./MultiColumnSortDialog-BsojGLd-.js";import"./MenuTrigger-DXzaVxIY.js";import"./CompositeItem-CfvMX9u5.js";import"./ToolbarRootContext-BX6aviUc.js";import"./getDisabledMountTransitionStyles-DeyZi_sY.js";import"./getPseudoElementBounds-Xt__cUKT.js";import"./chevron-down-wVslH90M.js";import"./index-Bf3ZsPEb.js";import"./error-Bcjq0Lff.js";import"./BaseCbacBanner-D6iTWpAb.js";import"./makeExternalStore-Ce8SSisl.js";import"./Tooltip-CWYgwcpt.js";import"./PopoverPopup-BjrmRx1j.js";import"./debounce-Dx1hyhVT.js";import"./useOsdkClient-vYsi5oFr.js";import"./tick-DUzn1Cvr.js";import"./DropdownField-Bn4EfPzq.js";import"./isEqual-rKX8viav.js";import"./withOsdkMetrics-CkwBt4Ou.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

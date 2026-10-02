import{f as b,j as a,r as i}from"./iframe-rp70fwwu.js";import{O as u}from"./object-table-JyO8eHyu.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-EME5q9Jz.js";import"./Table-DREJSIaf.js";import"./index-B4gvWsM6.js";import"./Dialog-C8n9hMq-.js";import"./cross-DNFUYcP8.js";import"./svgIconContainer-CDe1DB3O.js";import"./useBaseUiId-DldllHCL.js";import"./InternalBackdrop-CB3wopGK.js";import"./composite-CuPJzJjA.js";import"./index-ChLpCK4q.js";import"./index-HM1ZzYao.js";import"./index-DcEXat2t.js";import"./useEventCallback-Z9CbEpN8.js";import"./SkeletonBar-DWB3vied.js";import"./LoadingCell-B1Kd8OIp.js";import"./ColumnConfigDialog-RzTfEw8Q.js";import"./DraggableList-CeOMgYa3.js";import"./search-BsQb9YNR.js";import"./Input-DVBMxCln.js";import"./useControlled-CHM7HnpL.js";import"./Button-iCfiBEgd.js";import"./small-cross-DQIE1Y4r.js";import"./ActionButton-rTM9eEX4.js";import"./Checkbox-AMJVntXX.js";import"./useValueChanged-B2lIX5Tz.js";import"./CollapsiblePanel-BdVNDfzn.js";import"./MultiColumnSortDialog-CIdGnCHv.js";import"./MenuTrigger-O6fRFI1R.js";import"./CompositeItem-Dn7oIdOY.js";import"./ToolbarRootContext-CoUfjY-d.js";import"./getDisabledMountTransitionStyles-DdvpbK1X.js";import"./getPseudoElementBounds-24IcT4YD.js";import"./chevron-down-Ba1aP0dz.js";import"./index-B9gm3rqX.js";import"./error-BMFKsVka.js";import"./BaseCbacBanner-Cwz1pVQs.js";import"./makeExternalStore-povODIJu.js";import"./Tooltip-CvmyFLlW.js";import"./PopoverPopup-BCC2iev1.js";import"./debounce-nCyeRLUU.js";import"./useOsdkClient-Cw47H3av.js";import"./tick-Cg7GSAs6.js";import"./DropdownField-BAITP7Mj.js";import"./isEqual-DlTS0HA0.js";import"./withOsdkMetrics-Dg07kNzb.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

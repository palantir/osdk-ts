import{f as b,j as a,r as i}from"./iframe-D_WpdUHL.js";import{O as u}from"./object-table-kllJGXjw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BfbLhjw5.js";import"./Table-1fsqVHtg.js";import"./index-CZE7Riyb.js";import"./Dialog-DgfJI68m.js";import"./cross-CvDy6iFc.js";import"./svgIconContainer-CBQMj0qb.js";import"./useBaseUiId-CTUJE0Sx.js";import"./InternalBackdrop-YtJWzUwb.js";import"./composite-CC5HrOOE.js";import"./index-BmV5pGaZ.js";import"./index-CvQQbIo-.js";import"./index-D1vvkKN2.js";import"./useEventCallback-DWrs0j0M.js";import"./SkeletonBar-B89WeM2h.js";import"./LoadingCell-BE6ispjy.js";import"./ColumnConfigDialog-veCJ1eMU.js";import"./DraggableList-C2Br_rsW.js";import"./search-N03HR__x.js";import"./Input-DIOuBl2R.js";import"./useControlled-Mrcysr82.js";import"./Button-DJB9EV9F.js";import"./small-cross-wSfax76M.js";import"./ActionButton-DfWIAF9R.js";import"./Checkbox-BiQ39D9A.js";import"./useValueChanged-DUe6FFiE.js";import"./CollapsiblePanel-CWxv4vq_.js";import"./MultiColumnSortDialog-BtKXIU3H.js";import"./MenuTrigger-CO_wZNdS.js";import"./CompositeItem-515r1Apy.js";import"./ToolbarRootContext-DsstPgFG.js";import"./getDisabledMountTransitionStyles-DiSs_8Nu.js";import"./getPseudoElementBounds-CHMLBxAW.js";import"./chevron-down-CDMlXncd.js";import"./index-aaeJHi0G.js";import"./error-DK46kd3k.js";import"./BaseCbacBanner-D2ZdXYVv.js";import"./makeExternalStore-DRPBrMWd.js";import"./Tooltip-CBK5IfeG.js";import"./PopoverPopup-JNywrunc.js";import"./debounce-SIPxKEJx.js";import"./useOsdkClient-Cu_yIzUf.js";import"./tick-DZdrjQ9O.js";import"./DropdownField-Ce2ZxPcD.js";import"./isEqual-DiME9bkD.js";import"./withOsdkMetrics-ICzHztvp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

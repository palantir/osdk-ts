import{f as b,j as a,r as i}from"./iframe-DV_FvNkW.js";import{O as u}from"./object-table-DBmCBesk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BArELN5X.js";import"./Table-BcGKXj_n.js";import"./index-BLvj8uzS.js";import"./Dialog-C_TZGJh8.js";import"./cross-JLut_rtX.js";import"./svgIconContainer-CK52f1Bh.js";import"./useBaseUiId-DZEvNQMB.js";import"./InternalBackdrop-CJZRfENn.js";import"./composite-GUdKrYKt.js";import"./index-D2s-C-iU.js";import"./index-DUDZNy0X.js";import"./index-gtkvlodh.js";import"./useEventCallback-Cgmwy5UD.js";import"./SkeletonBar-Bi5m-WwI.js";import"./LoadingCell-CrYdp2fb.js";import"./ColumnConfigDialog-S-CuKGO1.js";import"./DraggableList-CWEVxQVF.js";import"./search-1jaslfQq.js";import"./Input-WondKUmM.js";import"./useControlled-CjcZvg90.js";import"./isEqual-DnamcrPx.js";import"./isObject-B1GZY_rQ.js";import"./Button-CDeNX6hI.js";import"./ActionButton-DIxaviUO.js";import"./Checkbox-Cg_iqv7P.js";import"./useValueChanged-MoTm1s5g.js";import"./CollapsiblePanel-DUEqKjo8.js";import"./MultiColumnSortDialog-oMxfvcXd.js";import"./MenuTrigger-B6nmWU4b.js";import"./CompositeItem-B9cGFmy6.js";import"./ToolbarRootContext-DhlEIOBQ.js";import"./getDisabledMountTransitionStyles-C3QZqvkg.js";import"./getPseudoElementBounds-BOWuNL3O.js";import"./chevron-down-CZeNdi1s.js";import"./index-DJXI62-C.js";import"./error-BkuU0fxo.js";import"./BaseCbacBanner-BzFkCYx7.js";import"./makeExternalStore-BAiQukHm.js";import"./Tooltip-BP-iOfCT.js";import"./PopoverPopup-KsgDK_Va.js";import"./toNumber-xsn9SK-M.js";import"./useOsdkClient-D2BQ36-h.js";import"./tick-Dc2VpgGC.js";import"./DropdownField-Dj7YH9Q-.js";import"./withOsdkMetrics-CaJhDKNf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

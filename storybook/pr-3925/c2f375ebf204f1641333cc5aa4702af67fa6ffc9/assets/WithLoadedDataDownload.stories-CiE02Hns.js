import{f as b,j as a,r as i}from"./iframe-D7uYHMK5.js";import{O as u}from"./object-table-V3UCM2fv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DiAZcfZm.js";import"./Table-DtMzJz3l.js";import"./index-BzC45Lga.js";import"./Dialog-Dva2zDK4.js";import"./cross-CD_5zqBE.js";import"./svgIconContainer-BznKxTlt.js";import"./useBaseUiId-Us591avB.js";import"./InternalBackdrop-BCzVBoy3.js";import"./composite-BcyVLOSD.js";import"./index-I4_6oK98.js";import"./index-Cjfc9eRI.js";import"./index-C8TJW-iD.js";import"./useEventCallback-cILH2oXo.js";import"./SkeletonBar-D-LRfS-M.js";import"./LoadingCell-21AE9QX4.js";import"./ColumnConfigDialog-K-9LCMyb.js";import"./DraggableList-DpVkgFNq.js";import"./search-DRrcfgZe.js";import"./Input-BabOhAfz.js";import"./useControlled-D3BSP16K.js";import"./Button-erxxrJMI.js";import"./small-cross-CRWB9qfi.js";import"./ActionButton-UcWGaKKs.js";import"./Checkbox-CtO4j5Lj.js";import"./useValueChanged-BdXhgOuv.js";import"./CollapsiblePanel-4QbvNyUk.js";import"./MultiColumnSortDialog-n9LPvjCu.js";import"./MenuTrigger-8U4VhxNl.js";import"./CompositeItem-DjaEdGcQ.js";import"./ToolbarRootContext-D0EWy9dk.js";import"./getDisabledMountTransitionStyles-BjeyX6Od.js";import"./getPseudoElementBounds-CoL9SufA.js";import"./chevron-down-BFTm3R8X.js";import"./index-BMEwLPMF.js";import"./error-DJXRLU5K.js";import"./BaseCbacBanner-B6bLhjoW.js";import"./makeExternalStore-DmFz2z1W.js";import"./Tooltip-vgfshVU2.js";import"./PopoverPopup-n-QszO91.js";import"./debounce-DmAwE0_8.js";import"./useOsdkClient-DZ4-w40f.js";import"./tick-C6rTYxk-.js";import"./DropdownField-7eRy7ajr.js";import"./isEqual-BeDN-3ha.js";import"./withOsdkMetrics-D9_ognri.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

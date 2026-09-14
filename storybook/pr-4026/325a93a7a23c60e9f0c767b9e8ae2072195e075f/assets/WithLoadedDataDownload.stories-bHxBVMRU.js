import{f as b,j as a,r as i}from"./iframe-NlvaTXdz.js";import{O as u}from"./object-table-sckLgGSi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-11218VAb.js";import"./Table-tpwkwsOf.js";import"./index-B0X1kouN.js";import"./Dialog-CbrM7LOV.js";import"./cross-3E2um-ab.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./useBaseUiId-Cak_Gf6y.js";import"./InternalBackdrop-81BDBXVN.js";import"./composite-BVOO1HYh.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./index-CVSwwXpW.js";import"./useEventCallback-DIZPvIjV.js";import"./SkeletonBar-BEPts0M1.js";import"./LoadingCell-ByZgSJdg.js";import"./ColumnConfigDialog-5g3qFlze.js";import"./DraggableList-Dc8tW3gn.js";import"./search-JCoXnDaS.js";import"./Input-ec2719nZ.js";import"./useControlled-Dr03MbeI.js";import"./Button-Cj6didcq.js";import"./small-cross-9qxQlKft.js";import"./ActionButton-D2vkEZRA.js";import"./Checkbox-E09LMdpJ.js";import"./useValueChanged-DDbbsCD3.js";import"./CollapsiblePanel-DnncBNgb.js";import"./MultiColumnSortDialog-B5eU55ys.js";import"./MenuTrigger-CFUy_u8Y.js";import"./CompositeItem--ZMxCD0o.js";import"./ToolbarRootContext-BusYBQnb.js";import"./getDisabledMountTransitionStyles-DMxebDRk.js";import"./getPseudoElementBounds-CgEw87z9.js";import"./chevron-down-dfuDLNdx.js";import"./index-Cub9R0HW.js";import"./error-CV3Wyi-T.js";import"./BaseCbacBanner-BcV7RFqw.js";import"./makeExternalStore-BJZbhgwh.js";import"./Tooltip-Bu2sAhK0.js";import"./PopoverPopup-CVjAB-qP.js";import"./debounce-BGWK8YL4.js";import"./useOsdkClient-FuspldWR.js";import"./tick-DMWwchqI.js";import"./DropdownField-BOcDuARz.js";import"./isEqual-BdTIqhZC.js";import"./withOsdkMetrics-zr1-J277.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

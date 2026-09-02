import{f as b,j as a,r as i}from"./iframe-CqkLHc_c.js";import{O as u}from"./object-table-B9dqwhdI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-tK9KftsW.js";import"./Table-DOVpPfje.js";import"./index-BkdZmWk5.js";import"./Dialog-C8N5WYt2.js";import"./cross-BK5qmSmv.js";import"./svgIconContainer-Blo0ZtB6.js";import"./useBaseUiId-tebTh8Gp.js";import"./InternalBackdrop-LvsrBsqm.js";import"./composite-BYm3d5-q.js";import"./index-BPryo7yS.js";import"./index-ESRslAge.js";import"./index-Ca6LKe_B.js";import"./useEventCallback-BsCHvJZO.js";import"./SkeletonBar-9APJB1is.js";import"./LoadingCell-f9yIWNSo.js";import"./ColumnConfigDialog-CWbkHkwR.js";import"./DraggableList-CN06qLYh.js";import"./search-PNHKhQFY.js";import"./Input-CDogb2Gc.js";import"./useControlled-DG0f7MEe.js";import"./Button-B3Rn0blP.js";import"./small-cross-Culy_LL-.js";import"./ActionButton-Bf3mWBEe.js";import"./Checkbox-BBJ7O-tN.js";import"./useValueChanged-BYnUcR2q.js";import"./CollapsiblePanel-ChwSKAp7.js";import"./MultiColumnSortDialog-Bty7oBui.js";import"./MenuTrigger-CO6djv8h.js";import"./CompositeItem-DLFLEE2w.js";import"./ToolbarRootContext-BoN7sVx8.js";import"./getDisabledMountTransitionStyles-CSpIiX34.js";import"./getPseudoElementBounds-Bn-J1iOt.js";import"./chevron-down-Dm_-uRNW.js";import"./index-DkCpc9rG.js";import"./error-DVJcn8Pc.js";import"./BaseCbacBanner-jCxZY6l4.js";import"./makeExternalStore-Cg161Yxc.js";import"./Tooltip-4vAmB5ER.js";import"./PopoverPopup-CR7zdJhd.js";import"./debounce-CBvYKhdg.js";import"./useOsdkClient-Qcf5HYkT.js";import"./tick-DWazel4t.js";import"./DropdownField-w8MQJ0vm.js";import"./isEqual-BdDkPSGJ.js";import"./withOsdkMetrics-DbuLeRiC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

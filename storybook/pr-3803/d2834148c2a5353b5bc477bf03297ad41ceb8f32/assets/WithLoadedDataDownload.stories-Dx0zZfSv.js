import{f as b,j as a,r as i}from"./iframe-DnZQIvTT.js";import{O as u}from"./object-table-DVRIN3fz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BkW8a5rl.js";import"./Table-75SC6Pmm.js";import"./index-9hlHlyou.js";import"./Dialog-Cm-o7Xu1.js";import"./cross-C0DMMgZH.js";import"./svgIconContainer-yuQ64jxi.js";import"./useBaseUiId-BiQqFJiH.js";import"./InternalBackdrop-FmHXWr_y.js";import"./composite-B_yB_W3d.js";import"./index-Co5VwW1q.js";import"./index-CCOub406.js";import"./index-DSZ7IIaR.js";import"./useEventCallback-S3i3cwUJ.js";import"./SkeletonBar-DuBFX7MQ.js";import"./LoadingCell-Dz5yl_8o.js";import"./ColumnConfigDialog-CpFqQfx6.js";import"./DraggableList-CAHF7cXc.js";import"./search-DkG_mcgd.js";import"./Input-B-XWsA0h.js";import"./useControlled-lSDM3Zga.js";import"./isEqual-DxajWOoa.js";import"./isObject-DJ6ciwEQ.js";import"./Button-nmd_W8Kk.js";import"./ActionButton-Bpwm6fQH.js";import"./Checkbox-Dxxnmc4W.js";import"./useValueChanged-CkAf_GeI.js";import"./CollapsiblePanel-DI1vG4zM.js";import"./MultiColumnSortDialog-BOrrDHGi.js";import"./MenuTrigger-BYlkQB5e.js";import"./CompositeItem-5_WtziOg.js";import"./ToolbarRootContext-DeRNPR7X.js";import"./getDisabledMountTransitionStyles-PiiH0z4l.js";import"./getPseudoElementBounds-CAkRuCAN.js";import"./chevron-down-VeqrXGGR.js";import"./index-D6YwWFy-.js";import"./error-BLztiVY7.js";import"./BaseCbacBanner-DSJTxRm1.js";import"./makeExternalStore-CouSw7Ae.js";import"./Tooltip-kBgN66pM.js";import"./PopoverPopup-CwrAv6_7.js";import"./toNumber-Dom4meFx.js";import"./useOsdkClient-C6UovaqT.js";import"./tick-Cw1PsFg_.js";import"./DropdownField-DbDbsfOB.js";import"./withOsdkMetrics-fofNv3K2.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

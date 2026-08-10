import{f as b,j as a,r as i}from"./iframe-DOeAYoRk.js";import{O as u}from"./object-table-BMbidIlQ.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BwDvF8K8.js";import"./index-C8enkHHH.js";import"./Dialog-DT-6RsPK.js";import"./cross-CTQfiCoc.js";import"./svgIconContainer-4JA-55AY.js";import"./useBaseUiId-CqKYfNUG.js";import"./InternalBackdrop-BLrtRR73.js";import"./composite-CxfEfgAE.js";import"./index-jM1sW0ik.js";import"./index-C3Zqf3YM.js";import"./index-Ca1wRqXA.js";import"./useEventCallback-BTk3Z6Qr.js";import"./SkeletonBar-Dmjzy1lt.js";import"./LoadingCell-DYH1qbvq.js";import"./ColumnConfigDialog-B6g0duZI.js";import"./DraggableList-DrVMbYk9.js";import"./search-SpwpHeSC.js";import"./Input-oDyylqSn.js";import"./useControlled-4ALZ6JWG.js";import"./isEqual-_B9NyKT8.js";import"./isObject-BGTx8vaf.js";import"./Button-Cdun-kQv.js";import"./ActionButton-DbCm8V1N.js";import"./Checkbox-BOHdBk7N.js";import"./useValueChanged-CbWVEL48.js";import"./CollapsiblePanel-DPDp83X3.js";import"./MultiColumnSortDialog-CIChi61X.js";import"./MenuTrigger-BhWhB7VG.js";import"./CompositeItem-DpuZl7_I.js";import"./ToolbarRootContext-DZ03LuRT.js";import"./getDisabledMountTransitionStyles-DBl444QP.js";import"./getPseudoElementBounds-Bo7TLJ0Y.js";import"./chevron-down-CKxHpqTt.js";import"./index-bOvw0pIt.js";import"./error-DvFfN3ld.js";import"./BaseCbacBanner-qyS-LwHQ.js";import"./makeExternalStore-DjKzDLfr.js";import"./Tooltip-BoEvhs6Q.js";import"./PopoverPopup-C5owdlCI.js";import"./toNumber-Cs6XeUud.js";import"./useOsdkClient-Bz-qXpDK.js";import"./tick-afTKFpG8.js";import"./DropdownField-BwGsUJcf.js";import"./withOsdkMetrics-CP1ydFVJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

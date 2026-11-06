import{f as b,j as a,r as i}from"./iframe-CDFbPseP.js";import{O as u}from"./object-table-DUOcSi8T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKjsnnFk.js";import"./Table-DMQnRqi0.js";import"./index-CzYE_gFj.js";import"./Dialog-Dv0_z0ly.js";import"./cross-D1CsBnZQ.js";import"./svgIconContainer-BNgOwI7J.js";import"./useBaseUiId-BT9BKuc8.js";import"./InternalBackdrop-Dlq9iOxD.js";import"./composite-DoGjJBYp.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./index-DHvlVsA3.js";import"./useEventCallback-BV_0VhHt.js";import"./SkeletonBar-APOybFL0.js";import"./LoadingCell-2H_eFQDc.js";import"./ColumnConfigDialog-Crbpzmli.js";import"./DraggableList-BeB_zh_T.js";import"./search-B_GZiPBG.js";import"./Input-RJbqaFIV.js";import"./useControlled-DSth82Ot.js";import"./Button-adqe8TBe.js";import"./small-cross-Dij3KccF.js";import"./ActionButton-0OmN--Ya.js";import"./Checkbox-BPjU0jTJ.js";import"./useValueChanged-BKwGtryl.js";import"./CollapsiblePanel-B_EKx4xS.js";import"./MultiColumnSortDialog-ld-Yv8ju.js";import"./MenuTrigger-CxKvqDeW.js";import"./CompositeItem-CBWcSsRg.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./getDisabledMountTransitionStyles-C4CA8fPv.js";import"./getPseudoElementBounds-3mroWXjI.js";import"./chevron-down-LTvAL7jy.js";import"./index-sMIecie8.js";import"./error-B-c6YY8H.js";import"./BaseCbacBanner-DQXK5STs.js";import"./makeExternalStore-CffN4Zs6.js";import"./Tooltip-kSDQRB-X.js";import"./PopoverPopup-Dx_YvUJO.js";import"./debounce-CP1jiFBE.js";import"./useOsdkClient-DGrdJ83Z.js";import"./tick-dn_tR7od.js";import"./DropdownField-CSbOb56z.js";import"./isEqual-GJObA0dv.js";import"./withOsdkMetrics-C_TM08QX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

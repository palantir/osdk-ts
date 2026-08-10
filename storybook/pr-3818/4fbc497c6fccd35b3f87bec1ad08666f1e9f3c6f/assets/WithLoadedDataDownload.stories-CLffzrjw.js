import{f as b,j as a,r as i}from"./iframe-Cre-9cas.js";import{O as u}from"./object-table-Bg3gsRRi.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DHrhJo4v.js";import"./Table-Dq3AZrKj.js";import"./index-Cz4GDW4R.js";import"./Dialog-DoK0FYZI.js";import"./cross-CmMOk3cx.js";import"./svgIconContainer-DBkJAZ9O.js";import"./useBaseUiId-DOqKyLzL.js";import"./InternalBackdrop-1FWh9j41.js";import"./composite-0-c1qOZY.js";import"./index-Bm3R8EDL.js";import"./index-BSEjtXWh.js";import"./index-Bs-sQftb.js";import"./useEventCallback-NxP8s_T9.js";import"./SkeletonBar-rO47kBpz.js";import"./LoadingCell-DGZQUZbu.js";import"./ColumnConfigDialog-B8iplsw1.js";import"./DraggableList-BlCKxOBK.js";import"./search-C14d_QIQ.js";import"./Input-BbbRXoqK.js";import"./useControlled-hjvc-0on.js";import"./isEqual-1ldjMOun.js";import"./isObject-DR7tzgbU.js";import"./Button-D-qwXXls.js";import"./ActionButton-DoSJxpA9.js";import"./Checkbox-la-vkOrM.js";import"./useValueChanged-CkYMjklD.js";import"./CollapsiblePanel-4tw6s3Ru.js";import"./MultiColumnSortDialog-DsfGREW-.js";import"./MenuTrigger-CsyLpWwx.js";import"./CompositeItem-BAdlDQDE.js";import"./ToolbarRootContext-Dg4xP7xV.js";import"./getDisabledMountTransitionStyles-D4Potz8p.js";import"./getPseudoElementBounds-B7onhS8M.js";import"./chevron-down-D0grZxr0.js";import"./index-NgNvunFL.js";import"./error-DrQnvBEM.js";import"./BaseCbacBanner-DQ9-w6LD.js";import"./makeExternalStore-B7-iML3E.js";import"./Tooltip-C_98Sk3C.js";import"./PopoverPopup-YEX9TARL.js";import"./toNumber-CqhpYoFk.js";import"./useOsdkClient-DeR_d-JJ.js";import"./tick-zYcRhqQQ.js";import"./DropdownField-BHwdgkO9.js";import"./withOsdkMetrics-CUiTNeFG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

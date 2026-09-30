import{f as b,j as a,r as i}from"./iframe-DwrFhh8X.js";import{O as u}from"./object-table-CJzeSeXo.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CtRLQ8d2.js";import"./Table-13zpn8as.js";import"./index-2C7ws8qd.js";import"./Dialog-DS-5XWpx.js";import"./cross-CPVTirRP.js";import"./svgIconContainer-Dfv48f4w.js";import"./useBaseUiId-hjF8-Tkz.js";import"./InternalBackdrop-DmelpGzC.js";import"./composite-CQaDz_1E.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./index-B506KqcM.js";import"./useEventCallback-CbGT4h-v.js";import"./SkeletonBar-CMgVfScc.js";import"./LoadingCell-8g3xYOyz.js";import"./ColumnConfigDialog-q_yUURCK.js";import"./DraggableList-DI3JA3k6.js";import"./search-B4eh0B39.js";import"./Input-CETxnph3.js";import"./useControlled-BWpptLO1.js";import"./Button-DEic01Xh.js";import"./small-cross-rfi-MHsz.js";import"./ActionButton-DK21FKAO.js";import"./Checkbox-6XyOUM_K.js";import"./useValueChanged-OVYV8k4d.js";import"./CollapsiblePanel-noq47swC.js";import"./MultiColumnSortDialog-CmjG40p4.js";import"./MenuTrigger-CYKsI8ZE.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./getDisabledMountTransitionStyles-DEaamNv3.js";import"./getPseudoElementBounds-Bjx3ag9L.js";import"./chevron-down-BBihCk-h.js";import"./index-DvIHEHIa.js";import"./error-Cw2yDStD.js";import"./BaseCbacBanner-DaIP8iL7.js";import"./makeExternalStore-BDmfTWiu.js";import"./Tooltip-D0M9LXTB.js";import"./PopoverPopup-AoPTNcjX.js";import"./debounce-Do8EHXfQ.js";import"./useOsdkClient-BGkJfb9L.js";import"./tick-FFgtl-J5.js";import"./DropdownField-69nLBGPA.js";import"./isEqual-f_qiuOaO.js";import"./withOsdkMetrics-BhQ--KKZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

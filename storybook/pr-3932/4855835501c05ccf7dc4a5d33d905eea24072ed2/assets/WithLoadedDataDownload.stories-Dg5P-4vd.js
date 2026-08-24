import{f as b,j as a,r as i}from"./iframe-bK06rSfy.js";import{O as u}from"./object-table-CfNHyCaW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-K-1boSMk.js";import"./Table-DooZ8vNL.js";import"./index-Bk-vtYHe.js";import"./Dialog-DfTgPYnF.js";import"./cross-DGM8nzKR.js";import"./svgIconContainer-C_mLXjp3.js";import"./useBaseUiId-CPLmGW2i.js";import"./InternalBackdrop-C1jV5x8E.js";import"./composite-0P-Pw-2Q.js";import"./index-BduD8wzE.js";import"./index-0oJri5g1.js";import"./index-XSfDDb8C.js";import"./useEventCallback-D4hmh2FX.js";import"./SkeletonBar-B5kg8PuZ.js";import"./LoadingCell-Bm7K6xoF.js";import"./ColumnConfigDialog-3T0mv6B3.js";import"./DraggableList-CM1Q0u6r.js";import"./search-C40Ggweq.js";import"./Input-6uol7Ijj.js";import"./useControlled-CZQizdlE.js";import"./Button-C5Cur8G2.js";import"./small-cross-UJeA-7-z.js";import"./ActionButton-DoZ9G5gm.js";import"./Checkbox-kYTxpgtk.js";import"./useValueChanged-B0rG8P_6.js";import"./CollapsiblePanel-hjau0PKS.js";import"./MultiColumnSortDialog-DTPUQzx2.js";import"./MenuTrigger-BfTDRkjm.js";import"./CompositeItem-ty0K8CzQ.js";import"./ToolbarRootContext-DZ3HHK_z.js";import"./getDisabledMountTransitionStyles-dqQKCBgX.js";import"./getPseudoElementBounds-DWTwPUeQ.js";import"./chevron-down-DULzUbtR.js";import"./index-DjjhcTLl.js";import"./error-Cj1EJ7Ed.js";import"./BaseCbacBanner-D4F9ZWBY.js";import"./makeExternalStore-By3lhuiJ.js";import"./Tooltip-CsKnunI-.js";import"./PopoverPopup-CS_hwUVd.js";import"./debounce-CysAWd9o.js";import"./useOsdkClient-BulRHlgi.js";import"./tick-sjLAC5bb.js";import"./DropdownField-DLu2iZiv.js";import"./isEqual-CsFjEq6w.js";import"./withOsdkMetrics-CEyQ3Kvz.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

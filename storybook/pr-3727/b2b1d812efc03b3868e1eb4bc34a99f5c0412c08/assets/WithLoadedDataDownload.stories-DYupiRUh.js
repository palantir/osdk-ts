import{f as b,j as a,r as i}from"./iframe-BbXT0DDw.js";import{O as u}from"./object-table-DyVg84mn.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-eaV1mNfD.js";import"./Table-C_hSwjqG.js";import"./index-B2WF_Bz4.js";import"./Dialog-DxnoSr1H.js";import"./cross-DkAT-B8J.js";import"./svgIconContainer-CJjpcCkC.js";import"./useBaseUiId-D1Pe3AtR.js";import"./InternalBackdrop-wwPrzg68.js";import"./composite-BPu-b4cl.js";import"./index-CcSoWyRj.js";import"./index-DL1_iZ5Q.js";import"./index-BgpMFVad.js";import"./useEventCallback-CMoXdN8R.js";import"./SkeletonBar-D6wzzmti.js";import"./LoadingCell-BpNSEnvN.js";import"./ColumnConfigDialog-BJFjIqLN.js";import"./DraggableList-Cu105ekh.js";import"./search-Dbb95ii9.js";import"./Input-D1v8skGZ.js";import"./useControlled-C7P20UXk.js";import"./isEqual-B1jd_Lro.js";import"./isObject-CIEsB9pN.js";import"./Button-B2cJncoY.js";import"./ActionButton-CZYDa-34.js";import"./Checkbox-CTFOt7Kq.js";import"./useValueChanged-C3uOLpwW.js";import"./CollapsiblePanel-BxivYWMz.js";import"./MultiColumnSortDialog-07UE4H-p.js";import"./MenuTrigger-Dnfzzi-8.js";import"./CompositeItem-DvYz6hSy.js";import"./ToolbarRootContext-dJmq_z35.js";import"./getDisabledMountTransitionStyles-mdZnUNwd.js";import"./getPseudoElementBounds-D6vpj3ov.js";import"./chevron-down-DlzvZ4IU.js";import"./index-C-hobEV_.js";import"./error-CS7KmN1B.js";import"./BaseCbacBanner-CsXlomMy.js";import"./makeExternalStore-Bk59v3u3.js";import"./Tooltip-DguQTGZo.js";import"./PopoverPopup-X5uIZQx-.js";import"./toNumber-xbqrJNuR.js";import"./useOsdkClient-DKcQN8kf.js";import"./tick-BpQfSN9K.js";import"./DropdownField-Cvt8w-VI.js";import"./withOsdkMetrics-Cle2y2cZ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

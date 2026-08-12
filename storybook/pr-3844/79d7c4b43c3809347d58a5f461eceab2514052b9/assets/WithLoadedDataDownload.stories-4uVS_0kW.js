import{f as b,j as a,r as i}from"./iframe-BBL_-HCt.js";import{O as u}from"./object-table-BmKlloX9.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-gXeNWTZD.js";import"./Table-cJaqAje1.js";import"./index-D4yzeBJ6.js";import"./Dialog-YuX7ZT5R.js";import"./cross-BTBqqo2m.js";import"./svgIconContainer-C5h8dyp4.js";import"./useBaseUiId-IvbF4hDj.js";import"./InternalBackdrop-DTy2ZHe8.js";import"./composite-B4fmYlB2.js";import"./index-DkKFi5X-.js";import"./index-OLnc9ViJ.js";import"./index-Bx4Gz6DB.js";import"./useEventCallback-CocVgKNZ.js";import"./SkeletonBar-I3AIrJSM.js";import"./LoadingCell-Qti4cjBX.js";import"./ColumnConfigDialog-CPKYJxyh.js";import"./DraggableList-B0AxtbTM.js";import"./search-BqwbKAei.js";import"./Input-C1KaTSDP.js";import"./useControlled-DMuu4KBX.js";import"./isEqual-CZkBWFXq.js";import"./isObject-CFBQ1AJA.js";import"./Button-SEe7AN0N.js";import"./ActionButton-ClXsh96F.js";import"./Checkbox-g6M20mN7.js";import"./useValueChanged-CUC42A35.js";import"./CollapsiblePanel-BgjBiotn.js";import"./MultiColumnSortDialog-D5o4hdua.js";import"./MenuTrigger-BGcEy2Om.js";import"./CompositeItem-CT2M5Fdg.js";import"./ToolbarRootContext-BVwYgSHG.js";import"./getDisabledMountTransitionStyles-NF2f_rkY.js";import"./getPseudoElementBounds-DSxCnEgg.js";import"./chevron-down-Bg0k9Oko.js";import"./index-CeI-2DnP.js";import"./error-BeEhm9we.js";import"./BaseCbacBanner-nrt-v66T.js";import"./makeExternalStore-DqPT6bfI.js";import"./Tooltip-DrP5_NWc.js";import"./PopoverPopup-DH9A1tKJ.js";import"./toNumber-DNWrL45z.js";import"./useOsdkClient-BvBcPbsV.js";import"./tick-Coq7YcBM.js";import"./DropdownField-DKNinG1T.js";import"./withOsdkMetrics-DYro2wY1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

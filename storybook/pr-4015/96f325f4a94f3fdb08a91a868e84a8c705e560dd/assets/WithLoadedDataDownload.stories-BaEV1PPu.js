import{f as b,j as a,r as i}from"./iframe-Dv4QQ6Y4.js";import{O as u}from"./object-table-C1SCK71K.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BZeo2aa_.js";import"./Table-DCAi-cqE.js";import"./index-Bo5vUrye.js";import"./Dialog-CI9eTel7.js";import"./cross-CTXbroJK.js";import"./svgIconContainer-De6SA4Dr.js";import"./useBaseUiId-DPM9QPEL.js";import"./InternalBackdrop-DRaUyJ8v.js";import"./composite-D2e8WeVr.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./index-B4wl8HiA.js";import"./useEventCallback-DE28hwwS.js";import"./SkeletonBar-DbWunkuZ.js";import"./LoadingCell-Cyjm6LXt.js";import"./ColumnConfigDialog-BoudTuK3.js";import"./DraggableList-DKQpzmfW.js";import"./search-CWgR1vVP.js";import"./Input-DTNwj_yO.js";import"./useControlled-BcGMXD3D.js";import"./Button-B_X3_bQA.js";import"./small-cross-BOwPxFN0.js";import"./ActionButton-C1ptiifp.js";import"./Checkbox-BhB2wpJV.js";import"./useValueChanged-1zfYKsDL.js";import"./CollapsiblePanel-DNTWrgGT.js";import"./MultiColumnSortDialog-2kScV4zV.js";import"./MenuTrigger-CbxBQ7TZ.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./getDisabledMountTransitionStyles-n1IP7gt4.js";import"./getPseudoElementBounds-DmVA_fGG.js";import"./chevron-down-XPf4kqix.js";import"./index-X99WJuZn.js";import"./error-CMA_8Zv0.js";import"./BaseCbacBanner-DyBJvF4a.js";import"./makeExternalStore-Bg3zd0w-.js";import"./Tooltip-DSVMTHzP.js";import"./PopoverPopup-4H23XaH2.js";import"./debounce-DMjYGfU6.js";import"./useOsdkClient-BE_-nJBB.js";import"./tick-Dh2x96zi.js";import"./DropdownField-kkZO0YX5.js";import"./isEqual-DrxdPr0P.js";import"./withOsdkMetrics-CfzcCH1M.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

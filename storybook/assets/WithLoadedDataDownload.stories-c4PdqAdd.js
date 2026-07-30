import{f as b,j as a,r as i}from"./iframe-bqNDes0h.js";import{O as u}from"./object-table-Bo7ZzyOs.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-KbNypInQ.js";import"./index-D-kpR4U5.js";import"./Dialog-DBt6SKPv.js";import"./cross-D-HBFxBZ.js";import"./svgIconContainer-nN-O7odi.js";import"./useBaseUiId-BdVIrhLm.js";import"./InternalBackdrop-jCgELips.js";import"./composite-Bes1Kf7p.js";import"./index-CQpE82He.js";import"./index-KCfabZ1g.js";import"./index-DuHyQ_BY.js";import"./useEventCallback-BVtK7C84.js";import"./SkeletonBar-BVWt6TzE.js";import"./LoadingCell-BB2VWb1o.js";import"./ColumnConfigDialog-DB-SaiNF.js";import"./DraggableList-BjBpafGP.js";import"./search-DkS45smT.js";import"./Input-Dg6Zh6vs.js";import"./useControlled-BXUawHF3.js";import"./isEqual-CxKcdXuf.js";import"./isObject-D5Xm145F.js";import"./Button-BOlqyk1x.js";import"./ActionButton-Bb4ArXLq.js";import"./Checkbox-D_4CQR_a.js";import"./useValueChanged-BmACd2KS.js";import"./CollapsiblePanel-D76wv8TD.js";import"./MultiColumnSortDialog-BptSZ354.js";import"./MenuTrigger-hKGw6jH7.js";import"./CompositeItem-CdBWSXyW.js";import"./ToolbarRootContext-B-Yq57Bt.js";import"./getDisabledMountTransitionStyles-7Pr0gztR.js";import"./getPseudoElementBounds-DSu5pY6s.js";import"./chevron-down-BfCtZkjC.js";import"./index-Gm4DsetC.js";import"./error-rjrh1Exq.js";import"./BaseCbacBanner-ColLsRFK.js";import"./makeExternalStore-Cz-ju0RG.js";import"./Tooltip-CyTiQ41n.js";import"./PopoverPopup-eUWm8DRH.js";import"./toNumber-C9-sS8P1.js";import"./useOsdkClient-C5axgICL.js";import"./tick-DPgqlyJG.js";import"./DropdownField-DgPlq2BT.js";import"./withOsdkMetrics-BOXWJewy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

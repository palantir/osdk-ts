import{f as b,j as a,r as i}from"./iframe-fiDzxSac.js";import{O as u}from"./object-table-Cfy5VgMd.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vUH8WtXv.js";import"./Table-DKy28Mke.js";import"./index-RsLmo9Ef.js";import"./Dialog-DOJr_i77.js";import"./cross-Dj0Tr1LR.js";import"./svgIconContainer-DuFQRV6L.js";import"./useBaseUiId-D5crqalZ.js";import"./InternalBackdrop-CodZtGfP.js";import"./composite-BaurXFau.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./index-BbKVh42F.js";import"./useEventCallback-CNobfbIA.js";import"./SkeletonBar-Bv_L57OJ.js";import"./LoadingCell-CzRJ6sTb.js";import"./ColumnConfigDialog-2FQHcVYm.js";import"./DraggableList-BSfGvR0K.js";import"./search-B0MLGd_Y.js";import"./Input-kfNjj_-b.js";import"./useControlled-CY87ml-W.js";import"./Button-BF-ip-LD.js";import"./small-cross-XpA8OmpU.js";import"./ActionButton-DJAwwkO8.js";import"./Checkbox-C_Tjg2ZD.js";import"./useValueChanged-DVEDmsGJ.js";import"./CollapsiblePanel-rOI86CBK.js";import"./MultiColumnSortDialog-CEkRnoUu.js";import"./MenuTrigger-D7sevTuD.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./getDisabledMountTransitionStyles-Cl4MErAH.js";import"./getPseudoElementBounds-Cz4hQZQV.js";import"./chevron-down-BeNvA5Jp.js";import"./index-CxuMtNmx.js";import"./error-DWaVmqt2.js";import"./BaseCbacBanner-Df49S7d1.js";import"./makeExternalStore-GIa5UA4P.js";import"./Tooltip-BmuBTOPC.js";import"./PopoverPopup-CoMFK958.js";import"./debounce-D-d1nhMU.js";import"./useOsdkClient-BTUTxBhe.js";import"./tick-_9QlYMSH.js";import"./DropdownField-Pss_3XlK.js";import"./isEqual-Dm9UOhP2.js";import"./withOsdkMetrics-CGcDstXp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

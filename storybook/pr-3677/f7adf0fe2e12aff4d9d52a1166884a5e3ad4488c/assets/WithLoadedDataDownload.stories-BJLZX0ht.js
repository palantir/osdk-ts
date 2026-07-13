import{f as b,j as a,r as i}from"./iframe-CPlkVzRX.js";import{O as u}from"./object-table-vbK15p_M.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BPLtUsTR.js";import"./Table-CFr7mTdz.js";import"./index-C7DVDnEH.js";import"./Dialog-JjdQajtS.js";import"./cross-NNY-hlVM.js";import"./svgIconContainer-CbDzXV6d.js";import"./useBaseUiId-ASzug_9H.js";import"./InternalBackdrop-BbSy2yPA.js";import"./composite-IfShg2e2.js";import"./index-BWF4oSDC.js";import"./index-88sVlVMo.js";import"./index-Czeu0k57.js";import"./useEventCallback-Bz9yzAWg.js";import"./SkeletonBar-BLvVjliD.js";import"./LoadingCell-DdMZDIlw.js";import"./ColumnConfigDialog-C9BTGo9S.js";import"./DraggableList-Bh0qggvY.js";import"./search-NwC2yRDx.js";import"./Input-OI8vv9vI.js";import"./useControlled-PnLqC2jZ.js";import"./Button-BL7WGeR7.js";import"./small-cross-sz3OCr0-.js";import"./ActionButton-BX3CI4qR.js";import"./Checkbox-CdCneLn0.js";import"./useValueChanged-DJ0-6LGf.js";import"./CollapsiblePanel-m1mcrA_d.js";import"./MultiColumnSortDialog-DEc6jgpM.js";import"./MenuTrigger-CYc2vapg.js";import"./CompositeItem-Z2rlf7F_.js";import"./ToolbarRootContext-Z1LNpQ45.js";import"./getDisabledMountTransitionStyles-CeMRHz96.js";import"./getPseudoElementBounds-DEx4uFwW.js";import"./chevron-down-DWRjbthW.js";import"./index-yGDpJvAl.js";import"./error-B2_RfTBt.js";import"./BaseCbacBanner-CKH-ox9e.js";import"./makeExternalStore-CIn1M1hc.js";import"./Tooltip-DH4fH58s.js";import"./PopoverPopup-CmVEPFbE.js";import"./toNumber-DBPl-bec.js";import"./useOsdkClient-DbU8QV6e.js";import"./tick-DTIHJDCx.js";import"./DropdownField-DOJA3bn_.js";import"./withOsdkMetrics-gwijxqmw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

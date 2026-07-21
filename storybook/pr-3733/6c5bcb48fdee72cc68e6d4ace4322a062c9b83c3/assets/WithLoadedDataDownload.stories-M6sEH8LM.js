import{f as b,j as a,r as i}from"./iframe-Dveh3_7n.js";import{O as u}from"./object-table-BgmGPxfl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BWKUn3l9.js";import"./Table-Bw0NH9dE.js";import"./index-C8o6Ng59.js";import"./Dialog-DxdZZKDN.js";import"./cross-BKyCdW71.js";import"./svgIconContainer-2Cwik5a2.js";import"./useBaseUiId-BcWjZ5oo.js";import"./InternalBackdrop-C5OHxPcc.js";import"./composite-CksEg6HI.js";import"./index-HiXx80UP.js";import"./index-Bcy8BxQF.js";import"./index-BXuXZ7Ln.js";import"./useEventCallback-BLv-rZn-.js";import"./SkeletonBar-B-QakKbd.js";import"./LoadingCell-B1HU1v59.js";import"./ColumnConfigDialog-CiPfwC7u.js";import"./DraggableList-fiz6Z72l.js";import"./search-BePt087D.js";import"./Input-CF6xCn_p.js";import"./useControlled-BOQZVcOd.js";import"./Button-BuMr7WvO.js";import"./small-cross-CutT8YRk.js";import"./ActionButton-B8V2r37_.js";import"./Checkbox-DwR-TLsX.js";import"./useValueChanged-DDvSNJew.js";import"./CollapsiblePanel-BUQFRqeq.js";import"./MultiColumnSortDialog-BJyUaZuy.js";import"./MenuTrigger-B0pLMlUc.js";import"./CompositeItem-BtmdcoIR.js";import"./ToolbarRootContext-CLsNpSj0.js";import"./getDisabledMountTransitionStyles-D4PbU33c.js";import"./getPseudoElementBounds-SZI96r56.js";import"./chevron-down-BB85PjhU.js";import"./index-j3Zla7Xg.js";import"./error-DlKoKQgC.js";import"./BaseCbacBanner-GXETkbsn.js";import"./makeExternalStore-Bv2nHlRZ.js";import"./Tooltip-CWCZKsd8.js";import"./PopoverPopup-yN8GTRSX.js";import"./toNumber-D7Lpdau6.js";import"./useOsdkClient-CfZ6Zie3.js";import"./tick-CLdCyBtc.js";import"./DropdownField-BXiNJLJQ.js";import"./withOsdkMetrics-BeTCQocI.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

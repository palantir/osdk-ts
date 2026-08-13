import{f as b,j as a,r as i}from"./iframe-DB-361_v.js";import{O as u}from"./object-table-DygeJIg-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-zvjHNL09.js";import"./Table-BMddCm1U.js";import"./index-DdwLnrfs.js";import"./Dialog-C_ZEA6-F.js";import"./cross-CgBmw6jw.js";import"./svgIconContainer-tDogG8TB.js";import"./useBaseUiId-Dyby1NGR.js";import"./InternalBackdrop-DH85mJku.js";import"./composite-CEGpAhVN.js";import"./index-Bd_TtvqJ.js";import"./index-LD-tkTix.js";import"./index-BdeL7aWA.js";import"./useEventCallback-BkCnz6o6.js";import"./SkeletonBar-CNIBkP7B.js";import"./LoadingCell-BzxB7WCq.js";import"./ColumnConfigDialog-DE30qmZG.js";import"./DraggableList-UkQ3xT_w.js";import"./search-Y_2o6rdR.js";import"./Input-Du43rCnX.js";import"./useControlled-B9yE7kao.js";import"./isEqual-Dc-n6KEk.js";import"./isObject-CfOFIxrc.js";import"./Button-B9h9wyoq.js";import"./ActionButton-BLU-1Wm8.js";import"./Checkbox-Daxi2-nV.js";import"./useValueChanged-SAxhXoib.js";import"./CollapsiblePanel-Cb4bdYA2.js";import"./MultiColumnSortDialog-CtDren4G.js";import"./MenuTrigger-mj7T66LW.js";import"./CompositeItem-DCbSD_ZK.js";import"./ToolbarRootContext-DLRpCM8y.js";import"./getDisabledMountTransitionStyles-xd7EQLxb.js";import"./getPseudoElementBounds-qNjk-dq5.js";import"./chevron-down-DXD_htwf.js";import"./index-z1u9RwtB.js";import"./error-B4op4QY1.js";import"./BaseCbacBanner-Cw82aSH0.js";import"./makeExternalStore-D-AXHTbe.js";import"./Tooltip-BYVX-p84.js";import"./PopoverPopup-CdAETliG.js";import"./toNumber-D4zUsFv4.js";import"./useOsdkClient-Rh48KMqD.js";import"./tick-DIaQ-Rv8.js";import"./DropdownField-CO0ZSj3k.js";import"./withOsdkMetrics-5AfJM7Y3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

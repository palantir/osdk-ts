import{f as b,j as a,r as i}from"./iframe-p3IeMUNx.js";import{O as u}from"./object-table-DMq60SRr.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dxl9yj2t.js";import"./Table-D26iFsYj.js";import"./index-BULPiBpC.js";import"./Dialog-CwI5bucu.js";import"./cross-DE1acqN6.js";import"./svgIconContainer-C074LzqQ.js";import"./useBaseUiId-9ZghOPbk.js";import"./InternalBackdrop-M1X3fXBu.js";import"./composite-B_sqO-Ol.js";import"./index-0gcP8RHj.js";import"./index-4loaUpxI.js";import"./index-SBDf6jYM.js";import"./useEventCallback-BZXWeOKX.js";import"./SkeletonBar-F3ibf3nT.js";import"./LoadingCell-B48yKaK_.js";import"./ColumnConfigDialog-86LqP4FN.js";import"./DraggableList-DZ6MIpPd.js";import"./search-CIORHShm.js";import"./Input-DHCbfZ9-.js";import"./useControlled-DVFFVC-J.js";import"./isEqual-BmkJe91a.js";import"./isObject-Bjp3zGgI.js";import"./Button-BoSagEuJ.js";import"./ActionButton-BOIm9MhK.js";import"./Checkbox-CGQIQcqE.js";import"./useValueChanged-vXe4PRs_.js";import"./CollapsiblePanel-B7zRzfQn.js";import"./MultiColumnSortDialog-BCSIRLEy.js";import"./MenuTrigger-DKcbrgaU.js";import"./CompositeItem-Dv5btcOe.js";import"./ToolbarRootContext-aK8i6zpw.js";import"./getDisabledMountTransitionStyles-jEkwWXiG.js";import"./getPseudoElementBounds-GbCW81aG.js";import"./chevron-down-CxgEXWSt.js";import"./index-D-b1dQdL.js";import"./error-CvL-VOeT.js";import"./BaseCbacBanner-CtaljxYG.js";import"./makeExternalStore-BM2PidB1.js";import"./Tooltip-B2jVc_zD.js";import"./PopoverPopup-DEFPVWGr.js";import"./toNumber-DxnGe_RM.js";import"./useOsdkClient-Dctg05hc.js";import"./tick-D-F4wiol.js";import"./DropdownField-JMWpNW-e.js";import"./withOsdkMetrics-Djb3i1l3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

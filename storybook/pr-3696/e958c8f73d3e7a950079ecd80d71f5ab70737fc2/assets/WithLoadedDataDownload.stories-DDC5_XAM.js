import{f as b,j as a,r as i}from"./iframe-Drs9PtpT.js";import{O as u}from"./object-table-2c12ukFT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-E4CpQqjO.js";import"./Table-BPooovDQ.js";import"./index-BFJ9VRsG.js";import"./Dialog-BONrRfW4.js";import"./cross-DM4c_Ehx.js";import"./svgIconContainer-DFiUxhoB.js";import"./useBaseUiId-CsSh5-M6.js";import"./InternalBackdrop--I8qbZny.js";import"./composite-CGsQF29V.js";import"./index-BBwlcU-i.js";import"./index-fpVPsiDF.js";import"./index-BAUS1_dg.js";import"./useEventCallback-DdxQ4cSo.js";import"./SkeletonBar-K90X0GlX.js";import"./LoadingCell-iFghZwJ9.js";import"./ColumnConfigDialog-BZG8R8jz.js";import"./DraggableList-Du0UPfKG.js";import"./search-Cla38eR_.js";import"./Input-BaILboJh.js";import"./useControlled-DkxCviXg.js";import"./Button-BW5dLyJk.js";import"./small-cross-D5krY5Yr.js";import"./ActionButton-FW47NW9h.js";import"./Checkbox-BpNtduyJ.js";import"./useValueChanged-pg2MZp9L.js";import"./CollapsiblePanel-BF_ekJln.js";import"./MultiColumnSortDialog-DOrhZ9Fi.js";import"./MenuTrigger-BbPGiurK.js";import"./CompositeItem-DneLKGg6.js";import"./ToolbarRootContext-C8W-kuVs.js";import"./getDisabledMountTransitionStyles-tXuQWLsv.js";import"./getPseudoElementBounds-D8DbuHAi.js";import"./chevron-down-CWlc4pKw.js";import"./index-DhDdmZ2c.js";import"./error-DoFECo31.js";import"./BaseCbacBanner-A3_VoHGe.js";import"./makeExternalStore-C7LxlEOX.js";import"./Tooltip-CJtxpGZZ.js";import"./PopoverPopup-BvDmYjrv.js";import"./toNumber-BLEuXgZx.js";import"./useOsdkClient-CchgGDFY.js";import"./tick-CGdS0h8h.js";import"./DropdownField-B1kjauVP.js";import"./withOsdkMetrics-DS0s9Yhu.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CMfq1HPL.js";import{O as u}from"./object-table-CcCF9xfD.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DoN82JnL.js";import"./Table-lnk4PNlm.js";import"./index-ZtSJidyR.js";import"./Dialog-AYBhRi3p.js";import"./cross-DI771Rnq.js";import"./svgIconContainer-BrnRNdI4.js";import"./useBaseUiId-Doagaslz.js";import"./InternalBackdrop-Dc-khzij.js";import"./composite-BMLB8REs.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./index-C4fS6aHe.js";import"./useEventCallback-k47TyR1L.js";import"./SkeletonBar-GGSFl_LP.js";import"./LoadingCell-isd95lGx.js";import"./ColumnConfigDialog-D7hrX442.js";import"./DraggableList-CskXfy2I.js";import"./search-CFS1aLLr.js";import"./Input-DAfCa_F_.js";import"./useControlled-DxbWxp5f.js";import"./Button-D9k27imK.js";import"./small-cross-CdfUGob6.js";import"./ActionButton-r16LsqMr.js";import"./Checkbox-AFR3J6LC.js";import"./useValueChanged-DEnQRlze.js";import"./CollapsiblePanel-DYiqZ6YX.js";import"./MultiColumnSortDialog-D-eE-EbX.js";import"./MenuTrigger-tpx4AhlM.js";import"./CompositeItem-4nYPF74E.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./getDisabledMountTransitionStyles-DqkNlWWo.js";import"./getPseudoElementBounds-CQ5YRcHT.js";import"./chevron-down-BB1rr6dV.js";import"./index-BOBP5vHC.js";import"./error-CdY5cnSm.js";import"./BaseCbacBanner-C_FfohEN.js";import"./makeExternalStore-DbDNXFhx.js";import"./Tooltip-oJ90YrUX.js";import"./PopoverPopup-cKWzGieP.js";import"./debounce-BkXoP2me.js";import"./useOsdkClient-CosiI0hK.js";import"./tick-DhgpUjs3.js";import"./DropdownField-6o7zN8fP.js";import"./isEqual-BFJpHzgw.js";import"./withOsdkMetrics-CzIhdDBm.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

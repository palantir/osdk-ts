import{f as b,j as a,r as i}from"./iframe-sFkKU2EW.js";import{O as u}from"./object-table-B3v0WA7i.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-lMjGN9O9.js";import"./index-C1mtpbbb.js";import"./Dialog-Dr0_knAV.js";import"./cross-Bblj5XEn.js";import"./svgIconContainer-CTKs33eW.js";import"./useBaseUiId-2GBtkKH8.js";import"./InternalBackdrop-DMI4zPFa.js";import"./composite-BWqY2mYD.js";import"./index-D9YZPkpb.js";import"./index-MBbYPXaC.js";import"./index-DMVl0OVE.js";import"./useEventCallback-DTEoozzd.js";import"./SkeletonBar-yb79BTsc.js";import"./LoadingCell-BbboCVej.js";import"./ColumnConfigDialog-a2pYwYfl.js";import"./DraggableList-ShBPaOoB.js";import"./search-C5MyxlXn.js";import"./Input-HNcQN8UH.js";import"./useControlled-CO-q6SPI.js";import"./isEqual-Bie7IRiN.js";import"./isObject-izUB8-_H.js";import"./Button-BzrUlVJG.js";import"./ActionButton-B2-nWb-3.js";import"./Checkbox-DER-NUfx.js";import"./useValueChanged-Cs053s6l.js";import"./CollapsiblePanel-Cr-QFvJF.js";import"./MultiColumnSortDialog-0vEef6gt.js";import"./MenuTrigger-Dcbu3aeb.js";import"./CompositeItem-eIp0TU0l.js";import"./ToolbarRootContext-D3tP2Ava.js";import"./getDisabledMountTransitionStyles-J18KEhlf.js";import"./getPseudoElementBounds-DUtwLibb.js";import"./chevron-down-ClDz1vs8.js";import"./index-KH1gmPLT.js";import"./error-BZvSZmgV.js";import"./BaseCbacBanner-1WcoocYE.js";import"./makeExternalStore-CocMOkpk.js";import"./Tooltip-CYG3Z_J6.js";import"./PopoverPopup-a3UQvS-R.js";import"./toNumber-UiKID2wH.js";import"./useOsdkClient-Cbm-ZTUZ.js";import"./tick-DzJzocCC.js";import"./DropdownField-Df3bZfRm.js";import"./withOsdkMetrics-BHzd1wiG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

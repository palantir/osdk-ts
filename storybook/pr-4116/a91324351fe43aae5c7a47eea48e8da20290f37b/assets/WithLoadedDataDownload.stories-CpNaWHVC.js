import{f as b,j as a,r as i}from"./iframe-CZutwAHo.js";import{O as u}from"./object-table-BbJRuFno.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cn3SJHww.js";import"./Table-B8cgGfQL.js";import"./index-CppgNV0M.js";import"./Dialog-B1VpodKR.js";import"./cross-D02obdgD.js";import"./svgIconContainer-CmX1H1mx.js";import"./useBaseUiId-CtEICjky.js";import"./InternalBackdrop-G99DwSaZ.js";import"./composite-mcUSxhXz.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./index-HA6Va8NR.js";import"./useEventCallback-DZshVR4a.js";import"./SkeletonBar-B0Lj-A75.js";import"./LoadingCell-DZJOvAcQ.js";import"./ColumnConfigDialog-Bu4boOIF.js";import"./DraggableList-C-UqdMK0.js";import"./search-C59PF3w9.js";import"./Input-oDj_0Z0d.js";import"./useControlled-DwVRdNhF.js";import"./Button-sSK8eFI-.js";import"./small-cross-CFVLA5Ia.js";import"./ActionButton-axhhg9v5.js";import"./Checkbox-CgMU5S4K.js";import"./useValueChanged-CZKUaGQu.js";import"./CollapsiblePanel-Dsv7xvDY.js";import"./MultiColumnSortDialog-WIJhht9a.js";import"./MenuTrigger-C2muNGYu.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./getDisabledMountTransitionStyles-BZ863oN2.js";import"./getPseudoElementBounds-D34_EoM3.js";import"./chevron-down--5qYG9Xz.js";import"./index-io1wfiP6.js";import"./error-CZtG4Hsy.js";import"./BaseCbacBanner-mfv3mmX8.js";import"./makeExternalStore-CCR0CM05.js";import"./Tooltip-8A2JRkIJ.js";import"./PopoverPopup-CJaw97SK.js";import"./debounce-0IA_cAla.js";import"./useOsdkClient-DgvAplUI.js";import"./tick-Dwj_TbVz.js";import"./DropdownField-CGLxykfT.js";import"./isEqual-CD-t15N1.js";import"./withOsdkMetrics-Bw7lmz7K.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Dm9tPq9-.js";import{O as u}from"./object-table-B2wyECGp.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DbanGSn8.js";import"./Table-0jLCAVha.js";import"./index-SudSBJ9d.js";import"./Dialog-BDOz5nRC.js";import"./cross-DovxETch.js";import"./svgIconContainer-DLeOey4i.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./InternalBackdrop-CQfhuxOD.js";import"./composite-DwLeZJsP.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./index-jJsu7-Bg.js";import"./useEventCallback-D0i4hHrz.js";import"./SkeletonBar-Co2KJNpr.js";import"./LoadingCell-ClA53876.js";import"./ColumnConfigDialog-CCOQZeJ3.js";import"./DraggableList-DmtqR8L7.js";import"./search-DpPE568F.js";import"./Input-1s2rxWuw.js";import"./useControlled-zgk6WMo4.js";import"./Button-D711FISQ.js";import"./small-cross-D1_y47j8.js";import"./ActionButton-BoWHV299.js";import"./Checkbox-BgLuiuwc.js";import"./useValueChanged-T9NupB12.js";import"./CollapsiblePanel-oCJFTmUj.js";import"./MultiColumnSortDialog-DkH22_Rz.js";import"./MenuTrigger-Cfhmo_uS.js";import"./CompositeItem-Brc_cUGL.js";import"./ToolbarRootContext-DattZO7d.js";import"./getDisabledMountTransitionStyles-LF-SO7gC.js";import"./getPseudoElementBounds-bh7QF3ZR.js";import"./chevron-down-COzwHJk7.js";import"./index-BwyOjzrJ.js";import"./error-CX1V2PGn.js";import"./BaseCbacBanner-BSaJ_SWa.js";import"./makeExternalStore-CEHTDEAH.js";import"./Tooltip-Dj98utpN.js";import"./isObject-iDHKARFT.js";import"./debounce-v3DZ4rGU.js";import"./useOsdkClient-DfBdKLO7.js";import"./tick-BuAP4hF8.js";import"./DropdownField-C2nHBICk.js";import"./isEqual-D7o6NFD6.js";import"./_baseIsEqual-CK_tMD84.js";import"./withOsdkMetrics-4sk2cJVp.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

import{f as b,j as a,r as i}from"./iframe-B_i7Ph77.js";import{O as u}from"./object-table-Dqxg3C0T.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvjJ0SzX.js";import"./Table-DUecyy4E.js";import"./index-COajzjZ8.js";import"./Dialog-Bkf6fLTO.js";import"./cross-r8gHAdxN.js";import"./svgIconContainer-F3PywaHC.js";import"./useBaseUiId-CW69tl4R.js";import"./InternalBackdrop-BWf_EDHi.js";import"./composite-uqQjgKuY.js";import"./index-BfVetZX7.js";import"./index-CKxO46Y-.js";import"./index-ChNkp7Fd.js";import"./useEventCallback-C6UUjjRV.js";import"./SkeletonBar-BE3AUhJe.js";import"./LoadingCell-By6GkYHN.js";import"./ColumnConfigDialog-BImhbnq8.js";import"./DraggableList-CRRNRTpO.js";import"./search-Ci82BY-M.js";import"./Input-Dl5sH1Q7.js";import"./useControlled-CPBNOwGg.js";import"./Button-D37UVdN3.js";import"./small-cross-B6VZzdKR.js";import"./ActionButton-BElQCvpZ.js";import"./Checkbox-BhU4N9_z.js";import"./useValueChanged-BtgVct8c.js";import"./CollapsiblePanel-t-tCNPWx.js";import"./MultiColumnSortDialog-CTqfEDWn.js";import"./MenuTrigger-CY1YIzS_.js";import"./CompositeItem-EZxEWVoS.js";import"./ToolbarRootContext-0-u9G15j.js";import"./getDisabledMountTransitionStyles-1rLXg44K.js";import"./getPseudoElementBounds-aFk6WU6_.js";import"./chevron-down-BOncWiCm.js";import"./index-DvLIeE9l.js";import"./error-DMPOuvoW.js";import"./BaseCbacBanner-DAgiVInW.js";import"./makeExternalStore-Bzou7Lqu.js";import"./Tooltip-geVxKkMd.js";import"./PopoverPopup-DZqF5shI.js";import"./debounce-oLXmJ61g.js";import"./useOsdkClient-DdwrseQe.js";import"./tick-zFsHhUQl.js";import"./DropdownField-DuoCpizZ.js";import"./isEqual-AN1PSN9E.js";import"./withOsdkMetrics-DGIAIiU_.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-B_x9XvmG.js";import{O as u}from"./object-table-l5ZKxGcv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DITc7NUo.js";import"./Table-BxY4gdLK.js";import"./index-C3PElE5z.js";import"./Dialog-QLZadL9p.js";import"./cross-CXaMbnSI.js";import"./svgIconContainer-D4Odc14H.js";import"./useBaseUiId-BiDC3o6s.js";import"./InternalBackdrop-xOer-FmO.js";import"./composite-BZvFUogL.js";import"./index-BLoCQL3a.js";import"./index-BBIYY3UR.js";import"./index-dzoRTbgc.js";import"./useEventCallback-CTv-Axwi.js";import"./SkeletonBar-BsXsv3-p.js";import"./LoadingCell-CjCa9wK8.js";import"./ColumnConfigDialog-D59UQMdg.js";import"./DraggableList-dwa4l-3n.js";import"./search-DnO_YLk6.js";import"./Input-CrrumfsJ.js";import"./useControlled-CmgwpyDU.js";import"./Button-C6ny7jzS.js";import"./small-cross-DvnB8WJm.js";import"./ActionButton-ByK1EtK2.js";import"./Checkbox-BZHsgA9m.js";import"./useValueChanged-CInVWb7b.js";import"./CollapsiblePanel-DrJyDo7E.js";import"./MultiColumnSortDialog-B8T_q1dR.js";import"./MenuTrigger-B0tpP2Ga.js";import"./CompositeItem-C9DYqB7p.js";import"./ToolbarRootContext-7JgjqYNy.js";import"./getDisabledMountTransitionStyles-DoJBgGot.js";import"./getPseudoElementBounds-yhz1puC4.js";import"./chevron-down-Cacce87-.js";import"./index-wwXQ8xo5.js";import"./error-CpyC-KmL.js";import"./BaseCbacBanner-6ECyv6vF.js";import"./makeExternalStore-BY--bFis.js";import"./Tooltip-C9TvRN4R.js";import"./PopoverPopup-BI1Nn7oq.js";import"./debounce-BIWVV4l_.js";import"./useOsdkClient-CBHc-CmL.js";import"./tick-CeNcKQ7_.js";import"./DropdownField-sX4nPjva.js";import"./isEqual-BbGOrC67.js";import"./withOsdkMetrics-BwmTGSf3.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

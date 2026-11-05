import{f as b,j as a,r as i}from"./iframe-Co9BLc26.js";import{O as u}from"./object-table-CLwi_Yce.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CjIZGyxJ.js";import"./Table-CifDJqyc.js";import"./index-CaXavGNz.js";import"./Dialog-lgpNH8YB.js";import"./cross-CdeazAmw.js";import"./svgIconContainer-XH9sO27g.js";import"./useBaseUiId-B7X46CyE.js";import"./InternalBackdrop-BPl8mach.js";import"./composite-Bs7VpVD-.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./index-ft_Pdv6a.js";import"./useEventCallback-C2F-xdBM.js";import"./SkeletonBar-hmw1BSr0.js";import"./LoadingCell-Z-Oxz0e-.js";import"./ColumnConfigDialog-Hrpl0G3s.js";import"./DraggableList-CQJmGSr0.js";import"./search-DQyAxhHi.js";import"./Input-B7An9dFp.js";import"./useControlled-Dm9Z_trU.js";import"./Button-CKhU91Nr.js";import"./small-cross-Clv-yC5T.js";import"./ActionButton-D9teap9J.js";import"./Checkbox-DQJvh9sN.js";import"./useValueChanged-CdK4eivV.js";import"./CollapsiblePanel-GyOfNAAh.js";import"./MultiColumnSortDialog-fQcgWBnJ.js";import"./MenuTrigger-C8J89teT.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./getDisabledMountTransitionStyles-Bm6XJ5DP.js";import"./getPseudoElementBounds-BE5wQuFp.js";import"./chevron-down-C2RhY0pV.js";import"./index-D2VnSIP3.js";import"./error-DApxBtMc.js";import"./BaseCbacBanner-DCA480_X.js";import"./makeExternalStore-C6cHHmQm.js";import"./Tooltip-YDfZI3Un.js";import"./PopoverPopup-DcMrtKCc.js";import"./debounce-BCFaqdaB.js";import"./useOsdkClient-CASwPT7t.js";import"./tick-OrqCabsC.js";import"./DropdownField-YJ5OIQJX.js";import"./isEqual-LvWzQAZT.js";import"./withOsdkMetrics-D1C2IRuJ.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

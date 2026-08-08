import{f as b,j as a,r as i}from"./iframe-Jx-ulL5C.js";import{O as u}from"./object-table-q3UrjN6F.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DQOtA23C.js";import"./Table-DZbRuhsF.js";import"./index-DbcvcRjy.js";import"./Dialog-BRvHhEdd.js";import"./cross-BM4LNdzl.js";import"./svgIconContainer-DA5CXbWv.js";import"./useBaseUiId-DlGP4CyH.js";import"./InternalBackdrop-6LUyu52Z.js";import"./composite-Ci3x3D-j.js";import"./index-C-0GQm9S.js";import"./index-CGN3jVUK.js";import"./index-CdQh5CWa.js";import"./useEventCallback-BBmWvDTH.js";import"./SkeletonBar-BXzTGbHS.js";import"./LoadingCell-qf1fOl3j.js";import"./ColumnConfigDialog-BmBxaPQ0.js";import"./DraggableList-BD5HhNtg.js";import"./search-DKR4hHlP.js";import"./Input-xfSfvcdJ.js";import"./useControlled-DTXqp68j.js";import"./isEqual-nIAJKi_O.js";import"./isObject-BplzMpX4.js";import"./Button-BgbvTS34.js";import"./ActionButton-URjGw98Y.js";import"./Checkbox-D9CUAKPQ.js";import"./useValueChanged-MGFURfEB.js";import"./CollapsiblePanel-CvwhhdJE.js";import"./MultiColumnSortDialog-BzisExGf.js";import"./MenuTrigger-CsTa46EY.js";import"./CompositeItem-C-U5_30J.js";import"./ToolbarRootContext-DjVkVQIx.js";import"./getDisabledMountTransitionStyles-o05RofWl.js";import"./getPseudoElementBounds-DKJ-1ie9.js";import"./chevron-down-DmKonuNt.js";import"./index-A1POwUcc.js";import"./error-Bqu3bVtd.js";import"./BaseCbacBanner-CMl-VU3K.js";import"./makeExternalStore-CrS-QWtj.js";import"./Tooltip-hRlt1KoC.js";import"./PopoverPopup-CjIG7Pek.js";import"./toNumber-CcKit7Y-.js";import"./useOsdkClient-BsIcKaUN.js";import"./tick-C7uyqAjE.js";import"./DropdownField-auraDr24.js";import"./withOsdkMetrics-B-ZB5Rqw.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

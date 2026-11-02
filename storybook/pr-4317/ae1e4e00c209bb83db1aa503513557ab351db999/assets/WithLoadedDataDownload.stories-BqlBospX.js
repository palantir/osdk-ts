import{f as b,j as a,r as i}from"./iframe-CgfdIm0T.js";import{O as u}from"./object-table-DrnlDv9c.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C8qWAL46.js";import"./Table-DUMakJ11.js";import"./index-BeSyGo3F.js";import"./Dialog-U0YBM8su.js";import"./cross-CWciybKu.js";import"./svgIconContainer-DQ0tbGLY.js";import"./useBaseUiId-BuuF3bkV.js";import"./InternalBackdrop-qMgkwTyz.js";import"./composite-CUpx3Hda.js";import"./index-B8rhYuyr.js";import"./index-bby2SWWb.js";import"./index-BYKYJzqq.js";import"./useEventCallback-roPvTisA.js";import"./SkeletonBar-BRUSZP5d.js";import"./LoadingCell-CpCzQijd.js";import"./ColumnConfigDialog-CoKK8VcE.js";import"./DraggableList-Dr8Zz3hH.js";import"./search-DENXSVyb.js";import"./Input-BG9nzqHz.js";import"./useControlled-B0N5dBnJ.js";import"./Button-CVc3RSfH.js";import"./small-cross-DX0KVrVi.js";import"./ActionButton-CcLOh3Yb.js";import"./Checkbox-DTTupP5N.js";import"./useValueChanged-0xGZfbNw.js";import"./CollapsiblePanel-CNv0K6GO.js";import"./MultiColumnSortDialog-C6XaIndo.js";import"./MenuTrigger-DZtYSqfe.js";import"./CompositeItem-BTF_cTSf.js";import"./ToolbarRootContext-DMK8ajZX.js";import"./getDisabledMountTransitionStyles-COYOVfxZ.js";import"./getPseudoElementBounds-FnH3Aw9k.js";import"./chevron-down-CiBD6Dqi.js";import"./index-BBcDpAeT.js";import"./error-Bu8LxMV7.js";import"./BaseCbacBanner-C_N-7cgH.js";import"./makeExternalStore-BNPt347_.js";import"./Tooltip-ygywzpjU.js";import"./PopoverPopup-DlHSMVYr.js";import"./debounce-DQksQltd.js";import"./useOsdkClient-B3iR8qwm.js";import"./tick-hxPJxWFp.js";import"./DropdownField-BMHyrqgr.js";import"./isEqual-D3J8sFzN.js";import"./withOsdkMetrics-BU1Vym1S.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

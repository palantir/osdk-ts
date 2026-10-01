import{f as b,j as a,r as i}from"./iframe-D555MuJ0.js";import{O as u}from"./object-table-C02Hy59p.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DI0YqJp4.js";import"./Table-BtXxIuTu.js";import"./index-Cg9uHUun.js";import"./Dialog-DAOQ-pdw.js";import"./cross-IYmx4x0m.js";import"./svgIconContainer-bAOTCoFN.js";import"./useBaseUiId-B4R9GsGS.js";import"./InternalBackdrop-D0WzfKwV.js";import"./composite-C3jNveZb.js";import"./index-CkTsdOkp.js";import"./index-BVyJBQqR.js";import"./index-BOqKZcef.js";import"./useEventCallback-C_68HPnA.js";import"./SkeletonBar-CDnvbMD_.js";import"./LoadingCell-ZbJVUXNh.js";import"./ColumnConfigDialog-DgJJ0HXo.js";import"./DraggableList-CpUYUtRA.js";import"./search-B-aW4zGh.js";import"./Input-CueXhQ4V.js";import"./useControlled-BXEwoD5-.js";import"./Button-B8XR24zN.js";import"./small-cross-DYYtvTQk.js";import"./ActionButton-P4ce0KZA.js";import"./Checkbox-DrgB9DWr.js";import"./useValueChanged-DoyhwWSp.js";import"./CollapsiblePanel-DiuaiCTg.js";import"./MultiColumnSortDialog-BkHFTNzA.js";import"./MenuTrigger-CDNFD1b5.js";import"./CompositeItem-B5t7ZVS0.js";import"./ToolbarRootContext-B_tLpux3.js";import"./getDisabledMountTransitionStyles-NNQg5thc.js";import"./getPseudoElementBounds-DkB34pum.js";import"./chevron-down-CJd6fkFq.js";import"./index-C8_vB7gu.js";import"./error-DVePqkqY.js";import"./BaseCbacBanner-BsU6b_xT.js";import"./makeExternalStore-BcjkXJ5O.js";import"./Tooltip-Bxzu-pAW.js";import"./PopoverPopup-w0tQerBi.js";import"./debounce-7vABva-v.js";import"./useOsdkClient-BRTJpYwY.js";import"./tick-Dx26yCkG.js";import"./DropdownField-DRorYhAL.js";import"./isEqual-BGCP9pRy.js";import"./withOsdkMetrics-Bbt3lTlO.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

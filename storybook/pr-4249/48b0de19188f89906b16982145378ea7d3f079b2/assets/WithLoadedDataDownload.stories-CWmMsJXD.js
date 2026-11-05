import{f as b,j as a,r as i}from"./iframe-GU9uuCxz.js";import{O as u}from"./object-table-D1ni6jd4.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DiuBXggc.js";import"./Table-Bfyuy1vX.js";import"./index-wbqNQUCN.js";import"./Dialog-D9fiqstc.js";import"./cross-lUtkcXvq.js";import"./svgIconContainer-lMVp7Q5D.js";import"./useBaseUiId-izgrlbm8.js";import"./InternalBackdrop-JyM_yboG.js";import"./composite-D5bxH43Y.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./useEventCallback-DbxWTdO3.js";import"./SkeletonBar-DsaZzNM8.js";import"./LoadingCell-oN6k6fLQ.js";import"./ColumnConfigDialog-DuU5N0AY.js";import"./DraggableList-ynrUIkKs.js";import"./search-BwM3LpYv.js";import"./Input-D7wHTW3A.js";import"./useControlled-DeKlo4Fr.js";import"./Button-BfmdkMAB.js";import"./small-cross-CD2Qn0fR.js";import"./ActionButton-1COA3Sdw.js";import"./Checkbox-nA6cG1JI.js";import"./useValueChanged-DwRKotGN.js";import"./CollapsiblePanel-BW9VYb1e.js";import"./MultiColumnSortDialog-C4P1ac3Y.js";import"./MenuTrigger-DvRL7yRT.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./getDisabledMountTransitionStyles-C9feCk9b.js";import"./getPseudoElementBounds-D5nIJXlV.js";import"./chevron-down-TCTUxLeS.js";import"./index-C3igxD5N.js";import"./error-BZwp4K-_.js";import"./BaseCbacBanner-sJ6Gr1uy.js";import"./makeExternalStore-B8P6l5nx.js";import"./Tooltip-T6_qKaR2.js";import"./isObject-iIy0QNEy.js";import"./debounce-CRbn1ibT.js";import"./useOsdkClient-Cw50fjDU.js";import"./tick-C-CpglM8.js";import"./DropdownField-DIOwQMdG.js";import"./isEqual-DZy78p28.js";import"./_baseIsEqual-Dd9svSeM.js";import"./withOsdkMetrics-BKdRrZP1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

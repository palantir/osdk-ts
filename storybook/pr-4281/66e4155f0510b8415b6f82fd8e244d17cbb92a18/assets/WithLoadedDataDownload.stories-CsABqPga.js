import{f as b,j as a,r as i}from"./iframe-BLF1KQu4.js";import{O as u}from"./object-table-CqtGn1QO.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-GcktYcA3.js";import"./Table-BQK0Clb8.js";import"./index-aXPerbbD.js";import"./Dialog-D_it6VW5.js";import"./cross-D5Owe--z.js";import"./svgIconContainer-DjnJEiXc.js";import"./useBaseUiId-BxovN8d6.js";import"./InternalBackdrop-8YL1-Sw7.js";import"./composite-fyXwWWU2.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./index-CNufdcVg.js";import"./useEventCallback-CZHl-UH0.js";import"./SkeletonBar-CuJtrTbh.js";import"./LoadingCell-DQVtZ2uu.js";import"./ColumnConfigDialog-DGZd3AJ3.js";import"./DraggableList-D-ibz47z.js";import"./search-jxTo-jPn.js";import"./Input-ep0tMe9Y.js";import"./useControlled-BnRS1sX7.js";import"./Button-YyRiSJZP.js";import"./small-cross-D2kARGCF.js";import"./ActionButton-DJbMDa4y.js";import"./Checkbox-Cz2c9LTI.js";import"./useValueChanged-rkrZLPbB.js";import"./CollapsiblePanel-C1eEG4ny.js";import"./MultiColumnSortDialog-D38u1zNw.js";import"./MenuTrigger-B1erjAsz.js";import"./CompositeItem-jL-VyW-C.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./getDisabledMountTransitionStyles-DoQQxJRd.js";import"./getPseudoElementBounds-C6VfQ6WO.js";import"./chevron-down-CtuyY29H.js";import"./index-DoZkCOy9.js";import"./error-8EJJ_3qq.js";import"./BaseCbacBanner-DOrbPdl4.js";import"./makeExternalStore-G2m-9f72.js";import"./Tooltip-CgClAe-q.js";import"./PopoverPopup-148tTgSp.js";import"./debounce-D7Z_8Dqm.js";import"./useOsdkClient-GmjUNKMk.js";import"./tick-By4yjMKZ.js";import"./DropdownField-DWAvJ7rF.js";import"./isEqual-BlXyHZ5h.js";import"./withOsdkMetrics-JDZWgyN8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

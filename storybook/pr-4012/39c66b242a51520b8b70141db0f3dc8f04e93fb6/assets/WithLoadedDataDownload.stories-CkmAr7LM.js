import{f as b,j as a,r as i}from"./iframe-ByMeZtzX.js";import{O as u}from"./object-table-BWfDz0us.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CKCWlQAf.js";import"./Table-CJnRggrL.js";import"./index-MjIH22RC.js";import"./Dialog-ZxxUTcFp.js";import"./cross-BL14zVVR.js";import"./svgIconContainer-BWYJe8Lc.js";import"./useBaseUiId-COE4qdfZ.js";import"./InternalBackdrop-Dunp36dg.js";import"./composite-BJmqHe58.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./index-BWU4Zziw.js";import"./useEventCallback-CvBku6w-.js";import"./SkeletonBar-DKliZ6jy.js";import"./LoadingCell-By3X5tWM.js";import"./ColumnConfigDialog-BkjViHOX.js";import"./DraggableList-ujhsv7NO.js";import"./search-Cq1vvGyL.js";import"./Input-Cu1JHp0_.js";import"./useControlled-DCuR4lHr.js";import"./Button-CfzUE4zU.js";import"./small-cross-C4a4JTK6.js";import"./ActionButton-DhKaPnov.js";import"./Checkbox-WAVkAh-5.js";import"./useValueChanged-D09un0L_.js";import"./CollapsiblePanel-CD29H3XJ.js";import"./MultiColumnSortDialog-BkGokrZQ.js";import"./MenuTrigger-DDD8T7fc.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./getDisabledMountTransitionStyles-SuR5eTaW.js";import"./getPseudoElementBounds-DVrDM1RK.js";import"./chevron-down-Chsl7nyR.js";import"./index-B41_CCIn.js";import"./error-yKJFbcKE.js";import"./BaseCbacBanner-D7vjhjJY.js";import"./makeExternalStore-DbH4cGZ0.js";import"./Tooltip-CP2jx6MZ.js";import"./PopoverPopup-CpgQFEX8.js";import"./debounce-BUN5jtxl.js";import"./useOsdkClient-ixFLeVu3.js";import"./tick-DcrvbN3Y.js";import"./DropdownField-8MU5Z2g6.js";import"./isEqual-DIZ47AXY.js";import"./withOsdkMetrics-CJVxpJaf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

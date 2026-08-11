import{f as b,j as a,r as i}from"./iframe-BWI0v7bU.js";import{O as u}from"./object-table-BRvhrzEG.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BKzGVzbV.js";import"./Table-honY6tNZ.js";import"./index-CKp8zefp.js";import"./Dialog-DUaL9mZT.js";import"./cross-CQNQC0A7.js";import"./svgIconContainer-BKP6lsya.js";import"./useBaseUiId-CbtuVGLX.js";import"./InternalBackdrop-Dag6gQTJ.js";import"./composite-ZOXtixD3.js";import"./index-CR1j9JlH.js";import"./index-D5lI-f2a.js";import"./index-CJ6lkdfM.js";import"./useEventCallback-C6A6kczn.js";import"./SkeletonBar-Bb26MY-Y.js";import"./LoadingCell-Bjhz2UEa.js";import"./ColumnConfigDialog-DLH6MmS0.js";import"./DraggableList-BeyHP_PC.js";import"./search-YfthYXya.js";import"./Input-27_mh9Q3.js";import"./useControlled-C6y9E1N5.js";import"./isEqual-iHLCH-uF.js";import"./isObject-5AKoso39.js";import"./Button-BwmiKCl4.js";import"./ActionButton-_XxrJ1yy.js";import"./Checkbox-BhY0xLP8.js";import"./useValueChanged-CZxF32bS.js";import"./CollapsiblePanel-DrjipFXe.js";import"./MultiColumnSortDialog-45Jb9qWW.js";import"./MenuTrigger-Bvupqx4u.js";import"./CompositeItem-yLYz58Jp.js";import"./ToolbarRootContext-raUjAPMX.js";import"./getDisabledMountTransitionStyles-csXBmIEf.js";import"./getPseudoElementBounds-DvNeRd17.js";import"./chevron-down-D6XjoOpy.js";import"./index-CU_s30uq.js";import"./error-YPxJU-tx.js";import"./BaseCbacBanner-C0i6JqbQ.js";import"./makeExternalStore-CmPHT6zT.js";import"./Tooltip-DWzcSW26.js";import"./PopoverPopup-C2vcW2fT.js";import"./toNumber-Cio0DWgy.js";import"./useOsdkClient-CgaW35u6.js";import"./tick-Bo-Yppgv.js";import"./DropdownField-CI-_pGHR.js";import"./withOsdkMetrics-CnoY1REH.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

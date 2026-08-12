import{f as b,j as a,r as i}from"./iframe-acnc8jNP.js";import{O as u}from"./object-table-DCXf91CR.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C0AHc0KZ.js";import"./Table-BUScjFao.js";import"./index-B2HcsiAS.js";import"./Dialog-HaPlI8uU.js";import"./cross-Bv8-5PKG.js";import"./svgIconContainer-DjMgejtG.js";import"./useBaseUiId-W2eivYCg.js";import"./InternalBackdrop-DEpxkWNz.js";import"./composite-DX6f7iaw.js";import"./index-BRGNHgC5.js";import"./index-BZeQ4uGI.js";import"./index-DIXvuYY6.js";import"./useEventCallback-D6SuZGFS.js";import"./SkeletonBar-DUBCMOxI.js";import"./LoadingCell-zw8kua-H.js";import"./ColumnConfigDialog-LAbRKII0.js";import"./DraggableList-BgUJx3xd.js";import"./search-D7Py9QCX.js";import"./Input-D_7AcYF3.js";import"./useControlled-CL58-5q6.js";import"./isEqual-C5oNx3i8.js";import"./isObject--zvNkZur.js";import"./Button-xirM2J2C.js";import"./ActionButton-DUgA3cC-.js";import"./Checkbox-CWlt2fz8.js";import"./useValueChanged-mNBps3Y1.js";import"./CollapsiblePanel-D_KXlm7t.js";import"./MultiColumnSortDialog-UIRp81gn.js";import"./MenuTrigger-kvlxu44D.js";import"./CompositeItem-uY-l1SPS.js";import"./ToolbarRootContext-D5eO9Pgy.js";import"./getDisabledMountTransitionStyles-DYJIGaAY.js";import"./getPseudoElementBounds-BJR6wqVc.js";import"./chevron-down-C9q_0P71.js";import"./index-B43oBquw.js";import"./error-Cxeuitdp.js";import"./BaseCbacBanner-BkMUSz5_.js";import"./makeExternalStore-C2yWrJUB.js";import"./Tooltip-BLq25BG6.js";import"./PopoverPopup-Dq0wusve.js";import"./toNumber-Bq_nqWh9.js";import"./useOsdkClient-Ddp12YXU.js";import"./tick-W5cBIuY2.js";import"./DropdownField-Bhkpabkk.js";import"./withOsdkMetrics-D-f8kfgF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

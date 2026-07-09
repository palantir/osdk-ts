import{f as b,j as a,r as i}from"./iframe-Dbn3udIq.js";import{O as u}from"./object-table-KuZ9ZNwX.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B08NS0vP.js";import"./Table-unDfru0A.js";import"./index-V8u8oS9z.js";import"./Dialog-JCadx2F1.js";import"./cross-BKogVy2q.js";import"./svgIconContainer-D1SKNX1h.js";import"./useBaseUiId-BA2_gm4V.js";import"./InternalBackdrop-B7UDDOQ5.js";import"./composite-ZGPanSe0.js";import"./index-Cnpq6BkA.js";import"./index-CihIYmhv.js";import"./index-BBh289r0.js";import"./useEventCallback-CXu8eU4c.js";import"./SkeletonBar-31As_fw1.js";import"./LoadingCell-C7t38VOP.js";import"./ColumnConfigDialog-DQ5Cww7Q.js";import"./DraggableList-BgQO8pif.js";import"./search-BIRbNFR3.js";import"./Input-D5HVKjUk.js";import"./useControlled-Dgnrrptl.js";import"./Button-7v_wedFK.js";import"./small-cross-vvRtkJ0X.js";import"./ActionButton-BVkusK0r.js";import"./Checkbox-ADl7utEz.js";import"./useValueChanged-go9Nm7J1.js";import"./CollapsiblePanel-BNfV-1BA.js";import"./MultiColumnSortDialog-DIsZU3JK.js";import"./MenuTrigger-qc-wgbi1.js";import"./CompositeItem-TVEgXngK.js";import"./ToolbarRootContext-KkBA9jha.js";import"./getDisabledMountTransitionStyles-Dm0SzhJ0.js";import"./getPseudoElementBounds-BHiRUFoB.js";import"./chevron-down-Coetg7mV.js";import"./index-oizMRn8D.js";import"./error-CuW4JffS.js";import"./BaseCbacBanner-D0RAmEKH.js";import"./makeExternalStore-BiC33qK3.js";import"./Tooltip-CGnwMRUX.js";import"./PopoverPopup-xrvZWNMe.js";import"./toNumber-DuKCZNeC.js";import"./useOsdkClient-CAIObE7v.js";import"./tick-Cr1nMnnH.js";import"./DropdownField-9FiHHZAx.js";import"./withOsdkMetrics-JBXVlLu-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

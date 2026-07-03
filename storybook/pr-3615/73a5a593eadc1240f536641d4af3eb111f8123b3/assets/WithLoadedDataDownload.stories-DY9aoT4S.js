import{f as b,j as a,r as i}from"./iframe-CWO1fvBo.js";import{O as u}from"./object-table-nMthrIB0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CF_QmvPv.js";import"./Table-C3eES0ov.js";import"./index-BPBU698V.js";import"./Dialog-D0Kb8YHr.js";import"./cross-C53D70xz.js";import"./svgIconContainer-BuDMXWHZ.js";import"./useBaseUiId-DM7x9ZDC.js";import"./InternalBackdrop-yXw9TMxY.js";import"./composite-yBh-VmZz.js";import"./index-BSFgsXl-.js";import"./index-DNZZq66F.js";import"./index-ClMsQ9HA.js";import"./useEventCallback-CLvoly_i.js";import"./SkeletonBar-DySVxWL-.js";import"./LoadingCell-BtYJoqFc.js";import"./ColumnConfigDialog-KUgjW48d.js";import"./DraggableList-CeVnZo23.js";import"./search-CZ_y3M4b.js";import"./Input-D7ZPj5kI.js";import"./useControlled-BZAnElmC.js";import"./Button-BunOl2O4.js";import"./small-cross-BzzVn_ep.js";import"./ActionButton-7aSkANLY.js";import"./Checkbox-D1p96baV.js";import"./minus-CS4ruBfE.js";import"./tick-Djwm-j5q.js";import"./useValueChanged-Uh0h5LXI.js";import"./caret-down-CfEtZvnb.js";import"./CollapsiblePanel-DiVW5mqy.js";import"./MultiColumnSortDialog-CzW6UWJl.js";import"./MenuTrigger-DcUYb6Xb.js";import"./CompositeItem-D8DaB9iF.js";import"./ToolbarRootContext-C4FQfOjX.js";import"./getDisabledMountTransitionStyles-DBwAuNWL.js";import"./getPseudoElementBounds-CuY8cYnw.js";import"./chevron-down-DAr5FmU0.js";import"./index-CBlgFxGV.js";import"./error-ConVINU8.js";import"./BaseCbacBanner-BMEJqiW3.js";import"./makeExternalStore-Cmkt9Gtj.js";import"./Tooltip-_EilQ81I.js";import"./PopoverPopup-DbqRKS1Y.js";import"./toNumber-BFDFxisR.js";import"./useOsdkClient-DuZS-6jc.js";import"./DropdownField-C5DY7VSc.js";import"./withOsdkMetrics-C7u0s7n-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

import{f as b,j as a,r as i}from"./iframe-CNpQMLn4.js";import{O as u}from"./object-table-BLyvvP69.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C_87hQCI.js";import"./Table-CKHZZnzw.js";import"./index-BW4Yrta1.js";import"./Dialog-DXl2YNfS.js";import"./cross-bz0yJczN.js";import"./svgIconContainer-CnZwy1ol.js";import"./useBaseUiId-BEFeXtqj.js";import"./InternalBackdrop-BQLwxrNi.js";import"./composite-B5aODx_K.js";import"./index-D0GIY8Sw.js";import"./index-70VViFzx.js";import"./index-BBT9LILi.js";import"./useEventCallback-BGD-da8d.js";import"./SkeletonBar-D6_cl42u.js";import"./LoadingCell-bVWxjAtl.js";import"./ColumnConfigDialog-BvR16kpm.js";import"./DraggableList-DpuoXQ6W.js";import"./search-Bx_y_py-.js";import"./Input-D7508Bqz.js";import"./useControlled-CMj4rT22.js";import"./Button-D8MovMyN.js";import"./small-cross-CN0ffCO2.js";import"./ActionButton-BoMyeWAC.js";import"./Checkbox-C-_7-haY.js";import"./useValueChanged-BXu9tyLU.js";import"./CollapsiblePanel-xRmNygeC.js";import"./MultiColumnSortDialog-Bw9DZ-4o.js";import"./MenuTrigger-EJKQTHzr.js";import"./CompositeItem-D_m3Y3KB.js";import"./ToolbarRootContext-wbNwzhh0.js";import"./getDisabledMountTransitionStyles-C7sF7ZwL.js";import"./getPseudoElementBounds-bLBVfMZH.js";import"./chevron-down-CGHvEWCM.js";import"./index-CC55HTqK.js";import"./error-Bvjx_arM.js";import"./BaseCbacBanner-CgL403SW.js";import"./makeExternalStore-RFWAkV3y.js";import"./Tooltip-DfzZgj10.js";import"./PopoverPopup-Dzpvdz4g.js";import"./toNumber-uCR_JiTv.js";import"./useOsdkClient-xCwJ0FHU.js";import"./tick-Bvm63nit.js";import"./DropdownField-Et-bIe8C.js";import"./withOsdkMetrics-BO9xsuqL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

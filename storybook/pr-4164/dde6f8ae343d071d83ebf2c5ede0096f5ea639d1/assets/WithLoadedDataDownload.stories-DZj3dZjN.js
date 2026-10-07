import{f as b,j as a,r as i}from"./iframe-BmAfqmVA.js";import{O as u}from"./object-table-DwtrgXe0.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw8BIZgV.js";import"./Table-D0gnuVks.js";import"./index-B62tNakJ.js";import"./Dialog-BJN_I2ET.js";import"./cross-CIbg1fnp.js";import"./svgIconContainer-DmqE13LP.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./InternalBackdrop-B-HL31XO.js";import"./composite-D_ZO_GVZ.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./index-sRqT8LaY.js";import"./useEventCallback-Dst592Es.js";import"./SkeletonBar-CpgIKy9M.js";import"./LoadingCell-DFItCsbF.js";import"./ColumnConfigDialog-DGQnTD89.js";import"./DraggableList-CZmnsgWW.js";import"./search-CXOC_cUa.js";import"./Input-Nk05MRQJ.js";import"./useControlled-DnfhwrQ9.js";import"./Button-B6o09hJ9.js";import"./small-cross-hJq0bu3d.js";import"./ActionButton-C7nJBpda.js";import"./Checkbox-tlw2znwL.js";import"./useValueChanged-BOO_UIZl.js";import"./CollapsiblePanel-BARvj3J1.js";import"./MultiColumnSortDialog-CjzVK0QW.js";import"./MenuTrigger-CZUdBscp.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./getDisabledMountTransitionStyles-D7fYxIXW.js";import"./getPseudoElementBounds-vijoVG-C.js";import"./chevron-down-BlYRgYBH.js";import"./index-K0yxoLEe.js";import"./error-Dmi1futd.js";import"./BaseCbacBanner-BCmjq5Q4.js";import"./makeExternalStore-Bdb1GDa3.js";import"./Tooltip-CvzNm6MG.js";import"./PopoverPopup-BO42v_DZ.js";import"./debounce-J4cnnbIe.js";import"./useOsdkClient-Dkseg2Ko.js";import"./tick-C2TrJ_N8.js";import"./DropdownField-D1g5_LVv.js";import"./isEqual-BY0VpmlK.js";import"./withOsdkMetrics-ihUosZll.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

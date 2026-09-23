import{f as b,j as a,r as i}from"./iframe-ClVzwAwQ.js";import{O as u}from"./object-table-CUiDs9Gl.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Cv11LvJP.js";import"./Table-x87G_eww.js";import"./index-BGl-ufsM.js";import"./Dialog-BY-hHL_5.js";import"./cross-DkZeF945.js";import"./svgIconContainer-Bay1n-zA.js";import"./useBaseUiId-DBp6INKz.js";import"./InternalBackdrop-CCEA6-di.js";import"./composite-cy3jdAoe.js";import"./index-CY6w5O7H.js";import"./index-CPJZzp1O.js";import"./index-Blka6ILz.js";import"./useEventCallback-B9S91Yw2.js";import"./SkeletonBar-D5O3BqcP.js";import"./LoadingCell-1iIW1uBJ.js";import"./ColumnConfigDialog-B1vZCJXk.js";import"./DraggableList-Dz-z2ES3.js";import"./search-DY6yvOy6.js";import"./Input-BEJWa7gG.js";import"./useControlled-CYJtKTqW.js";import"./Button-D5bJOK4o.js";import"./small-cross-C_AyMX1J.js";import"./ActionButton-QCwrftMT.js";import"./Checkbox-lhbMJ3q2.js";import"./useValueChanged-C8lzD6_j.js";import"./CollapsiblePanel-CugK17NU.js";import"./MultiColumnSortDialog-DW_PciuZ.js";import"./MenuTrigger-BvUlRi1e.js";import"./CompositeItem-B_fSDSC7.js";import"./ToolbarRootContext-D3yxcxuQ.js";import"./getDisabledMountTransitionStyles-CoM1w8pQ.js";import"./getPseudoElementBounds-DGWwlxa5.js";import"./chevron-down-UByA3gj5.js";import"./index-DL1_yfl9.js";import"./error-BmOSQ-Av.js";import"./BaseCbacBanner-5kmj_Fjj.js";import"./makeExternalStore-Bgk32_hH.js";import"./Tooltip-8hgn-ueX.js";import"./PopoverPopup-Noi5w6Yr.js";import"./debounce-BkQeQk7N.js";import"./useOsdkClient-Dz0dl0jy.js";import"./tick-D0aeUq8y.js";import"./DropdownField-A48OUsRe.js";import"./isEqual-DwB7eFCP.js";import"./withOsdkMetrics-B7DbvHC0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

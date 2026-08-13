import{f as b,j as a,r as i}from"./iframe-CR0jsk8T.js";import{O as u}from"./object-table-CbDQCRdf.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CLM-aN-8.js";import"./Table-D-GB8w9F.js";import"./index-BXDmefey.js";import"./Dialog-BDj_Pu-s.js";import"./cross-C_YRmPKj.js";import"./svgIconContainer-H7nQkb6n.js";import"./useBaseUiId-C44LpUZ_.js";import"./InternalBackdrop-DfOIlirh.js";import"./composite-NkcHW8Ts.js";import"./index-AF0HW_jU.js";import"./index-CviXfYOE.js";import"./index-C0xP1YRP.js";import"./useEventCallback-Dpm5I8hS.js";import"./SkeletonBar-COzcyyjY.js";import"./LoadingCell-2p8cREMA.js";import"./ColumnConfigDialog-C0J78ZfR.js";import"./DraggableList-DB4oE_ex.js";import"./search-CBxagsiD.js";import"./Input-BUfDw5Gv.js";import"./useControlled-BYmOvdgF.js";import"./Button-Cwqeh57g.js";import"./small-cross-87BZIShO.js";import"./ActionButton-D1872Zz6.js";import"./Checkbox-Dz3160i5.js";import"./useValueChanged-C26c-Dvh.js";import"./CollapsiblePanel-CsWiyBT2.js";import"./MultiColumnSortDialog-DPvLlybu.js";import"./MenuTrigger-CDrcjfD_.js";import"./CompositeItem-CYqCpyh6.js";import"./ToolbarRootContext-Dw5skxCs.js";import"./getDisabledMountTransitionStyles-BJl_BOkB.js";import"./getPseudoElementBounds-DYw0j0iR.js";import"./chevron-down-CgS2uuYi.js";import"./index-DeB2XC52.js";import"./error-Bqwx5_58.js";import"./BaseCbacBanner-ZqFqIYYB.js";import"./makeExternalStore-DmONQ8uz.js";import"./Tooltip-BzblDmOx.js";import"./PopoverPopup-DcPO1pup.js";import"./debounce-DglcdfXI.js";import"./useOsdkClient-DnL3l3f_.js";import"./tick-D2yfy9E4.js";import"./DropdownField-CZUcN7QE.js";import"./isEqual-DEwKDC01.js";import"./withOsdkMetrics-GDpEsgqr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

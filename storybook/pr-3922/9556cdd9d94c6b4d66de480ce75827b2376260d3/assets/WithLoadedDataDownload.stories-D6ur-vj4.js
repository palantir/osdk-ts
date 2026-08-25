import{f as b,j as a,r as i}from"./iframe-uuw7htdR.js";import{O as u}from"./object-table-BRgDatzv.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DFPRxsEF.js";import"./Table-CwiVhKvo.js";import"./index-DyFb1z2g.js";import"./Dialog-DanhRYeN.js";import"./cross-BpDXlZPZ.js";import"./svgIconContainer-6mS79FyE.js";import"./useBaseUiId-BbWDT_DX.js";import"./InternalBackdrop-DSxt84yf.js";import"./composite-HcgVWLde.js";import"./index-KZpV_o_R.js";import"./index-DlhafJwL.js";import"./index-TikMIhJ1.js";import"./useEventCallback--9RyIE0g.js";import"./SkeletonBar-CV-e5B2s.js";import"./LoadingCell-BieQChy9.js";import"./ColumnConfigDialog-BYR7Bb37.js";import"./DraggableList-Dehj-1oF.js";import"./search-CPthhaeA.js";import"./Input-B4rchUKr.js";import"./useControlled-DWYS3HP4.js";import"./Button-iHaT6U_x.js";import"./small-cross-mMVM4Qt0.js";import"./ActionButton-BDVI-Ha2.js";import"./Checkbox-BDnIdw4Q.js";import"./useValueChanged-DTHX8REt.js";import"./CollapsiblePanel-BpCoh2zs.js";import"./MultiColumnSortDialog-Bu8iH6Vo.js";import"./MenuTrigger-Dn_zgl92.js";import"./CompositeItem-CIVV53Jd.js";import"./ToolbarRootContext-DWeXPuz4.js";import"./getDisabledMountTransitionStyles-BFWHvAfp.js";import"./getPseudoElementBounds-DslwyEnI.js";import"./chevron-down-Y-hj8f1V.js";import"./index-D-Jsk4o1.js";import"./error-CblFsZqu.js";import"./BaseCbacBanner-D3kXbQeQ.js";import"./makeExternalStore-DAuuY8fZ.js";import"./Tooltip-coVj6bPK.js";import"./PopoverPopup-BYNv-Qsz.js";import"./debounce-CZIJJWHa.js";import"./useOsdkClient-BtbsETzR.js";import"./tick-DSafz49U.js";import"./DropdownField-DXP5SNgq.js";import"./isEqual-Cr99_gpe.js";import"./withOsdkMetrics-CgSgSDy7.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

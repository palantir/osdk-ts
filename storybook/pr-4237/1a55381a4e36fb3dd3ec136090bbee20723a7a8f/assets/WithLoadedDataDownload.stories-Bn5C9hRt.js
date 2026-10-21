import{f as b,j as a,r as i}from"./iframe-DFGm32Bw.js";import{O as u}from"./object-table-DAoukbAL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-fy9m8Fnq.js";import"./Table-C-2dN_9g.js";import"./index-DjqFaeTC.js";import"./Dialog-JVhmUD0b.js";import"./cross-DnLg4Ct0.js";import"./svgIconContainer-D-V_MVwY.js";import"./useBaseUiId-DYKNlNgP.js";import"./InternalBackdrop-DMMzhES7.js";import"./composite-B4OJQV7f.js";import"./index-FvgKhH5U.js";import"./index-DyySrusV.js";import"./index-BtNh-TEb.js";import"./useEventCallback-D-auj4HH.js";import"./SkeletonBar-BnB7SRxp.js";import"./LoadingCell-CRI7SY5l.js";import"./ColumnConfigDialog-BcB0_qFv.js";import"./DraggableList-CrzviJA-.js";import"./search-DNzannB5.js";import"./Input-DL-Ka-L9.js";import"./useControlled-DGRdFYYN.js";import"./Button-DZG39NOd.js";import"./small-cross-D1IQ7GLs.js";import"./ActionButton-DvfQCjtU.js";import"./Checkbox-f6-CCXnM.js";import"./useValueChanged-Cy-yyTWd.js";import"./CollapsiblePanel-BUe5kDOz.js";import"./MultiColumnSortDialog-PFk6lrkl.js";import"./MenuTrigger-D4X0o3Kq.js";import"./CompositeItem-BNbv7BXO.js";import"./ToolbarRootContext-8KEPzI9b.js";import"./getDisabledMountTransitionStyles-Bp5WDZ4V.js";import"./getPseudoElementBounds-opeseqFO.js";import"./chevron-down-PQvYLt7R.js";import"./index-CNgLBIA9.js";import"./error-Ce5TqXqV.js";import"./BaseCbacBanner-BHUG4D8Y.js";import"./makeExternalStore-C_KPNZSJ.js";import"./Tooltip-gJq75AB8.js";import"./PopoverPopup-DcPuDwsK.js";import"./debounce-CGY3R00a.js";import"./useOsdkClient-DRvI5chP.js";import"./tick-BLcfeptW.js";import"./DropdownField-DRjEtpTz.js";import"./isEqual-BobN_a0F.js";import"./withOsdkMetrics-DGoS0Q7x.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

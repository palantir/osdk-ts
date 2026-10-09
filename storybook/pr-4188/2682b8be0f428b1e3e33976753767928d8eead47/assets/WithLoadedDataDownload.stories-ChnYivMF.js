import{f as b,j as a,r as i}from"./iframe-D64bY6TH.js";import{O as u}from"./object-table-C8uAPbFI.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C76Jrfws.js";import"./Table-CrZ7d2aP.js";import"./index-Cc3FeXj1.js";import"./Dialog-Cy3xzR8q.js";import"./cross-D6Cdabtd.js";import"./svgIconContainer-CfgNuiYE.js";import"./useBaseUiId-CFOcLwn4.js";import"./InternalBackdrop-Bc_2TPL1.js";import"./composite-DAqKTlgI.js";import"./index-bp5PTA0n.js";import"./index-B70IpAtL.js";import"./index-DpWxliah.js";import"./useEventCallback-CgjSN3m2.js";import"./SkeletonBar-BlBlU7HK.js";import"./LoadingCell-XrALK-34.js";import"./ColumnConfigDialog-BePDkvcN.js";import"./DraggableList-ByZRTa2k.js";import"./search-Bfu3ziqv.js";import"./Input-QZumNvU1.js";import"./useControlled-CxTqzmL5.js";import"./Button-BmCoWmmM.js";import"./small-cross-CwHEtqN2.js";import"./ActionButton-BVVdRIEF.js";import"./Checkbox-DYiWsfyB.js";import"./useValueChanged-Cfe25gjJ.js";import"./CollapsiblePanel-D4Pc_im2.js";import"./MultiColumnSortDialog-C_xoBBQg.js";import"./MenuTrigger-D3zjlXSJ.js";import"./CompositeItem-9LTTeiMZ.js";import"./ToolbarRootContext-CrHW8pig.js";import"./getDisabledMountTransitionStyles-C0e0B9o7.js";import"./getPseudoElementBounds-C8omZZgw.js";import"./chevron-down-CihExyy-.js";import"./index-Dr8-JDhp.js";import"./error-DEgvCPew.js";import"./BaseCbacBanner-DEptZPu_.js";import"./makeExternalStore-DhnEC1sn.js";import"./Tooltip-By2rP-Yc.js";import"./PopoverPopup-Be8aQKMg.js";import"./debounce-Cg8_SxcC.js";import"./useOsdkClient-IPsSAxyW.js";import"./tick-foI34yl5.js";import"./DropdownField-BfpsV4IR.js";import"./isEqual-CQXYOo64.js";import"./withOsdkMetrics-Dszg8kI0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-nl_vu0vo.js";import{O as u}from"./object-table-CU0V_I6a.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dj6yhN1L.js";import"./Table-Bel8UQqy.js";import"./index-Bw4Di_Av.js";import"./Dialog-BscngXRU.js";import"./cross-BwLhOV3t.js";import"./svgIconContainer-dVj22x2p.js";import"./useBaseUiId-BIN8dWsl.js";import"./InternalBackdrop-BwYnyTy7.js";import"./composite-BrMY9sNC.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./index-B_91enxX.js";import"./useEventCallback-Clb2jbe4.js";import"./SkeletonBar-Cf0WHzle.js";import"./LoadingCell-FEWscMZb.js";import"./ColumnConfigDialog-DcAdSA97.js";import"./DraggableList-DRUU_dLr.js";import"./search-Cx3JC5DT.js";import"./Input-DsULXrnF.js";import"./useControlled-BwxmcO0L.js";import"./Button-B0tw-VeI.js";import"./small-cross-qF70xz6k.js";import"./ActionButton-DNw29PFB.js";import"./Checkbox-03YMgAog.js";import"./useValueChanged-D8sRyeVl.js";import"./CollapsiblePanel-CIkexinm.js";import"./MultiColumnSortDialog-BDuMndbx.js";import"./MenuTrigger-CR9XRxYf.js";import"./CompositeItem-ylAvuyxw.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./getDisabledMountTransitionStyles-CTsc8Cvf.js";import"./getPseudoElementBounds-Dgz0mXJB.js";import"./chevron-down-Cg1zW2dH.js";import"./index-CvPJeLDe.js";import"./error-CXoZGWHU.js";import"./BaseCbacBanner-BUySb7tJ.js";import"./makeExternalStore-lr4yKVc-.js";import"./Tooltip-BDbtIfcD.js";import"./PopoverPopup-ClK3uhCd.js";import"./debounce-DmK_7Xqg.js";import"./useOsdkClient-D5Z564TK.js";import"./tick-C_3Us6Ua.js";import"./DropdownField-BU9E5XBo.js";import"./isEqual-BowIumRw.js";import"./withOsdkMetrics-DScTmPNl.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-Cw_qhF0N.js";import{O as u}from"./object-table-DjPGM6wa.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BOMIoqbF.js";import"./Table-DSSm1fKK.js";import"./index-TvapIid3.js";import"./Dialog-CLJKeedb.js";import"./cross-D-XWoAQF.js";import"./svgIconContainer-BTHlx_Hh.js";import"./useBaseUiId-BNu8us2u.js";import"./InternalBackdrop-DHfQ_n5T.js";import"./composite-Cn4M-AS0.js";import"./index-lqLv8je1.js";import"./index-Di-hPO50.js";import"./index-w42VGXsS.js";import"./useEventCallback-Bj9dX_fk.js";import"./SkeletonBar-CUo2yd26.js";import"./LoadingCell-gfwDxef7.js";import"./ColumnConfigDialog-BlQkjEzx.js";import"./DraggableList-Bo3Tcy6E.js";import"./search-BrIW3_zE.js";import"./Input-Bfec5TXw.js";import"./useControlled-5GWIAJrV.js";import"./isEqual-8Gu1sET9.js";import"./isObject-CJz3e4Br.js";import"./Button-rFXve3X8.js";import"./ActionButton-CrbFv_hF.js";import"./Checkbox-BOh-AO8R.js";import"./useValueChanged-ZB7hU4o5.js";import"./CollapsiblePanel-BKTgJMbu.js";import"./MultiColumnSortDialog-wT10UvvH.js";import"./MenuTrigger-DUfNfRvP.js";import"./CompositeItem-Dxc3ZApE.js";import"./ToolbarRootContext-BIaEKKO2.js";import"./getDisabledMountTransitionStyles-ByhIP2yz.js";import"./getPseudoElementBounds-DgyzHOri.js";import"./chevron-down-IhPewwA3.js";import"./index-7blLQTYn.js";import"./error-qvLsAaDE.js";import"./BaseCbacBanner-mENaFGSF.js";import"./makeExternalStore-CcclNskg.js";import"./Tooltip-XdCb1jYX.js";import"./PopoverPopup-BdOGuII2.js";import"./toNumber-DU1_CO-_.js";import"./useOsdkClient-DoF29EO5.js";import"./tick-BZ6PljLM.js";import"./DropdownField-CmpIuvUo.js";import"./withOsdkMetrics-C81Q0htC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

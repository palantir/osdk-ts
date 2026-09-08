import{f as b,j as a,r as i}from"./iframe-DGAYn9ah.js";import{O as u}from"./object-table-DTUrmLz6.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ChgL7y96.js";import"./Table-CiTkYzU2.js";import"./index-DTqlvJGy.js";import"./Dialog-BR3MuwWf.js";import"./cross-DupLKvqJ.js";import"./svgIconContainer-CgzcDTkc.js";import"./useBaseUiId-gHWBFpJw.js";import"./InternalBackdrop-8fzF_Cdw.js";import"./composite-B3z1s4Xv.js";import"./index-dFa0PhkU.js";import"./index-Bk-RkwxC.js";import"./index-CapGV1gT.js";import"./useEventCallback-C6GT1c1Y.js";import"./SkeletonBar-CsMuW56O.js";import"./LoadingCell-D7dlBHe2.js";import"./ColumnConfigDialog-Kr94ft5n.js";import"./DraggableList-BaQ59nTC.js";import"./search-CbK0B2vo.js";import"./Input-CmwSiSQg.js";import"./useControlled-DxF1qebn.js";import"./Button-C1GOspFh.js";import"./small-cross-Bjxpstym.js";import"./ActionButton-m1ZenSyP.js";import"./Checkbox-D1fsw7z_.js";import"./useValueChanged-B0j61wn1.js";import"./CollapsiblePanel-CAIby94r.js";import"./MultiColumnSortDialog-CjVn09J2.js";import"./MenuTrigger-BMttNTtu.js";import"./CompositeItem-BcZSNonj.js";import"./ToolbarRootContext-YWaMXSM6.js";import"./getDisabledMountTransitionStyles-D_EkCujd.js";import"./getPseudoElementBounds-DyXfIW7_.js";import"./chevron-down-CyN2TB6T.js";import"./index-NqnPNXJw.js";import"./error-BI4ZLamB.js";import"./BaseCbacBanner-Do_pGqh7.js";import"./makeExternalStore-BpmHT-XO.js";import"./Tooltip-CAfs-bUF.js";import"./PopoverPopup-RjV8v81n.js";import"./debounce-DwT09eQG.js";import"./useOsdkClient-CSSWGxvW.js";import"./tick-B-M2pQzS.js";import"./DropdownField-DgkNnSiH.js";import"./isEqual-BnHcjJHs.js";import"./withOsdkMetrics-DFTpKrdr.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CAg-JriM.js";import{O as u}from"./object-table-C-ApABTH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BUvKDxEU.js";import"./Table-i_e6H7xl.js";import"./index-c30BwpEp.js";import"./Dialog-BdVph2yq.js";import"./cross-f26_pld4.js";import"./svgIconContainer-DADUTguq.js";import"./useBaseUiId-BRS8U626.js";import"./InternalBackdrop-dVZjC2Aj.js";import"./composite-CQrdmEmC.js";import"./index-ZJoCPfq8.js";import"./index-BKL1ls47.js";import"./index-oQ8-uGIT.js";import"./useEventCallback-BWy4tScF.js";import"./SkeletonBar-BxCdHceQ.js";import"./LoadingCell-C-LbupCq.js";import"./ColumnConfigDialog-BkpF_5fM.js";import"./DraggableList-DPp-whoe.js";import"./search-iyFeBtu2.js";import"./Input-DRHJ-rvA.js";import"./useControlled-Ceb76xwT.js";import"./Button-Cl3foSbn.js";import"./small-cross-BOoOGXKD.js";import"./ActionButton-Bzha9uO_.js";import"./Checkbox-V5AP2cHu.js";import"./useValueChanged-3kHQoBsE.js";import"./CollapsiblePanel-COo9-GCD.js";import"./MultiColumnSortDialog-CHNEVY8-.js";import"./MenuTrigger-Bu5HVYuz.js";import"./CompositeItem-D7GSS8Td.js";import"./ToolbarRootContext-CdDSSu6d.js";import"./getDisabledMountTransitionStyles-CZGWVUEY.js";import"./getPseudoElementBounds-D5B51_gi.js";import"./chevron-down-CsfLCkc3.js";import"./index-B-69obD4.js";import"./error-1JJ1PBi7.js";import"./BaseCbacBanner-MWnGpk0a.js";import"./makeExternalStore-sIngp_if.js";import"./Tooltip-BaUV5B5y.js";import"./isObject-Cga3o-qK.js";import"./debounce-8AUJtK1E.js";import"./useOsdkClient-DA4RLwcd.js";import"./tick-BF0KiDZu.js";import"./DropdownField-azDKl2Hy.js";import"./isEqual-DEFCBL8A.js";import"./_baseIsEqual-vKOwFDyn.js";import"./withOsdkMetrics-CHGqLnXT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

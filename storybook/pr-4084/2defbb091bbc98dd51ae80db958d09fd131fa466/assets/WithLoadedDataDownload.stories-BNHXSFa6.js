import{f as b,j as a,r as i}from"./iframe-0nbFd4Up.js";import{O as u}from"./object-table-CGLRthHP.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C9c2Zh8f.js";import"./Table-DnFyr-eR.js";import"./index-DwMakAAg.js";import"./Dialog-B1ObiwL9.js";import"./cross-DNUyMOOH.js";import"./svgIconContainer-CfgrNU9r.js";import"./useBaseUiId-hHYCbJGR.js";import"./InternalBackdrop-KhB9QZ7N.js";import"./composite-BsbtETqs.js";import"./index-5aC9zCcy.js";import"./index-CS8KPTZX.js";import"./index-D8qb59k0.js";import"./useEventCallback-nhi0bkCi.js";import"./SkeletonBar-BJn80Ony.js";import"./LoadingCell-CNKTGqtW.js";import"./ColumnConfigDialog-CPNjz2SP.js";import"./DraggableList-DnaVkmQi.js";import"./search-DDtr797p.js";import"./Input-YuE0Ls83.js";import"./useControlled-Gi7J51jw.js";import"./Button-Cn_l7fEs.js";import"./small-cross--2hEoLnO.js";import"./ActionButton-Tx5l-Qj1.js";import"./Checkbox-C7_DFOBZ.js";import"./useValueChanged-BdLBZwcj.js";import"./CollapsiblePanel-vf3p_QIK.js";import"./MultiColumnSortDialog-G_D659ph.js";import"./MenuTrigger-O_uVwxuL.js";import"./CompositeItem-C9hOZqfz.js";import"./ToolbarRootContext-B0NC_oEf.js";import"./getDisabledMountTransitionStyles-BI_PHpJd.js";import"./getPseudoElementBounds-aNzsWKIs.js";import"./chevron-down-BNwXq3g8.js";import"./index-BxiA765S.js";import"./error-CFI9j2MF.js";import"./BaseCbacBanner-BcZ2Qwl1.js";import"./makeExternalStore-Dwl2nMnb.js";import"./Tooltip-CRSGFbZX.js";import"./PopoverPopup-DFBzgF9k.js";import"./debounce--e6JvBD_.js";import"./useOsdkClient-CrSzWz2k.js";import"./tick-CC64mxmv.js";import"./DropdownField-DdLtiHfF.js";import"./isEqual-Dv1Q4U2c.js";import"./withOsdkMetrics-DTNlxinE.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

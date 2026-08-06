import{f as b,j as a,r as i}from"./iframe-BfpGyLEa.js";import{O as u}from"./object-table-CReHjQqT.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B3VqCvDk.js";import"./Table-DBzqhcXp.js";import"./index-HQRwX0sG.js";import"./Dialog-BfwGzw59.js";import"./cross-On_Sn6mV.js";import"./svgIconContainer-DjfkGdUu.js";import"./useBaseUiId-ByeyJXQZ.js";import"./InternalBackdrop-DRhc4Tux.js";import"./composite-BgeLt9pq.js";import"./index-CnwcoLiT.js";import"./index-C1hBHqbI.js";import"./index-DI4kr843.js";import"./useEventCallback-CLrYJF5s.js";import"./SkeletonBar-CVXLUSoX.js";import"./LoadingCell-CjGrgX8S.js";import"./ColumnConfigDialog-B22PE52R.js";import"./DraggableList-BYAI8JzX.js";import"./search-PEXLOihg.js";import"./Input-CzADAXYu.js";import"./useControlled-BVUZlzvp.js";import"./isEqual-Dgi0ZaAt.js";import"./isObject-DDhARXOo.js";import"./Button-DxBNRoWp.js";import"./ActionButton-CxBd5f-7.js";import"./Checkbox-ChqM5Q0I.js";import"./useValueChanged-Br-kPmpL.js";import"./CollapsiblePanel-Xt2EWbql.js";import"./MultiColumnSortDialog-9V2M6VCH.js";import"./MenuTrigger-DMQaU_hF.js";import"./CompositeItem-D07VWMUd.js";import"./ToolbarRootContext-DSTawcBa.js";import"./getDisabledMountTransitionStyles-B03uOhek.js";import"./getPseudoElementBounds-BkubrDWa.js";import"./chevron-down-D80S2cyc.js";import"./index-BOHHG715.js";import"./error-_erutXgY.js";import"./BaseCbacBanner-1vi7wFhA.js";import"./makeExternalStore-p4wOuTs-.js";import"./Tooltip-D8X_gFsZ.js";import"./PopoverPopup-CSvozSxL.js";import"./toNumber-B-CjzLUf.js";import"./useOsdkClient-wg32HbIo.js";import"./tick-CS4u37BA.js";import"./DropdownField-ClrrHaef.js";import"./withOsdkMetrics-C1uTzjR-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

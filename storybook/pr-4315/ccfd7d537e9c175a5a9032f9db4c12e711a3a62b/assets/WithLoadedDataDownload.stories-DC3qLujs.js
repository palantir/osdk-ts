import{f as b,j as a,r as i}from"./iframe-DDJWwqBY.js";import{O as u}from"./object-table-CstPEMta.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DOjHdaCa.js";import"./Table-D9glMgcM.js";import"./index-C1ZTpjxr.js";import"./Dialog-CFWw6Poa.js";import"./cross-B0JuOba7.js";import"./svgIconContainer-CFPdoyWo.js";import"./useBaseUiId-cxXVDzQK.js";import"./InternalBackdrop-C9Vpy4n2.js";import"./composite-CGLo9xHo.js";import"./index-DpGvPpxf.js";import"./index-NkIdY7dG.js";import"./index-D9JRRyZT.js";import"./useEventCallback-OeLjI0ls.js";import"./SkeletonBar-DOvjgVAK.js";import"./LoadingCell-BsV81X3O.js";import"./ColumnConfigDialog-doAkcj1i.js";import"./DraggableList-D71tE-YU.js";import"./search-d3_uaTlG.js";import"./Input-DxhVC9Qb.js";import"./useControlled-CWWChH0p.js";import"./Button-HOAjx8sN.js";import"./small-cross-DfHs2ftm.js";import"./ActionButton-Dt65wsJu.js";import"./Checkbox-D-TsrAgK.js";import"./useValueChanged-IbZDGfz8.js";import"./CollapsiblePanel-DQh2Sft9.js";import"./MultiColumnSortDialog-BbQkGEFb.js";import"./MenuTrigger-D8R4-oXl.js";import"./CompositeItem-BdeXH3Aq.js";import"./ToolbarRootContext-CwaM14ur.js";import"./getDisabledMountTransitionStyles-CzkaxE6g.js";import"./getPseudoElementBounds-CUXD3vIq.js";import"./chevron-down-CEmh4RKU.js";import"./index-CSTQbqzf.js";import"./error-DWlGgPFi.js";import"./BaseCbacBanner-C9REPQ56.js";import"./makeExternalStore-D6MI5hxD.js";import"./Tooltip-DaL85JuH.js";import"./PopoverPopup-9EDLzBq6.js";import"./debounce-B-ViHwUG.js";import"./useOsdkClient-BQG1YgSO.js";import"./tick-nUpkpaC6.js";import"./DropdownField-6XnrFdNT.js";import"./isEqual-BzZF3ZaT.js";import"./withOsdkMetrics-BCd9Mm8M.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

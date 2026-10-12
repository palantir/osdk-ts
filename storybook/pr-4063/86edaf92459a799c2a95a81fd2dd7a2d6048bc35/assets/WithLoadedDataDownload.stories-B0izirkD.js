import{f as b,j as a,r as i}from"./iframe-3pBmeYFT.js";import{O as u}from"./object-table-CHJks8jw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-vBjj0fkZ.js";import"./Table-vdKFS0Yg.js";import"./index-HXkjhg6z.js";import"./Dialog-bohs-JHl.js";import"./cross-Cw8SpRPo.js";import"./svgIconContainer-oYexr0c7.js";import"./useBaseUiId-BX_7JiSc.js";import"./InternalBackdrop-Bf5bS0-N.js";import"./composite-D407pmHd.js";import"./index-C4p6xkMh.js";import"./index-EVh21tlW.js";import"./index-CNtaAiKb.js";import"./useEventCallback-QikBKoT3.js";import"./SkeletonBar-DcraF9ed.js";import"./LoadingCell-CS2lLg3a.js";import"./ColumnConfigDialog-OA7WNg3J.js";import"./DraggableList-Dxq5-d78.js";import"./search-CQOti8kz.js";import"./Input-BQ6oicvc.js";import"./useControlled-MqJ_-6UI.js";import"./Button-DVJw32Da.js";import"./small-cross-4xzNgjst.js";import"./ActionButton-CSRC1G7d.js";import"./Checkbox-4IlBbgeN.js";import"./useValueChanged-Dv4NLcIJ.js";import"./CollapsiblePanel-DN3NPDIL.js";import"./MultiColumnSortDialog-BZTLQdea.js";import"./MenuTrigger-DEPOBuIh.js";import"./CompositeItem-BAzi-4_X.js";import"./ToolbarRootContext-BROspXHg.js";import"./getDisabledMountTransitionStyles-BzXEt7kT.js";import"./getPseudoElementBounds-VW5wliGx.js";import"./chevron-down-CPXZLq0t.js";import"./index-C-EOv5jG.js";import"./error-oFoemtYn.js";import"./BaseCbacBanner-BDE7gmhL.js";import"./makeExternalStore-B9tQcCLS.js";import"./Tooltip-DFKKdGeu.js";import"./PopoverPopup-DWqfD9XE.js";import"./debounce-BUj2tWGy.js";import"./useOsdkClient-DBkdWm96.js";import"./tick-BvsLxO6_.js";import"./DropdownField-vPiacE-M.js";import"./isEqual-DikiAgWF.js";import"./withOsdkMetrics-CZjqmY54.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

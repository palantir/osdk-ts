import{f as b,j as a,r as i}from"./iframe-Bz3hVWPH.js";import{O as u}from"./object-table-Coh6khSe.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-B5WDuSuX.js";import"./Table-vO5Gnq6f.js";import"./index-DByWOMtj.js";import"./Dialog-D4obr35u.js";import"./cross-Fpn0tB3m.js";import"./svgIconContainer-_Jncan05.js";import"./useBaseUiId-dzLz4lPg.js";import"./InternalBackdrop-DSn-b-zD.js";import"./composite-CPnF2lA7.js";import"./index-vogC1DiU.js";import"./index-De0WyPkh.js";import"./index-BIjtRufh.js";import"./useEventCallback-CT17wzJW.js";import"./SkeletonBar-B6lmbx_o.js";import"./LoadingCell-BYZJaKgx.js";import"./ColumnConfigDialog-l5kk5jJ2.js";import"./DraggableList-jBvaIbKs.js";import"./search-Ctah0g8H.js";import"./Input-niPYTtX3.js";import"./useControlled-DOWqxCnV.js";import"./Button-CiU5aFV9.js";import"./small-cross-BzeHldsH.js";import"./ActionButton-OnzJnryN.js";import"./Checkbox-BEY2gbmr.js";import"./useValueChanged-BISvWiN-.js";import"./CollapsiblePanel-jHetj5wz.js";import"./MultiColumnSortDialog-BV0ux_2F.js";import"./MenuTrigger-DBuTjWXZ.js";import"./CompositeItem-dA2LCxOZ.js";import"./ToolbarRootContext-D-xyRBQY.js";import"./getDisabledMountTransitionStyles-BdHWZjt-.js";import"./getPseudoElementBounds-BC_aNtit.js";import"./chevron-down-Bi16AFVJ.js";import"./index-BwGnMyFh.js";import"./error-CQxjkOW_.js";import"./BaseCbacBanner-DsvHyF5N.js";import"./makeExternalStore-BkTXcz9h.js";import"./Tooltip-DfHl7Xwe.js";import"./PopoverPopup-CUtjr2xE.js";import"./debounce-u07EyXLU.js";import"./useOsdkClient-C-ZEaw1j.js";import"./tick-UZyx2gLc.js";import"./DropdownField-CQFrJZV4.js";import"./isEqual-Bw8rh7NU.js";import"./withOsdkMetrics-DIZcYriA.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

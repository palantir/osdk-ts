import{f as b,j as a,r as i}from"./iframe-DjQMMxLx.js";import{O as u}from"./object-table-DUgIainw.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-D9gz9dP2.js";import"./Table-BkuG0VkM.js";import"./index-BQktNRpG.js";import"./Dialog-z4RrYaCt.js";import"./cross-5foZzpQT.js";import"./svgIconContainer-CbzxULm7.js";import"./useBaseUiId-DV8MiEHP.js";import"./InternalBackdrop-C9KcoWa0.js";import"./composite-C5S9u2C0.js";import"./index-ALu0R69I.js";import"./index-BG4nrt80.js";import"./index-EFcmNpTF.js";import"./useEventCallback-Drdmlcim.js";import"./SkeletonBar-CGRDkd9v.js";import"./LoadingCell-swjpYlNO.js";import"./ColumnConfigDialog-CiABG_Ud.js";import"./DraggableList-BlEhOX02.js";import"./search-Bi__Xh0V.js";import"./Input-tHO_0mDU.js";import"./useControlled-BDZX5EOW.js";import"./Button-BTmvZlhP.js";import"./small-cross-FBQ1JrA6.js";import"./ActionButton-C_PfwCCe.js";import"./Checkbox-C_5U9Io6.js";import"./useValueChanged-89MMWahA.js";import"./CollapsiblePanel-CpT5okR3.js";import"./MultiColumnSortDialog-CqktysIc.js";import"./MenuTrigger-GFLsYYHT.js";import"./CompositeItem-BHy9Y5ew.js";import"./ToolbarRootContext-DNPy_MLL.js";import"./getDisabledMountTransitionStyles-CNpzdjsj.js";import"./getPseudoElementBounds-Dr_GhPRN.js";import"./chevron-down-BV8W7pzT.js";import"./index-Cvgyb1rs.js";import"./error-DjBJ5FPo.js";import"./BaseCbacBanner-CsBUohxp.js";import"./makeExternalStore-T8o28ggm.js";import"./Tooltip-BBVQxka_.js";import"./PopoverPopup-_FAePhJQ.js";import"./toNumber-D1bpn60s.js";import"./useOsdkClient-CtATvy04.js";import"./tick-Cjjv8cPo.js";import"./DropdownField-jUgYJn_u.js";import"./withOsdkMetrics-BEgzEpnF.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ye=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,ye as __namedExportsOrder,he as default};

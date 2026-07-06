import{f as b,j as a,r as i}from"./iframe-YLVYuxq8.js";import{O as u}from"./object-table-Bt2VyKq-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CZYe282M.js";import"./Table-CJ4nPMTp.js";import"./index-DY_dJJUl.js";import"./Dialog-DEY3pjgU.js";import"./cross-Cy_GZ1mj.js";import"./svgIconContainer-DXsK1PD8.js";import"./useBaseUiId-3iJUSLaS.js";import"./InternalBackdrop-BFxnkKWH.js";import"./composite-BMtoOrB4.js";import"./index-CJ0167O5.js";import"./index-DXgeTFVX.js";import"./index-BasXsKcN.js";import"./useEventCallback-BW4i7tTw.js";import"./SkeletonBar-BfbVk1ew.js";import"./LoadingCell-GVmaySJp.js";import"./ColumnConfigDialog-DX6nYRpg.js";import"./DraggableList-CFFwJex0.js";import"./search-CWtYIIQK.js";import"./Input-BInpNgkE.js";import"./useControlled-DBv4Redr.js";import"./Button-Hm75H09p.js";import"./small-cross-B3ufJdSy.js";import"./ActionButton-D0G7FESy.js";import"./Checkbox-DBEgVyod.js";import"./useValueChanged-BEsA4ZjU.js";import"./CollapsiblePanel-CxxlZKyf.js";import"./MultiColumnSortDialog-DMOuNYGf.js";import"./MenuTrigger-BxVh72J6.js";import"./CompositeItem-YtlzwsY_.js";import"./ToolbarRootContext-M6GN99cc.js";import"./getDisabledMountTransitionStyles-DXYaHwPx.js";import"./getPseudoElementBounds-qLw5kyJL.js";import"./chevron-down-BRPm4oUM.js";import"./index-C9YxjGxI.js";import"./error-JbD-MfdK.js";import"./BaseCbacBanner-D8A-WeR9.js";import"./makeExternalStore-CD3PSPFW.js";import"./Tooltip-CW5jDJxa.js";import"./PopoverPopup-D_TgKOJN.js";import"./toNumber-ByhmC_8v.js";import"./useOsdkClient-Cs6ANNxt.js";import"./tick-B-tPV8A4.js";import"./DropdownField-DjZspwN3.js";import"./withOsdkMetrics-jluIddj1.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
`)}function S(e){if(e==null)return"";if(e instanceof Error)return"Error";if(typeof e=="string")return e;if(typeof e=="number"||typeof e=="boolean")return String(e);try{return JSON.stringify(e)??""}catch{return String(e)}}function c(e){return/[",\n\r]/.test(e)?`"${e.replaceAll('"','""')}"`:e}async function g(e,n){const t=new Blob([e],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=n,document.body.append(o),o.click(),o.remove(),await new Promise(s=>setTimeout(s,0)),URL.revokeObjectURL(r)}var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

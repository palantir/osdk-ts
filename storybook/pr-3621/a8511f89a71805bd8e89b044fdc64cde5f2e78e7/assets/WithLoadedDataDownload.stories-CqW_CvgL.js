import{f as b,j as a,r as i}from"./iframe-EXlB8Hw6.js";import{O as u}from"./object-table-DFpHAbQb.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ClJqTI8x.js";import"./Table-BuaRjT5V.js";import"./index-DB8CD6tO.js";import"./Dialog-8ElmLfnj.js";import"./cross-Sn4ImGfp.js";import"./svgIconContainer-C19VWNJ9.js";import"./useBaseUiId-BYM8-nrE.js";import"./InternalBackdrop-SRz89yuh.js";import"./composite-VJWAxNgE.js";import"./index-BR01vcID.js";import"./index-BjC3rOZD.js";import"./index-CDMps433.js";import"./useEventCallback-DtE9Bgxg.js";import"./SkeletonBar-DrU8uShK.js";import"./LoadingCell-BVW-pYq-.js";import"./ColumnConfigDialog-CqiHAlVa.js";import"./DraggableList-DHJqzFWe.js";import"./search-B3sopoRm.js";import"./Input-DO4sGZbG.js";import"./useControlled-5OO73DFu.js";import"./Button-DSEVwf8U.js";import"./small-cross-CtFi55dg.js";import"./ActionButton-dQY8rEVg.js";import"./Checkbox-DNDDhxzC.js";import"./useValueChanged-BDIcdqzL.js";import"./CollapsiblePanel-DvxLb2kT.js";import"./MultiColumnSortDialog-DqM_0kB5.js";import"./MenuTrigger-CnS_SAiK.js";import"./CompositeItem-LC3PwtMw.js";import"./ToolbarRootContext-DmSWX11M.js";import"./getDisabledMountTransitionStyles-DnzwT8od.js";import"./getPseudoElementBounds-Bc8oeHno.js";import"./chevron-down-DQ9ZolpR.js";import"./index-DkyRNjBs.js";import"./error-Ch7ezjp9.js";import"./BaseCbacBanner-2OCBQrry.js";import"./makeExternalStore-CUi8XUT6.js";import"./Tooltip-BiBjL0tl.js";import"./PopoverPopup-Bc3aL72J.js";import"./toNumber-rIIedPg2.js";import"./useOsdkClient-xzCY9Hhl.js";import"./tick-CEhnCZHh.js";import"./DropdownField-BwSFAhLW.js";import"./withOsdkMetrics-Csf8AqAg.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

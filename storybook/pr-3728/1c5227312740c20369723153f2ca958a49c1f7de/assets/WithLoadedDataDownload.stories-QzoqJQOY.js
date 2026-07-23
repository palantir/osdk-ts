import{f as b,j as a,r as i}from"./iframe-C_Pv3Jbd.js";import{O as u}from"./object-table-DQ827xV-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BAWBxbEF.js";import"./Table-BA8Otlu6.js";import"./index-CP6e4PYC.js";import"./Dialog-p4V7jc3I.js";import"./cross-DTseTQ2Z.js";import"./svgIconContainer-Ce7urqQf.js";import"./useBaseUiId-DYizqAnY.js";import"./InternalBackdrop-Amryn3S-.js";import"./composite-DgoWnZCr.js";import"./index-SADmy14t.js";import"./index-a8UjtM81.js";import"./index-Dhg3D2oH.js";import"./useEventCallback-C9D8elQI.js";import"./SkeletonBar-CBV_YSxB.js";import"./LoadingCell-B1fFvQlu.js";import"./ColumnConfigDialog-BlVwtRIF.js";import"./DraggableList-B7VFRjFl.js";import"./search-DX7DB_41.js";import"./Input-D8GpyMjX.js";import"./useControlled-CqvE6bu2.js";import"./isEqual-B2F0NQwN.js";import"./isObject-yVrjqZAT.js";import"./Button-Bm1k5fAp.js";import"./ActionButton-DKVluRLb.js";import"./Checkbox-BbEfD_mG.js";import"./useValueChanged-BwPrso9v.js";import"./CollapsiblePanel-DJaL2lpu.js";import"./MultiColumnSortDialog-DXWPJyqW.js";import"./MenuTrigger-CgdPrFpm.js";import"./CompositeItem-Cl-rdabj.js";import"./ToolbarRootContext-DYmJz4jF.js";import"./getDisabledMountTransitionStyles-Dldb0r_1.js";import"./getPseudoElementBounds-CKDXOC4J.js";import"./chevron-down-Cp5ec-M-.js";import"./index-Ca4GGAAu.js";import"./error-CxH-v8gH.js";import"./BaseCbacBanner-DyjoCB6u.js";import"./makeExternalStore-Bmfsg2Df.js";import"./Tooltip-2mSpwKKA.js";import"./PopoverPopup-BXHC7Yci.js";import"./toNumber-Dg932QTp.js";import"./useOsdkClient-grxZgNOJ.js";import"./tick-CE0UYf6e.js";import"./DropdownField-B0Lxobck.js";import"./withOsdkMetrics-CqP5kgBK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

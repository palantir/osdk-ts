import{f as b,j as a,r as i}from"./iframe-BBQqV7U9.js";import{O as u}from"./object-table-D7u15GeV.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CVQ1baRe.js";import"./Table-CnsNBf97.js";import"./index-Ccu1K6sd.js";import"./Dialog-q_v5Xg8F.js";import"./cross-CLzE3-U3.js";import"./svgIconContainer-CRTQuoXb.js";import"./useBaseUiId-Dsfw9F53.js";import"./InternalBackdrop-BIv1AHkl.js";import"./composite-DPcfFrpY.js";import"./index-ZnEAsqFI.js";import"./index-ClxSTfiH.js";import"./index-DqaWGGCa.js";import"./useEventCallback-uKTkkZyA.js";import"./SkeletonBar-HBi6e13b.js";import"./LoadingCell-B6A2BqYe.js";import"./ColumnConfigDialog-DrTKXHFL.js";import"./DraggableList-yTg1mUHX.js";import"./search-BdhLBc1_.js";import"./Input-CA-eUSvn.js";import"./useControlled-DUvtrOZ4.js";import"./isEqual-B7PpS1xT.js";import"./isObject-DfWIbGg2.js";import"./Button-B4yyWPOD.js";import"./ActionButton-BU_vTHaY.js";import"./Checkbox-DJ4dHMDU.js";import"./useValueChanged-DA7v_8S6.js";import"./CollapsiblePanel-C93hoIT6.js";import"./MultiColumnSortDialog-OI1nJRIk.js";import"./MenuTrigger-B1C32Uw-.js";import"./CompositeItem-CLHj5IXS.js";import"./ToolbarRootContext-DYDg93Tz.js";import"./getDisabledMountTransitionStyles-Gx5EPjB-.js";import"./getPseudoElementBounds-CGcJJbuE.js";import"./chevron-down-BJIBE26H.js";import"./index-DMl_Vf4z.js";import"./error-DEwCksyH.js";import"./BaseCbacBanner-DPS344tB.js";import"./makeExternalStore-bluMvUON.js";import"./Tooltip-BtQm_rU4.js";import"./PopoverPopup-C0fZFnMd.js";import"./toNumber-DMwC3zyd.js";import"./useOsdkClient-C5jZZ8Yd.js";import"./tick-DV02YD3e.js";import"./DropdownField-B4_BYITd.js";import"./withOsdkMetrics-C6vhPq3k.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

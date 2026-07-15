import{f as b,j as a,r as i}from"./iframe-D7EP2Nl4.js";import{O as u}from"./object-table-BbawvEZ2.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DGp1GxPx.js";import"./index-CC1Ji25o.js";import"./Dialog-CiAPc1OW.js";import"./cross-Bd_LA7d4.js";import"./svgIconContainer-BVa7fkHt.js";import"./useBaseUiId-BPX1mDbY.js";import"./InternalBackdrop-BjZYZ8-5.js";import"./composite-CN81rFgf.js";import"./index-BoXrHjI8.js";import"./index-DaUDeee-.js";import"./index-BpxNkiJ7.js";import"./useEventCallback-BpN4KZqz.js";import"./SkeletonBar-4tD_PAtX.js";import"./LoadingCell-DykYKaqP.js";import"./ColumnConfigDialog-vyWEWVZZ.js";import"./DraggableList-CYp5yap6.js";import"./search-CItYFCQV.js";import"./Input-By5ea0ub.js";import"./useControlled-Cx80D7ZN.js";import"./Button-CWzN916h.js";import"./small-cross-BySHyRL5.js";import"./ActionButton-C0w-HZ9k.js";import"./Checkbox-BOTynsga.js";import"./useValueChanged-B0Aqx_aX.js";import"./CollapsiblePanel-DkDsKuJp.js";import"./MultiColumnSortDialog-dqYNQnKA.js";import"./MenuTrigger-BL4pM7Gq.js";import"./CompositeItem-BaAUR1L8.js";import"./ToolbarRootContext-BHBnS7Gi.js";import"./getDisabledMountTransitionStyles-BNUqHqSi.js";import"./getPseudoElementBounds-BdWdzVxW.js";import"./chevron-down-mApNF1vq.js";import"./index-D14mafS5.js";import"./error-BlJKnuYG.js";import"./BaseCbacBanner-nMnHkLbx.js";import"./makeExternalStore-DHgoa7Q2.js";import"./Tooltip-wl5Aqqfp.js";import"./PopoverPopup-YinXfpmo.js";import"./toNumber-Bd-OxSt-.js";import"./useOsdkClient-BQPoIU2S.js";import"./tick-aH4y9Uq0.js";import"./DropdownField-UqovQjlW.js";import"./withOsdkMetrics-Bvo4bxXX.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

import{f as b,j as a,r as i}from"./iframe-CjLCYPjP.js";import{O as u}from"./object-table-4o5D7obC.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-ByO7fxtk.js";import"./Table-DXPe7lgP.js";import"./index-f-S2-r7i.js";import"./Dialog-C4TyCTA7.js";import"./cross-DL0QZscy.js";import"./svgIconContainer-CUfGw83J.js";import"./useBaseUiId-njZIx2Uj.js";import"./InternalBackdrop-DcxaL_PT.js";import"./composite-DOtgHB4N.js";import"./index-B-mUbcTO.js";import"./index-DFQIppYh.js";import"./index-BJNvwJy0.js";import"./useEventCallback-B4PsR34i.js";import"./SkeletonBar-Dfq3KLiJ.js";import"./LoadingCell-BeNHpScv.js";import"./ColumnConfigDialog-CSRJDIZo.js";import"./DraggableList-gmg4DbLZ.js";import"./search-_m4au-z9.js";import"./Input-jALqAWvf.js";import"./useControlled-CoHb1tef.js";import"./Button-CIR_AgrW.js";import"./small-cross-BLFFZOgT.js";import"./ActionButton-tR5Q6IOl.js";import"./Checkbox-9A0Kn_UP.js";import"./minus-BHr811cq.js";import"./tick-Dh-Y59zV.js";import"./useValueChanged-DdOgyepL.js";import"./caret-down-8jOpd4yE.js";import"./CollapsiblePanel-C7Qsoko0.js";import"./MultiColumnSortDialog-CYohMHzc.js";import"./MenuTrigger-cJkx_izm.js";import"./CompositeItem-Bqp3H5gP.js";import"./ToolbarRootContext-Do5gfKIj.js";import"./getDisabledMountTransitionStyles-xkMz7bO3.js";import"./getPseudoElementBounds-DKP9-avB.js";import"./chevron-down-DLtLuFqQ.js";import"./index-DrA2L_ZC.js";import"./error-Mi8VUdj0.js";import"./BaseCbacBanner-NtP0edhN.js";import"./makeExternalStore-CuYJtRm7.js";import"./Tooltip-x0EIYMcK.js";import"./PopoverPopup-DBVaV4KW.js";import"./toNumber-Dc_C2hIq.js";import"./useOsdkClient-C5B9dS-h.js";import"./DropdownField-CVccp13h.js";import"./withOsdkMetrics-JADyG9oK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

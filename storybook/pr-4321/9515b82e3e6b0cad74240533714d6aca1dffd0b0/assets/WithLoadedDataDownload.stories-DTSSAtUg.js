import{f as b,j as a,r as i}from"./iframe-D7hanWlH.js";import{O as u}from"./object-table-B9BSBSuY.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CO6dxj1b.js";import"./Table-DnfTO7tD.js";import"./index-D-fAM26k.js";import"./Dialog-DykZ-GDW.js";import"./cross-Y5gvP3Fl.js";import"./svgIconContainer-DvWstcAL.js";import"./useBaseUiId-Bu7z_xTH.js";import"./InternalBackdrop-BFQj_iFn.js";import"./composite-D9lkXcst.js";import"./index-D_yrCdEG.js";import"./index-vVHHs4bi.js";import"./index-IdV4lxqA.js";import"./useEventCallback-BbTn_ynB.js";import"./SkeletonBar-DmFGXpbg.js";import"./LoadingCell-BvBSbo6-.js";import"./ColumnConfigDialog-B-cqY6bi.js";import"./DraggableList-BDoSemfa.js";import"./search-DSRtq581.js";import"./Input-Cdf8UtKg.js";import"./useControlled-i2ARdjw-.js";import"./Button-BnMNzQq6.js";import"./small-cross-B6GvYH7n.js";import"./ActionButton-C66CjuoN.js";import"./Checkbox-D6sv6PUT.js";import"./useValueChanged-oGOkIYmK.js";import"./CollapsiblePanel-pB8a9YNp.js";import"./MultiColumnSortDialog-BbVtWN8m.js";import"./MenuTrigger-BSuArtnh.js";import"./CompositeItem-tDOcOAJb.js";import"./ToolbarRootContext-Dx6PUY5o.js";import"./getDisabledMountTransitionStyles-DWFqeBfp.js";import"./getPseudoElementBounds-DqLcKxx9.js";import"./chevron-down-Cjgkim-K.js";import"./index-Dt79Win6.js";import"./error-CzhlMkp_.js";import"./BaseCbacBanner-BcxhCrYW.js";import"./makeExternalStore-UI8ZJEmg.js";import"./Tooltip-Bb8Pjuc6.js";import"./isObject-Ch3YWkBe.js";import"./debounce-mHKnM1xi.js";import"./useOsdkClient-BSYzdils.js";import"./tick-CdQvoyle.js";import"./DropdownField-D4ARGNHY.js";import"./isEqual-CNmW_1dD.js";import"./_baseIsEqual-TTSxSqVi.js";import"./withOsdkMetrics-BemcFffG.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["WithLoadedDataDownload"];export{l as WithLoadedDataDownload,Ce as __namedExportsOrder,we as default};

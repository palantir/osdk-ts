import{f as b,j as a,r as i}from"./iframe-gIP5vbeg.js";import{O as u}from"./object-table-BTUbDvfH.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DCg2y8p9.js";import"./Table-BHUmFmlp.js";import"./index-Wi5AWfmM.js";import"./Dialog-DYoPLec3.js";import"./cross-B_HnIjdo.js";import"./svgIconContainer-DxHht3SG.js";import"./useBaseUiId-Dr1rdLlf.js";import"./InternalBackdrop-CCoswTJ_.js";import"./composite-DMSJBqo2.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./index-9oyPmpRn.js";import"./useEventCallback-N163Ubom.js";import"./SkeletonBar-jY_IAvUh.js";import"./LoadingCell-De1aeIAY.js";import"./ColumnConfigDialog-CC9aBHAY.js";import"./DraggableList-DzPDeTXj.js";import"./search-CUlcmVhj.js";import"./Input-BP15Y0-R.js";import"./useControlled-Ch-R23iR.js";import"./Button-CcxNlLiB.js";import"./small-cross-BtgfJF3w.js";import"./ActionButton-DOUTcJvC.js";import"./Checkbox-DamPzVbT.js";import"./useValueChanged-PwGMfD57.js";import"./CollapsiblePanel-DLO1bg9n.js";import"./MultiColumnSortDialog-JtDqanXj.js";import"./MenuTrigger-DIIl-KUX.js";import"./CompositeItem-GAdV3l7-.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./getDisabledMountTransitionStyles-9Dn4HHWl.js";import"./getPseudoElementBounds-BNdUGtxd.js";import"./chevron-down-DCLBAa3z.js";import"./index-TRPDJKbO.js";import"./error-3Pj1FJ1e.js";import"./BaseCbacBanner-DvQO403k.js";import"./makeExternalStore-CwiGseBr.js";import"./Tooltip-xk86MvJJ.js";import"./PopoverPopup-BRrodumS.js";import"./debounce-I28cmmgy.js";import"./useOsdkClient-DkjZXsOx.js";import"./tick-Dx25vGYA.js";import"./DropdownField-B1srtEQF.js";import"./isEqual-DFNZxvw8.js";import"./withOsdkMetrics-CUsP9g0j.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

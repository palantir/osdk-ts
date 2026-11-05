import{f as b,j as a,r as i}from"./iframe-BTvYIEq8.js";import{O as u}from"./object-table-BDs6ZIZB.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CFYdII7P.js";import"./Table-HrNvjbUR.js";import"./index-Beef_kHp.js";import"./Dialog-CRyYU8oH.js";import"./cross-sKht6Kec.js";import"./svgIconContainer-CDJ2X3CN.js";import"./useBaseUiId-DVwPqKHc.js";import"./InternalBackdrop-BI_MJr4_.js";import"./composite-UnbXp0a2.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./index-CANSaJTu.js";import"./useEventCallback-CwXh44fh.js";import"./SkeletonBar-iK4bBXD5.js";import"./LoadingCell-B-gsgGd4.js";import"./ColumnConfigDialog-2_efwR7t.js";import"./DraggableList-BfQihvC2.js";import"./search-Dy8Cjq17.js";import"./Input-WD0q61A7.js";import"./useControlled-CpfYcIbT.js";import"./Button-EZBekNYG.js";import"./small-cross-CqhWne9-.js";import"./ActionButton-DfZ4bMP2.js";import"./Checkbox-D7sg0_ag.js";import"./useValueChanged-DAMkXmw8.js";import"./CollapsiblePanel-DcdCTuB_.js";import"./MultiColumnSortDialog-D01rTg2B.js";import"./MenuTrigger-ejaNiXN3.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./getDisabledMountTransitionStyles-BbQWw9EP.js";import"./getPseudoElementBounds-BDf86miM.js";import"./chevron-down-Bkejrg-1.js";import"./index-DyutDDDZ.js";import"./error-ByI-eSLJ.js";import"./BaseCbacBanner-QUKWe09r.js";import"./makeExternalStore-B8YeuVYn.js";import"./Tooltip-B1Fhyptq.js";import"./PopoverPopup-CtLtSFsG.js";import"./debounce-C9YzblTl.js";import"./useOsdkClient-Dy5Kdk0b.js";import"./tick-DqlQ5rnC.js";import"./DropdownField-NUB4RBhJ.js";import"./isEqual-B9PMZa9f.js";import"./withOsdkMetrics-BCNSh7gL.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

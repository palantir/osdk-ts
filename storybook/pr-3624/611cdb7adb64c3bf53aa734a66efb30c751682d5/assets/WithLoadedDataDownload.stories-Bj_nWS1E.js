import{f as b,j as a,r as i}from"./iframe-CV7oxMAA.js";import{O as u}from"./object-table-OPBbETOF.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CkuiwHds.js";import"./Table-oR6U1bNQ.js";import"./index-C_nnM2jx.js";import"./Dialog-BDhaVKBh.js";import"./cross-B3R0YG-c.js";import"./svgIconContainer-kYrCvsi7.js";import"./useBaseUiId-Cg8u4ZfO.js";import"./InternalBackdrop-CVKwJw6U.js";import"./composite-BhUOxeqc.js";import"./index-CQ7rwZE6.js";import"./index-zTmSyAXD.js";import"./index-3s7A5X5P.js";import"./useEventCallback-CyJb3TYw.js";import"./SkeletonBar-C0bvqCd2.js";import"./LoadingCell-CyqqtWTe.js";import"./ColumnConfigDialog-MbXu1Uhl.js";import"./DraggableList-BkMsRiYP.js";import"./search-BgXA6lwn.js";import"./Input-HITKfqWe.js";import"./useControlled-HualhFdM.js";import"./Button-hkPpZDNU.js";import"./small-cross-B97w65mA.js";import"./ActionButton-B4wNnoKU.js";import"./Checkbox-CIm155Z7.js";import"./useValueChanged-C7ngI6ZZ.js";import"./CollapsiblePanel-BPK2uCr9.js";import"./MultiColumnSortDialog-BzYfD1Aw.js";import"./MenuTrigger-COLK3l6J.js";import"./CompositeItem-DAPrQVEb.js";import"./ToolbarRootContext-Bm3KSKaB.js";import"./getDisabledMountTransitionStyles-CbaSU0ea.js";import"./getPseudoElementBounds-B810rAf2.js";import"./chevron-down-BM_z1ri0.js";import"./index-C5ddOBQi.js";import"./error-BEEZg5s0.js";import"./BaseCbacBanner-DZPF5KJy.js";import"./makeExternalStore-CW2Jq-I3.js";import"./Tooltip-C6SE2zwF.js";import"./PopoverPopup-C4kHdZEl.js";import"./toNumber-DwXevbGr.js";import"./useOsdkClient-B6lIXgT3.js";import"./tick-C_7IeST8.js";import"./DropdownField-DtsLqx98.js";import"./withOsdkMetrics-DsYJAIL0.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

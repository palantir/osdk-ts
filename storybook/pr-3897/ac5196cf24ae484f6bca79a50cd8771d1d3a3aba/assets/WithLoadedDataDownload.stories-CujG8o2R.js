import{f as b,j as a,r as i}from"./iframe-Bk-88sEf.js";import{O as u}from"./object-table-DLbz3v7t.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DvYlXxAP.js";import"./Table-w2KwEraW.js";import"./index-CdHmGUcS.js";import"./Dialog-Cse2Ob6V.js";import"./cross-CzjMymPe.js";import"./svgIconContainer-CJ_w5BhJ.js";import"./useBaseUiId-DES5vLxx.js";import"./InternalBackdrop-2wnNc0zw.js";import"./composite-BXvRBvIS.js";import"./index-DGx-W2pO.js";import"./index-6f90H5TT.js";import"./index-BR7LTQOs.js";import"./useEventCallback-DqbTsOIO.js";import"./SkeletonBar-CyJN-Xjm.js";import"./LoadingCell-R780WQSC.js";import"./ColumnConfigDialog-DpSlK8Z8.js";import"./DraggableList-c_O2vsqv.js";import"./search-Cyt-_x8X.js";import"./Input-U7zXtF1y.js";import"./useControlled-Cf_AiB9R.js";import"./Button-DB1Qd4Ey.js";import"./small-cross-DaPzMpTC.js";import"./ActionButton-BJA2YejZ.js";import"./Checkbox-B9A5gIer.js";import"./useValueChanged-woSaOMyv.js";import"./CollapsiblePanel-wakff4ru.js";import"./MultiColumnSortDialog-CZyyzg1l.js";import"./MenuTrigger-BnRYX-HV.js";import"./CompositeItem-DFySnHOB.js";import"./ToolbarRootContext-CXOIvMk7.js";import"./getDisabledMountTransitionStyles-laX3tK9e.js";import"./getPseudoElementBounds-DToJELRK.js";import"./chevron-down-BZoWzWGC.js";import"./index-CowKu27H.js";import"./error-2_AseInf.js";import"./BaseCbacBanner-D4QCiXA1.js";import"./makeExternalStore-OahYSLFz.js";import"./Tooltip-CTK12_Si.js";import"./PopoverPopup-BuuLyK1V.js";import"./debounce-BH4BBh9a.js";import"./useOsdkClient-p7Hx3gk-.js";import"./tick-CO3pOylc.js";import"./DropdownField-pgFmM9K7.js";import"./isEqual-BijyGCHx.js";import"./withOsdkMetrics-CcAilitW.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

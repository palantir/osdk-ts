import{f as b,j as a,r as i}from"./iframe-rYyjN1FS.js";import{O as u}from"./object-table-CSpiyeJk.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DwOkEC9e.js";import"./Table-CB3B80mK.js";import"./index-PWNJeJ4B.js";import"./Dialog-8LAGv1kv.js";import"./cross-BSvjvGg-.js";import"./svgIconContainer-BEMLZm2t.js";import"./useBaseUiId-CQD2o2tA.js";import"./InternalBackdrop-BoVV0Etr.js";import"./composite-By-HW_ry.js";import"./index-Bh6NEvhj.js";import"./index-DO3Y63L9.js";import"./index-Jj0ImiO-.js";import"./useEventCallback-JQJY4Qmv.js";import"./SkeletonBar-J6PrPgEl.js";import"./LoadingCell-CDg0S06T.js";import"./ColumnConfigDialog-LOk0Rson.js";import"./DraggableList-zUt64XvO.js";import"./Input-fTVX9UVJ.js";import"./useControlled-BTr5Jg05.js";import"./Button-BXo2_s7Y.js";import"./small-cross-BguLqMer.js";import"./ActionButton-CLERDDyV.js";import"./Checkbox-BymjKA71.js";import"./minus-CMbldKFP.js";import"./useValueChanged-DdRGfc_L.js";import"./caret-down-5lAbe8t7.js";import"./CollapsiblePanel-Cyse16kq.js";import"./MultiColumnSortDialog-BD3GtfVi.js";import"./MenuTrigger-jvTAB3FD.js";import"./CompositeItem-CMzdyx9O.js";import"./ToolbarRootContext-BaY47ftM.js";import"./getDisabledMountTransitionStyles-yhVoBOos.js";import"./getPseudoElementBounds-DpyITQCB.js";import"./chevron-down-BDnzlmAQ.js";import"./index-B4zDCH9M.js";import"./error-BcTK3dOp.js";import"./BaseCbacBanner-J0BIlJSG.js";import"./makeExternalStore-acP89Q3x.js";import"./Tooltip-C0efIC0_.js";import"./PopoverPopup-BcZSxfRw.js";import"./toNumber-CmgmlAs0.js";import"./useOsdkClient-GWKVLGLy.js";import"./DropdownField-BiXcix5b.js";import"./withOsdkMetrics-BikHQ76e.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

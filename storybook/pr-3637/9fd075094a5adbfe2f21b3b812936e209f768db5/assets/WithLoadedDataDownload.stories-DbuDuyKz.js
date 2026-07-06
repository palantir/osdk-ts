import{f as b,j as a,r as i}from"./iframe-CH4bNQkz.js";import{O as u}from"./object-table-CaDLL1lz.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-08bwQHsA.js";import"./Table-TjHv1Wy1.js";import"./index-lqOrrWjd.js";import"./Dialog-Dg63Oe6I.js";import"./cross-CBF1hdJp.js";import"./svgIconContainer-CyLPlVwT.js";import"./useBaseUiId-DAC-gIXY.js";import"./InternalBackdrop-DTb8GE2-.js";import"./composite-yo22QLkj.js";import"./index-DNsCKuz5.js";import"./index-9sRS_i3b.js";import"./index-CZIwWXEE.js";import"./useEventCallback-BATbxDzv.js";import"./SkeletonBar-D617CXTH.js";import"./LoadingCell-DP9cNjhX.js";import"./ColumnConfigDialog-CFEX75di.js";import"./DraggableList-DdlYTEep.js";import"./search-BNt3jfeT.js";import"./Input-DhPlgCAv.js";import"./useControlled-BWRxzInE.js";import"./Button-zJe0SN5Z.js";import"./small-cross-BX7eyBC6.js";import"./ActionButton-NY7ebD7-.js";import"./Checkbox-DoxIs_xU.js";import"./useValueChanged-CfQe8T6-.js";import"./CollapsiblePanel-D2zGlOqq.js";import"./MultiColumnSortDialog-BF7OMOvP.js";import"./MenuTrigger-Cv-OkGqd.js";import"./CompositeItem-VlSq4xDr.js";import"./ToolbarRootContext-BpsHvzSn.js";import"./getDisabledMountTransitionStyles-BHsIr7Tb.js";import"./getPseudoElementBounds-C-wVqfyE.js";import"./chevron-down-s5JdkgG2.js";import"./index-CxjrvYi1.js";import"./error-BEfnAN-c.js";import"./BaseCbacBanner-B99cJBPI.js";import"./makeExternalStore-BB1nN1HC.js";import"./Tooltip-BW5ePmyk.js";import"./PopoverPopup-D3aWK0eU.js";import"./toNumber-CnJ4ZDfE.js";import"./useOsdkClient-BOYvcjoU.js";import"./tick-CNjndnF5.js";import"./DropdownField-BmGU5DBo.js";import"./withOsdkMetrics-C32SCAiK.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

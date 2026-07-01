import{f as b,j as a,r as i}from"./iframe-BbfLQ3uk.js";import{O as u}from"./object-table-Ck2DYV_o.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CGyGUrAr.js";import"./Table-uLd0pCVx.js";import"./index-tua362Yp.js";import"./Dialog-BACnwmTE.js";import"./cross-D1ZzBCxX.js";import"./svgIconContainer-B_TvUk0O.js";import"./useBaseUiId-DJ9t-oSD.js";import"./InternalBackdrop-BU3LfI30.js";import"./composite-BqXUif72.js";import"./index-vPqjhVNG.js";import"./index-CyvLI5s6.js";import"./index-x5bLQ0tD.js";import"./useEventCallback-CCbPfF2r.js";import"./SkeletonBar-BUDd1yTp.js";import"./LoadingCell-Co2ZUjg9.js";import"./ColumnConfigDialog-DKdRTGEb.js";import"./DraggableList-CAXEWy6g.js";import"./search-tWoeXU-l.js";import"./Input-CstxWGzJ.js";import"./useControlled-CKpbpIM7.js";import"./Button-DC80tMv-.js";import"./small-cross-BZD78fDB.js";import"./ActionButton-D1X_Il0_.js";import"./Checkbox-Dnf9oMIG.js";import"./minus-wbZo9U9c.js";import"./tick-BPbr2did.js";import"./useValueChanged-TSf5Kkuf.js";import"./caret-down-KXFaBzwD.js";import"./CollapsiblePanel-B5hUPMHV.js";import"./MultiColumnSortDialog-D2IEvJaN.js";import"./MenuTrigger-C47QhcvV.js";import"./CompositeItem-DAj-8AX2.js";import"./ToolbarRootContext-zso1Kjw1.js";import"./getDisabledMountTransitionStyles-BYkqtEiY.js";import"./getPseudoElementBounds-Dbk80xWL.js";import"./chevron-down-Dw-MF_lM.js";import"./index-D_P3mHzB.js";import"./error-HOzGPf1x.js";import"./BaseCbacBanner-uuwSoW_B.js";import"./makeExternalStore-CzwZ4tpv.js";import"./Tooltip-DBFvUfZb.js";import"./PopoverPopup-wPy7Q893.js";import"./toNumber-C-JQIREB.js";import"./useOsdkClient-BwIKaIU0.js";import"./DropdownField--F9uid4f.js";import"./withOsdkMetrics-B0qkFJVT.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

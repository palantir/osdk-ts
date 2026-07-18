import{f as b,j as a,r as i}from"./iframe-CXhU7t2f.js";import{O as u}from"./object-table-CH4l4I1P.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-BDvWwuql.js";import"./Table-DdY-uBrx.js";import"./index-9FYVtP3Z.js";import"./Dialog-DpNpFOkA.js";import"./cross-C5reyL6B.js";import"./svgIconContainer-CTI46h-O.js";import"./useBaseUiId-A4A1Li5V.js";import"./InternalBackdrop-ClxFAGmQ.js";import"./composite-CM3mes3D.js";import"./index-4EH_6cib.js";import"./index-BCoFteCI.js";import"./index-BbS8x_iM.js";import"./useEventCallback-EsnKdqah.js";import"./SkeletonBar-BtarGFJo.js";import"./LoadingCell-BgGB193D.js";import"./ColumnConfigDialog-BBWaoVxB.js";import"./DraggableList-1n_a8UC4.js";import"./search-D4VdaZo6.js";import"./Input-C8ya944S.js";import"./useControlled-PRJV_Jy7.js";import"./isEqual-CG1oMvXQ.js";import"./isObject-Ike8f_7J.js";import"./Button-B7Bo3D3H.js";import"./ActionButton-BvWh4q0Q.js";import"./Checkbox-Dw3DL3fl.js";import"./useValueChanged-Dz55MfZn.js";import"./CollapsiblePanel-DqCzuiRX.js";import"./MultiColumnSortDialog-CmQpSETv.js";import"./MenuTrigger-BJsJesI2.js";import"./CompositeItem-DkmsW7jA.js";import"./ToolbarRootContext-BZmYr3M9.js";import"./getDisabledMountTransitionStyles-G1zfEPaf.js";import"./getPseudoElementBounds-CznvrcKk.js";import"./chevron-down-Dnhj6aRu.js";import"./index-HNPnY-9L.js";import"./error-BrRzAHal.js";import"./BaseCbacBanner-Duxkzg9K.js";import"./makeExternalStore-0ZDPf0CN.js";import"./Tooltip-DJBgjafR.js";import"./PopoverPopup-Qck97i8i.js";import"./toNumber-OQQ8gzvw.js";import"./useOsdkClient-DvGo_U9k.js";import"./tick-hO3Cn5OV.js";import"./DropdownField-DQDwzM3R.js";import"./withOsdkMetrics-DbJ9bW-D.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

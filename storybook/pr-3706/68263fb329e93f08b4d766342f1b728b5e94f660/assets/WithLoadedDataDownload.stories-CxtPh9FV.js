import{f as b,j as a,r as i}from"./iframe-C8v16k98.js";import{O as u}from"./object-table-DaUuA2DW.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CTIvj4s1.js";import"./Table-QeA9e52M.js";import"./index-f0YWfbBx.js";import"./Dialog-DRo2wNaL.js";import"./cross-2SBchWKW.js";import"./svgIconContainer-2XqMCtfu.js";import"./useBaseUiId-BeqTmLCE.js";import"./InternalBackdrop-De-tJelF.js";import"./composite-BdHgeVz1.js";import"./index-Bwu6itB9.js";import"./index-Aj7xkOVT.js";import"./index-Da9HzXl1.js";import"./useEventCallback-OSeRPLEN.js";import"./SkeletonBar-D5mIRI_d.js";import"./LoadingCell-CDkqh5LS.js";import"./ColumnConfigDialog-BqOoM7ss.js";import"./DraggableList-BXXEC27Y.js";import"./search-6el8p7xI.js";import"./Input-D1r8rOe3.js";import"./useControlled-Be5wZWlu.js";import"./isEqual-B2DnLU2d.js";import"./isObject-DXzaingI.js";import"./Button-BiFBHNqb.js";import"./ActionButton-eZV_PiWy.js";import"./Checkbox-Dwz6Ax7I.js";import"./useValueChanged-DWpvCFJJ.js";import"./CollapsiblePanel-CWjyPok2.js";import"./MultiColumnSortDialog-DJqVkESC.js";import"./MenuTrigger-Db8Js0sG.js";import"./CompositeItem-CR0-7tBN.js";import"./ToolbarRootContext-DA-OiDrZ.js";import"./getDisabledMountTransitionStyles-BUVLVpNS.js";import"./getPseudoElementBounds-BxtHnPc1.js";import"./chevron-down-BhMQKpnE.js";import"./index-BQPgWn6y.js";import"./error-D1sq84rm.js";import"./BaseCbacBanner-EealSr34.js";import"./makeExternalStore-DuKpND8W.js";import"./Tooltip-CV76_CFr.js";import"./PopoverPopup-CAFw1C1X.js";import"./toNumber-DJn0atSt.js";import"./useOsdkClient-CcTXJtuA.js";import"./tick-AHxqUUqv.js";import"./DropdownField-DNmoedol.js";import"./withOsdkMetrics-CF0NLiGy.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

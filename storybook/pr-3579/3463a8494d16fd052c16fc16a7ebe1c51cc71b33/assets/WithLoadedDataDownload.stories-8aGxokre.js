import{f as b,j as a,r as i}from"./iframe-CLma6GnG.js";import{O as u}from"./object-table-CtNrcGD-.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-DuFez-XM.js";import"./Table-b85YcRG7.js";import"./index-CtnOIv8z.js";import"./Dialog-YkT8uzgO.js";import"./cross-BCn-YWcU.js";import"./svgIconContainer-BepN7zFg.js";import"./useBaseUiId-ZlNcHrjV.js";import"./InternalBackdrop-BqQkYps2.js";import"./composite-CypO4Vu6.js";import"./index-DQXASA6z.js";import"./index-r17fB8ht.js";import"./index-DN-MaDZ3.js";import"./useEventCallback-C_Htv9J5.js";import"./SkeletonBar-DIGiSmp0.js";import"./LoadingCell-Gl2dc7ci.js";import"./ColumnConfigDialog-Cl1p9_VL.js";import"./DraggableList-DaQiBBWR.js";import"./search-DO7DmXbG.js";import"./Input-NSyklMj1.js";import"./useControlled-CuV3rZtb.js";import"./Button-D7NBjKdb.js";import"./small-cross-CW6IcFCm.js";import"./ActionButton-B9EOHITR.js";import"./Checkbox-WWDSVQgT.js";import"./minus-CzhAaF2L.js";import"./tick-Cx2_LTH0.js";import"./useValueChanged-Bxs5gPK-.js";import"./caret-down-BiIZdnIz.js";import"./CollapsiblePanel-CGkO2fVG.js";import"./MultiColumnSortDialog-CR080OjE.js";import"./MenuTrigger-BTU6-rcM.js";import"./CompositeItem-CZ039icn.js";import"./ToolbarRootContext-BuxeuB76.js";import"./getDisabledMountTransitionStyles-DitthjS8.js";import"./getPseudoElementBounds-D1FJhB_H.js";import"./chevron-down-C2JzP2di.js";import"./index-DzXxrZmX.js";import"./error-BS6_AadE.js";import"./BaseCbacBanner-EPU6Ynrw.js";import"./makeExternalStore-C7YMfgMF.js";import"./Tooltip-CzmBmZTG.js";import"./PopoverPopup-Ct9vju32.js";import"./toNumber-3ywl-IXR.js";import"./useOsdkClient-De3fu4ff.js";import"./DropdownField-BJhyO7Ek.js";import"./withOsdkMetrics-5qqcaGjf.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

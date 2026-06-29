import{f as b,j as a,r as i}from"./iframe-BiaK4n54.js";import{O as u}from"./object-table-Bmk11RGy.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CU06Hx_H.js";import"./Table-8MOP530F.js";import"./index-D3adZ3g-.js";import"./Dialog-DI2LfNhU.js";import"./cross-MQP2DxLM.js";import"./svgIconContainer-CyEWxphT.js";import"./useBaseUiId-DYUuNT23.js";import"./InternalBackdrop-D3T4p53o.js";import"./composite-CGE7SHh3.js";import"./index-C36q6vv9.js";import"./index-C7L2FoPM.js";import"./index-BBzAJBrK.js";import"./useEventCallback-BH07vTyF.js";import"./SkeletonBar-CP85lWCE.js";import"./LoadingCell-DK_iykh7.js";import"./ColumnConfigDialog-lf9VRZDc.js";import"./DraggableList-CilQp0me.js";import"./search-Di6IYbI8.js";import"./Input-BmmbP7Xg.js";import"./useControlled-Boq-hwJu.js";import"./Button-PaRuc5oI.js";import"./small-cross-DPBwCvDl.js";import"./ActionButton-qmzsDoCF.js";import"./Checkbox-CYhGLard.js";import"./minus-CE475K11.js";import"./tick-Bo6V2EZa.js";import"./useValueChanged-pXn_Dfqp.js";import"./caret-down-BGrW2Iu8.js";import"./CollapsiblePanel-BMeNwePM.js";import"./MultiColumnSortDialog-a79zsxab.js";import"./MenuTrigger-DvOnUiZp.js";import"./CompositeItem-Cu5i8zaW.js";import"./ToolbarRootContext-Clf1l3G4.js";import"./getDisabledMountTransitionStyles-WoGAMclp.js";import"./getPseudoElementBounds-D5Hpp1mP.js";import"./chevron-down-CSTS4xkp.js";import"./index-BsH4YHDs.js";import"./error-BUTFbX5Q.js";import"./BaseCbacBanner-vptqSA15.js";import"./makeExternalStore-8ty7R3l4.js";import"./Tooltip-2-xGAdEb.js";import"./PopoverPopup-DW3FaL6m.js";import"./toNumber-jBurGWSq.js";import"./useOsdkClient-grHNeG4C.js";import"./DropdownField-DpGRE1tm.js";import"./withOsdkMetrics-BtCKf7d8.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],we={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

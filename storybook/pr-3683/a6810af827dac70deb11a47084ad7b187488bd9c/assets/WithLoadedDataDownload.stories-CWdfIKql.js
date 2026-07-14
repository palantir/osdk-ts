import{f as b,j as a,r as i}from"./iframe-COW6NcsI.js";import{O as u}from"./object-table-BfgBOtHU.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-G8EPqEJh.js";import"./Table-DpwM4rNZ.js";import"./index-CW-e6r9a.js";import"./Dialog--IyjsjXu.js";import"./cross-Bqug0Vp6.js";import"./svgIconContainer-CVdrdWap.js";import"./useBaseUiId-CPuvuul4.js";import"./InternalBackdrop-IT_hKb9F.js";import"./composite-IDuh3utY.js";import"./index-C1kQCTH3.js";import"./index-BsKm97c0.js";import"./index-CpcaMGCW.js";import"./useEventCallback-C1dx29nH.js";import"./SkeletonBar-0S75luhh.js";import"./LoadingCell-C63UHMbe.js";import"./ColumnConfigDialog-BZmZ20dN.js";import"./DraggableList-qy_43Z0m.js";import"./search-a4gMSdv_.js";import"./Input-BbbO03ue.js";import"./useControlled-C4fThFcC.js";import"./Button-DApRJW5A.js";import"./small-cross-Ro5zF2FT.js";import"./ActionButton-DxqkdKWX.js";import"./Checkbox-CU9smyt5.js";import"./useValueChanged-ieAnHWLP.js";import"./CollapsiblePanel-BrvSzF3_.js";import"./MultiColumnSortDialog-CKaxtAWg.js";import"./MenuTrigger-B92JS_WI.js";import"./CompositeItem-ClwhSYZE.js";import"./ToolbarRootContext-e7slT4RT.js";import"./getDisabledMountTransitionStyles-DPLFcf4i.js";import"./getPseudoElementBounds-Bgi4-PRF.js";import"./chevron-down-BjwdaKHx.js";import"./index-CujUeAc2.js";import"./error-CnMxWdUA.js";import"./BaseCbacBanner-Df2lB1Ha.js";import"./makeExternalStore-VD_YYeJk.js";import"./Tooltip-Fs_-j-j_.js";import"./PopoverPopup-Ce8AFJXp.js";import"./toNumber-BbCZDfZl.js";import"./useOsdkClient-YwrQJoKl.js";import"./tick-B3tXVK5Z.js";import"./DropdownField-BKUsf6Ns.js";import"./withOsdkMetrics-oXBpH5el.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

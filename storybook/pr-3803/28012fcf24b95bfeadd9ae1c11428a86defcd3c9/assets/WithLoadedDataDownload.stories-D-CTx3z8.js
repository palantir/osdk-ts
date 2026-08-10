import{f as b,j as a,r as i}from"./iframe-BlS90ihs.js";import{O as u}from"./object-table-CriJqgAL.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-CO5g6I2w.js";import"./Table-CSpzi4Wm.js";import"./index-BHOc8LyC.js";import"./Dialog-DAyAF1uP.js";import"./cross-B_hisJSZ.js";import"./svgIconContainer-LYrWoKiL.js";import"./useBaseUiId-Cf5AZRTS.js";import"./InternalBackdrop-DyXxto56.js";import"./composite-DLqdT5CV.js";import"./index-U6MToZTc.js";import"./index-Dx7dMNiV.js";import"./index-C6u7r9LX.js";import"./useEventCallback-B5w2dWGU.js";import"./SkeletonBar-Dmn9hVsc.js";import"./LoadingCell-D2mD0B3A.js";import"./ColumnConfigDialog-BrNjXxXe.js";import"./DraggableList-Dhzm7_-v.js";import"./search-CHH1oEbG.js";import"./Input-CeNFNh0n.js";import"./useControlled-B84OuIK1.js";import"./isEqual-ewgMqB9v.js";import"./isObject-aIdOeCBg.js";import"./Button-SxoUXmH3.js";import"./ActionButton-VrprXojg.js";import"./Checkbox-BiITbu2D.js";import"./useValueChanged-BktjxXbF.js";import"./CollapsiblePanel-DI6MBG5L.js";import"./MultiColumnSortDialog-BoEoNYy8.js";import"./MenuTrigger-BjitqoO9.js";import"./CompositeItem-DCiFXfQY.js";import"./ToolbarRootContext-BkF9_TGB.js";import"./getDisabledMountTransitionStyles-Rn-KFTgx.js";import"./getPseudoElementBounds-BICswt92.js";import"./chevron-down-Cd3C4D7a.js";import"./index-D3oeH8Dz.js";import"./error-CPJsC_89.js";import"./BaseCbacBanner-BCUyWElG.js";import"./makeExternalStore-C-0gPcpm.js";import"./Tooltip-CcTGnIxC.js";import"./PopoverPopup-BmHjJY8y.js";import"./toNumber-C8hHjjna.js";import"./useOsdkClient-DdijOu9r.js";import"./tick-_PMLCEhr.js";import"./DropdownField-DxP0_Ckl.js";import"./withOsdkMetrics-Dc64VAF-.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

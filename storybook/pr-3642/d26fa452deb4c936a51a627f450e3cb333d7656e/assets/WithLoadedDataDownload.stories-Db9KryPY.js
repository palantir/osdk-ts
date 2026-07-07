import{f as b,j as a,r as i}from"./iframe-lfDwPe1R.js";import{O as u}from"./object-table-BExrZi97.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-C07-se9M.js";import"./Table-CY38JfHW.js";import"./index-DwITW8La.js";import"./Dialog-lfadYgKD.js";import"./cross-JpU8ZimE.js";import"./svgIconContainer-CfrqUz1g.js";import"./useBaseUiId-B5ut6wPO.js";import"./InternalBackdrop-VaVTXDjZ.js";import"./composite-DPTAr_Hx.js";import"./index-ZzXxc5x8.js";import"./index-9tsP-8Uz.js";import"./index-CaW5dSAO.js";import"./useEventCallback-DzBEjBfu.js";import"./SkeletonBar-DY0vK8w2.js";import"./LoadingCell-BHuIc8Oz.js";import"./ColumnConfigDialog-BD__wHID.js";import"./DraggableList-B7HvQdsv.js";import"./search-C7XZlnTh.js";import"./Input-Df7RWKG4.js";import"./useControlled-BHVA0Lvh.js";import"./Button-DGcYA5iG.js";import"./small-cross-BfrE7p_Y.js";import"./ActionButton-ZWtdnfS8.js";import"./Checkbox-CZHQ_0HJ.js";import"./useValueChanged-p3xIPBX5.js";import"./CollapsiblePanel-CAjcYhvT.js";import"./MultiColumnSortDialog-tleiyIVS.js";import"./MenuTrigger-C0Uz7_Gs.js";import"./CompositeItem-B_jfHLzk.js";import"./ToolbarRootContext-as9SDGsf.js";import"./getDisabledMountTransitionStyles-CUZbCQK6.js";import"./getPseudoElementBounds-BOkrstiV.js";import"./chevron-down-BxE3vSQT.js";import"./index-CAOdoGk2.js";import"./error-DM8B4lS2.js";import"./BaseCbacBanner-DRrbi3lb.js";import"./makeExternalStore-D_AztOJB.js";import"./Tooltip-adwRxMxM.js";import"./PopoverPopup-BdD8whWG.js";import"./toNumber-JaOGbHRr.js";import"./useOsdkClient-1VtSXugF.js";import"./tick-DEVwqROk.js";import"./DropdownField-B1-BM8Vr.js";import"./withOsdkMetrics-Bv8GEkpY.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],he={title:"Components/ObjectTable/Recipes",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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

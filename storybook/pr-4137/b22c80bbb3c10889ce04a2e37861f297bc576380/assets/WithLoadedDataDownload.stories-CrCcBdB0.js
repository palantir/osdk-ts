import{f as b,j as a,r as i}from"./iframe-OTC_SZd0.js";import{O as u}from"./object-table-DJdw5Y3U.js";import{E as h}from"./Employee-BAk2o20h.js";import"./preload-helper-1vGzY75P.js";import"./Table-YbkGpIvE.js";import"./index-BoJX-ksu.js";import"./Dialog-Bn1d6Lwf.js";import"./cross-DqMcRqPP.js";import"./svgIconContainer-BcCPLcaR.js";import"./useBaseUiId-CX-b-AU2.js";import"./InternalBackdrop-C2smTE49.js";import"./composite-DmMBTPuj.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./index-BSLVBTuk.js";import"./useEventCallback-69mtBwYt.js";import"./SkeletonBar-B9Sf-YB8.js";import"./LoadingCell-ba9qrIBe.js";import"./ColumnConfigDialog-BHEFKSzZ.js";import"./DraggableList-CphGWXXO.js";import"./search-CqHOzh_J.js";import"./Input-RoK9jBHN.js";import"./useControlled-VRarZ-1e.js";import"./Button-Cp-yQ_WA.js";import"./small-cross-BSXT4voL.js";import"./ActionButton-B6wO2OKA.js";import"./Checkbox-iWY9dY4i.js";import"./useValueChanged-BI84kVyH.js";import"./CollapsiblePanel-C1ftD3Jy.js";import"./MultiColumnSortDialog-DP2VsSjs.js";import"./MenuTrigger-aZDl9AA7.js";import"./CompositeItem-JGQEQxmA.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./getDisabledMountTransitionStyles-Djfv408z.js";import"./getPseudoElementBounds-CucAzF8-.js";import"./chevron-down-Bq3D3uVm.js";import"./index-D_oKlTjT.js";import"./error-DRGNiszN.js";import"./BaseCbacBanner-ClL40Yjf.js";import"./makeExternalStore-CJLgs2ND.js";import"./Tooltip-Cx2J9Tyo.js";import"./PopoverPopup-gvz3_YST.js";import"./debounce-CKQsYhti.js";import"./useOsdkClient-DCm7AWwJ.js";import"./tick-CiIM5WDj.js";import"./DropdownField-fJtfAUzJ.js";import"./isEqual-33bb34dj.js";import"./withOsdkMetrics-BAfhlptC.js";const f=5,y={padding:"8px 16px",backgroundColor:"#3b82f6",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},w=[{locator:{type:"property",id:"fullName"},columnName:"Full name",renderCell:e=>a.jsx("strong",{children:e.fullName})},{locator:{type:"property",id:"emailPrimaryWork"},columnName:"Email"},{locator:{type:"property",id:"jobTitle"},columnName:"Job title"},{locator:{type:"property",id:"department"},columnName:"Department"},{locator:{type:"property",id:"locationCity"},columnName:"City"}],ye={title:"Components/ObjectTable/Features/Advanced",component:u,tags:["beta"],parameters:{msw:{handlers:[...b.handlers]}}},l={parameters:{docs:{description:{story:"Uses `tableRef.current.getSnapshot()` to build and download a CSV from the ObjectTable's data. The Full name column uses `renderCell`, but the CSV reads the column's accessor value rather than the rendered React element. Function-backed column failures surface as an `Error` instance from `row.getValue`, which the CSV renders as a literal marker."},source:{code:`const tableRef = useRef<ObjectTableHandle<typeof Employee>>(null);
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
